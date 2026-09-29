# Linux & Windows Helpful Commands DOCS

A bilingual **English / Deutsch** reference for useful terminal commands on Windows, popular Linux distributions, programming runtimes, game servers, package managers, and shell scripts.

### 🌐 [Open the live Command Wiki / Interaktives Command-Wiki öffnen](https://pierreg99.github.io/Linux-Windows-Helpful-Commands-DOCS/)

**Live website:** [pierreg99.github.io/Linux-Windows-Helpful-Commands-DOCS](https://pierreg99.github.io/Linux-Windows-Helpful-Commands-DOCS/) · optimized for desktop, mobile, keyboard navigation, screen readers, and accessible **Deutsch / English / DE+EN** views.

> **Safety / Sicherheit:** Commands marked with ⚠️ can modify or delete data, packages, users, services, disks, firewall rules, environments, or server state. Read commands and placeholders carefully before running them, especially with Administrator/root privileges.

## 🌐 Interactive Command Wiki / Interaktives Command-Wiki

This repository now includes a **responsive interactive website** that reads the Markdown guides directly and turns them into a searchable command wiki.

Dieses Repository enthält jetzt eine **responsive interaktive Website**, die die Markdown-Guides direkt einliest und daraus ein durchsuchbares Command-Wiki erstellt.

**GitHub Pages:** https://pierreg99.github.io/Linux-Windows-Helpful-Commands-DOCS/

Website features / Website-Funktionen:

- 🔎 Full-text search across all guides / Volltextsuche über alle Guides
- 📋 Copy button on every code block / Kopierbutton an jedem Codeblock
- 🖱️ Click inline commands to copy them / Inline-Befehle zum Kopieren anklicken
- 🌗 Light, dark and automatic theme / Helles, dunkles und automatisches Theme
- 🇩🇪 🇬🇧 Accessible **Deutsch / English / DE+EN** selector on desktop and mobile / Barrierearme Sprachauswahl auf Desktop und Mobilgeräten
- ♿ Keyboard focus, screen-reader status messages and reduced-motion support / Tastaturfokus, Screenreader-Statusmeldungen und Reduced-Motion-Unterstützung
- 📱 Responsive desktop and mobile UI / Responsive Desktop- und Mobilansicht
- 🧭 Per-page table of contents / Inhaltsverzeichnis pro Wiki-Seite
- ✏️ Direct “Edit on GitHub” links / Direkte „Edit on GitHub“-Links

See [WIKI.md](WIKI.md) for the repository wiki index and contribution workflow.

> GitHub Pages must be configured with **Settings → Pages → Source: GitHub Actions** for the included deployment workflow to publish the site.

## Documentation / Dokumentation

| Platform / Topic | English | Deutsch |
|---|---|---|
| Windows 10/11 | CMD + PowerShell commands with bilingual explanations | CMD- + PowerShell-Befehle mit zweisprachigen Erklärungen |
| WSL | Windows Subsystem for Linux: install, distros, file and network integration | Windows-Subsystem für Linux: Installation, Distributionen, Datei- und Netzwerkintegration |
| Common Linux | Commands that work across many distributions | Befehle, die auf vielen Distributionen funktionieren |
| Ubuntu / Debian | APT, packages, services, system maintenance | APT, Pakete, Dienste, Systempflege |
| Linux Mint | APT-based Mint administration and desktop helpers | APT-basierte Mint-Administration und Desktop-Helfer |
| Fedora / RHEL | DNF/RPM, SELinux, services and firewall | DNF/RPM, SELinux, Dienste und Firewall |
| Arch / Manjaro | pacman, system updates, package queries | pacman, Systemupdates und Paketabfragen |
| openSUSE | zypper, repositories and services | zypper, Repositories und Dienste |
| Alpine Linux | apk, OpenRC and lightweight administration | apk, OpenRC und schlanke Administration |
| Kali Linux | Pre-installed security tools: nmap, sqlmap, john, hashcat, aircrack-ng and more | Vorinstallierte Sicherheitswerkzeuge: nmap, sqlmap, john, hashcat, aircrack-ng u. a. |
| Java + JAR | Java runtime, compiler, classpath and JAR commands | Java-Laufzeit, Compiler, Classpath- und JAR-Befehle |
| Python + pip | Python execution, virtual environments and pip | Python-Ausführung, virtuelle Umgebungen und pip |
| Package managers | apt, dnf, pacman, zypper, apk, pkg, winget | apt, dnf, pacman, zypper, apk, pkg, winget |
| SH + CMD scripts | Bash/sh scripts and Windows .cmd/.bat basics | Bash-/sh-Skripte und Windows-.cmd/.bat-Grundlagen |
| Minecraft + Spigot | Vanilla/Spigot server, BuildTools, plugin examples | Vanilla-/Spigot-Server, BuildTools, Plugin-Beispiele |
| Paper / PaperSpigot | Modern Paper server, plugins, Gradle/Maven examples | Moderner Paper-Server, Plugins, Gradle-/Maven-Beispiele |
| FiveM | FXServer, txAdmin, resources, fxmanifest.lua, server.cfg | FXServer, txAdmin, Ressourcen, fxmanifest.lua, server.cfg |

### Guides

- [Windows CMD & PowerShell](docs/windows.md)
- [WSL — Windows Subsystem for Linux](docs/wsl.md)
- [Common Linux Commands](docs/common-linux.md)
- [Ubuntu & Debian](docs/ubuntu-debian.md)
- [Linux Mint](docs/linux-mint.md)
- [Fedora & RHEL](docs/fedora-rhel.md)
- [Arch Linux & Manjaro](docs/arch-manjaro.md)
- [openSUSE](docs/opensuse.md)
- [Alpine Linux](docs/alpine.md)
- [Kali Linux](docs/kali.md)
- [Java & JAR Commands](docs/java-jar.md)
- [Python & pip Commands](docs/python-pip.md)
- [Package Manager Commands](docs/package-managers.md)
- [SH, Bash, CMD & BAT Scripts](docs/scripts-sh-cmd.md)
- [Minecraft & Spigot](docs/minecraft-spigot.md)
- [Paper / PaperSpigot](docs/paper-paperspigot.md)
- [FiveM](docs/fivem.md)

## Conventions / Konventionen

- Replace placeholders like `<file>`, `<package>`, `<user>`, `<service>`, `<class>`, `<version>` and `<path>` before running a command.
- Ersetze Platzhalter wie `<datei>`, `<paket>`, `<benutzer>`, `<dienst>`, `<klasse>`, `<version>` und `<pfad>` vor dem Ausführen.
- Linux examples assume a Bash-compatible shell unless noted otherwise.
- Linux-Beispiele gehen, sofern nicht anders angegeben, von einer Bash-kompatiblen Shell aus.
- `sudo` is used when elevated privileges are normally required.
- `sudo` wird verwendet, wenn normalerweise erhöhte Rechte nötig sind.
- Never paste real passwords, API tokens, server license keys, or other secrets into public repositories.
- Speichere niemals echte Passwörter, API-Tokens, Server-Lizenzschlüssel oder andere Geheimnisse in öffentlichen Repositories.

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

# Minecraft/Paper-style server start
java -Xms2G -Xmx4G -jar server.jar --nogui

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

Contributions that add accurate commands, distro notes, developer tools, game-server examples, or clearer bilingual explanations are welcome.
