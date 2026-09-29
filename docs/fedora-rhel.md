# Fedora & RHEL Commands / Fedora- & RHEL-Befehle

Fedora and modern Red Hat Enterprise Linux systems use **DNF/RPM**, **systemd**, and commonly **SELinux**. RHEL derivatives may use the same commands.

Fedora und moderne Red-Hat-Enterprise-Linux-Systeme verwenden **DNF/RPM**, **systemd** und häufig **SELinux**. RHEL-Derivate nutzen meist dieselben Befehle.

## DNF and RPM / DNF und RPM

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `sudo dnf check-update` | Check for available package updates. | Prüft auf verfügbare Paketaktualisierungen. |
| `sudo dnf upgrade --refresh` ⚠️ | Refresh metadata and upgrade installed packages. | Aktualisiert Metadaten und installierte Pakete. |
| `sudo dnf install <package>` ⚠️ | Install a package. | Installiert ein Paket. |
| `sudo dnf remove <package>` ⚠️ | Remove a package. | Entfernt ein Paket. |
| `dnf search <term>` | Search package names and descriptions. | Durchsucht Paketnamen und Beschreibungen. |
| `dnf info <package>` | Show package information. | Zeigt Paketinformationen an. |
| `rpm -qa` | List installed RPM packages. | Listet installierte RPM-Pakete auf. |
| `rpm -qf <file>` | Show which installed RPM owns a file. | Zeigt, welches installierte RPM-Paket zu einer Datei gehört. |

## SELinux / SELinux

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `getenforce` | Show the current SELinux enforcement mode. | Zeigt den aktuellen SELinux-Modus an. |
| `sestatus` | Show detailed SELinux status. | Zeigt den detaillierten SELinux-Status an. |
| `ls -Z <path>` | Show SELinux security contexts for files. | Zeigt SELinux-Sicherheitskontexte von Dateien an. |
| `sudo restorecon -Rv <path>` ⚠️ | Restore default SELinux file contexts recursively. | Stellt standardmäßige SELinux-Dateikontexte rekursiv wieder her. |

## Firewall and services / Firewall und Dienste

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `sudo firewall-cmd --state` | Show whether firewalld is running. | Zeigt, ob firewalld läuft. |
| `sudo firewall-cmd --list-all` | Show the active zone configuration. | Zeigt die Konfiguration der aktiven Zone an. |
| `sudo firewall-cmd --add-service=<service> --permanent` ⚠️ | Permanently allow a predefined service. | Erlaubt einen vordefinierten Dienst dauerhaft. |
| `sudo firewall-cmd --reload` ⚠️ | Reload permanent firewalld configuration. | Lädt die permanente firewalld-Konfiguration neu. |
| `systemctl status <service>` | Show service status. | Zeigt den Status eines Dienstes an. |
| `journalctl -u <service> -b` | Show service logs from the current boot. | Zeigt Dienst-Logs seit dem aktuellen Systemstart an. |
