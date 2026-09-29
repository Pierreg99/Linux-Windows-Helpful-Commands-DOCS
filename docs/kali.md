# Kali Linux Commands / Kali-Linux-Befehle

Kali Linux is a Debian-based distribution focused on security auditing and penetration testing. Most commands come from the underlying Debian/Ubuntu ecosystem; the section below highlights tools that are pre-installed or commonly used on Kali.

Kali Linux ist eine Debian-basierte Distribution mit Schwerpunkt auf Sicherheits-Audits und Penetrationstests. Die meisten Befehle stammen aus dem Debian-/Ubuntu-Ökosystem; der folgende Abschnitt hebt Werkzeuge hervor, die auf Kali vorinstalliert sind oder häufig genutzt werden.

> ⚠️ Run Kali security tools **only** against systems you own or are authorized to test. Unauthorized use is illegal.
> ⚠️ Nutze Kali-Sicherheitswerkzeuge **nur** gegen Systeme, deren Eigentümer du bist oder für die du eine ausdrückliche Autorisierung hast. Unbefugte Nutzung ist illegal.

## System information and base packages / Systeminformation und Basispakete

Kali uses APT just like Debian/Ubuntu.

Kali verwendet APT wie Debian/Ubuntu.

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `cat /etc/os-release` | Show OS identification information including the Kali release name. | Zeigt Betriebssystem-Identifikation einschließlich des Kali-Release-Namens an. |
| `sudo apt update` | Refresh the package index from configured repositories. | Aktualisiert den Paketindex aus den konfigurierten Repositories. |
| `sudo apt install <package>` ⚠️ | Install a Kali tool or update an existing one. | Installiert ein Kali-Werkzeug oder aktualisiert ein vorhandenes. |
| `sudo apt remove <package>` ⚠️ | Remove a tool but keep configuration when possible. | Entfernt ein Werkzeug, behält die Konfiguration wenn möglich. |
| `apt list --installed \| grep -i <tool>` | Check whether a specific security tool is installed. | Prüft, ob ein bestimmtes Sicherheitswerkzeug installiert ist. |
| `dpkg -L <package>` | Show all files installed by a given package. | Zeigt alle von einem Paket installierten Dateien an. |

## Network discovery and port scanning / Netzwerk-Erkennung und Port-Scans

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `nmap -sV <target>` | Probe open TCP ports and try to identify service versions. | Untersucht offene TCP-Ports und versucht, Dienstversionen zu erkennen. |
| `nmap -p- -T4 <target>` | Scan all 65535 TCP ports with an aggressive timing template. | Scannt alle 65535 TCP-Ports mit aggressivem Timing-Profil. |
| `nmap -A <target>` | Enable OS detection, version detection, scripts and traceroute. | Aktiviert OS-Erkennung, Versionserkennung, Skripte und Traceroute. |
| `masscan -p1-65535 <target> --rate=1000` ⚠️ | Very fast SYN scanner; requires root and careful rate limiting. | Sehr schneller SYN-Scanner; benötigt Root und sorgfältiges Rate-Limit. |
| `netdiscover -r <cidr>` | Active ARP-based discovery on a local subnet. | Aktive ARP-basierte Erkennung im lokalen Subnetz. |
| `arp-scan --localnet` | Send ARP probes to enumerate hosts on the local network. | Sendet ARP-Anfragen, um Hosts im lokalen Netz aufzulisten. |

## Web application testing / Webanwendungs-Tests

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `nikto -h <url>` | Run a web server vulnerability scanner against a target. | Führt einen Schwachstellen-Scan gegen einen Webserver durch. |
| `gobuster dir -u <url> -w <wordlist>` | Brute-force directories and files on a web server. | Brute-Force von Verzeichnissen und Dateien auf einem Webserver. |
| `dirb <url> <wordlist>` | Legacy directory/file brute-forcer with default default wordlists. | Älterer Verzeichnis-/Datei-Brute-Forcer mit Standard-Wortlisten. |
| `wfuzz -c -z file,<wordlist> --hc 404 <url>/FUZZ` | Fuzz URLs, headers or POST data; hide 404 responses. | Fuzzt URLs, Header oder POST-Daten; blendet 404-Antworten aus. |
| `sqlmap -u "<url>?id=1"` ⚠️ | Detect and exploit SQL injection vulnerabilities automatically. | Erkennt und exploitiert SQL-Injection-Schwachstellen automatisch. |
| `wpscan --url <url> --enumerate u,p,t` ⚠️ | Enumerate WordPress users, plugins and themes on a target site. | Listet WordPress-Benutzer, Plugins und Themes einer Zielseite auf. |
| `burpsuite` | Launch the Burp Suite GUI from the terminal. | Startet die Burp-Suite-GUI vom Terminal. |

## Password attacks / Passwort-Angriffe

