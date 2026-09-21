---
name: career-fair-field-card
description: Generate a phone-ready career fair field card from a resume or CV and a list of target employers — a per-company elevator pitch, questions to ask, and closing script, rendered as an app-style page you can read between conversations. Use when preparing for a career fair, a recruiting event, a networking night, or any day of back-to-back employer conversations.
---

# Career Fair Field Card

Turn a resume and a list of employers into something usable while standing in a
loud room with a folder in one hand.

The output is a single self-contained HTML page: one tab per company, each with
the words to open with, the pitch, a researched hook, the questions to ask, and
the close. Plus a shared "Start" tab with the material that doesn't change
between booths.

## The premise that shapes everything

**The person at the table usually cannot hire anyone.** They are a switchboard —
often a recruiter covering a dozen roles, sometimes an alum volunteering for the
night. Advice that assumes otherwise ("sell yourself!", "show enthusiasm!")
produces conversations that feel fine and go nowhere.

So every card is built toward one outcome: **a name, an email, and one reason to
be remembered.** Not a job, not an interview on the spot. If the generated
content doesn't serve that, cut it.

## Inputs

Ask for whatever is missing. Required:

- **Resume or CV** — a file, pasted text, or a link
- **Target employers** — a list, a screenshot of the fair's employer directory,
  or an exported list from Handshake or a similar platform

Useful if offered, but never block on it:

- Date and hours of the fair, and which day/session each employer attends
- What they're looking for (internship, new grad, full-time) and when they graduate
- Work authorization, if it's a lever (citizenship for defense, visa sponsorship needs)
- Locations they will or won't move to
- Any hard constraints — compensation floor, sectors they've ruled out

If the user gives constraints, **honor them in the ranking and say so out loud in
the card.** A user who said "no startups" and gets a startup ranked first stops
trusting the whole document.

## Step 1 — Read the resume for ammunition, not a summary

Pull out, verbatim where possible:

- **Quantified claims.** "150× faster than direct simulation", "cut onboarding
  time 40%", "managed a $12k budget", "grew the chapter from 30 to 110 members."
  These are the load-bearing content. A pitch without a number is forgettable.
- **Third-party validation.** Work adopted by someone, published, shipped,
  awarded, funded, or used in production. "Someone else chose to use this" beats
  any adjective.
- **Named organizations.** Previous employers, labs, brands. They function as
  credibility shorthand in a ten-second exchange.
- **The one-line identity.** Degree, graduation date, and the two or three words
  that say what kind of problem they solve.

If the resume has no quantified claims at all, say so and ask for numbers before
generating. This is the single highest-leverage fix available, and it takes the
user two minutes.

## Step 2 — Research each employer for the door, not the brochure

Generic company facts are worthless — the candidate already knows the company
makes airplanes. Research until you can answer these four:

1. **Which org inside the company actually does this work?** Large employers are
   federations. The named research center, the specific division, the product
   line. Naming it is the strongest signal available that the candidate is not a
   walk-up.
2. **What is the booth actually staffed for?** Often a specific rotational
   program or a single early-career pipeline that may not fit the candidate. If
   there's a mismatch between the posting and the candidate, the card should
   name it and redirect rather than pretend.
3. **What is this industry currently arguing about?** A live debate the
   candidate can ask a real question about. This is what makes an engineer at
   the table lean in.
4. **What's the honest fit?** Including when the answer is "weak."

Use web search where available. Where it isn't, use what you know and mark
anything uncertain as "verify before you go" rather than stating it confidently.
**Never invent a lab name, a site location, a product, or an executive.** A
candidate who confidently names a research center that doesn't exist has done
themselves real damage. See `reference/research-playbook.md`.

## Step 3 — Rank honestly, including the bad fits

Order the companies by genuine fit and put that order in the card, because line
length and candidate energy are both real constraints. Best fits first, while
they're sharp.

**Mark weak fits as weak.** A company with no matching roles should be labeled
warm-up-only or skip, with a reason. Users respect this and it makes the strong
recommendations credible. Equally, flag any company that conflicts with a
constraint the user stated — present the conflict, give them the material, and
let them decide. Don't silently drop it and don't silently rank it first.

## Step 4 — Write each company card

