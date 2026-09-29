# WSL — Windows Subsystem for Linux / Windows-Subsystem-für-Linux

WSL lets you run a real Linux user-mode environment directly inside Windows, without a separate virtual machine. WSL 2 uses a lightweight Hyper-V VM and a full Linux kernel.

WSL erlaubt es, eine echte Linux-Benutzer-Mode-Umgebung direkt unter Windows auszuführen, ohne separate virtuelle Maschine. WSL 2 nutzt eine schlanke Hyper-V-VM und einen vollständigen Linux-Kernel.

> Run an **elevated** PowerShell or CMD prompt when a command needs Administrator rights.
> Starte eine **erhöhte** PowerShell- oder CMD-Eingabeaufforderung, wenn ein Befehl Administratorrechte benötigt.

## Installation and version / Installation und Version

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `wsl --install` ⚠️ | Enable WSL and install the default Ubuntu distro on Windows 10/11. | Aktiviert WSL und installiert die Standard-Ubuntu-Distribution auf Windows 10/11. |
| `wsl --install --distribution <name>` ⚠️ | Install a specific distro (e.g., `Debian`, `Ubuntu-22.04`, `kali-linux`). | Installiert eine bestimmte Distribution (z. B. `Debian`, `Ubuntu-22.04`, `kali-linux`). |
| `wsl --update` ⚠️ | Update the WSL kernel and MSI to the latest version. | Aktualisiert den WSL-Kernel und das MSI auf die neueste Version. |
| `wsl --update --web-download` ⚠️ | Force WSL to download updates from GitHub instead of the Microsoft Store. | Lädt WSL-Updates direkt von GitHub statt aus dem Microsoft Store. |
| `wsl --set-version <distro> 2` ⚠️ | Convert an existing WSL 1 distro to WSL 2 (or vice versa). | Wandelt eine bestehende WSL-1-Distribution in WSL 2 um (oder umgekehrt). |
| `wsl --set-default-version 2` ⚠️ | Make WSL 2 the default for newly installed distros. | Legt WSL 2 als Standard für neu installierte Distributionen fest. |

## Listing and managing distros / Distributionen anzeigen und verwalten

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `wsl --list --verbose` / `wsl -l -v` | Show installed distros, their state and WSL version. | Zeigt installierte Distributionen, Status und WSL-Version an. |
| `wsl --list --online` / `wsl -l -o` | List distros available for download from the Microsoft Store. | Listet Distributionen, die aus dem Microsoft Store geladen werden können. |
| `wsl --set-default <distro>` ⚠️ | Set the default distro used by `wsl.exe` with no arguments. | Legt die Standarddistribution für `wsl.exe` ohne Argumente fest. |
| `wsl --shutdown` ⚠️ | Terminate all running distros and the WSL 2 lightweight VM. | Beendet alle laufenden Distributionen und die WSL-2-VM. |
| `wsl --terminate <distro>` / `wsl -t <distro>` ⚠️ | Shut down a single running distro. | Beendet eine einzelne laufende Distribution. |

## Running commands inside and across WSL / Befehle innerhalb und über WSL hinweg ausführen

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `wsl <command>` | Run a Linux command in the default distro and return the result. | Führt einen Linux-Befehl in der Standarddistribution aus und liefert das Ergebnis zurück. |
| `wsl -d <distro> <command>` | Run a command inside a specific distro. | Führt einen Befehl in einer bestimmten Distribution aus. |
| `wsl --user <user> <command>` | Run a command as a specific Linux user. | Führt einen Befehl als bestimmter Linux-Benutzer aus. |
| `wsl ~ -d <distro>` | Open the default WSL shell into the distro's home directory. | Öffnet die Standard-WSL-Shell im Home-Verzeichnis der Distribution. |
| `bash -c "<command>"` | Run a Linux command via the legacy WSL 1 shim (still present in WSL 2). | Führt einen Linux-Befehl über den älteren WSL-1-Shim aus (in WSL 2 weiterhin verfügbar). |
| `wslpath -w "<linux-path>"` | Convert a Linux path inside WSL to the equivalent Windows path. | Wandelt einen Linux-Pfad innerhalb WSL in den Windows-Pfad um. |
| `wslpath -u "<windows-path>"` | Convert a Windows path to its WSL `/mnt/...` equivalent. | Wandelt einen Windows-Pfad in das WSL-`/mnt/...`-Äquivalent um. |

