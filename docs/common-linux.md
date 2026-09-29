# Common Linux Commands / Allgemeine Linux-Befehle

These commands are useful on many Linux distributions. Availability can vary depending on installed packages.

Diese Befehle sind auf vielen Linux-Distributionen nützlich. Die Verfügbarkeit kann je nach installierten Paketen variieren.

## Files and directories / Dateien und Verzeichnisse

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `pwd` | Print the current working directory. | Zeigt das aktuelle Arbeitsverzeichnis an. |
| `ls -lah` | List files, including hidden files, with human-readable sizes. | Listet Dateien inklusive versteckter Dateien mit lesbaren Größen auf. |
| `cd <directory>` | Change to another directory. | Wechselt in ein anderes Verzeichnis. |
| `mkdir -p <path>` | Create a directory tree if it does not exist. | Erstellt einen Verzeichnisbaum, falls er noch nicht existiert. |
| `cp -r <source> <target>` | Copy files or directories recursively. | Kopiert Dateien oder Verzeichnisse rekursiv. |
| `mv <source> <target>` | Move or rename a file or directory. | Verschiebt oder benennt eine Datei bzw. ein Verzeichnis um. |
| `rm -i <file>` | Delete a file after confirmation. | Löscht eine Datei nach Bestätigung. |
| `rm -rI <directory>` ⚠️ | Recursively remove a directory with a safety prompt. | Löscht ein Verzeichnis rekursiv mit Sicherheitsabfrage. |
| `find <path> -name "<pattern>"` | Search for files by name. | Sucht Dateien anhand ihres Namens. |
| `du -sh <path>` | Show total disk usage of a path. | Zeigt den gesamten Speicherverbrauch eines Pfads. |
| `df -h` | Show filesystem free/used space. | Zeigt freien und belegten Speicherplatz der Dateisysteme. |

## Viewing and text processing / Anzeigen und Textverarbeitung

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `cat <file>` | Print a text file to the terminal. | Gibt eine Textdatei im Terminal aus. |
| `less <file>` | View a file page by page. | Zeigt eine Datei seitenweise an. |
| `head -n 20 <file>` | Show the first 20 lines. | Zeigt die ersten 20 Zeilen. |
| `tail -n 20 <file>` | Show the last 20 lines. | Zeigt die letzten 20 Zeilen. |
| `tail -f <logfile>` | Follow new lines written to a log file. | Verfolgt neue Zeilen, die in eine Logdatei geschrieben werden. |
| `grep -Rni "<text>" <path>` | Search recursively for text, showing line numbers. | Sucht rekursiv nach Text und zeigt Zeilennummern an. |
| `sort <file>` | Sort text lines. | Sortiert Textzeilen. |
| `wc -l <file>` | Count lines in a file. | Zählt die Zeilen einer Datei. |

## Processes and system / Prozesse und System

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `ps aux` | Show running processes. | Zeigt laufende Prozesse an. |
| `top` | Interactive process and resource monitor. | Interaktive Anzeige von Prozessen und Ressourcen. |
| `free -h` | Show RAM and swap usage. | Zeigt RAM- und Swap-Nutzung an. |
| `uptime` | Show system uptime and load averages. | Zeigt Laufzeit und Systemlast an. |
| `uname -a` | Show kernel and system information. | Zeigt Kernel- und Systeminformationen an. |
| `hostnamectl` | Show hostname and operating system details on systemd systems. | Zeigt Hostname und Betriebssystemdetails auf systemd-Systemen an. |
| `kill <PID>` | Ask a process to terminate. | Fordert einen Prozess zum Beenden auf. |
| `kill -9 <PID>` ⚠️ | Force-kill a process; use only when normal termination fails. | Erzwingt das Beenden eines Prozesses; nur verwenden, wenn normales Beenden scheitert. |

## Networking / Netzwerk

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `ip addr` | Show network interfaces and IP addresses. | Zeigt Netzwerkschnittstellen und IP-Adressen an. |
| `ip route` | Show the routing table. | Zeigt die Routing-Tabelle an. |
| `ping -c 4 <host>` | Send four ICMP echo requests. | Sendet vier ICMP-Echo-Anfragen. |
| `ss -tulpn` | Show listening TCP/UDP sockets and processes where permitted. | Zeigt lauschende TCP/UDP-Sockets und zugehörige Prozesse, soweit erlaubt. |
| `curl -I <url>` | Fetch HTTP response headers. | Ruft HTTP-Antwort-Header ab. |
| `wget <url>` | Download a file from a URL. | Lädt eine Datei von einer URL herunter. |
| `dig <domain>` | Query DNS records if `dig` is installed. | Fragt DNS-Einträge ab, sofern `dig` installiert ist. |

## Permissions / Berechtigungen

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `id` | Show the current user ID and group memberships. | Zeigt Benutzer-ID und Gruppenmitgliedschaften an. |
| `chmod u+x <file>` | Add execute permission for the file owner. | Fügt dem Dateibesitzer Ausführungsrechte hinzu. |
| `chown <user>:<group> <file>` ⚠️ | Change file owner and group. | Ändert Besitzer und Gruppe einer Datei. |
| `sudo <command>` | Run one command with elevated privileges when allowed. | Führt einen Befehl mit erhöhten Rechten aus, sofern erlaubt. |

## systemd systems / systemd-Systeme

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `systemctl status <service>` | Show service status. | Zeigt den Status eines Dienstes an. |
| `sudo systemctl restart <service>` ⚠️ | Restart a service. | Startet einen Dienst neu. |
| `sudo systemctl enable --now <service>` ⚠️ | Enable a service at boot and start it now. | Aktiviert einen Dienst beim Start und startet ihn sofort. |
| `journalctl -u <service> --since today` | Show today's logs for a service. | Zeigt die heutigen Logs eines Dienstes an. |
| `journalctl -b` | Show logs from the current boot. | Zeigt Logs seit dem aktuellen Systemstart an. |
