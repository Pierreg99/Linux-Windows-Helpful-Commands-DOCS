# openSUSE Commands / openSUSE-Befehle

openSUSE uses **zypper** and RPM packages. Leap and Tumbleweed have different update workflows.

openSUSE verwendet **zypper** und RPM-Pakete. Leap und Tumbleweed haben unterschiedliche Update-Abläufe.

## zypper basics / zypper-Grundlagen

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `sudo zypper refresh` | Refresh repository metadata. | Aktualisiert die Repository-Metadaten. |
| `zypper list-updates` | Show available package updates. | Zeigt verfügbare Paketaktualisierungen an. |
| `sudo zypper update` ⚠️ | Install normal package updates, commonly used on Leap. | Installiert normale Paketaktualisierungen, typischerweise auf Leap. |
| `sudo zypper dup` ⚠️ | Perform a distribution upgrade; this is the standard full update method for Tumbleweed snapshots. | Führt ein Distributionsupgrade durch; dies ist die übliche vollständige Aktualisierung für Tumbleweed-Snapshots. |
| `sudo zypper install <package>` ⚠️ | Install a package. | Installiert ein Paket. |
| `sudo zypper remove <package>` ⚠️ | Remove a package. | Entfernt ein Paket. |
| `zypper search <term>` | Search packages. | Sucht Pakete. |
| `zypper info <package>` | Show package details. | Zeigt Paketdetails an. |

## Repositories / Repositories

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `zypper repos -u` | List configured repositories and URLs. | Listet konfigurierte Repositories und URLs auf. |
| `sudo zypper addrepo <url> <alias>` ⚠️ | Add a repository. | Fügt ein Repository hinzu. |
| `sudo zypper removerepo <alias>` ⚠️ | Remove a configured repository. | Entfernt ein konfiguriertes Repository. |

## Services and snapshots / Dienste und Snapshots

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `systemctl status <service>` | Show service status. | Zeigt den Status eines Dienstes an. |
| `journalctl -b` | Show logs from the current boot. | Zeigt Logs seit dem aktuellen Systemstart an. |
| `sudo snapper list` | List Snapper snapshots when Snapper is configured. | Listet Snapper-Snapshots auf, wenn Snapper eingerichtet ist. |
