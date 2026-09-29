# Alpine Linux Commands / Alpine-Linux-Befehle

Alpine Linux uses **apk** for packages and commonly **OpenRC** for service management.

Alpine Linux verwendet **apk** für Pakete und normalerweise **OpenRC** zur Dienstverwaltung.

## apk package management / apk-Paketverwaltung

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `apk update` | Refresh the package index. | Aktualisiert den Paketindex. |
| `apk upgrade` ⚠️ | Upgrade installed packages. | Aktualisiert installierte Pakete. |
| `apk add <package>` ⚠️ | Install a package. Use root privileges as required. | Installiert ein Paket. Bei Bedarf mit Root-Rechten ausführen. |
| `apk del <package>` ⚠️ | Remove a package. | Entfernt ein Paket. |
| `apk search <term>` | Search available packages. | Sucht verfügbare Pakete. |
| `apk info <package>` | Show package information. | Zeigt Paketinformationen an. |
| `apk info -vv` | List installed packages with versions. | Listet installierte Pakete mit Versionen auf. |
| `apk audit` | Report changes to files installed from packages. | Meldet Änderungen an Dateien, die aus Paketen installiert wurden. |

## OpenRC services / OpenRC-Dienste

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `rc-status` | Show OpenRC service status by runlevel. | Zeigt den OpenRC-Dienststatus nach Runlevel an. |
| `rc-service <service> status` | Show a service status. | Zeigt den Status eines Dienstes an. |
| `rc-service <service> restart` ⚠️ | Restart a service. | Startet einen Dienst neu. |
| `rc-update add <service> default` ⚠️ | Enable a service in the default runlevel. | Aktiviert einen Dienst im Standard-Runlevel. |
| `rc-update del <service> default` ⚠️ | Disable a service in the default runlevel. | Deaktiviert einen Dienst im Standard-Runlevel. |

## Alpine system information / Alpine-Systeminformationen

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `cat /etc/alpine-release` | Show the Alpine Linux release version. | Zeigt die Alpine-Linux-Version an. |
| `cat /etc/os-release` | Show OS identification information. | Zeigt Informationen zur Betriebssystem-Identifikation an. |
| `df -h` | Show filesystem disk usage. | Zeigt den Speicherverbrauch der Dateisysteme an. |
| `free -m` | Show memory usage in MiB when provided by the installed toolset. | Zeigt den Speicherverbrauch in MiB an, sofern das benötigte Tool installiert ist. |
