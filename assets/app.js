(() => {
  "use strict";

  const icon = window.WikiIcons;
  const hydrateIcons = () => document.querySelectorAll("[data-icon]").forEach(el => { el.innerHTML = icon(el.dataset.icon); });

  const REPO = "Pierreg99/Linux-Windows-Helpful-Commands-DOCS";
  const REPO_URL = `https://github.com/${REPO}`;

  const CATEGORIES = [
    { id: "systems", label: "Operating systems", labelDe: "Betriebssysteme" },
    { id: "dev", label: "Development", labelDe: "Entwicklung" },
    { id: "servers", label: "Game servers", labelDe: "Gameserver" }
  ];

  const DOCS = [
    {
      slug: "windows", path: "docs/windows.md", category: "systems",
      title: "Windows CMD & PowerShell", description: "CMD, PowerShell, networking, services and maintenance.",
      descriptionDe: "CMD, PowerShell, Netzwerk, Dienste und Wartung.",
      keywords: "windows cmd powershell winget network ipconfig service"
    },
    {
      slug: "wsl", path: "docs/wsl.md", category: "systems",
      title: "WSL", description: "Windows Subsystem for Linux, distros, files and networking.",
      descriptionDe: "Windows-Subsystem für Linux, Distributionen, Dateien und Netzwerk.",
      keywords: "wsl windows subsystem linux distro ubuntu integration"
    },
    {
      slug: "common-linux", path: "docs/common-linux.md", category: "systems",
      title: "Common Linux", description: "Files, processes, networking, permissions and systemd.",
      descriptionDe: "Dateien, Prozesse, Netzwerk, Berechtigungen und systemd.",
      keywords: "linux bash files grep find chmod systemctl journalctl"
    },
    {
      slug: "ubuntu-debian", path: "docs/ubuntu-debian.md", category: "systems",
      title: "Ubuntu & Debian", description: "APT, dpkg, services and system maintenance.",
      descriptionDe: "APT, dpkg, Dienste und Systempflege.",
      keywords: "ubuntu debian apt dpkg packages systemctl"
    },
    {
      slug: "linux-mint", path: "docs/linux-mint.md", category: "systems",
      title: "Linux Mint", description: "APT-based administration and Mint helpers.",
      descriptionDe: "APT-basierte Administration und Mint-Helfer.",
      keywords: "linux mint apt mintupdate timeshift"
    },
    {
      slug: "fedora-rhel", path: "docs/fedora-rhel.md", category: "systems",
      title: "Fedora & RHEL", description: "DNF, RPM, SELinux, firewalld and services.",
      descriptionDe: "DNF, RPM, SELinux, firewalld und Dienste.",
      keywords: "fedora rhel redhat dnf rpm selinux firewall-cmd"
    },
    {
      slug: "arch-manjaro", path: "docs/arch-manjaro.md", category: "systems",
      title: "Arch & Manjaro", description: "pacman, package queries, cache and system updates.",
      descriptionDe: "pacman, Paketabfragen, Cache und Systemupdates.",
      keywords: "arch manjaro pacman paccache packages"
    },
    {
      slug: "opensuse", path: "docs/opensuse.md", category: "systems",
      title: "openSUSE", description: "zypper, repositories, services and snapshots.",
      descriptionDe: "zypper, Repositories, Dienste und Snapshots.",
      keywords: "opensuse suse zypper snapper repositories"
    },
    {
      slug: "alpine", path: "docs/alpine.md", category: "systems",
      title: "Alpine Linux", description: "apk, OpenRC and lightweight administration.",
      descriptionDe: "apk, OpenRC und schlanke Administration.",
      keywords: "alpine apk openrc rc-service rc-update"
    },
    {
      slug: "kali", path: "docs/kali.md", category: "systems",
      title: "Kali Linux", description: "Kali commands and common security-tool workflows.",
      descriptionDe: "Kali-Befehle und typische Security-Tool-Workflows.",
      keywords: "kali linux nmap sqlmap john hashcat aircrack security"
    },
    {
      slug: "java-jar", path: "docs/java-jar.md", category: "dev",
      title: "Java & JAR", description: "Runtime, compiler, classpath, JAR and JVM inspection.",
      descriptionDe: "Runtime, Compiler, Classpath, JAR und JVM-Analyse.",
      keywords: "java javac jar jvm classpath jdeps jstack"
    },
    {
      slug: "python-pip", path: "docs/python-pip.md", category: "dev",
      title: "Python & pip", description: "Python execution, virtual environments and packages.",
      descriptionDe: "Python-Ausführung, virtuelle Umgebungen und Pakete.",
      keywords: "python pip venv requirements py packages"
    },
    {
      slug: "package-managers", path: "docs/package-managers.md", category: "dev",
      title: "Package Managers", description: "apt, dnf, pacman, zypper, apk, pkg and winget.",
      descriptionDe: "apt, dnf, pacman, zypper, apk, pkg und winget.",
      keywords: "apt dnf pacman zypper apk pkg termux winget package manager"
    },
    {
      slug: "scripts-sh-cmd", path: "docs/scripts-sh-cmd.md", category: "dev",
      title: "SH, Bash, CMD & BAT", description: "Shell scripts, batch files, variables and control flow.",
      descriptionDe: "Shell-Skripte, Batch-Dateien, Variablen und Kontrollfluss.",
      keywords: "bash sh shell cmd bat batch script chmod source"
    },
    {
      slug: "minecraft-spigot", path: "docs/minecraft-spigot.md", category: "servers",
      title: "Minecraft & Spigot", description: "Server startup, BuildTools, plugins and Maven examples.",
      descriptionDe: "Serverstart, BuildTools, Plugins und Maven-Beispiele.",
      keywords: "minecraft spigot buildtools plugin plugin.yml maven server"
    },
    {
      slug: "paper-paperspigot", path: "docs/paper-paperspigot.md", category: "servers",
      title: "Paper / PaperSpigot", description: "Paper server, plugins, Gradle, Maven and configuration.",
      descriptionDe: "Paper-Server, Plugins, Gradle, Maven und Konfiguration.",
      keywords: "paper paperspigot papermc minecraft plugin gradle maven"
    },
    {
      slug: "fivem", path: "docs/fivem.md", category: "servers",
      title: "FiveM / FXServer", description: "txAdmin, server.cfg, resources, Lua and JavaScript.",
      descriptionDe: "txAdmin, server.cfg, Ressourcen, Lua und JavaScript.",
      keywords: "fivem fxserver txadmin server.cfg fxmanifest lua javascript resource"
    }
  ];

  const cache = new Map();
  const els = {
    body: document.body,
    sidebar: document.getElementById("sidebar"),
    overlay: document.getElementById("sidebar-overlay"),
    nav: document.getElementById("wiki-nav"),
    search: document.getElementById("search-input"),
    searchResults: document.getElementById("search-results"),
    home: document.getElementById("home-view"),
    article: document.getElementById("article-view"),
    articleContent: document.getElementById("article-content"),
    toc: document.getElementById("page-toc"),
    editLink: document.getElementById("edit-link"),
    topicCards: document.getElementById("topic-cards"),
    docCount: document.getElementById("doc-count"),
    commandCount: document.getElementById("command-count"),
    heroDocCount: document.getElementById("hero-doc-count"),
    heroCommandCount: document.getElementById("hero-command-count"),
    toast: document.getElementById("toast"),
    themeButton: document.getElementById("theme-button"),
    languageView: document.getElementById("language-view"),
    languageStatus: document.getElementById("language-status"),
    menuButton: document.getElementById("menu-button")
  };

  let toastTimer = null;
  let currentLanguage = "all";
  let currentCategory = "all";

  const LANGUAGE_UI = {
    en: {
      filterAll: "All guides",
      filterSystems: "Operating systems",
      filterDev: "Development",
      filterServers: "Game servers",
      skip: "Skip to content",
      liveBadge: "Live on GitHub Pages",
      eyebrow: "BILINGUAL · COPYABLE · SEARCHABLE",
      heroTitle: "Commands you can actually use.",
      heroCopy: "Browse Windows, Linux, WSL, Java, Python, package managers, shell scripting, Minecraft/Spigot, Paper and FiveM documentation in one interactive wiki.",
      browse: "Browse wiki",
      searchCommands: "Search commands",
      chipBilingual: "Bilingual",
      chipSearch: " Full-text search",
      chipCopy: " One-click copy",
      chipResponsive: " Mobile ready",
      guides: "Wiki guides",
      snippets: "Command snippets",
      bilingualDocs: "Bilingual docs",
      explore: "Explore by topic",
      sourceNote: "Every guide is sourced from the Markdown documentation in this repository.",
      quickEyebrow: "QUICK START",
      copyCommand: "Copy a command",
      copyHint: "Use the copy button, then replace placeholders before running commands.",
      systemInfo: "System info",
      networking: "Networking",
      wikiHome: " Wiki home",
      editGithub: "Edit on GitHub ",
      onPage: "On this page"
    },
    de: {
      filterAll: "Alle Guides",
      filterSystems: "Betriebssysteme",
      filterDev: "Entwicklung",
      filterServers: "Gameserver",
      skip: "Zum Inhalt springen",
      liveBadge: "Live auf GitHub Pages",
      eyebrow: "ZWEISPRACHIG · KOPIERBAR · DURCHSUCHBAR",
      heroTitle: "Befehle, die du direkt nutzen kannst.",
      heroCopy: "Durchsuche Windows-, Linux-, WSL-, Java-, Python-, Paketmanager-, Shell-, Minecraft/Spigot-, Paper- und FiveM-Dokumentation in einem interaktiven Wiki.",
      browse: "Wiki öffnen",
      searchCommands: "Befehle suchen",
      chipBilingual: "  Zweisprachig",
      chipSearch: " Volltextsuche",
      chipCopy: " Mit einem Klick kopieren",
      chipResponsive: " Für Mobilgeräte",
      guides: "Wiki-Guides",
      snippets: "Befehlsbeispiele",
      bilingualDocs: "Zweisprachige Docs",
      explore: "Nach Thema durchsuchen",
      sourceNote: "Jeder Guide wird direkt aus der Markdown-Dokumentation dieses Repositories geladen.",
      quickEyebrow: "SCHNELLSTART",
      copyCommand: "Befehl kopieren",
      copyHint: "Nutze den Kopierbutton und ersetze Platzhalter, bevor du Befehle ausführst.",
      systemInfo: "Systeminfo",
      networking: "Netzwerk",
      wikiHome: " Wiki-Start",
      editGithub: "Auf GitHub bearbeiten ",
      onPage: "Auf dieser Seite"
    },
    all: {
      filterAll: "All · Alle",
      filterSystems: "Systems · Systeme",
      filterDev: "Development · Entwicklung",
      filterServers: "Game servers · Gameserver",
      skip: "Skip to content / Zum Inhalt",
      liveBadge: "Live on GitHub Pages · Live auf GitHub Pages",
      eyebrow: "BILINGUAL · ZWEISPRACHIG · SEARCHABLE",
      heroTitle: "Commands you can actually use.",
      heroCopy: "Practical Windows, Linux, developer and server commands with English and German explanations in one interactive wiki.",
      browse: "Browse wiki · Wiki öffnen",
      searchCommands: "Search · Suchen",
      chipBilingual: "Deutsch + English",
      chipSearch: " Full-text · Volltext",
      chipCopy: " Copy · Kopieren",
      chipResponsive: " Mobile ready",
      guides: "Wiki guides · Guides",
      snippets: "Command snippets · Beispiele",
      bilingualDocs: "Deutsch + English",
      explore: "Explore by topic · Themen",
      sourceNote: "Every guide comes from the repository Markdown files · Alle Guides stammen aus den Markdown-Dateien.",
      quickEyebrow: "QUICK START · SCHNELLSTART",
      copyCommand: "Copy a command · Befehl kopieren",
      copyHint: "Use the copy button and replace placeholders before running commands · Kopieren und Platzhalter vor dem Ausführen ersetzen.",
      systemInfo: "System info · Systeminfo",
      networking: "Networking · Netzwerk",
      wikiHome: " Wiki home · Start",
      editGithub: "Edit on GitHub · Bearbeiten ",
      onPage: "On this page · Inhalt"
    }
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function stripHtml(value) {
    const el = document.createElement("div");
    el.innerHTML = value;
    return el.textContent || "";
  }

  function slugify(value) {
    return stripHtml(value)
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section";
  }

  function renderInline(source) {
    const codeTokens = [];
    let value = String(source).replace(/`([^`\n]+)`/g, (_, code) => {
      const token = `@@INLINE_${codeTokens.length}@@`;
      codeTokens.push(code);
      return token;
    });

    value = escapeHtml(value);
    value = value.replace(/⚠️?/g, `<span class="warning-symbol" role="img" aria-label="${currentLanguage === "de" ? "Warnung" : "Warning"}">${icon("warning")}</span>`);
    value = value.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    value = value.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");

    value = value.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\.\.\/[^)\s]+|\.\/[^)\s]+|docs\/[^)\s]+)\)/g, (_, label, url) => {
      const safeUrl = url.replace(/&amp;/g, "&");
      const external = /^https?:\/\//i.test(safeUrl);
      return `<a href="${escapeHtml(safeUrl)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${label}</a>`;
    });

    codeTokens.forEach((code, index) => {
      value = value.replace(
        `@@INLINE_${index}@@`,
        `<code class="inline-copy" tabindex="0" role="button" title="Click to copy">${escapeHtml(code)}</code>`
      );
    });

    return value;
  }

  function splitTableRow(line) {
    let value = line.trim();
    if (value.startsWith("|")) value = value.slice(1);
    if (value.endsWith("|")) value = value.slice(0, -1);
    return value.split("|").map(cell => cell.trim());
  }

  function isTableDelimiter(line) {
    if (!line || !line.includes("-")) return false;
    const cells = splitTableRow(line);
    return cells.length > 0 && cells.every(cell => /^:?-{3,}:?$/.test(cell));
  }

  function tableClass(header) {
    const value = stripHtml(renderInline(header)).toLowerCase();
    if (value.includes("english")) return "col-en";
    if (value.includes("deutsch") || value.includes("german")) return "col-de";
    return "";
  }

  function renderTable(lines, start) {
    const headers = splitTableRow(lines[start]);
    const classes = headers.map(tableClass);
    const rows = [];
    let i = start + 2;

    while (i < lines.length && lines[i].trim() && lines[i].includes("|")) {
      rows.push(splitTableRow(lines[i]));
      i += 1;
    }

    const head = headers.map((cell, idx) =>
      `<th class="${classes[idx] || ""}">${renderInline(cell)}</th>`
    ).join("");

    const body = rows.map(row => {
      const cells = headers.map((_, idx) =>
        `<td class="${classes[idx] || ""}">${renderInline(row[idx] || "")}</td>`
      ).join("");
      return `<tr>${cells}</tr>`;
    }).join("");

    return {
      html: `<div class="table-wrap"><table class="wiki-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`,
      next: i
    };
  }

  function renderMarkdown(markdown) {
    const blocks = [];
    let source = String(markdown).replace(/\r\n?/g, "\n");

    source = source.replace(/```([^\n]*)\n([\s\S]*?)```/g, (_, lang, code) => {
      const id = blocks.length;
      blocks.push({ lang: lang.trim(), code: code.replace(/\n$/, "") });
      return `\n@@BLOCK_${id}@@\n`;
    });

    const lines = source.split("\n");
    const html = [];
    let i = 0;

    const isSpecial = (line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return true;
      if (/^@@BLOCK_\d+@@$/.test(trimmed)) return true;
      if (/^#{1,6}\s+/.test(trimmed)) return true;
      if (/^>\s?/.test(trimmed)) return true;
      if (/^[-*+]\s+/.test(trimmed)) return true;
      if (/^\d+\.\s+/.test(trimmed)) return true;
      if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) return true;
      if (line.includes("|") && isTableDelimiter(lines[index + 1])) return true;
      return false;
    };

    while (i < lines.length) {
      const raw = lines[i];
      const line = raw.trim();

      if (!line) {
        i += 1;
        continue;
      }

      const blockMatch = line.match(/^@@BLOCK_(\d+)@@$/);
      if (blockMatch) {
        const block = blocks[Number(blockMatch[1])];
        const label = block.lang || "text";
        html.push(
          `<div class="code-shell"><div class="code-meta">${escapeHtml(label)}</div><pre><code>${escapeHtml(block.code)}</code></pre><button class="copy-btn" type="button">Copy</button></div>`
        );
        i += 1;
        continue;
      }

      const heading = line.match(/^(#{1,6})\s+(.+)$/);
      if (heading) {
        const level = heading[1].length;
        html.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
        i += 1;
        continue;
      }

      if (line.includes("|") && isTableDelimiter(lines[i + 1])) {
        const rendered = renderTable(lines, i);
        html.push(rendered.html);
        i = rendered.next;
        continue;
      }

      if (/^>\s?/.test(line)) {
        const quote = [];
        while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
          quote.push(lines[i].trim().replace(/^>\s?/, ""));
          i += 1;
        }
        html.push(`<blockquote>${renderInline(quote.join(" "))}</blockquote>`);
        continue;
      }

      if (/^[-*+]\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^[-*+]\s+/.test(lines[i].trim())) {
          items.push(lines[i].trim().replace(/^[-*+]\s+/, ""));
          i += 1;
        }
        html.push(`<ul>${items.map(item => `<li>${renderInline(item)}</li>`).join("")}</ul>`);
        continue;
      }

      if (/^\d+\.\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
          items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
          i += 1;
        }
        html.push(`<ol>${items.map(item => `<li>${renderInline(item)}</li>`).join("")}</ol>`);
        continue;
      }

      if (/^(-{3,}|\*{3,}|_{3,})$/.test(line)) {
        html.push("<hr>");
        i += 1;
        continue;
      }

      const paragraph = [line];
      i += 1;
      while (i < lines.length && !isSpecial(lines[i], i)) {
        paragraph.push(lines[i].trim());
        i += 1;
      }
      html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    }

    return html.join("\n");
  }

  function cleanMarkdown(markdown) {
    return String(markdown)
      .replace(/```[^\n]*\n([\s\S]*?)```/g, " $1 ")
      .replace(/[#>*_|\[\]()]/g, " ")
      .replace(/`/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function commandCount(markdown) {
    const fenced = [...String(markdown).matchAll(/```[^\n]*\n[\s\S]*?```/g)].length;
    const inline = [...String(markdown).matchAll(/`[^`\n]+`/g)].length;
    return fenced + inline;
  }

  async function getDoc(doc) {
    if (cache.has(doc.slug)) return cache.get(doc.slug);
    const response = await fetch(`./${doc.path}`, { cache: "no-cache" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    cache.set(doc.slug, markdown);
    return markdown;
  }

  function buildNavigation() {
    els.nav.innerHTML = CATEGORIES.map(category => {
      const docs = DOCS.filter(doc => doc.category === category.id);
      return `
        <section class="nav-group">
          <div class="nav-label">${escapeHtml(currentLanguage === "de" ? category.labelDe : category.label)}</div>
          ${docs.map(doc => `
            <button class="nav-link" type="button" data-doc="${doc.slug}">
              <span class="nav-icon">${icon(doc.slug)}</span>
              <span>${escapeHtml(doc.title)}</span>
            </button>
          `).join("")}
        </section>
      `;
    }).join("");
  }

  function buildTopicCards() {
    els.topicCards.innerHTML = DOCS.filter(doc => currentCategory === "all" || doc.category === currentCategory).map(doc => `
      <button class="topic-card" type="button" data-doc="${doc.slug}" data-tone="${doc.category}">
        <span class="topic-card-head">
          <span class="topic-icon">${icon(doc.slug)}</span>
          <strong>${escapeHtml(doc.title)}</strong>
        </span>
        <p>${currentLanguage === "de" ? escapeHtml(doc.descriptionDe) : escapeHtml(doc.description)}${currentLanguage === "all" ? `<span class="translation">${escapeHtml(doc.descriptionDe)}</span>` : ""}</p>
        <small>${currentLanguage === "de" ? "Guide öffnen" : "Open guide"} ${icon("arrow")}</small>
      </button>
    `).join("");
  }

  function setActiveNav(slug) {
    document.querySelectorAll(".nav-link").forEach(button => {
      button.classList.toggle("active", button.dataset.doc === slug);
      if (button.dataset.doc === slug) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
  }

  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
    els.overlay.hidden = true;
    els.menuButton.setAttribute("aria-expanded", "false");
    els.menuButton.setAttribute("aria-label", "Open navigation");
  }

  function openDoc(slug) {
    if (!DOCS.some(doc => doc.slug === slug)) return;
    closeSidebar();
    if (location.hash.slice(1) === slug) {
      loadRoute();
    } else {
      location.hash = slug;
    }
  }

  function goHome() {
    closeSidebar();
    if (location.hash.slice(1) === "home" || !location.hash) {
      renderHome();
    } else {
      location.hash = "home";
    }
  }

  function renderHome() {
    els.article.hidden = true;
    els.home.hidden = false;
    setActiveNav("");
    document.title = "Command Wiki — Linux & Windows Helpful Commands";
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function buildToc() {
    const headings = [...els.articleContent.querySelectorAll("h2, h3")];
    const used = new Set();

    headings.forEach(heading => {
      let id = slugify(heading.textContent);
      let unique = id;
      let index = 2;
      while (used.has(unique)) {
        unique = `${id}-${index++}`;
      }
      used.add(unique);
      heading.id = unique;
    });

    els.toc.innerHTML = headings.map(heading => `
      <a class="toc-link level-${heading.tagName === "H3" ? "3" : "2"}" href="#"
         data-heading="${escapeHtml(heading.id)}">${escapeHtml(heading.textContent)}</a>
    `).join("") || '<span class="toc-link">No sections</span>';
  }

  async function loadDocument(doc) {
    els.home.hidden = true;
    els.article.hidden = false;
    setActiveNav(doc.slug);
    document.title = `${doc.title} — Command Wiki`;
    els.editLink.href = `${REPO_URL}/edit/main/${doc.path}`;
    els.articleContent.innerHTML = '<div class="article-loading">Loading wiki page…</div>';
    els.toc.innerHTML = "";
    window.scrollTo({ top: 0, behavior: "auto" });

    try {
      const markdown = await getDoc(doc);
      els.articleContent.innerHTML = renderMarkdown(markdown);
      buildToc();
      refreshCopyButtons();
    } catch (error) {
      els.articleContent.innerHTML = `
        <div class="article-error">
          <h2>Could not load this wiki page</h2>
          <p>The Markdown file could not be fetched. Open the repository version instead.</p>
          <p><a href="${REPO_URL}/blob/main/${doc.path}" target="_blank" rel="noopener noreferrer">Open ${escapeHtml(doc.path)} on GitHub </a></p>
        </div>
      `;
    }
  }

  function loadRoute() {
    const slug = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (!slug || slug === "home") {
      renderHome();
      return;
    }
    const doc = DOCS.find(item => item.slug === slug);
    if (doc) {
      loadDocument(doc);
    } else {
      renderHome();
    }
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    els.toast.textContent = message;
    els.toast.classList.add("show");
    toastTimer = setTimeout(() => els.toast.classList.remove("show"), 1500);
  }

  async function copyText(text, button) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const area = document.createElement("textarea");
        area.value = text;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
      }

      if (button && button.classList.contains("copy-btn")) {
        button.innerHTML = icon("check") + `<span>${currentLanguage === "de" ? "Kopiert" : "Copied"}</span>`;
        button.classList.add("copied");
        setTimeout(() => {
          refreshCopyButtons();
          button.classList.remove("copied");
        }, 1200);
      }
      showToast("Copied to clipboard");
    } catch {
      showToast("Copy failed — select the command manually");
    }
  }

  function renderSearchResults(query) {
    const value = query.trim().toLowerCase();
    if (!value) {
      els.searchResults.hidden = true;
      els.searchResults.innerHTML = "";
      return;
    }

    const tokens = value.split(/\s+/).filter(Boolean);
    const matches = DOCS.map(doc => {
      const markdown = cache.get(doc.slug) || "";
      const plain = cleanMarkdown(markdown);
      const haystack = `${doc.title} ${doc.description} ${doc.descriptionDe} ${doc.keywords} ${plain}`.toLowerCase();
      const matched = tokens.every(token => haystack.includes(token));
      if (!matched) return null;

      const firstToken = tokens[0];
      const index = haystack.indexOf(firstToken);
      let snippet = doc.description;
      if (markdown && index >= 0) {
        const plainLower = plain.toLowerCase();
        const contentIndex = plainLower.indexOf(firstToken);
        if (contentIndex >= 0) {
          const start = Math.max(0, contentIndex - 55);
          const end = Math.min(plain.length, contentIndex + firstToken.length + 90);
          snippet = `${start > 0 ? "…" : ""}${plain.slice(start, end)}${end < plain.length ? "…" : ""}`;
        }
      }

      const titleScore = doc.title.toLowerCase().includes(value) ? 3 : 0;
      const keywordScore = doc.keywords.toLowerCase().includes(firstToken) ? 2 : 0;
      return { doc, snippet, score: titleScore + keywordScore };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 10);

    els.searchResults.hidden = false;
    els.searchResults.innerHTML = matches.length
      ? matches.map(({ doc, snippet }) => `
          <button type="button" class="search-result" data-doc="${doc.slug}">
            <strong>${escapeHtml(doc.title)}</strong>
            <span>${escapeHtml(snippet)}</span>
          </button>
        `).join("")
      : '<div class="search-empty">No matching wiki pages found.</div>';
  }

  async function buildSearchIndex() {
    const results = await Promise.allSettled(DOCS.map(async doc => {
      const markdown = await getDoc(doc);
      return commandCount(markdown);
    }));

    const total = results.reduce((sum, result) => sum + (result.status === "fulfilled" ? result.value : 0), 0);
    els.commandCount.textContent = `${total} copyable snippets`;
    els.heroCommandCount.textContent = total.toLocaleString();
  }

  function applyTheme(theme) {
    if (!["auto", "light", "dark"].includes(theme)) theme = "auto";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("command-wiki-theme", theme);
    const labels = { auto: "Auto theme", light: "Light theme", dark: "Dark theme" };
    els.themeButton.innerHTML = icon(theme);
    els.themeButton.title = `${labels[theme]} — click to change`;
    els.themeButton.setAttribute("aria-label", els.themeButton.title);
  }

  function cycleTheme() {
    const current = document.documentElement.dataset.theme || "auto";
    const next = current === "auto" ? "light" : current === "light" ? "dark" : "auto";
    applyTheme(next);
  }

  function refreshCopyButtons() {
    document.querySelectorAll(".copy-btn").forEach(button => {
      const label = currentLanguage === "de" ? "Kopieren" : "Copy";
      button.innerHTML = icon("copy") + `<span>${label}</span>`;
      button.setAttribute("aria-label", label);
    });
  }

  function focusSearch() {
    if (window.matchMedia("(max-width: 900px)").matches) {
      document.body.classList.add("sidebar-open");
      els.overlay.hidden = false;
      els.menuButton.setAttribute("aria-expanded", "true");
      els.menuButton.setAttribute("aria-label", "Close navigation");
    }
    els.search.focus();
  }

  function applyContentLanguage(lang, announce = true) {
    const next = ["all", "en", "de"].includes(lang) ? lang : "all";
    currentLanguage = next;
    document.body.dataset.contentLang = next;
    document.documentElement.lang = next === "de" ? "de" : "en";
    localStorage.setItem("command-wiki-language-view", next);

    if (els.languageView) els.languageView.value = next;

    const strings = LANGUAGE_UI[next] || LANGUAGE_UI.all;
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      if (strings[key]) element.textContent = strings[key];
    });

    if (els.search) {
      els.search.placeholder = next === "de" ? "Befehle suchen…" : next === "en" ? "Search commands…" : "Search / Suchen…";
      els.search.setAttribute("aria-label", next === "de" ? "Command-Wiki durchsuchen" : "Search the command wiki");
    }

    if (els.sidebar) {
      els.sidebar.setAttribute("aria-label", next === "de" ? "Wiki-Navigation" : "Wiki navigation");
    }

    refreshCopyButtons();
    buildNavigation();
    buildTopicCards();
    setActiveNav(location.hash.slice(1));


    if (announce && els.languageStatus) {
      els.languageStatus.textContent =
        next === "de" ? "Deutsche Ansicht aktiviert" :
        next === "en" ? "English view enabled" :
        "German and English view enabled";
    }
  }

  document.addEventListener("click", event => {
    const filter = event.target.closest("[data-category]");
    if (filter) {
      currentCategory = filter.dataset.category;
      document.querySelectorAll("[data-category]").forEach(button => {
        const active = button === filter;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      buildTopicCards();
      return;
    }
    const docTarget = event.target.closest("[data-doc]");
    if (docTarget) {
      openDoc(docTarget.dataset.doc);
      return;
    }

    const copyButton = event.target.closest(".copy-btn");
    if (copyButton) {
      const code = copyButton.closest(".code-shell")?.querySelector("code");
      if (code) copyText(code.textContent, copyButton);
      return;
    }

    const inline = event.target.closest("code.inline-copy");
    if (inline) {
      copyText(inline.textContent);
      return;
    }

    const tocLink = event.target.closest("[data-heading]");
    if (tocLink) {
      event.preventDefault();
      document.getElementById(tocLink.dataset.heading)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
      event.preventDefault();
      focusSearch();
    }

    if (event.key === "Escape") {
      closeSidebar();
      els.search.blur();
      els.searchResults.hidden = true;
    }

    if ((event.key === "Enter" || event.key === " ") && document.activeElement?.matches("code.inline-copy")) {
      event.preventDefault();
      copyText(document.activeElement.textContent);
    }
  });

  els.search.addEventListener("input", () => renderSearchResults(els.search.value));
  els.search.addEventListener("focus", () => {
    if (els.search.value.trim()) renderSearchResults(els.search.value);
  });

  els.menuButton.addEventListener("click", () => {
    const open = !document.body.classList.contains("sidebar-open");
    document.body.classList.toggle("sidebar-open", open);
    els.overlay.hidden = !open;
    els.menuButton.setAttribute("aria-expanded", String(open));
    els.menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  els.overlay.addEventListener("click", closeSidebar);

  document.getElementById("home-button").addEventListener("click", goHome);
  document.getElementById("article-home-button").addEventListener("click", goHome);
  document.getElementById("browse-button").addEventListener("click", () => openDoc(DOCS[0].slug));
  document.getElementById("focus-search-button").addEventListener("click", focusSearch);

  els.themeButton.addEventListener("click", cycleTheme);
  if (els.languageView) {
    els.languageView.addEventListener("change", () => applyContentLanguage(els.languageView.value));
  }

  window.addEventListener("hashchange", loadRoute);

  hydrateIcons();

  els.docCount.textContent = `${DOCS.length} guides`;
  els.heroDocCount.textContent = DOCS.length.toString();

  applyTheme(localStorage.getItem("command-wiki-theme") || "auto");
  applyContentLanguage(localStorage.getItem("command-wiki-language-view") || "all", false);
  loadRoute();

  buildSearchIndex().catch(() => {
    els.commandCount.textContent = "Search ready";
    els.heroCommandCount.textContent = "—";
  });
})();
