# Package Manager Commands / Paketmanager-Befehle

Package-manager commands are **not interchangeable**. Use the command that belongs to your operating system or environment.

Paketmanager-Befehle sind **nicht untereinander austauschbar**. Verwende den Befehl, der zu deinem Betriebssystem oder deiner Umgebung gehört.

## Quick comparison / Schnellvergleich

| Task / Aufgabe | Debian/Ubuntu | Fedora/RHEL | Arch/Manjaro | openSUSE | Alpine | Termux | Windows |
|---|---|---|---|---|---|---|---|
| Refresh metadata / Metadaten aktualisieren | `apt update` | `dnf check-update` | included in `pacman -Syu` | `zypper refresh` | `apk update` | `pkg update` | `winget source update` |
| Upgrade / Aktualisieren | `apt upgrade` | `dnf upgrade` | `pacman -Syu` | `zypper update` / `zypper dup` | `apk upgrade` | `pkg upgrade` | `winget upgrade --all` |
| Install / Installieren | `apt install <pkg>` | `dnf install <pkg>` | `pacman -S <pkg>` | `zypper install <pkg>` | `apk add <pkg>` | `pkg install <pkg>` | `winget install <pkg>` |
| Remove / Entfernen | `apt remove <pkg>` | `dnf remove <pkg>` | `pacman -R <pkg>` | `zypper remove <pkg>` | `apk del <pkg>` | `pkg uninstall <pkg>` | `winget uninstall <pkg>` |
| Search / Suchen | `apt search <term>` | `dnf search <term>` | `pacman -Ss <term>` | `zypper search <term>` | `apk search <term>` | `pkg search <term>` | `winget search <term>` |

Commands that modify packages usually require Administrator/root privileges. Distro-specific guides in this repository show the recommended privilege form.

Befehle, die Pakete verändern, benötigen normalerweise Administrator-/Root-Rechte. Die distributionsspezifischen Leitfäden in diesem Repository zeigen die empfohlene Form.

## Termux `pkg` commands / Termux-`pkg`-Befehle

In Termux, `pkg` is a user-friendly wrapper around the underlying APT tools. It is not the same command as package managers on standard Linux distributions.

In Termux ist `pkg` ein benutzerfreundlicher Wrapper um die zugrunde liegenden APT-Werkzeuge. Es ist nicht derselbe Befehl wie die Paketmanager normaler Linux-Distributionen.

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `pkg update` | Refresh Termux repository metadata. | Aktualisiert die Termux-Repository-Metadaten. |
| `pkg upgrade` ⚠️ | Upgrade installed Termux packages. | Aktualisiert installierte Termux-Pakete. |
| `pkg install <package>` ⚠️ | Install a package. | Installiert ein Paket. |
| `pkg uninstall <package>` ⚠️ | Uninstall a package. | Deinstalliert ein Paket. |
| `pkg reinstall <package>` ⚠️ | Reinstall an installed package. | Installiert ein installiertes Paket erneut. |
| `pkg search <term>` | Search available packages. | Sucht verfügbare Pakete. |
| `pkg show <package>` | Show package information. | Zeigt Paketinformationen an. |
| `pkg files <package>` | List files belonging to a package. | Listet Dateien auf, die zu einem Paket gehören. |
| `pkg list-installed` | List installed Termux packages. | Listet installierte Termux-Pakete auf. |
| `pkg clean` ⚠️ | Clear downloaded package archives. | Löscht heruntergeladene Paketarchive. |

## Windows winget extras / Windows-winget-Zusatzbefehle

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `winget list` | List installed packages known to winget. | Listet installierte Pakete auf, die winget kennt. |
| `winget show <package>` | Show package metadata. | Zeigt Paketmetadaten an. |
| `winget upgrade` | Show packages with available upgrades. | Zeigt Pakete mit verfügbaren Aktualisierungen an. |
| `winget source list` | List configured package sources. | Listet konfigurierte Paketquellen auf. |
| `winget source update` | Refresh configured package sources. | Aktualisiert konfigurierte Paketquellen. |
