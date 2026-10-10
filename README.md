# Linux & Windows Helpful Commands

**Made by [Pierreg99](https://github.com/Pierreg99).** A practical command reference for Windows, Linux, developer tools, shell scripts and game servers, with explanations in **English and Deutsch**.

**Ein Projekt von [Pierreg99](https://github.com/Pierreg99).** Praktische Befehle für Windows, Linux, Entwicklungswerkzeuge, Shell-Skripte und Gameserver mit Erklärungen auf **Deutsch und Englisch**.

**[Open the live Command Wiki · Interaktives Command-Wiki öffnen](https://pierreg99.github.io/Linux-Windows-Helpful-Commands-DOCS/)**

## Interactive website · Interaktive Website

The website loads the Markdown guides directly from `docs/`. No build tools, dependencies or account are required to browse it.

Die Website lädt die Markdown-Guides direkt aus `docs/`. Zum Lesen sind keine Build-Werkzeuge, Abhängigkeiten oder Benutzerkonten nötig.

- Full-text search across all 17 guides · Volltextsuche über alle 17 Guides
- Copy buttons for code blocks and clickable inline commands · Kopierbuttons für Codeblöcke und anklickbare Inline-Befehle
- English, Deutsch and DE + EN views · Englische, deutsche und zweisprachige Ansichten
- Light, dark and automatic themes · Helles, dunkles und automatisches Theme
- Mobile navigation and keyboard shortcuts (`/` for search, `Escape` to close navigation) · Mobilnavigation und Tastenkürzel (`/` für die Suche, `Escape` zum Schließen)
- Per-guide table of contents and GitHub edit links · Inhaltsverzeichnis und GitHub-Bearbeitungslinks pro Guide

## Guides · Dokumentation

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

## Running locally · Lokal starten

Clone the repository and serve it over HTTP so the browser can fetch the guides:

Repository klonen und über HTTP bereitstellen, damit der Browser die Guides laden kann:

```bash
git clone https://github.com/Pierreg99/Linux-Windows-Helpful-Commands-DOCS.git
cd Linux-Windows-Helpful-Commands-DOCS
python3 -m http.server 8000
```

On Windows, use `py -m http.server 8000` if needed. Open **http://localhost:8000**. Opening `index.html` directly with a `file://` URL can prevent guide loading.

Unter Windows bei Bedarf `py -m http.server 8000` verwenden. **http://localhost:8000** öffnen. Beim direkten Öffnen von `index.html` über `file://` kann das Laden der Guides blockiert werden.

## Deployment · Veröffentlichung

The workflow in [`.github/workflows/pages.yml`](.github/workflows/pages.yml) publishes `index.html`, `assets/` and `docs/` to GitHub Pages on every push to `main`. In **Settings → Pages**, set **Source** to **GitHub Actions**. You can also run the workflow manually from the Actions tab.

Der Workflow veröffentlicht `index.html`, `assets/` und `docs/` bei jedem Push nach `main` auf GitHub Pages. Unter **Settings → Pages** die **Source** auf **GitHub Actions** setzen. Der Workflow kann auch im Actions-Tab manuell gestartet werden.

## Using commands · Befehle verwenden

Commands marked with **⚠️** can modify or delete data or system settings. Read each command before running it, particularly with Administrator/root privileges. Replace placeholders such as `<file>`, `<package>` and `<path>` first. Linux examples assume a Bash-compatible shell unless stated otherwise.

Mit **⚠️** markierte Befehle können Daten oder Systemeinstellungen ändern oder löschen. Jeden Befehl vor dem Ausführen lesen, besonders mit Administrator-/root-Rechten. Platzhalter wie `<file>`, `<package>` und `<path>` vorher ersetzen. Linux-Beispiele setzen eine Bash-kompatible Shell voraus, sofern nicht anders angegeben.

## Contributing · Mitwirken

Corrections, new commands and clearer bilingual explanations are welcome. Edit the relevant guide in `docs/`; for a new guide, add its metadata to `DOCS` in `assets/app.js` and link it here and in [WIKI.md](WIKI.md). Preview the website locally before submitting a pull request. Keep passwords, API tokens and server license keys out of examples.

Korrekturen, neue Befehle und verständlichere zweisprachige Erklärungen sind willkommen. Den passenden Guide in `docs/` bearbeiten; bei neuen Guides die Metadaten in `DOCS` in `assets/app.js` ergänzen und hier sowie in [WIKI.md](WIKI.md) verlinken. Die Website vor einem Pull Request lokal prüfen. Keine Passwörter, API-Tokens oder Server-Lizenzschlüssel in Beispiele aufnehmen.
