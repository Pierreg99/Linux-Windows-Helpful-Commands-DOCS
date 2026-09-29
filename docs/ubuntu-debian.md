# Ubuntu & Debian Commands / Ubuntu- & Debian-Befehle

Ubuntu and Debian primarily use **APT** for package management and commonly use **systemd** for services.

Ubuntu und Debian verwenden hauptsächlich **APT** zur Paketverwaltung und in der Regel **systemd** für Dienste.

## Package management / Paketverwaltung

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `sudo apt update` | Refresh package metadata from configured repositories. | Aktualisiert die Paketinformationen aus den konfigurierten Repositories. |
| `apt list --upgradable` | Show packages with available upgrades. | Zeigt Pakete mit verfügbaren Aktualisierungen an. |
| `sudo apt upgrade` ⚠️ | Install available upgrades without removing installed packages when possible. | Installiert verfügbare Aktualisierungen und vermeidet dabei nach Möglichkeit Paketentfernungen. |
| `sudo apt full-upgrade` ⚠️ | Upgrade packages and allow dependency changes/removals when required. | Aktualisiert Pakete und erlaubt bei Bedarf Änderungen oder Entfernungen von Abhängigkeiten. |
| `sudo apt install <package>` ⚠️ | Install a package. | Installiert ein Paket. |
| `sudo apt remove <package>` ⚠️ | Remove a package but normally keep configuration files. | Entfernt ein Paket, behält Konfigurationsdateien normalerweise jedoch bei. |
| `sudo apt purge <package>` ⚠️ | Remove a package and its package-managed configuration files. | Entfernt ein Paket inklusive der paketverwalteten Konfigurationsdateien. |
| `sudo apt autoremove` ⚠️ | Remove automatically installed packages no longer needed. | Entfernt automatisch installierte Pakete, die nicht mehr benötigt werden. |
| `apt search <term>` | Search available packages. | Sucht verfügbare Pakete. |
| `apt show <package>` | Show package information. | Zeigt Paketinformationen an. |
| `dpkg -l` | List installed Debian packages. | Listet installierte Debian-Pakete auf. |
| `dpkg -S <path>` | Find which installed package owns a file path. | Ermittelt, welches installierte Paket zu einem Dateipfad gehört. |

## Services and logs / Dienste und Logs

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `systemctl status <service>` | Show a service status. | Zeigt den Status eines Dienstes an. |
| `sudo systemctl restart <service>` ⚠️ | Restart a service. | Startet einen Dienst neu. |
| `sudo systemctl enable --now <service>` ⚠️ | Enable a service at boot and start it immediately. | Aktiviert einen Dienst beim Booten und startet ihn sofort. |
| `journalctl -u <service> -e` | Show recent log entries for a service. | Zeigt aktuelle Logeinträge eines Dienstes an. |

## Ubuntu/Debian helpers / Ubuntu-/Debian-Helfer

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `lsb_release -a` | Show distribution release information when `lsb-release` is installed. | Zeigt Versionsinformationen der Distribution, wenn `lsb-release` installiert ist. |
| `cat /etc/os-release` | Show operating system identification data. | Zeigt Identifikationsdaten des Betriebssystems an. |
| `sudo add-apt-repository <repository>` ⚠️ | Add an APT repository on systems providing this helper. | Fügt auf Systemen mit diesem Helfer ein APT-Repository hinzu. |
| `sudo apt clean` ⚠️ | Clear downloaded APT package files from the local cache. | Löscht heruntergeladene APT-Paketdateien aus dem lokalen Cache. |
