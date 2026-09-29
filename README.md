# Linux & Windows Helpful Commands DOCS

A bilingual **English / Deutsch** reference for useful terminal commands on Windows and popular Linux distributions.

> **Safety / Sicherheit:** Commands marked with ⚠️ can modify or delete data, packages, users, services, disks, or firewall rules. Read the command and placeholders carefully before running it, especially with Administrator/root privileges.

## Documentation / Dokumentation

| Platform | English | Deutsch |
|---|---|---|
| Windows 10/11 | CMD + PowerShell commands with bilingual explanations | CMD- + PowerShell-Befehle mit zweisprachigen Erklärungen |
| Common Linux | Commands that work across many distributions | Befehle, die auf vielen Distributionen funktionieren |
| Ubuntu / Debian | APT, packages, services, system maintenance | APT, Pakete, Dienste, Systempflege |
| Linux Mint | APT-based Mint administration and desktop helpers | APT-basierte Mint-Administration und Desktop-Helfer |
| Fedora / RHEL | DNF/RPM, SELinux, services and firewall | DNF/RPM, SELinux, Dienste und Firewall |
| Arch / Manjaro | pacman, system updates, package queries | pacman, Systemupdates und Paketabfragen |
| openSUSE | zypper, repositories and services | zypper, Repositories und Dienste |
| Alpine Linux | apk, OpenRC and lightweight administration | apk, OpenRC und schlanke Administration |

### Guides

- [Windows CMD & PowerShell](docs/windows.md)
- [Common Linux Commands](docs/common-linux.md)
- [Ubuntu & Debian](docs/ubuntu-debian.md)
- [Linux Mint](docs/linux-mint.md)
- [Fedora & RHEL](docs/fedora-rhel.md)
- [Arch Linux & Manjaro](docs/arch-manjaro.md)
- [openSUSE](docs/opensuse.md)
- [Alpine Linux](docs/alpine.md)

## Conventions / Konventionen

- Replace placeholders like `<file>`, `<package>`, `<user>` and `<service>` before running a command.
- Ersetze Platzhalter wie `<datei>`, `<paket>`, `<benutzer>` und `<dienst>` vor dem Ausführen.
- Linux examples assume a Bash-compatible shell unless noted otherwise.
- Linux-Beispiele gehen, sofern nicht anders angegeben, von einer Bash-kompatiblen Shell aus.
- `sudo` is used when elevated privileges are normally required.
- `sudo` wird verwendet, wenn normalerweise erhöhte Rechte nötig sind.

## Quick examples / Schnellbeispiele

```bash
# Linux: show current directory / aktuelles Verzeichnis anzeigen
pwd

# Linux: list files / Dateien auflisten
ls -lah

# Linux: show IP addresses / IP-Adressen anzeigen
ip addr
```

```powershell
# Windows PowerShell: show network configuration / Netzwerkkonfiguration anzeigen
Get-NetIPConfiguration

# Windows PowerShell: list processes / Prozesse auflisten
Get-Process
```

Contributions that add accurate commands, distro notes, or clearer bilingual explanations are welcome.
