# Java & JAR Commands / Java- & JAR-Befehle

This guide covers common commands from a JDK installation. The Java runtime (`java`) runs programs, while the Java compiler (`javac`) compiles source code. JAR files are ZIP-based Java archives.

Dieser Leitfaden behandelt häufige Befehle einer JDK-Installation. Die Java-Laufzeit (`java`) führt Programme aus, während der Java-Compiler (`javac`) Quellcode kompiliert. JAR-Dateien sind ZIP-basierte Java-Archive.

## Version and environment / Version und Umgebung

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `java -version` | Show the installed Java runtime version. | Zeigt die installierte Java-Laufzeitversion an. |
| `javac -version` | Show the installed Java compiler version. | Zeigt die installierte Java-Compiler-Version an. |
| `java -XshowSettings:properties -version` | Show Java system properties and runtime settings. | Zeigt Java-Systemeigenschaften und Laufzeiteinstellungen an. |
| `where java` | Windows: locate `java.exe` in PATH. | Windows: findet `java.exe` im PATH. |
| `where javac` | Windows: locate `javac.exe` in PATH. | Windows: findet `javac.exe` im PATH. |
| `which java` | Linux: show the Java executable selected by PATH. | Linux: zeigt die über PATH ausgewählte Java-Programmdatei. |
| `readlink -f "$(which java)"` | Linux: resolve the selected Java executable symlink. | Linux: löst den Symlink der ausgewählten Java-Programmdatei auf. |

## Compile and run / Kompilieren und ausführen

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `javac Main.java` | Compile `Main.java` into Java bytecode. | Kompiliert `Main.java` zu Java-Bytecode. |
| `java Main` | Run the compiled `Main` class from the current classpath. | Führt die kompilierte Klasse `Main` aus dem aktuellen Classpath aus. |
| `javac -d out Main.java` | Compile classes into the `out` directory. | Kompiliert Klassen in das Verzeichnis `out`. |
| `java -cp out Main` | Run `Main` using `out` as the classpath. | Führt `Main` mit `out` als Classpath aus. |
| `java -cp "lib/*;out" Main` | Windows: run with JARs in `lib` plus compiled classes. | Windows: führt das Programm mit JARs in `lib` und kompilierten Klassen aus. |
| `java -cp "lib/*:out" Main` | Linux/macOS: run with JARs in `lib` plus compiled classes. | Linux/macOS: führt das Programm mit JARs in `lib` und kompilierten Klassen aus. |
| `java <file>.java` | Run a single-file Java source program on supported modern JDKs. | Führt auf unterstützten modernen JDKs ein einzelnes Java-Quellprogramm direkt aus. |

## JAR files / JAR-Dateien

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `java -jar app.jar` | Run an executable JAR whose manifest defines a main class. | Führt eine ausführbare JAR-Datei aus, deren Manifest eine Hauptklasse definiert. |
| `jar --list --file app.jar` | List files stored inside a JAR. | Listet die Dateien innerhalb einer JAR-Datei auf. |
| `jar --extract --file app.jar` ⚠️ | Extract a JAR into the current directory. Existing files can be overwritten. | Entpackt eine JAR-Datei in das aktuelle Verzeichnis. Vorhandene Dateien können überschrieben werden. |
| `jar --create --file app.jar -C out .` | Create `app.jar` from files in the `out` directory. | Erstellt `app.jar` aus den Dateien im Verzeichnis `out`. |
| `jar --create --file app.jar --main-class Main -C out .` | Create an executable JAR with `Main` as its entry class. | Erstellt eine ausführbare JAR-Datei mit `Main` als Einstiegsklasse. |
| `jar --update --file app.jar <file>` ⚠️ | Add or replace a file inside an existing JAR. | Fügt eine Datei zu einer bestehenden JAR hinzu oder ersetzt sie. |
| `unzip -l app.jar` | Linux: inspect JAR contents using `unzip`, if installed. | Linux: zeigt den JAR-Inhalt mit `unzip` an, sofern installiert. |

## Inspection and troubleshooting / Analyse und Fehlerdiagnose

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `javap <class>` | Display information about a compiled Java class. | Zeigt Informationen zu einer kompilierten Java-Klasse an. |
| `javap -c <class>` | Disassemble class bytecode into JVM instructions. | Zerlegt Klassen-Bytecode in JVM-Instruktionen. |
| `jdeps app.jar` | Analyze Java class/module dependencies. | Analysiert Java-Klassen- und Modulabhängigkeiten. |
| `jps -l` | List running JVM processes visible to the current user. | Listet laufende JVM-Prozesse auf, die für den aktuellen Benutzer sichtbar sind. |
| `jstack <pid>` | Print Java thread stack traces for a JVM process when permitted. | Gibt Java-Thread-Stacktraces eines JVM-Prozesses aus, sofern erlaubt. |

## Useful environment variables / Nützliche Umgebungsvariablen

### Linux / Bash

```bash
export JAVA_HOME=/path/to/jdk
export PATH="$JAVA_HOME/bin:$PATH"
```

### Windows CMD

```cmd
set JAVA_HOME=C:\Path\To\JDK
set PATH=%JAVA_HOME%\bin;%PATH%
```

### Windows PowerShell

```powershell
$env:JAVA_HOME = "C:\Path\To\JDK"
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
```
