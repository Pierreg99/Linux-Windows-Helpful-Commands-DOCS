# SH, Bash, CMD & BAT Scripts / SH-, Bash-, CMD- & BAT-Skripte

This guide covers common ways to run and inspect Unix shell scripts and Windows command scripts.

Dieser Leitfaden behandelt häufige Methoden zum Ausführen und Prüfen von Unix-Shell-Skripten sowie Windows-Befehlsskripten.

## Linux / Bash / sh

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `bash script.sh` | Run a script explicitly with Bash. | Führt ein Skript ausdrücklich mit Bash aus. |
| `sh script.sh` | Run a script with the system's `sh`; Bash-specific syntax may fail. | Führt ein Skript mit dem systemweiten `sh` aus; Bash-spezifische Syntax kann fehlschlagen. |
| `chmod +x script.sh` ⚠️ | Add executable permission to a script. | Fügt einem Skript Ausführungsrechte hinzu. |
| `./script.sh` | Execute a script from the current directory when it is executable and has a valid shebang. | Führt ein Skript aus dem aktuellen Verzeichnis aus, wenn es ausführbar ist und einen gültigen Shebang besitzt. |
| `bash -n script.sh` | Check Bash syntax without executing the script. | Prüft Bash-Syntax, ohne das Skript auszuführen. |
| `bash -x script.sh` | Run a Bash script while printing commands as they execute. | Führt ein Bash-Skript aus und zeigt die ausgeführten Befehle an. |
| `source script.sh` | Run a Bash script in the current shell so environment changes persist. | Führt ein Bash-Skript in der aktuellen Shell aus, sodass Umgebungsänderungen erhalten bleiben. |
| `. script.sh` | POSIX-style alternative to `source`. | POSIX-kompatible Alternative zu `source`. |
| `shellcheck script.sh` | Analyze a shell script for common problems if ShellCheck is installed. | Analysiert ein Shell-Skript auf häufige Probleme, sofern ShellCheck installiert ist. |

### Common shebangs / Häufige Shebangs

```bash
#!/usr/bin/env bash
```

Uses Bash located through the current environment.

Verwendet Bash, das über die aktuelle Umgebung gefunden wird.

```sh
#!/bin/sh
```

Requests a POSIX-style system shell. Do not assume this is Bash.

Fordert eine POSIX-artige System-Shell an. Diese ist nicht zwingend Bash.

## Bash variables and control / Bash-Variablen und Steuerung

| Command / Syntax | English description | Deutsche Beschreibung |
|---|---|---|
| `NAME="value"` | Set a shell variable. | Setzt eine Shell-Variable. |
| `export NAME="value"` | Set and export an environment variable to child processes. | Setzt und exportiert eine Umgebungsvariable an Kindprozesse. |
| `echo "$NAME"` | Print a variable safely with quoting. | Gibt eine Variable mit sicherer Quotierung aus. |
| `$?` | Exit status of the previous command. | Exit-Status des vorherigen Befehls. |
| `command1 && command2` | Run the second command only if the first succeeds. | Führt den zweiten Befehl nur aus, wenn der erste erfolgreich war. |
| `command1 || command2` | Run the second command only if the first fails. | Führt den zweiten Befehl nur aus, wenn der erste fehlschlägt. |
| `command > output.txt` ⚠️ | Redirect output and overwrite the target file. | Leitet Ausgabe um und überschreibt die Zieldatei. |
| `command >> output.txt` | Append output to a file. | Hängt die Ausgabe an eine Datei an. |
| `command 2> error.txt` ⚠️ | Redirect standard error and overwrite the target file. | Leitet die Fehlerausgabe um und überschreibt die Zieldatei. |
| `command | grep text` | Pipe one command's output into another command. | Leitet die Ausgabe eines Befehls an einen anderen weiter. |

## Windows CMD / .cmd / .bat

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `script.cmd` | Run a command script from CMD when it is in the current directory or PATH. | Führt ein CMD-Skript aus, wenn es im aktuellen Verzeichnis oder PATH liegt. |
| `script.bat` | Run a batch script. | Führt ein Batch-Skript aus. |
| `call script.cmd` | Call another batch/CMD script and return to the current script afterwards. | Ruft ein weiteres Batch-/CMD-Skript auf und kehrt danach zum aktuellen Skript zurück. |
| `cmd /c "<command>"` | Run a command and then exit CMD. | Führt einen Befehl aus und beendet CMD anschließend. |
| `cmd /k "<command>"` | Run a command and keep CMD open. | Führt einen Befehl aus und lässt CMD danach geöffnet. |
| `@echo off` | Hide command echoing in a batch script. | Blendet die Ausgabe der Befehlszeilen in einem Batch-Skript aus. |
| `echo %VAR%` | Print an environment variable. | Gibt eine Umgebungsvariable aus. |
| `set VAR=value` | Set an environment variable for the current CMD process. | Setzt eine Umgebungsvariable für den aktuellen CMD-Prozess. |
| `setlocal` | Start local environment-variable scope inside a batch script. | Startet einen lokalen Gültigkeitsbereich für Umgebungsvariablen im Batch-Skript. |
| `endlocal` | End the local environment scope. | Beendet den lokalen Gültigkeitsbereich. |
| `echo %ERRORLEVEL%` | Print the previous command's exit code. | Gibt den Exit-Code des vorherigen Befehls aus. |
| `if exist <file> <command>` | Run a command if a file or path exists. | Führt einen Befehl aus, wenn eine Datei oder ein Pfad existiert. |
| `for %F in (*) do echo %F` | Interactive CMD: loop over files in the current directory. | Interaktives CMD: durchläuft Dateien im aktuellen Verzeichnis. |
| `for %%F in (*) do echo %%F` | Batch file: loop over files; batch scripts use double percent signs. | Batch-Datei: durchläuft Dateien; Batch-Skripte verwenden doppelte Prozentzeichen. |
| `pause` | Wait for a key press. | Wartet auf einen Tastendruck. |
| `exit /b <code>` | Exit the current batch script with an exit code. | Beendet das aktuelle Batch-Skript mit einem Exit-Code. |

## Useful CMD script variables / Nützliche CMD-Skriptvariablen

| Syntax | English description | Deutsche Beschreibung |
|---|---|---|
| `%0` | Path/name used to invoke the current script. | Pfad/Name, mit dem das aktuelle Skript aufgerufen wurde. |
| `%1` ... `%9` | First through ninth positional arguments. | Erstes bis neuntes Positionsargument. |
| `%*` | All command-line arguments. | Alle Kommandozeilenargumente. |
| `%~dp0` | Drive and directory containing the current script. | Laufwerk und Verzeichnis, in dem das aktuelle Skript liegt. |

### Example / Beispiel

```cmd
@echo off
setlocal
echo Script folder: %~dp0
echo First argument: %1
endlocal
```
