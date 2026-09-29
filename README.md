# Linux & Windows Helpful Commands DOCS

A bilingual **English / Deutsch** reference for useful terminal commands on Windows, popular Linux distributions, programming runtimes, package managers, and shell scripts.

> **Safety / Sicherheit:** Commands marked with ⚠️ can modify or delete data, packages, users, services, disks, firewall rules, or environments. Read the command and placeholders carefully before running it, especially with Administrator/root privileges.

## Documentation / Dokumentation

| Platform / Topic | English | Deutsch |
|---|---|---|
| Windows 10/11 | CMD + PowerShell commands with bilingual explanations | CMD- + PowerShell-Befehle mit zweisprachigen Erklärungen |
| Common Linux | Commands that work across many distributions | Befehle, die auf vielen Distributionen funktionieren |
| Ubuntu / Debian | APT, packages, services, system maintenance | APT, Pakete, Dienste, Systempflege |
| Linux Mint | APT-based Mint administration and desktop helpers | APT-basierte Mint-Administration und Desktop-Helfer |
| Fedora / RHEL | DNF/RPM, SELinux, services and firewall | DNF/RPM, SELinux, Dienste und Firewall |
| Arch / Manjaro | pacman, system updates, package queries | pacman, Systemupdates und Paketabfragen |
| openSUSE | zypper, repositories and services | zypper, Repositories und Dienste |
| Alpine Linux | apk, OpenRC and lightweight administration | apk, OpenRC und schlanke Administration |
| Java + JAR | Java runtime, compiler, classpath and JAR commands | Java-Laufzeit, Compiler, Classpath- und JAR-Befehle |
| Python + pip | Python execution, virtual environments and pip | Python-Ausführung, virtuelle Umgebungen und pip |
| Package managers | apt, dnf, pacman, zypper, apk, pkg, winget | apt, dnf, pacman, zypper, apk, pkg, winget |
| SH + CMD scripts | Bash/sh scripts and Windows .cmd/.bat basics | Bash-/sh-Skripte und Windows-.cmd/.bat-Grundlagen |

### Guides

- [Windows CMD & PowerShell](docs/windows.md)
- [Common Linux Commands](docs/common-linux.md)
- [Ubuntu & Debian](docs/ubuntu-debian.md)
- [Linux Mint](docs/linux-mint.md)
- [Fedora & RHEL](docs/fedora-rhel.md)
- [Arch Linux & Manjaro](docs/arch-manjaro.md)
- [openSUSE](docs/opensuse.md)
- [Alpine Linux](docs/alpine.md)
- [Java & JAR Commands](docs/java-jar.md)
- [Python & pip Commands](docs/python-pip.md)
- [Package Manager Commands](docs/package-managers.md)
- [SH, Bash, CMD & BAT Scripts](docs/scripts-sh-cmd.md)

## Conventions / Konventionen

- Replace placeholders like `<file>`, `<package>`, `<user>`, `<service>`, `<class>` and `<path>` before running a command.
- Ersetze Platzhalter wie `<datei>`, `<paket>`, `<benutzer>`, `<dienst>`, `<klasse>` und `<pfad>` vor dem Ausführen.
- Linux examples assume a Bash-compatible shell unless noted otherwise.
- Linux-Beispiele gehen, sofern nicht anders angegeben, von einer Bash-kompatiblen Shell aus.
- `sudo` is used when elevated privileges are normally required.
- `sudo` wird verwendet, wenn normalerweise erhöhte Rechte nötig sind.
- Prefer `python -m pip` or `python3 -m pip` when you need to be certain which Python installation receives a package.
- Verwende bevorzugt `python -m pip` oder `python3 -m pip`, wenn eindeutig sein soll, zu welcher Python-Installation ein Paket gehört.

## Quick examples / Schnellbeispiele

```bash
# Linux
pwd
ls -lah
ip addr

# Python
python3 --version
python3 -m pip --version

# Java
java -version
javac -version

# Shell script
bash script.sh
```

```powershell
# Windows PowerShell
Get-NetIPConfiguration
Get-Process

# Python
python --version
python -m pip --version

# Java
java -version
javac -version
```

Contributions that add accurate commands, distro notes, developer tools, or clearer bilingual explanations are welcome.
