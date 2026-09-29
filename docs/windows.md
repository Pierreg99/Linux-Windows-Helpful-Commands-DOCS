# Windows CMD & PowerShell / Windows CMD & PowerShell

Windows includes the classic **Command Prompt (CMD)** and modern **PowerShell**. Run an elevated terminal only when a command actually needs Administrator rights.

Windows enthält die klassische **Eingabeaufforderung (CMD)** und das moderne **PowerShell**. Starte ein Terminal nur dann als Administrator, wenn ein Befehl wirklich erhöhte Rechte benötigt.

## CMD basics / CMD-Grundlagen

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `dir` | List files and folders in the current directory. | Listet Dateien und Ordner im aktuellen Verzeichnis auf. |
| `cd` | Show the current directory. | Zeigt das aktuelle Verzeichnis an. |
| `cd /d C:\Path` | Change drive and directory at the same time. | Wechselt Laufwerk und Verzeichnis gleichzeitig. |
| `mkdir <folder>` | Create a folder. | Erstellt einen Ordner. |
| `copy <source> <target>` | Copy a file. | Kopiert eine Datei. |
| `move <source> <target>` | Move or rename a file. | Verschiebt oder benennt eine Datei um. |
| `del <file>` ⚠️ | Delete a file. | Löscht eine Datei. |
| `rmdir /s <folder>` ⚠️ | Delete a folder and all its contents. | Löscht einen Ordner inklusive Inhalt. |
| `type <file>` | Print a text file. | Gibt eine Textdatei aus. |
| `where <program>` | Find executables in the current path. | Sucht ausführbare Programme im aktuellen Suchpfad. |
| `cls` | Clear the CMD screen. | Leert die CMD-Anzeige. |

## CMD system and networking / CMD System und Netzwerk

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `systeminfo` | Show Windows, hardware and update information. | Zeigt Windows-, Hardware- und Updateinformationen an. |
| `hostname` | Show the computer name. | Zeigt den Computernamen an. |
| `whoami` | Show the current user identity. | Zeigt die aktuelle Benutzeridentität an. |
| `tasklist` | List running processes. | Listet laufende Prozesse auf. |
| `taskkill /PID <pid>` ⚠️ | Request termination of a process by PID. | Fordert das Beenden eines Prozesses anhand der PID an. |
| `ipconfig /all` | Show detailed network adapter configuration. | Zeigt detaillierte Netzwerkkonfigurationen an. |
| `ipconfig /flushdns` | Clear the Windows DNS resolver cache. | Leert den Windows-DNS-Resolver-Cache. |
| `ping <host>` | Test basic network reachability. | Prüft die grundlegende Netzwerk-Erreichbarkeit. |
| `tracert <host>` | Trace the route to a host. | Verfolgt die Route zu einem Host. |
| `nslookup <domain>` | Query DNS information. | Fragt DNS-Informationen ab. |
| `netstat -ano` | Show connections, listening ports and PIDs. | Zeigt Verbindungen, offene Ports und PIDs an. |

## PowerShell files and navigation / PowerShell Dateien und Navigation

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `Get-Location` | Show the current location. | Zeigt den aktuellen Pfad an. |
| `Get-ChildItem -Force` | List files, folders and hidden items. | Listet Dateien, Ordner und versteckte Elemente auf. |
| `Set-Location <path>` | Change location. | Wechselt den Pfad. |
| `New-Item -ItemType Directory <path>` | Create a directory. | Erstellt ein Verzeichnis. |
| `Copy-Item <source> <target> -Recurse` | Copy an item recursively. | Kopiert ein Element rekursiv. |
| `Move-Item <source> <target>` | Move or rename an item. | Verschiebt oder benennt ein Element um. |
| `Remove-Item <path> -Recurse` ⚠️ | Recursively delete an item. | Löscht ein Element rekursiv. |
| `Get-Content <file>` | Read a text file. | Liest eine Textdatei. |
| `Select-String -Path <file> -Pattern "<text>"` | Search text in files. | Sucht Text in Dateien. |

## PowerShell processes, services and networking / PowerShell Prozesse, Dienste und Netzwerk

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `Get-Process` | List processes. | Listet Prozesse auf. |
| `Stop-Process -Id <pid>` ⚠️ | Stop a process by PID. | Beendet einen Prozess anhand der PID. |
| `Get-Service` | List Windows services. | Listet Windows-Dienste auf. |
| `Get-Service <name>` | Show one service and its status. | Zeigt einen Dienst und dessen Status an. |
| `Restart-Service <name>` ⚠️ | Restart a service; elevation may be required. | Startet einen Dienst neu; Administratorrechte können nötig sein. |
| `Get-NetIPConfiguration` | Show IP configuration for network interfaces. | Zeigt die IP-Konfiguration der Netzwerkschnittstellen an. |
| `Get-NetTCPConnection` | Show TCP connections and listening endpoints. | Zeigt TCP-Verbindungen und lauschende Endpunkte an. |
| `Test-Connection <host> -Count 4` | Send four ping-style tests. | Führt vier Ping-ähnliche Verbindungstests aus. |
| `Test-NetConnection <host> -Port <port>` | Test whether a TCP port can be reached. | Prüft, ob ein TCP-Port erreichbar ist. |
| `Resolve-DnsName <domain>` | Resolve DNS records. | Löst DNS-Einträge auf. |

## Windows maintenance / Windows-Wartung

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `winget search <name>` | Search packages in Windows Package Manager. | Sucht Pakete im Windows Package Manager. |
| `winget install <package>` ⚠️ | Install a package. | Installiert ein Paket. |
| `winget upgrade --all` ⚠️ | Upgrade packages managed by winget. | Aktualisiert von winget verwaltete Pakete. |
| `sfc /scannow` ⚠️ | Scan protected Windows system files and repair when possible; run elevated. | Prüft geschützte Windows-Systemdateien und repariert sie wenn möglich; als Administrator ausführen. |
| `DISM /Online /Cleanup-Image /RestoreHealth` ⚠️ | Repair the Windows component store; run elevated. | Repariert den Windows-Komponentenspeicher; als Administrator ausführen. |
| `Get-ComputerInfo` | Show detailed computer and Windows information. | Zeigt detaillierte Computer- und Windows-Informationen an. |