> ⚠️ Only use against credentials you own or have explicit written authorization to test.
> ⚠️ Nur gegen Zugangsdaten verwenden, deren Eigentümer du bist oder für die du eine schriftliche Autorisierung hast.

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `hydra -l <user> -P <wordlist> <target> <service>` ⚠️ | Online brute-force login attempts for many protocols (SSH, FTP, HTTP, …). | Online-Brute-Force für viele Protokolle (SSH, FTP, HTTP, …). |
| `john --wordlist=<wordlist> <hashfile>` ⚠️ | Offline password cracker for many hash formats. | Offline-Passwort-Cracker für viele Hash-Formate. |
| `hashcat -m <mode> <hashfile> <wordlist>` ⚠️ | GPU-accelerated offline password cracker; `-m` selects hash mode. | GPU-beschleunigter Offline-Cracker; `-m` wählt den Hash-Modus. |
| `cewl <url> -w <outfile>` | Crawl a website to build a custom wordlist. | Durchsucht eine Website, um eine benutzerdefinierte Wortliste zu erstellen. |

## Wireless auditing / Wireless-Audits

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `airmon-ng start <interface>` ⚠️ | Put a wireless interface into monitor mode. | Versetzt eine Wireless-Schnittstelle in den Monitor-Modus. |
| `airodump-ng <mon-interface>` ⚠️ | Capture wireless traffic and list nearby access points and clients. | Erfasst Wireless-Verkehr und listet Access Points und Clients. |
| `aireplay-ng -0 5 -a <bssid> <mon-interface>` ⚠️ | Send deauthentication frames to capture WPA handshakes. | Sendet Deauthentifizierungs-Frames, um WPA-Handshakes zu erfassen. |
| `aircrack-ng -w <wordlist> <capture.cap>` ⚠️ | Crack captured WPA/WEP handshakes against a wordlist. | Knackt erfasste WPA/WEP-Handshakes gegen eine Wortliste. |

## Packet capture and analysis / Paketerfassung und -analyse

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `tcpdump -i <iface> -w <file.pcap>` ⚠️ | Capture packets on an interface into a pcap file. | Erfasst Pakete auf einer Schnittstelle in eine pcap-Datei. |
| `tcpdump -i <iface> port <n>` ⚠️ | Live capture filtered by port. | Live-Erfassung gefiltert nach Port. |
| `tshark -i <iface> -Y "<filter>"` | Live capture with Wireshark-style display filters. | Live-Erfassung mit Wireshark-ähnlichen Anzeigefiltern. |
| `wireshark` | Launch the Wireshark GUI for interactive packet analysis. | Startet die Wireshark-GUI für interaktive Paketanalyse. |

## Exploitation frameworks / Exploit-Frameworks

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `msfconsole` ⚠️ | Launch the Metasploit Framework interactive console. | Startet die interaktive Konsole des Metasploit-Frameworks. |
| `searchsploit <term>` | Search the local copy of Exploit-DB for known exploits and PoCs. | Durchsucht die lokale Exploit-DB nach bekannten Exploits und PoCs. |
| `msfvenom -p <payload> LHOST=<ip> LPORT=<port> -f <format> -o <out>` ⚠️ | Generate a payload binary, script or shellcode. | Erzeugt eine Payload als Binärdatei, Skript oder Shellcode. |

## OSINT and reconnaissance / OSINT und Aufklärung

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `theHarvester -d <domain> -b <source>` | Harvest emails, subdomains and hosts from public sources. | Sammelt E-Mails, Subdomains und Hosts aus öffentlichen Quellen. |
| `recon-ng` | Launch the recon-ng interactive OSINT framework. | Startet das interaktive OSINT-Framework recon-ng. |
| `maltego` | Launch the Maltego GUI for link analysis and OSINT. | Startet die Maltego-GUI für Link-Analyse und OSINT. |

## Forensics and binary analysis / Forensik und Binär-Analyse

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `autopsy` | Launch the Autopsy GUI for disk and file forensics. | Startet die Autopsy-GUI für Datenträger- und Datei-Forensik. |
| `binwalk -e <firmware>` | Scan and extract embedded files from firmware images. | Scannt und extrahiert eingebettete Dateien aus Firmware-Images. |
| `foremost -i <image> -o <outdir>` ⚠️ | Carve files out of a raw disk image by header/footer. | Stellt Dateien aus einem Raw-Datenträger-Image anhand von Headern/Footern wieder her. |
| `volatility -f <memory.img> <plugin>` ⚠️ | Analyze a memory dump with the Volatility framework. | Analysiert einen Speicherabzug mit dem Volatility-Framework. |
| `yara -r <rules.yar> <target>` | Scan files or directories against YARA rules. | Scannt Dateien oder Verzeichnisse gegen YARA-Regeln. |

## Updating the Kali toolset / Kali-Werkzeuge aktualisieren

| Command | English description | Deutsche Beschreibung |
|---|---|---|
| `sudo apt update && sudo apt full-upgrade -y` ⚠️ | Refresh the package index and apply all available upgrades. | Aktualisiert den Paketindex und wendet alle verfügbaren Aktualisierungen an. |
| `sudo apt install kali-tools-top10` ⚠️ | Install the ten most-used Kali tools as a quick starter set. | Installiert die zehn meistgenutzten Kali-Werkzeuge als schnellen Einstieg. |
| `sudo apt install kali-linux-everything` ⚠️ | Install every metapackage for the full Kali toolset (large). | Installiert jedes Metapaket für den vollständigen Kali-Werkzeugkasten (groß). |