## File system and clipboard integration / Dateisystem und Zwischenablage

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `explorer.exe .` | Open the current WSL directory in Windows Explorer. | Öffnet das aktuelle WSL-Verzeichnis im Windows-Explorer. |
| `notepad.exe <file>` | Edit a Linux file in Windows Notepad; saves back into WSL. | Bearbeitet eine Linux-Datei im Windows-Editor; speichert zurück nach WSL. |
| `code .` (with the WSL extension) | Open the current folder in VS Code via the Remote-WSL connection. | Öffnet den aktuellen Ordner in VS Code über die Remote-WSL-Verbindung. |
| `clip.exe < <file>` | Copy a Linux file's contents to the Windows clipboard. | Kopiert den Inhalt einer Linux-Datei in die Windows-Zwischenablage. |
| `powershell.exe -c "Get-Clipboard" > file.txt` | Read the Windows clipboard into a WSL file. | Liest die Windows-Zwischenablage in eine WSL-Datei. |

## Filesystem locations / Dateisystem-Pfade

| Path | Meaning | Bedeutung |
|---|---|---|
| `\\wsl$\<distro>\` | Windows network path to a WSL distro's Linux filesystem. | Windows-Netzwerkpfad zum Linux-Dateisystem einer WSL-Distribution. |
| `/mnt/c` | The Windows `C:` drive as seen from inside WSL. | Das Windows-Laufwerk `C:`, aus WSL heraus sichtbar. |
| `/mnt/d` (etc.) | Other Windows drives mounted in WSL. | Weitere Windows-Laufwerke, in WSL eingehängt. |
| `~/.local/share/` (per distro) | Linux user data inside the distro's virtual disk. | Linux-Benutzerdaten innerhalb der virtuellen Disk der Distribution. |

## Backing up and restoring distros / Distributionen sichern und wiederherstellen

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `wsl --export <distro> <file.tar>` ⚠️ | Export a distro to a tar file (filesystem only, not the kernel). | Exportiert eine Distribution als tar-Datei (nur Dateisystem, ohne Kernel). |
| `wsl --import <name> <install-location> <file.tar>` ⚠️ | Import a tar file as a new distro at a chosen install location. | Importiert eine tar-Datei als neue Distribution am gewählten Installationsort. |
| `wsl --unregister <distro>` ⚠️ | Remove a distro from WSL and delete its filesystem. | Entfernt eine Distribution aus WSL und löscht ihr Dateisystem. |

## Networking from inside WSL / Netzwerk aus WSL heraus

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `ip addr` | Show the WSL 2 virtual Ethernet adapter IP address. | Zeigt die IP-Adresse des virtuellen WSL-2-Ethernet-Adapters an. |
| `cat /etc/resolv.conf` | Show the DNS server WSL is currently using. | Zeigt den DNS-Server, den WSL aktuell verwendet. |
| `curl ifconfig.me` | Show the public IP address as seen by WSL (often matches the Windows host). | Zeigt die öffentliche IP-Adresse aus WSL-Sicht (oft identisch mit dem Windows-Host). |
| `powershell.exe -c "Get-NetIPAddress"` | Inspect the Windows-side IP configuration from inside WSL. | Zeigt die IP-Konfiguration der Windows-Seite aus WSL heraus an. |

## Troubleshooting / Fehlerbehebung

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `wsl --status` | Show WSL version, default distro, kernel version and last update check. | Zeigt WSL-Version, Standarddistribution, Kernel-Version und letzte Update-Prüfung. |
| `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart` ⚠️ | Enable the Virtual Machine Platform component required by WSL 2. | Aktiviert die für WSL 2 nötige Komponente "Virtual Machine Platform". |
| `netsh winsock reset` ⚠️ | Reset the Windows network stack if WSL networking stops working. | Setzt den Windows-Netzwerkstack zurück, wenn die WSL-Netzwerkverbindung streikt. |
| `wsl --shutdown && wsl --update` ⚠️ | Restart WSL and re-check for kernel updates when tools misbehave. | Startet WSL neu und prüft erneut auf Kernel-Updates bei Fehlverhalten. |