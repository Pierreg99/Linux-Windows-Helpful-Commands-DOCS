# Python & pip Commands / Python- & pip-Befehle

Python executable names vary by platform and installation. Linux systems commonly use `python3`; Windows often provides `python` and the `py` launcher.

Die Namen der Python-Programme unterscheiden sich je nach Plattform und Installation. Linux-Systeme verwenden häufig `python3`; Windows bietet oft `python` und den `py`-Launcher.

## Python basics / Python-Grundlagen

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `python --version` | Show the Python version selected by `python`. | Zeigt die von `python` ausgewählte Python-Version an. |
| `python3 --version` | Linux: show the Python 3 version. | Linux: zeigt die Python-3-Version an. |
| `py --version` | Windows: show the Python Launcher version/default Python. | Windows: zeigt die Version bzw. Standardauswahl des Python Launchers an. |
| `python script.py` | Run a Python script. | Führt ein Python-Skript aus. |
| `python -m <module>` | Run an installed Python module as a program. | Führt ein installiertes Python-Modul als Programm aus. |
| `python -c "print('Hello')"` | Execute a short Python statement from the terminal. | Führt eine kurze Python-Anweisung direkt im Terminal aus. |
| `python -m compileall .` | Compile Python source files under the current directory to bytecode. | Kompiliert Python-Quelldateien unterhalb des aktuellen Verzeichnisses zu Bytecode. |

## Virtual environments / Virtuelle Umgebungen

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `python -m venv .venv` | Create a virtual environment in `.venv`. | Erstellt eine virtuelle Umgebung in `.venv`. |
| `source .venv/bin/activate` | Linux/Bash: activate the virtual environment. | Linux/Bash: aktiviert die virtuelle Umgebung. |
| `.venv\Scripts\activate.bat` | Windows CMD: activate the virtual environment. | Windows CMD: aktiviert die virtuelle Umgebung. |
| `.\.venv\Scripts\Activate.ps1` | Windows PowerShell: activate the virtual environment. | Windows PowerShell: aktiviert die virtuelle Umgebung. |
| `deactivate` | Leave the active virtual environment. | Verlässt die aktive virtuelle Umgebung. |

## pip package management / pip-Paketverwaltung

Using `python -m pip` ties pip to the selected Python interpreter and avoids many PATH/version mix-ups.

Mit `python -m pip` wird pip eindeutig mit dem ausgewählten Python-Interpreter verbunden und viele PATH-/Versionsprobleme werden vermieden.

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `python -m pip --version` | Show the pip version and Python location it belongs to. | Zeigt pip-Version und die zugehörige Python-Installation an. |
| `python -m pip install <package>` ⚠️ | Install a Python package into the active environment. | Installiert ein Python-Paket in die aktive Umgebung. |
| `python -m pip install "<package>==<version>"` ⚠️ | Install an exact package version. | Installiert eine exakt festgelegte Paketversion. |
| `python -m pip install --upgrade <package>` ⚠️ | Upgrade a package. | Aktualisiert ein Paket. |
| `python -m pip install --upgrade pip` ⚠️ | Upgrade pip in the selected Python environment. | Aktualisiert pip in der ausgewählten Python-Umgebung. |
| `python -m pip uninstall <package>` ⚠️ | Uninstall a package. | Deinstalliert ein Paket. |
| `python -m pip list` | List installed packages. | Listet installierte Pakete auf. |
| `python -m pip list --outdated` | Show installed packages with newer versions available. | Zeigt installierte Pakete mit verfügbaren neueren Versionen an. |
| `python -m pip show <package>` | Show package metadata and installation location. | Zeigt Paketmetadaten und Installationsort an. |
| `python -m pip freeze` | Print installed packages in requirements-style format. | Gibt installierte Pakete im Requirements-Format aus. |
| `python -m pip freeze > requirements.txt` | Save the current environment's package versions. | Speichert die Paketversionen der aktuellen Umgebung. |
| `python -m pip install -r requirements.txt` ⚠️ | Install dependencies listed in a requirements file. Review untrusted files first. | Installiert Abhängigkeiten aus einer Requirements-Datei. Nicht vertrauenswürdige Dateien vorher prüfen. |
| `python -m pip check` | Check installed packages for dependency conflicts. | Prüft installierte Pakete auf Abhängigkeitskonflikte. |
| `python -m pip cache dir` | Show pip's download cache location. | Zeigt den Speicherort des pip-Download-Caches an. |
| `python -m pip cache purge` ⚠️ | Remove all items from pip's cache. | Entfernt alle Elemente aus dem pip-Cache. |

## Windows Python Launcher / Windows-Python-Launcher

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `py -0p` | List Python installations known to the Windows launcher. | Listet Python-Installationen auf, die dem Windows-Launcher bekannt sind. |
| `py -3 script.py` | Run a script with Python 3 selected by the launcher. | Führt ein Skript mit der vom Launcher ausgewählten Python-3-Version aus. |
| `py -3 -m pip install <package>` ⚠️ | Install a package for the selected Python 3 runtime. | Installiert ein Paket für die ausgewählte Python-3-Laufzeit. |