Five sections, in the order they get used:

**Open** (~10 sec) — The handshake line. Name, program, graduation, and one
qualifying question that routes the conversation before it wastes two minutes.
Where work authorization is a lever, it goes here.

**Pitch** (~30 sec) — Two or three sentences. Must contain at least one
quantified claim from the resume, stated exactly. Must end with something that
ties to *this* company, not a generic close.

**Hook** (1 line) — The sentence that proves research happened. Names the
specific org, site, product line, or live industry question. If you can't write
a hook that only applies to this one company, the research isn't done.

**Ask** (3 questions) — Each question gets a one-line note on *why* to ask it,
so the candidate can pick two under pressure. Good questions are answerable by
the person standing there, open-ended enough to produce a real answer, and at
least one should be genuinely useful intelligence rather than performance.
Always include one that establishes timeline — when reqs open, what to watch.

**Close** (~20 sec) — The exact words. Ask for the email, ask for one name
inside the target org, commit to a specific follow-up time.

## Step 5 — Write the shared Start tab

Generated once, used all night:

- The elevator pitch, full version
- A **no-jargon** version of what they do — explicitly stripped of field
  vocabulary, for non-technical recruiters. Name the specific words to avoid.
- An answer to the most likely hard question for this candidate's situation
  (why industry, why a career change, why this field, why the gap)
- **The recovery line for "just apply online."** Ask for a req number or search
  keyword, and ask permission to name them in the application. This converts a
  brush-off into a referral surprisingly often.
- The universal four-move close
- A follow-up email template with bracketed slots for the per-company details
- The recommended booth order
- Setup instructions for adding the page to a phone home screen

## Step 6 — Render the page

Fill the `CARDS` array in `reference/field-card-template.html` and keep the
shell as-is. The template already handles bottom-tab navigation, swipe between
companies, section jumping, theming, and the note-capture fields. See
`reference/content-rules.md` for the data shape.

If the environment can publish artifacts or hosted pages, publish it so the user
gets a link they can open on a phone. Otherwise write the HTML file and deliver
it. Either way, tell them to load it once before entering the venue — event wifi
is reliably bad and a loaded page keeps working.

## Writing rules

These are what separate a usable card from a wall of text.

- **Write words to say, not notes about what to say.** "Ask about their
  research" is useless at a booth. Write the sentence in quotation marks.
- **Numbers survive loud rooms; adjectives don't.** Prefer "150× faster" over
  "significantly faster", "grew it from 30 to 110" over "grew it substantially."
- **One quantified claim per pitch, stated exactly.** Do not round, inflate, or
  smooth it. The candidate has to be able to defend it.
- **Cut jargon ruthlessly for the non-technical version,** and name the specific
  words to avoid rather than saying "avoid jargon."
- **Never invent anything about the candidate.** Every claim traces to the
  resume. If the resume is thin for a company, say the fit is thin.
- **Be honest about weak fits.** It's more useful than encouragement.
- **Keep each spoken block under about 60 words.** It has to be glanceable.
- **Give bad news with a next move.** "No technical fit — use it as a rehearsal
  rep before the ones that count" beats "skip this one."

## Calibrating to the candidate

The structure holds for everyone; the tactics shift with where they are.

- **Undergraduates** are the main audience at most fairs, and the booth is
  usually staffed for exactly them — so the routing question matters less and
  specificity matters more. Coursework, projects and clubs are legitimate
  ammunition when quantified.
- **Master's and MBA candidates** are often competing against both undergrads
  and experienced hires. The card should lean on prior work experience and the
  specific reason for the degree.
- **PhDs** face a structural problem worth naming: the booth is frequently
  staffed for a rotational program that doesn't fit them, and the research org
  they want recruits separately. Their Open should route toward it and their
  Close should ask for a name inside it.
- **Career changers** need a bridge sentence — an explicit statement that the
  domain is different but the problem shape is the same. Write it for them.

## Verify before delivering

- Every quantified claim traces to a line in the resume
- Every hook names something specific and real, and nothing was invented
- No company appears without an honest fit assessment
- Any constraint the user stated is reflected in the ranking
- Every Close asks for an email
- The page opens, tabs switch, and it reads at phone width
