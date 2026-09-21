#!/usr/bin/env python3
"""Render example-data.js through the template into a standalone page.

    python3 examples/build-example.py

Splices the CARDS array from examples/example-data.js over the placeholder
in reference/field-card-template.html and writes examples/example-field-card.html.
The same substitution is what the skill performs when it generates a card.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / "reference" / "field-card-template.html"
DATA = ROOT / "examples" / "example-data.js"
OUT = ROOT / "examples" / "example-field-card.html"

PLACEHOLDER = re.compile(
    r"const CARDS = \[.*?\n\];",
    re.DOTALL,
)


def main() -> int:
    for path in (TEMPLATE, DATA):
        if not path.exists():
            print(f"missing: {path}", file=sys.stderr)
            return 1

    template = TEMPLATE.read_text(encoding="utf-8")
    data = DATA.read_text(encoding="utf-8")

    # Keep only the CARDS declaration from the data file, dropping its header comment.
    start = data.index("const CARDS = [")
    cards = data[start:].rstrip()
    if not cards.endswith(";"):
        cards += ";"

    rendered, count = PLACEHOLDER.subn(lambda _: cards, template, count=1)
    if count != 1:
        print("could not find the CARDS placeholder in the template", file=sys.stderr)
        return 1

    rendered = rendered.replace(
        "<title>Career Fair Field Card</title>",
        "<title>Career Fair Field Card — Example</title>",
        1,
    )

    OUT.write_text(rendered, encoding="utf-8")
    print(f"wrote {OUT.relative_to(ROOT)} ({len(rendered):,} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
