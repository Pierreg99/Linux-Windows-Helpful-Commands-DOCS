# Paper / PaperSpigot

> **Naming note / Namenshinweis:** Modern PaperMC documentation calls the server **Paper**. “PaperSpigot” is an old/historical name and should not be treated as the current product name.
>
> Die aktuelle PaperMC-Dokumentation nennt den Server **Paper**. „PaperSpigot“ ist eine alte/historische Bezeichnung und sollte nicht als aktueller Produktname behandelt werden.

This file is deliberately separate from the Spigot guide. Paper can run many Bukkit/Spigot plugins, but it has its own documentation, APIs, configuration and development tooling.

Diese Datei ist bewusst vom Spigot-Leitfaden getrennt. Paper kann viele Bukkit-/Spigot-Plugins ausführen, besitzt aber eigene Dokumentation, APIs, Konfigurationen und Entwicklungswerkzeuge.

## 1. Java requirement / Java-Anforderung

Always check the current Paper documentation for the Java version required by your exact Paper/Minecraft version.

Prüfe für deine konkrete Paper-/Minecraft-Version immer die aktuell erforderliche Java-Version in der Paper-Dokumentation.

```bash
java -version
```

Current Paper documentation maps newer Paper releases to newer Java versions; do not assume an old server's Java requirement applies to a new release.

Die aktuelle Paper-Dokumentation ordnet neueren Paper-Versionen neuere Java-Versionen zu; übertrage daher nicht automatisch die Java-Anforderung eines alten Servers auf eine neue Version.

## 2. Basic Paper server / Einfacher Paper-Server

Example structure / Beispielstruktur:

```text
paper-server/
├── paper.jar
├── eula.txt
├── server.properties
├── config/
├── plugins/
├── logs/
└── start.sh or start.cmd
```

Short official-style start command / Kurzer Startbefehl im Stil der offiziellen Dokumentation:

```bash
java -Xms4G -Xmx4G -jar paper.jar --nogui
```

Do not allocate all host RAM to `-Xmx`; the operating system and JVM also need memory.

Weise `-Xmx` nicht den gesamten Host-RAM zu; Betriebssystem und JVM benötigen ebenfalls Speicher.

## 3. Start scripts / Startskripte

### Linux `start.sh`

```bash
#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
exec java -Xms4G -Xmx4G -jar paper.jar --nogui
```

```bash
chmod +x start.sh
./start.sh
```

### Windows `start.cmd`

```cmd
@echo off
cd /d "%~dp0"
java -Xms4G -Xmx4G -jar paper.jar --nogui
pause
```

## 4. Updating Paper / Paper aktualisieren

Safe high-level workflow / Sicherer Ablauf:

1. Stop the server cleanly with `stop`.
2. Back up worlds, configuration and plugins.
3. Check the Java requirement for the target Paper version.
4. Download the new Paper server JAR from the official PaperMC download source.
5. Replace the old JAR while keeping a backup.
6. Start the server and inspect `logs/latest.log`.

Deutsch:

1. Server sauber mit `stop` beenden.
2. Welten, Konfigurationen und Plugins sichern.
3. Java-Anforderung der Zielversion prüfen.
4. Neue Paper-Server-JAR über die offizielle PaperMC-Quelle laden.
5. Alte JAR ersetzen und Sicherung behalten.
6. Server starten und `logs/latest.log` prüfen.

## 5. Useful Paper/Bukkit console commands / Nützliche Paper-/Bukkit-Konsolenbefehle

| Command | English | Deutsch |
|---|---|---|
| `version` | Show server version information. | Zeigt Server-Versionsinformationen. |
| `version <plugin>` | Show information about a plugin. | Zeigt Informationen über ein Plugin. |
| `plugins` | List loaded plugins. | Listet geladene Plugins auf. |
| `help` | Show registered commands. | Zeigt registrierte Befehle. |
| `stop` | Gracefully stop the server. | Stoppt den Server kontrolliert. |

Avoid relying on reload-style commands for routine production updates; a clean restart is generally easier to reason about when replacing plugins or server JARs.

Verlasse dich bei normalen Produktionsupdates nicht auf Reload-Befehle; ein sauberer Neustart ist beim Austausch von Plugins oder Server-JARs in der Regel nachvollziehbarer.

## 6. Minimal Paper plugin / Minimales Paper-Plugin

Paper supports Bukkit-style plugins using `plugin.yml`. Paper also has Paper-specific plugin mechanisms, but this example deliberately stays compatible with the familiar Bukkit-style layout.

Paper unterstützt Bukkit-artige Plugins mit `plugin.yml`. Paper besitzt zusätzlich Paper-spezifische Plugin-Mechanismen; dieses Beispiel bleibt bewusst beim bekannten Bukkit-Stil.

