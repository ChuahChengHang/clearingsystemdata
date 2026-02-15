import journalEntry from "./journalData";

export default function Home() {
  const { title, subtitle, date, lead, body, actions } = journalEntry;

  // function emphasizeCapsInMarkdown(md) {
  //   if (!md) return md;
  //   // wrap sequences of 2+ uppercase letters/digits with **...** so markdown bold will apply
  //   return md.replace(/\b([A-Z0-9]{2,}(?:['’\-][A-Z0-9]+)*)\b/g, "**$1**");
  // }

  function parseMarkdown(md) {
    if (!md) return "";
    // handle fenced code blocks first
    md = md.replace(/```([\s\S]*?)```/g, function (_, code) {
      return '<pre><code>' + escapeHtml(code) + '</code></pre>';
    });

    const lines = md.split(/\r?\n/);
    let out = "";
    let inUl = false;
    let inOl = false;

    function closeLists() {
      if (inUl) { out += "</ul>"; inUl = false; }
      if (inOl) { out += "</ol>"; inOl = false; }
    }

    for (let rawLine of lines) {
      let line = rawLine.trim();
      if (!line) { closeLists(); out += ""; continue; }
      // headings
      const h = line.match(/^(#{1,6})\s+(.*)$/);
      if (h) { closeLists(); const level = h[1].length; out += `<h${level}>${processInline(h[2])}</h${level}>`; continue; }

      // unordered list
      if (/^[-*+]\s+/.test(line)) {
        if (!inUl) { closeLists(); out += "<ul>"; inUl = true; }
        out += `<li>${processInline(line.replace(/^[-*+]\s+/, ""))}</li>`;
        continue;
      }

      // ordered list
      if (/^\d+\.\s+/.test(line)) {
        if (!inOl) { closeLists(); out += "<ol>"; inOl = true; }
        out += `<li>${processInline(line.replace(/^\d+\.\s+/, ""))}</li>`;
        continue;
      }

      // paragraph
      closeLists(); out += `<p>${processInline(line)}</p>`;
    }
    closeLists();
    return out;
  }

  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function processInline(text) {
    if (text == null) return "";
    // escape first
    let s = escapeHtml(text);
    // inline code
    s = s.replace(/`([^`]+)`/g, function (_, code) { return '<code>' + escapeHtml(code) + '</code>'; });
    // links [text](url)
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    // bold **text** or __text__ (already safe from emphasize step)
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    // italics *text* or _text_
    s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    s = s.replace(/_([^_]+)_/g, '<em>$1</em>');
    return s;
  }

  return (
    <main className="journal article-wrap">
      <article className="article card">
        <header className="article-header">
          <h1 className="article-title">{title}</h1>
          {journalEntry.image && journalEntry.image.src && (
            <figure className="article-figure">
              <img src={journalEntry.image.src} alt={journalEntry.image.alt || ""} />
              {journalEntry.image.caption && (
                <figcaption dangerouslySetInnerHTML={{ __html: parseMarkdown(journalEntry.image.caption) }} />
              )}
            </figure>
          )}
          {subtitle && <p className="article-subtitle">{subtitle}</p>}
          <div className="byline">{date}</div>
        </header>

        {lead && <p className="lead" dangerouslySetInnerHTML={{ __html: parseMarkdown(lead) }} />}

        <section className="article-body">
          {body && body.map((p, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: parseMarkdown(p) }} />
          ))}

          {actions && actions.length > 0 && (
            <div className="article-actions">
              {/* <h3>Steps To Do:</h3> */}
              {journalEntry.actionsIntro && (
                <div className="actions-intro" dangerouslySetInnerHTML={{ __html: parseMarkdown(journalEntry.actionsIntro) }} />
              )}
              <ul>
                {actions.map((a, i) => {
                  const title = (typeof a === 'string') ? a : (a.title || '');
                  const desc = (typeof a === 'string') ? '' : (a.description || a.desc || '');
                  return (
                    <li key={i}>
                      <div className="action-title" dangerouslySetInnerHTML={{ __html: parseMarkdown(title) }} />
                      {a.image && a.image.src && (
                        <figure className="action-figure">
                          <img src={a.image.src} alt={a.image.alt || ""} />
                          {a.image.caption && <figcaption dangerouslySetInnerHTML={{ __html: parseMarkdown(a.image.caption) }} />}
                        </figure>
                      )}
                      {desc && <div className="action-desc" dangerouslySetInnerHTML={{ __html: parseMarkdown(desc) }} />}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </section>

        <footer className="journal-footer">
          <small>This was tested on macos 26.3, so please do not slime me if it doesn't work for os that are different.</small>
          <br></br>
          <small>Credits to GPT-5 mini which helped me to do the basic template.</small>
          <br></br>
          <small>Licensed under MIT License.</small>
        </footer>
      </article>
    </main>
  );
}
