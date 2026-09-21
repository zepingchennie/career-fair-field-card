# Content rules & data shape

## The data shape

`CARDS` is an array of tabs. Entry 0 is the shared **Start** tab; every entry
after it is one employer.

```js
{
  id:      "deere",          // unique slug — becomes the localStorage key
  chip:    "Deere",          // bottom tab label. SHORT. 10 chars or it truncates.
  title:   "John Deere",     // app bar title, full name
  rank:    "Priority 2",     // badge. "Priority N" / "Read the flag" / "Warm-up only"
  warn:    true,             // optional — badge turns orange. Use for weak fits.
  counted: false,            // Start tab only. Omit on employer tabs.
  sub:     "…",              // HTML. The honest fit assessment. 2–4 sentences.
  facts:   [["Label","Value"]],  // Start tab only
  blocks:  [ … ]
}
```

### Blocks

Every block carries `n` (`"01"`), `short` (jump-bar label, one word), `lab`
(full heading), `secs` (`"~30 sec"`), an optional `note`, and optional
`close:true` for the orange treatment.

| `type` | payload | renders as |
|---|---|---|
| `say` | `lines: ["<p>…", …]` | serif paragraphs — the words to speak |
| `qs` | `items: [[question, why]]` | numbered questions, each with a rationale line |
| `steps` | `items: ["…", …]` | square-bulleted action list |
| `mail` | `text: "…"` | monospace block, newlines preserved |
| `order` | `items: [[name, tag]]` | numbered ranking with right-aligned tags |

`say` and `qs` items are already wrapped in curly quotes by the renderer —
don't add your own. Inside `say` lines, wrap the phrase that must land in
`<em>`; it picks up the accent color.

Escape `&` as `&amp;` in any HTML string.

## The five blocks of an employer tab

Keep this order. It's the order they get used.

**01 Open** · `say` · ~10 sec
Name, program, graduation, and one routing question. Where work authorization
helps, it belongs here. The routing question is the point — it prevents two
minutes spent with someone who staffs a different division.

**02 Pitch** · `say` · ~30 sec
Two or three sentences, under 60 words each. Must contain one quantified claim
from the resume, stated exactly. Must end tied to *this* company.

**03 Hook** · `say` · 1 line
The sentence that proves research happened. Names a specific org, site, product
line, or a live argument in the industry.

**04 Ask** · `qs` · pick 2
Three questions, each with a `why`. At least one establishes timeline.

**05 Close** · `say` + `close:true` · ~20 sec
Ask for the email. Ask for one name inside the target org. Commit to a time.

## The Start tab

Blocks, roughly in this order: the full elevator pitch, a no-jargon version,
an answer to the likeliest hard question, the "just apply online" recovery, the
universal four-move close (`steps`, `close:true`), the follow-up email
(`mail`), the booth order (`order`), and setup instructions (`steps`).

Add a `facts` grid: name, status, availability, work authorization, location
flexibility, and a one-line proof summary. These are the things that get asked
and forgotten.

## Writing rules

**Write words to say, not notes about what to say.** "Ask about their research"
is useless at a booth. Write the sentence.

**Numbers survive loud rooms; adjectives don't.** "Cut it from 40 minutes to 6"
beats "improved it significantly."

**One quantified claim per pitch, stated exactly.** No rounding up, no
smoothing. They have to defend it if an engineer pushes.

**Under 60 words per spoken block.** It has to be glanceable while walking.

**Name the jargon to avoid, don't just say "avoid jargon."** List the actual
words: "Never say PINN, autodiff, or NRMSE to a recruiter."

**Never invent anything.** Every candidate claim traces to the resume. Every
company claim traces to something real. If research is thin, write the hook as
a question rather than an assertion.

**Give bad news with a next move.** "No technical fit — use it as a rehearsal
rep before the ones that count" beats "skip this one."

**Vary the closes.** A soft close for a company being evaluated rather than
pursued is a feature. Don't promise a follow-up email the candidate won't send.

## Common failure modes

| Symptom | Fix |
|---|---|
| Pitch could be any candidate | No quantified claim. Go back to the resume. |
| Hook could be any company | Research not done. Find the specific org or site. |
| Every company is "Priority 1" | Rank honestly. Some are warm-ups. |
| Questions a website could answer | Ask about tradeoffs and timelines, not facts. |
| Close drifts into "thanks so much" | Every close asks for an email. Every one. |
| Tab labels truncate | `chip` is 10 characters, not the legal entity name. |
