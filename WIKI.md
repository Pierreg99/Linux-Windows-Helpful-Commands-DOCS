# Command Wiki

This repository contains a bilingual **English / Deutsch** command wiki for Windows, Linux, development tools, scripting and game servers.

Dieses Repository enthält ein zweisprachiges **Englisch / Deutsch** Command-Wiki für Windows, Linux, Entwicklungswerkzeuge, Scripting und Gameserver.

## Interactive website / Interaktive Website

The interactive website reads the Markdown files in `docs/` directly, adds global search and makes command snippets copyable with one click.

Die interaktive Website liest die Markdown-Dateien in `docs/` direkt, ergänzt eine globale Suche und macht Befehle mit einem Klick kopierbar.

When GitHub Pages is enabled for this repository, the default project URL is:

`https://pierreg99.github.io/Linux-Windows-Helpful-Commands-DOCS/`

## Wiki areas / Wiki-Bereiche

### Operating systems / Betriebssysteme

- [Windows CMD & PowerShell](docs/windows.md)
- [WSL](docs/wsl.md)
- [Common Linux](docs/common-linux.md)
- [Ubuntu & Debian](docs/ubuntu-debian.md)
- [Linux Mint](docs/linux-mint.md)
- [Fedora & RHEL](docs/fedora-rhel.md)
- [Arch Linux & Manjaro](docs/arch-manjaro.md)
- [openSUSE](docs/opensuse.md)
- [Alpine Linux](docs/alpine.md)
- [Kali Linux](docs/kali.md)

### Development / Entwicklung

- [Java & JAR](docs/java-jar.md)
- [Python & pip](docs/python-pip.md)
- [Package managers](docs/package-managers.md)
- [SH, Bash, CMD & BAT scripts](docs/scripts-sh-cmd.md)

### Game servers / Gameserver

- [Minecraft & Spigot](docs/minecraft-spigot.md)
- [Paper / PaperSpigot](docs/paper-paperspigot.md)
- [FiveM](docs/fivem.md)

## Website features / Website-Funktionen

- Full-text search across all wiki guides / Volltextsuche über alle Wiki-Seiten
- Copy buttons on fenced code blocks / Kopierbuttons an Codeblöcken
- Click-to-copy inline commands / Anklickbare Inline-Befehle
- Responsive desktop/mobile navigation / Responsive Desktop-/Mobilnavigation
- Light, dark and automatic theme / Helles, dunkles und automatisches Theme
- DE/EN table-column filter / DE-/EN-Filter für Tabellenspalten
- Per-page table of contents / Inhaltsverzeichnis pro Seite
- Direct links to edit each guide on GitHub / Direkte GitHub-Links zum Bearbeiten jeder Seite

## Adding a wiki page / Wiki-Seite hinzufügen

1. Add a Markdown file under `docs/`.
2. Add its metadata entry to the `DOCS` array in `assets/app.js`.
3. Link it from `README.md` and this wiki index.
4. Commit to `main`; the Pages workflow will publish the update automatically when Pages is configured to use GitHub Actions.

Deutsch:

1. Markdown-Datei unter `docs/` hinzufügen.
2. Metadaten-Eintrag im `DOCS`-Array in `assets/app.js` ergänzen.
3. In `README.md` und diesem Wiki-Index verlinken.
4. Nach `main` committen; der Pages-Workflow veröffentlicht das Update automatisch, sobald Pages auf GitHub Actions eingestellt ist.
