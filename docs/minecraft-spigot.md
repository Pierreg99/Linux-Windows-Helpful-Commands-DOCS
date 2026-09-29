# Minecraft & Spigot / Minecraft & Spigot

This guide keeps **vanilla Minecraft server basics**, **Spigot server operation**, and **Spigot plugin development** in one Spigot-focused document. Paper-specific material is intentionally kept in a separate guide.

Dieser Leitfaden hält **Vanilla-Minecraft-Server-Grundlagen**, **Spigot-Serverbetrieb** und **Spigot-Pluginentwicklung** in einem Spigot-spezifischen Dokument zusammen. Paper-spezifische Inhalte befinden sich bewusst in einem separaten Leitfaden.

> Replace example versions, paths, memory values, domains and ports for your environment.
>
> Ersetze Beispielversionen, Pfade, Speicherwerte, Domains und Ports passend zu deiner Umgebung.

## 1. Check Java / Java prüfen

```bash
java -version
javac -version
```

English: `java` runs the server; `javac` is needed when compiling Java code such as plugins.

Deutsch: `java` startet den Server; `javac` wird zum Kompilieren von Java-Code wie Plugins benötigt.

## 2. Basic Minecraft/Spigot server folder / Grundlegender Minecraft-/Spigot-Serverordner

Example / Beispiel:

```text
minecraft-server/
├── spigot.jar
├── eula.txt
├── server.properties
├── plugins/
├── logs/
└── start.sh or start.cmd
```

Create a directory / Verzeichnis erstellen:

```bash
mkdir -p minecraft-server
cd minecraft-server
```

Windows CMD:

```cmd
mkdir minecraft-server
cd minecraft-server
```

## 3. Start a Spigot server / Spigot-Server starten

Linux:

```bash
java -Xms2G -Xmx4G -jar spigot.jar --nogui
```

Windows CMD / PowerShell:

```cmd
java -Xms2G -Xmx4G -jar spigot.jar --nogui
```

- `-Xms2G`: initial JVM heap / anfänglicher JVM-Speicher.
- `-Xmx4G`: maximum JVM heap / maximaler JVM-Speicher.
- `--nogui`: disables the vanilla GUI / deaktiviert die Vanilla-GUI.

After the first start, review the generated files. Only set `eula=true` in `eula.txt` after you have read and accepted Mojang/Minecraft's EULA.

Nach dem ersten Start solltest du die erzeugten Dateien prüfen. Setze `eula=true` in `eula.txt` nur, nachdem du die Mojang-/Minecraft-EULA gelesen und akzeptiert hast.

## 4. Start scripts / Startskripte

### Linux `start.sh`

```bash
#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
exec java -Xms2G -Xmx4G -jar spigot.jar --nogui
```

Make executable / Ausführbar machen:

```bash
chmod +x start.sh
./start.sh
```

### Windows `start.cmd`

```cmd
@echo off
cd /d "%~dp0"
java -Xms2G -Xmx4G -jar spigot.jar --nogui
pause
```

Run / Ausführen:

```cmd
start.cmd
```

## 5. Build Spigot with BuildTools / Spigot mit BuildTools bauen

Spigot distributes server builds through **BuildTools**. Run the downloaded `BuildTools.jar` from a terminal rather than double-clicking it.

Spigot stellt Server-Builds über **BuildTools** bereit. Führe die heruntergeladene `BuildTools.jar` im Terminal aus, statt sie doppelt anzuklicken.

Basic build / Grundlegender Build:

```bash
java -jar BuildTools.jar
```

Build a specific supported revision / Bestimmte unterstützte Revision bauen:

```bash
java -jar BuildTools.jar --rev <minecraft-version>
```

Example / Beispiel:

```bash
java -jar BuildTools.jar --rev 1.21.11
```

On Windows, Spigot's BuildTools documentation commonly uses Git Bash for the build environment.

Unter Windows verwendet die Spigot-BuildTools-Dokumentation üblicherweise Git Bash als Build-Umgebung.

## 6. Important server files / Wichtige Serverdateien

| File | English | Deutsch |
|---|---|---|
| `server.properties` | Main Minecraft server settings. | Zentrale Minecraft-Servereinstellungen. |
| `eula.txt` | Records EULA acceptance. | Speichert die EULA-Zustimmung. |
| `spigot.yml` | Spigot-specific server configuration. | Spigot-spezifische Serverkonfiguration. |
| `bukkit.yml` | Bukkit-level configuration. | Bukkit-Konfiguration. |
| `plugins/` | Plugin JAR files and plugin data folders. | Plugin-JARs und Plugin-Datenordner. |
| `logs/latest.log` | Current/latest server log. | Aktuelles Server-Log. |

## 7. Typical console commands / Typische Konsolenbefehle

Run these in the Minecraft server console, not in Bash/CMD.

