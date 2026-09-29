# Linux Mint Commands / Linux-Mint-Befehle

Linux Mint is based on Ubuntu (main editions) and uses **APT**. Many Ubuntu/Debian commands also apply.

Linux Mint basiert in den Haupteditionen auf Ubuntu und verwendet **APT**. Viele Ubuntu-/Debian-Befehle gelten daher ebenfalls.

## Package management / Paketverwaltung

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `sudo apt update` | Refresh package metadata. | Aktualisiert die Paketinformationen. |
| `sudo apt upgrade` ⚠️ | Install available package upgrades. | Installiert verfügbare Paketaktualisierungen. |
| `sudo apt install <package>` ⚠️ | Install a package. | Installiert ein Paket. |
| `sudo apt remove <package>` ⚠️ | Remove a package. | Entfernt ein Paket. |
| `apt search <term>` | Search for a package. | Sucht nach einem Paket. |
| `apt show <package>` | Show package details. | Zeigt Paketdetails an. |

## Mint-specific helpers / Mint-spezifische Helfer

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `mintupdate` | Launch Update Manager from a graphical session when available. | Startet, sofern verfügbar, die Aktualisierungsverwaltung aus einer grafischen Sitzung. |
| `timeshift-launcher` | Open Timeshift through Mint's launcher when installed. | Öffnet Timeshift über den Mint-Launcher, sofern installiert. |
| `cat /etc/linuxmint/info` | Show Linux Mint edition and release information when the file exists. | Zeigt Linux-Mint-Edition und Versionsinformationen an, sofern die Datei existiert. |
| `cat /etc/os-release` | Show operating system identification data. | Zeigt Identifikationsdaten des Betriebssystems an. |

## Services / Dienste

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `systemctl --failed` | Show failed systemd units. | Zeigt fehlgeschlagene systemd-Units an. |
| `systemctl status <service>` | Show service status. | Zeigt den Status eines Dienstes an. |
| `sudo systemctl restart <service>` ⚠️ | Restart a service. | Startet einen Dienst neu. |
