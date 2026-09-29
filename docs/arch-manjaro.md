# Arch Linux & Manjaro Commands / Arch-Linux- & Manjaro-Befehle

Arch Linux and Manjaro use **pacman** as the core package manager. Avoid partial upgrades: synchronize repositories and upgrade the system together.

Arch Linux und Manjaro verwenden **pacman** als zentrale Paketverwaltung. Vermeide Teilaktualisierungen: Repository-Synchronisierung und Systemupdate sollten zusammen erfolgen.

## pacman / pacman

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `sudo pacman -Syu` ⚠️ | Synchronize package databases and perform a full system upgrade. | Synchronisiert Paketdatenbanken und führt ein vollständiges Systemupdate durch. |
| `sudo pacman -S <package>` ⚠️ | Install a package. | Installiert ein Paket. |
| `sudo pacman -R <package>` ⚠️ | Remove a package. | Entfernt ein Paket. |
| `sudo pacman -Rns <package>` ⚠️ | Remove a package, unused dependencies, and relevant package backup configuration files. | Entfernt ein Paket, ungenutzte Abhängigkeiten und relevante Paket-Backup-Konfigurationsdateien. |
| `pacman -Ss <term>` | Search repositories. | Durchsucht die Repositories. |
| `pacman -Qs <term>` | Search installed packages. | Durchsucht installierte Pakete. |
| `pacman -Qi <package>` | Show information about an installed package. | Zeigt Informationen zu einem installierten Paket an. |
| `pacman -Ql <package>` | List files installed by a package. | Listet Dateien auf, die von einem Paket installiert wurden. |
| `pacman -Qo <file>` | Find which installed package owns a file. | Ermittelt, welches installierte Paket zu einer Datei gehört. |
| `pacman -Qdt` | List orphaned packages. | Listet verwaiste Pakete auf. |

## Package cache and services / Paket-Cache und Dienste

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `paccache -r` ⚠️ | Remove old cached package versions while keeping recent versions; requires `pacman-contrib`. | Entfernt alte Paketversionen aus dem Cache und behält neuere Versionen; benötigt `pacman-contrib`. |
| `systemctl --failed` | Show failed systemd units. | Zeigt fehlgeschlagene systemd-Units an. |
| `sudo systemctl enable --now <service>` ⚠️ | Enable and immediately start a service. | Aktiviert und startet einen Dienst sofort. |
| `journalctl -p err -b` | Show error-level logs from the current boot. | Zeigt Fehler-Logs seit dem aktuellen Systemstart an. |

## Manjaro note / Manjaro-Hinweis

Manjaro users can use `pacman` directly. Graphical tools such as Pamac may also be installed, but repository synchronization and full upgrades should still be handled consistently.

Manjaro-Nutzer können `pacman` direkt verwenden. Grafische Werkzeuge wie Pamac können zusätzlich installiert sein; Repository-Synchronisierung und vollständige Updates sollten trotzdem konsistent durchgeführt werden.