Diese Befehle werden in der Minecraft-Serverkonsole ausgeführt, nicht in Bash/CMD.

| Command | English | Deutsch |
|---|---|---|
| `help` | Show available commands. | Zeigt verfügbare Befehle. |
| `list` | List connected players. | Listet verbundene Spieler auf. |
| `say <message>` | Broadcast a message. | Sendet eine Nachricht an alle. |
| `op <player>` ⚠️ | Grant operator privileges. | Vergibt Operator-Rechte. |
| `deop <player>` ⚠️ | Remove operator privileges. | Entfernt Operator-Rechte. |
| `whitelist on` | Enable whitelist mode. | Aktiviert die Whitelist. |
| `whitelist add <player>` | Add a player to the whitelist. | Fügt einen Spieler zur Whitelist hinzu. |
| `save-all` | Save worlds and player data. | Speichert Welten und Spielerdaten. |
| `stop` | Gracefully stop the server. | Beendet den Server kontrolliert. |

## 8. Minimal Spigot plugin project / Minimales Spigot-Plugin-Projekt

Example structure / Beispielstruktur:

```text
hello-spigot/
├── pom.xml
└── src/
    └── main/
        ├── java/
        │   └── com/example/hellospigot/HelloSpigot.java
        └── resources/
            └── plugin.yml
```

### `plugin.yml`

```yaml
name: HelloSpigot
version: '1.0.0'
main: com.example.hellospigot.HelloSpigot
api-version: '1.21'
description: Simple bilingual documentation example
commands:
  hello:
    description: Prints a hello message
    usage: /hello
```

Spigot requires a valid `plugin.yml` for normal Bukkit/Spigot plugins.

Spigot benötigt für normale Bukkit-/Spigot-Plugins eine gültige `plugin.yml`.

### Java plugin example / Java-Plugin-Beispiel

```java
package com.example.hellospigot;

import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.plugin.java.JavaPlugin;

public final class HelloSpigot extends JavaPlugin {
    @Override
    public void onEnable() {
        getLogger().info("HelloSpigot enabled");
    }

    @Override
    public void onDisable() {
        getLogger().info("HelloSpigot disabled");
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (command.getName().equalsIgnoreCase("hello")) {
            sender.sendMessage("Hello from Spigot!");
            return true;
        }
        return false;
    }
}
```

## 9. Maven example / Maven-Beispiel

Use the Spigot API as a provided dependency. Replace `<spigot-version>` with the version you target.

Verwende die Spigot API als `provided`-Abhängigkeit. Ersetze `<spigot-version>` durch deine Zielversion.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>hello-spigot</artifactId>
    <version>1.0.0</version>

    <properties>
        <maven.compiler.release>21</maven.compiler.release>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <repositories>
        <repository>
            <id>spigot-repo</id>
            <url>https://hub.spigotmc.org/nexus/content/groups/public/</url>
        </repository>
    </repositories>

    <dependencies>
        <dependency>
            <groupId>org.spigotmc</groupId>
            <artifactId>spigot-api</artifactId>
            <version><spigot-version></version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
</project>
```

Build / Bauen:

```bash
mvn clean package
```

Output / Ausgabe:

```text
target/hello-spigot-1.0.0.jar
```

Copy the built plugin JAR to the server's `plugins/` directory while the server is stopped, then start the server again.

Kopiere die gebaute Plugin-JAR bei gestopptem Server nach `plugins/` und starte den Server anschließend erneut.

## 10. Troubleshooting / Fehlerdiagnose

```bash
java -version
ls -lah
ls -lah plugins
tail -n 100 logs/latest.log
```

Windows PowerShell:

```powershell
java -version
Get-ChildItem
Get-ChildItem .\plugins
Get-Content .\logs\latest.log -Tail 100
```

Common checks / Häufige Prüfungen:

- Correct Java version for your Minecraft/Spigot version / Passende Java-Version zur Minecraft-/Spigot-Version.
- Plugin was built for a compatible API version / Plugin wurde für eine kompatible API-Version gebaut.
- `plugin.yml` is present inside the plugin JAR / `plugin.yml` ist in der Plugin-JAR enthalten.
- Read the complete startup error before changing files / Vollständigen Startfehler lesen, bevor Dateien geändert werden.
- Stop the server cleanly before replacing server/plugin JARs / Server vor dem Ersetzen von Server-/Plugin-JARs sauber stoppen.

## References / Quellen

- Spigot BuildTools: https://www.spigotmc.org/wiki/buildtools/
- Spigot Maven: https://www.spigotmc.org/wiki/spigot-maven/
- Spigot plugin.yml: https://www.spigotmc.org/wiki/plugin-yml/
- Spigot plugin development: https://www.spigotmc.org/wiki/spigot-plugin-development/