Structure / Struktur:

```text
hello-paper/
├── build.gradle.kts
├── settings.gradle.kts
└── src/
    └── main/
        ├── java/
        │   └── com/example/hellopaper/HelloPaper.java
        └── resources/
            └── plugin.yml
```

### `plugin.yml`

```yaml
name: HelloPaper
version: '1.0.0'
main: com.example.hellopaper.HelloPaper
api-version: '1.21'
description: Simple Paper example plugin
commands:
  paperhello:
    description: Prints a hello message
    usage: /paperhello
```

### Java example / Java-Beispiel

```java
package com.example.hellopaper;

import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.plugin.java.JavaPlugin;

public final class HelloPaper extends JavaPlugin {
    @Override
    public void onEnable() {
        getLogger().info("HelloPaper enabled");
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (command.getName().equalsIgnoreCase("paperhello")) {
            sender.sendMessage("Hello from Paper!");
            return true;
        }
        return false;
    }
}
```

## 7. Gradle Kotlin DSL example / Gradle-Kotlin-DSL-Beispiel

Paper's current development documentation recommends adding the Paper Maven repository and a `compileOnly` Paper API dependency. Version strings change with releases, so keep the version as a placeholder in reusable docs.

Die aktuelle Paper-Entwicklungsdokumentation empfiehlt das Paper-Maven-Repository und eine `compileOnly`-Abhängigkeit auf die Paper API. Versionsstrings ändern sich je nach Release; deshalb bleibt die Version hier als Platzhalter.

### `settings.gradle.kts`

```kotlin
rootProject.name = "hello-paper"
```

### `build.gradle.kts`

```kotlin
plugins {
    java
}

group = "com.example"
version = "1.0.0"

repositories {
    mavenCentral()
    maven("https://repo.papermc.io/repository/maven-public/")
}

dependencies {
    compileOnly("io.papermc.paper:paper-api:<paper-api-version>")
}

java {
    toolchain.languageVersion.set(JavaLanguageVersion.of(<required-java-version>))
}
```

Build / Bauen:

Linux/macOS:

```bash
./gradlew build
```

Windows:

```cmd
gradlew.bat build
```

Typical output / Typische Ausgabe:

```text
build/libs/hello-paper-1.0.0.jar
```

## 8. Maven alternative / Maven-Alternative

Paper documents Maven as an alternative, though its current project-setup page favors Gradle.

Paper dokumentiert Maven als Alternative, wobei die aktuelle Projekt-Setup-Seite Gradle bevorzugt.

```xml
<repositories>
    <repository>
        <id>papermc</id>
        <url>https://repo.papermc.io/repository/maven-public/</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>io.papermc.paper</groupId>
        <artifactId>paper-api</artifactId>
        <version><paper-api-version></version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

Build / Bauen:

```bash
mvn clean package
```

## 9. Paper configuration / Paper-Konfiguration

Paper has global and per-world configuration in addition to standard Minecraft/Bukkit settings. Exact file locations and option names can change between Paper versions.

Paper besitzt zusätzlich zu den normalen Minecraft-/Bukkit-Einstellungen globale und weltspezifische Konfigurationen. Genaue Dateipfade und Optionsnamen können sich zwischen Paper-Versionen ändern.

Useful files/folders / Nützliche Dateien/Ordner:

```text
server.properties
bukkit.yml
spigot.yml
config/
plugins/
logs/latest.log
```

Before copying an old optimization guide, compare its settings against the documentation for your installed Paper version.

Bevor du eine alte Optimierungsanleitung übernimmst, gleiche deren Einstellungen mit der Dokumentation deiner installierten Paper-Version ab.

## 10. Troubleshooting / Fehlerdiagnose

Linux:

```bash
java -version
ls -lah
ls -lah plugins
tail -n 150 logs/latest.log
```

Windows PowerShell:

```powershell
java -version
Get-ChildItem
Get-ChildItem .\plugins
Get-Content .\logs\latest.log -Tail 150
```

Check / Prüfen:

- Java version matches the exact Paper release / Java-Version passt zur konkreten Paper-Version.
- Plugin supports your Minecraft/Paper version / Plugin unterstützt deine Minecraft-/Paper-Version.
- Memory values leave headroom for the OS / Speicherwerte lassen Reserve für das Betriebssystem.
- Read startup stack traces before changing configs / Start-Stacktraces vollständig lesen, bevor Konfigurationen geändert werden.

## References / Quellen

- Paper getting started: https://docs.papermc.io/paper/getting-started/
- Paper project setup: https://docs.papermc.io/paper/dev/project-setup/
- Paper commands: https://docs.papermc.io/paper/reference/commands/
- Paper system properties: https://docs.papermc.io/paper/reference/system-properties/
