#!/usr/bin/env python3
"""Render example-data.js through the template.

    python3 examples/build-example.py

Writes two files:

  examples/example-field-card.html   the plain example, openable from disk
  docs/index.html                    the same card plus a demo banner and
                                     OpenGraph tags, served by GitHub Pages

The substitution performed here — splice a CARDS array over the placeholder
in reference/field-card-template.html — is the same one the skill performs
when it generates a card for a real person.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / "reference" / "field-card-template.html"
DATA = ROOT / "examples" / "example-data.js"
OUT_EXAMPLE = ROOT / "examples" / "example-field-card.html"
OUT_DOCS = ROOT / "docs" / "index.html"

REPO_URL = "https://github.com/zepingchennie/career-fair-field-card"
PAGES_URL = "https://zepingchennie.github.io/career-fair-field-card/"

PLACEHOLDER = re.compile(r"const CARDS = \[.*?\n\];", re.DOTALL)

BANNER_CSS = """
  .demobar{
    background:var(--accent-soft);
    border-bottom:1px solid var(--line);
    padding:10px 16px;
  }
  .demobar-in{
    max-width:720px;margin:0 auto;
    display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;
    font-family:"IBM Plex Mono",ui-monospace,monospace;
    font-size:11px;line-height:1.5;letter-spacing:.04em;
    color:var(--accent);
  }
  .demobar b{font-weight:600;letter-spacing:.12em;text-transform:uppercase}
  .demobar span{color:var(--ink-2);opacity:.9}
  .demobar a{color:var(--accent);font-weight:600;margin-left:auto;white-space:nowrap}
  @media (max-width:520px){ .demobar a{margin-left:0} }
"""

BANNER_HTML = """
<div class="demobar"><div class="demobar-in">
  <b>Demo</b>
  <span>Invented candidate, invented employers &mdash; this is what the skill generates.</span>
  <a href="{repo}">Make your own &rarr;</a>
</div></div>
""".strip()

META = """
<meta property="og:type" content="website">
<meta property="og:site_name" content="Career Fair Field Card">
<meta property="og:title" content="Career Fair Field Card">
<meta property="og:description" content="Turn your resume and a list of employers into a phone-ready card — pitch, questions and closing script for every booth. Free and open source.">
<meta property="og:url" content="{pages}">
<meta property="og:image" content="{pages}preview.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Career Fair Field Card">
<meta name="twitter:description" content="Turn your resume and a list of employers into a phone-ready card — pitch, questions and closing script for every booth.">
<meta name="twitter:image" content="{pages}preview.png">
<meta name="description" content="Turn your resume and a list of employers into a phone-ready career fair card: pitch, questions and closing script for every booth.">
<link rel="canonical" href="{pages}">
""".strip()


def render(template: str, cards: str) -> str:
    out, count = PLACEHOLDER.subn(lambda _: cards, template, count=1)
    if count != 1:
        raise SystemExit("could not find the CARDS placeholder in the template")
    return out


def main() -> int:
    for path in (TEMPLATE, DATA):
        if not path.exists():
            print(f"missing: {path}", file=sys.stderr)
            return 1

    template = TEMPLATE.read_text(encoding="utf-8")
    data = DATA.read_text(encoding="utf-8")

    # Keep only the CARDS declaration, dropping the data file's header comment.
    cards = data[data.index("const CARDS = ["):].rstrip()
    if not cards.endswith(";"):
        cards += ";"

    # 1. Plain example, openable straight from disk.
    example = render(template, cards).replace(
        "<title>Career Fair Field Card</title>",
        "<title>Career Fair Field Card — Example</title>",
        1,
    )
    OUT_EXAMPLE.write_text(example, encoding="utf-8")
    print(f"wrote {OUT_EXAMPLE.relative_to(ROOT)} ({len(example):,} bytes)")

    # 2. Pages demo: same card, plus social metadata and a banner.
    demo = render(template, cards)
    demo = demo.replace(
        "</style>",
        BANNER_CSS.rstrip() + "\n</style>",
        1,
    )
    demo = demo.replace(
        "<title>Career Fair Field Card</title>",
        META.format(pages=PAGES_URL) + "\n<title>Career Fair Field Card</title>",
        1,
    )
    demo = demo.replace(
        "<body>",
        "<body>\n" + BANNER_HTML.format(repo=REPO_URL),
        1,
    )

    OUT_DOCS.parent.mkdir(parents=True, exist_ok=True)
    OUT_DOCS.write_text(demo, encoding="utf-8")
    print(f"wrote {OUT_DOCS.relative_to(ROOT)} ({len(demo):,} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
