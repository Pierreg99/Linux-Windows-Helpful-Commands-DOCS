# FiveM / FXServer

This guide is **FiveM-specific**. It covers FXServer/txAdmin startup, `server.cfg`, resource management, `fxmanifest.lua`, and small Lua/JavaScript resource examples. Minecraft/Spigot/Paper commands do not belong here.

Dieser Leitfaden ist **FiveM-spezifisch**. Er behandelt FXServer-/txAdmin-Start, `server.cfg`, Ressourcenverwaltung, `fxmanifest.lua` und kleine Lua-/JavaScript-Ressourcenbeispiele. Minecraft-/Spigot-/Paper-Befehle gehören nicht in diesen Bereich.

> Never commit your real Cfx.re/FiveM license key, database password, Discord token, webhooks, or other secrets to a public repository.
>
> Committe niemals deinen echten Cfx.re-/FiveM-Lizenzschlüssel, Datenbankpasswörter, Discord-Tokens, Webhooks oder andere Geheimnisse in ein öffentliches Repository.

## 1. Typical server-data structure / Typische Server-Datenstruktur

```text
server-data/
├── server.cfg
└── resources/
    ├── [local]/
    │   └── hello_resource/
    │       ├── fxmanifest.lua
    │       ├── client.lua
    │       └── server.lua
    └── [standalone]/
```

FiveM resources live below the `resources/` directory. Bracketed folders such as `[local]` are categories that can contain multiple resources.

FiveM-Ressourcen liegen unterhalb des Verzeichnisses `resources/`. Ordner in eckigen Klammern wie `[local]` dienen als Kategorien und können mehrere Ressourcen enthalten.

## 2. Starting FXServer / FXServer starten

### txAdmin-first startup / txAdmin zuerst starten

Current Cfx.re documentation states that txAdmin is bundled with modern FXServer builds. To start txAdmin in monitor mode, start FXServer without a `+exec` argument.

Die aktuelle Cfx.re-Dokumentation beschreibt txAdmin als Bestandteil moderner FXServer-Builds. Um txAdmin im Monitor-Modus zu starten, starte FXServer ohne `+exec`-Argument.

Windows:

```cmd
FXServer.exe
```

Linux:

```bash
./run.sh
```

Optional txAdmin profile/port / Optionales txAdmin-Profil/Port:

Windows:

```cmd
FXServer.exe +set serverProfile dev_server +set txAdminPort 40121
```

Linux:

```bash
./run.sh +set serverProfile dev_server +set txAdminPort 40121
```

### Direct server.cfg startup / Direkter server.cfg-Start

For a direct configuration-driven start, FXServer can execute a config file.

Für einen direkten konfigurationsgesteuerten Start kann FXServer eine Konfigurationsdatei ausführen.

Windows:

```cmd
FXServer.exe +exec server.cfg
```

Linux example / Linux-Beispiel:

```bash
./run.sh +exec server.cfg
```

## 3. Minimal `server.cfg` example / Minimales `server.cfg`-Beispiel

```cfg
# Network / Netzwerk
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"

# Server identity / Server-Identität
sv_hostname "Example FiveM Server"
sets sv_projectName "Example Project"
sets sv_projectDesc "Bilingual documentation example"

# Player slots / Spielerplätze
sv_maxclients 32

# Standard resources / Standard-Ressourcen
ensure mapmanager
ensure chat
ensure spawnmanager
ensure sessionmanager
ensure hardcap

# Local resources / Lokale Ressourcen
ensure hello_resource

# License key:
# Keep the real key out of public Git repositories.
# sv_licenseKey "REPLACE_WITH_PRIVATE_KEY"
```

If your server template already manages some standard resources through txAdmin, keep the template's structure rather than blindly duplicating entries.

Wenn dein Server-Template Standard-Ressourcen bereits über txAdmin verwaltet, behalte dessen Struktur bei, statt Einträge blind zu duplizieren.

## 4. Resource console commands / Ressourcen-Konsolenbefehle

These are FXServer console/config commands.

Dies sind FXServer-Konsolen-/Konfigurationsbefehle.

| Command | English | Deutsch |
|---|---|---|
| `start <resource>` | Start a stopped resource. | Startet eine gestoppte Ressource. |
| `stop <resource>` | Stop a running resource. | Stoppt eine laufende Ressource. |
| `ensure <resource>` | Start the resource if stopped; restart it if already running. | Startet die Ressource, falls sie gestoppt ist; andernfalls wird sie neu gestartet. |
| `restart <resource>` | Restart a running resource. | Startet eine laufende Ressource neu. |
| `refresh` | Rescan resource folders and manifests. | Liest Ressourcenordner und Manifeste neu ein. |
| `exec <file>` | Execute commands from a configuration file. | Führt Befehle aus einer Konfigurationsdatei aus. |
| `status` | Show connected player/status data when the required resource is available. | Zeigt Spieler-/Statusdaten, wenn die benötigte Ressource verfügbar ist. |
| `quit` | Stop FXServer. | Beendet FXServer. |

Typical development flow / Typischer Entwicklungsablauf:

```text
refresh
ensure hello_resource
```

After editing an already loaded resource / Nach Änderung einer bereits geladenen Ressource:

```text
restart hello_resource
```

## 5. Minimal Lua resource / Minimale Lua-Ressource

Structure / Struktur:

```text
resources/[local]/hello_resource/
├── fxmanifest.lua
├── client.lua
└── server.lua
```

### `fxmanifest.lua`

```lua
fx_version 'cerulean'
game 'gta5'

author 'Example'
description 'Minimal bilingual FiveM resource example'
version '1.0.0'

client_script 'client.lua'
server_script 'server.lua'
```

### `client.lua`

```lua
CreateThread(function()
    print('[hello_resource] client loaded')
end)

RegisterCommand('hello', function()
    TriggerEvent('chat:addMessage', {
        args = { 'Example', 'Hello from the FiveM client resource!' }
    })
end, false)
```

### `server.lua`

```lua
print('[hello_resource] server loaded')

RegisterCommand('serverhello', function(source)
    print(('serverhello executed by source %s'):format(source))
end, false)
```

Add to `server.cfg` / Zu `server.cfg` hinzufügen:

```cfg
ensure hello_resource
```

## 6. Minimal JavaScript resource / Minimale JavaScript-Ressource

Keep JavaScript in a separate resource or explicitly change the manifest; do not mix examples accidentally.

Halte JavaScript in einer separaten Ressource oder passe das Manifest ausdrücklich an; Beispiele nicht versehentlich vermischen.

Structure / Struktur:

```text
resources/[local]/hello_js/
├── fxmanifest.lua
└── client.js
```

### `fxmanifest.lua`

```lua
fx_version 'cerulean'
game 'gta5'

author 'Example'
description 'Minimal JavaScript FiveM example'
version '1.0.0'

client_script 'client.js'
```

### `client.js`

```javascript
console.log('[hello_js] client loaded');

RegisterCommand('hellojs', () => {
    emit('chat:addMessage', {
        args: ['Example', 'Hello from JavaScript!']
    });
}, false);
```

Enable / Aktivieren:

```cfg
ensure hello_js
```

## 7. Resource manifest basics / Grundlagen des Ressourcenmanifests

Every normal FiveM resource should contain `fxmanifest.lua`. The manifest declares metadata and which client/server/shared scripts belong to the resource.

Jede normale FiveM-Ressource sollte eine `fxmanifest.lua` enthalten. Das Manifest legt Metadaten fest und bestimmt, welche Client-/Server-/Shared-Skripte zur Ressource gehören.

Common directives / Häufige Direktiven:

```lua
fx_version 'cerulean'
game 'gta5'

client_script 'client.lua'
server_script 'server.lua'
shared_script 'shared.lua'

files {
    'html/index.html',
    'html/app.js'
}
```

Do not copy directives you do not need. Keep manifests small and explicit.

Kopiere keine Direktiven, die du nicht benötigst. Halte Manifeste klein und eindeutig.

## 8. Editing and reload workflow / Bearbeitungs- und Reload-Ablauf

Example / Beispiel:

```bash
cd server-data/resources/'[local]'/hello_resource
nano client.lua
```

Then in FXServer console / Danach in der FXServer-Konsole:

```text
restart hello_resource
```

For a newly created resource / Für eine neu erstellte Ressource:

```text
refresh
ensure hello_resource
```

## 9. Logs and troubleshooting / Logs und Fehlerdiagnose

Useful checks / Nützliche Prüfungen:

- Resource folder is actually below `resources/`.
- Ressourcenordner liegt tatsächlich unter `resources/`.
- File is named exactly `fxmanifest.lua`.
- Datei heißt exakt `fxmanifest.lua`.
- Manifest references existing script filenames.
- Manifest verweist auf vorhandene Skriptdateien.
- `ensure <resource>` uses the resource folder name.
- `ensure <resource>` verwendet den Namen des Ressourcenordners.
- Check FXServer/txAdmin console output before changing multiple things at once.
- Prüfe zuerst die FXServer-/txAdmin-Konsolenausgabe, bevor du mehrere Dinge gleichzeitig änderst.
- Keep license keys and database credentials private.
- Lizenzschlüssel und Datenbank-Zugangsdaten privat halten.

## 10. Example development commands / Beispiel-Entwicklungsbefehle

Linux:

```bash
mkdir -p "resources/[local]/hello_resource"
cd "resources/[local]/hello_resource"
touch fxmanifest.lua client.lua server.lua
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force ".\resources\[local]\hello_resource"
New-Item -ItemType File -Force ".\resources\[local]\hello_resource\fxmanifest.lua"
New-Item -ItemType File -Force ".\resources\[local]\hello_resource\client.lua"
New-Item -ItemType File -Force ".\resources\[local]\hello_resource\server.lua"
```

## References / Quellen

- FiveM txAdmin: https://docs.fivem.net/docs/resources/txAdmin/
- FiveM server setup: https://docs.fivem.net/docs/server-manual/setting-up-a-server-vanilla/
- FiveM server commands: https://docs.fivem.net/docs/server-manual/server-commands/
- FiveM resources: https://docs.fivem.net/docs/scripting-manual/introduction/introduction-to-resources/
- FiveM resource manifest: https://docs.fivem.net/docs/scripting-reference/resource-manifest/
