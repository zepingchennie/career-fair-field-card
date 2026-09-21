# Career Fair Field Card

A [Claude Skill](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview)
that turns your resume and a list of employers into a phone-ready field card for
a career fair.

You give it a CV and the companies attending. It gives you, for each one: the
words to open with, a 30-second pitch built on your own numbers, a researched
hook that proves you did homework, three questions worth asking, and the exact
sentences to close with. Plus a shared tab for the things that don't change
between booths — the elevator pitch, the no-jargon version, what to say when
they tell you to just apply online, and a follow-up email template.

It renders as a single self-contained HTML page. Add it to your phone's home
screen and it opens like an app.

**[→ Try the live demo](https://zepingchennie.github.io/career-fair-field-card/)**
— a complete generated card for an invented candidate. Open it on your phone;
that's what it's built for.

## Why this exists

Most career fair advice assumes the person at the table can hire you. They
usually can't — they're a recruiter covering a dozen roles, or an alum
volunteering for the night. They're a switchboard.

So this skill optimizes for a different outcome: **a name, an email, and one
reason to be remembered.** Everything it generates serves that. The questions
are chosen to produce useful intelligence, the hook exists to make you
memorable in a way a resume drop isn't, and every close asks for contact
details.

It also tells you when a company is a bad fit, and ranks your booth order so
you hit the ones that matter while you're still sharp and the lines are short.

## Install

**Claude Code / Cowork** — clone into your skills directory:

```bash
git clone https://github.com/zepingchennie/career-fair-field-card.git \
  ~/.claude/skills/career-fair-field-card
```

**claude.ai** — upload `SKILL.md` and the `reference/` folder as a custom skill
in Settings → Capabilities → Skills.

**Any other agent** — `SKILL.md` is just structured markdown instructions. Paste
it as a system prompt or a project instruction and it works.

## Use

Attach your resume and tell it where you're going:

> Here's my CV. I'm going to the fall career fair Thursday — Boeing, Deere,
> Garmin, Epic and Cummins are attending. Make me a field card.

It'll ask for anything it needs (graduation date, internship vs full-time, any
constraints) and then generate the page.

Useful things to mention up front:

- What you're looking for and when you graduate
- Locations you will or won't move to
- Work authorization, if it's a lever either way
- Any hard limits — a compensation floor, sectors you've ruled out

It honors constraints in the ranking and says so in the card, rather than
quietly ignoring them.

## What you get

A single HTML file, no build step, no dependencies beyond a webfont:

- **Bottom tab bar** for switching companies, in the thumb zone
- **Swipe** left and right between companies
- **Section jump bar** that tracks where you are in the current card
- **Note capture** per company — recruiter name, email, what they said — saved
  in your browser so you can write follow-ups from the same phone
- **Light and dark themes**, and type sized for reading at arm's length in a dim hall

See [`examples/`](examples/) for a complete generated card built around a
fictional candidate.

## Repo layout

```
SKILL.md                              the skill itself
reference/
  field-card-template.html            the page engine — fill CARDS, keep the shell
  content-rules.md                    data shape and writing rules
  research-playbook.md                how to find the right org, hook and honest fit
examples/
  example-data.js                     a fictional candidate's filled CARDS array
  example-field-card.html             that data rendered through the template
  build-example.py                    regenerates the rendered pages from the data
docs/
  index.html                          the live demo, served by GitHub Pages
```

`docs/index.html` is generated, not hand-edited. To change the demo, edit
`examples/example-data.js` and re-run `python3 examples/build-example.py`.

## Design notes

Three decisions that make the output better, if you're adapting this:

**Questions carry their rationale.** Each generated question has a one-line note
on why you'd ask it. Under pressure you can't evaluate three questions cold, but
you can pick the one whose purpose you recognize.

**Weak fits are labeled weak.** A company with nothing for you gets marked as a
rehearsal rep or a skip, with a reason. This costs nothing and it makes the
strong recommendations credible.

**The hook is the test of the research.** If a generated hook could apply to any
company in the industry, the research wasn't done. It has to name a specific
org, site, product line, or a live argument in the field.

## Limitations

- Company research quality depends on the model's knowledge and whether web
  search is available. **Verify specific claims** — a site location, a team
  name — before you say them out loud at a booth.
- Notes saved in the page live in that browser only. They don't sync anywhere.
- The generated page is static. If the fair's employer list changes, regenerate.

## Contributing

Useful additions: employer-directory parsers for common platforms, more example
personas across degree levels and fields, and an offline print layout for people
who'd rather carry paper.

## License

MIT — see [LICENSE](LICENSE).
