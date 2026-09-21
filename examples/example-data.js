/* =====================================================================
   EXAMPLE DATA — everything here is invented.

   Candidate: Maya Okonkwo, a fictional junior in mechanical engineering.
   Employers: four fictional companies. No real person or company is
   described, and nothing here should be read as a claim about any real
   employer.

   Paste this array over the CARDS placeholder in
   reference/field-card-template.html, or run build-example.py.
   ===================================================================== */

const CARDS = [
{
  id:"start", chip:"Start", counted:false,
  title:"Before you walk up", rank:"Read first",
  sub:"The person at the table almost certainly can't hire you. They're a switchboard &mdash; a recruiter covering a dozen roles, or an alum volunteering for the night. <b>Your goal at every booth is a name, an email, and one reason to be remembered.</b> Not an offer. Everything here is built around that.",
  facts:[
    ["Name","Maya Okonkwo"],
    ["Status","Junior, Mechanical Eng."],
    ["Looking for","Summer 2027 internship"],
    ["Authorization","No sponsorship needed"],
    ["Location","Midwest, will relocate"],
    ["Proof","FSAE lead &middot; 1 internship &middot; $14k budget"]
  ],
  blocks:[
    {n:"01", short:"Pitch", lab:"The 30-second pitch", secs:"~30 sec", type:"say", lines:[
      "&ldquo;Hi &mdash; I'm Maya Okonkwo, junior in mechanical engineering at Lakeside State, looking for a summer 2027 internship.&rdquo;",
      "&ldquo;I lead the suspension subteam on our Formula SAE car &mdash; nine people, a <em>$14,000</em> budget. We redesigned the rear uprights last season and took <em>12% off the unsprung mass</em>, which was worth about <em>1.8 seconds</em> on our autocross time.&rdquo;",
      "&ldquo;Last summer I interned at an HVAC manufacturer building test fixtures, so I've seen the validation side too. I'm looking for design or test work on real hardware.&rdquo;"
    ], note:"Say it out loud twice before you go in. The numbers are the part that has to land word-for-word &mdash; numbers survive a loud room, adjectives don't."},

    {n:"02", short:"Plain", lab:"The version for a non-engineer", secs:"no jargon", type:"say", lines:[
      "&ldquo;I design suspension parts for our student race car and run the team that builds them. Last year we made the parts lighter without making them weaker, and the car got about two seconds faster.&rdquo;",
      "&ldquo;Over the summer I worked at a manufacturer building the rigs that test whether a product actually holds up. I automated one of those tests and cut it from forty minutes to six.&rdquo;"
    ], note:"Plenty of booths are staffed by HR or by alums from other majors. Never say <b>unsprung mass, upright, FEA</b> or <b>modal</b> to them. Say lighter, stronger, faster, cheaper."},

    {n:"03", short:"Why", lab:"When they ask why this company", secs:"~15 sec", type:"say", lines:[
      "&ldquo;Honestly &mdash; because I want to work on hardware that ships. On Formula SAE everything I design gets built and then gets driven, and I find out within a week whether I was right. I'm looking for the industrial version of that loop.&rdquo;"
    ], note:"Specific, true, and it says something about how you work. Have a company-specific second sentence ready from each card's Hook."},

    {n:"04", short:"Stuck", lab:"When they say &ldquo;just apply online&rdquo;", secs:"the recovery", type:"say", lines:[
      "&ldquo;I will tonight &mdash; is there a req number or a keyword you'd have me search so I land in the right pile?&rdquo;",
      "&ldquo;And can I put your name in the application as who I spoke with?&rdquo;"
    ], note:"This turns a brush-off into a referral more often than you'd think. A name in the application is the cheapest signal you can buy tonight."},

    {n:"05", short:"Close", lab:"The close &mdash; same four moves every booth", secs:"~20 sec", type:"steps", close:true, items:[
      "Ask for the email out loud: &ldquo;Can I get your email so I can send my resume tonight?&rdquo;",
      "Ask for one name on the engineering side: &ldquo;Is there someone on the team you'd point me to?&rdquo;",
      "Commit to a time &mdash; &ldquo;I'll send it tonight&rdquo; &mdash; and then actually do it tonight.",
      "Walk ten feet away and write three words on the back of the card about what <b>they</b> said. By the end of the night you will not remember."
    ]},

    {n:"06", short:"Email", lab:"Follow-up email &mdash; send tonight", secs:"copy this", type:"mail", text:
`Subject: Lakeside career fair - suspension design / test engineering

Hi [Name],

Thanks for the few minutes at the Lakeside fair tonight. You mentioned
[the specific thing they said] - that's close to what I've been doing.

Short version: junior in mechanical engineering, looking for a summer
2027 internship. Two things most relevant to [company]:

  - I lead the suspension subteam on our Formula SAE car (9 people,
    $14k budget). Rear upright redesign took 12% off unsprung mass
    and about 1.8s off our autocross time.
  - Last summer at an HVAC manufacturer I automated a validation
    fixture and cut the test cycle from 40 minutes to 6.

Resume attached. You mentioned [name] on the [team] side - happy to be
introduced if that's easiest.

Best,
Maya Okonkwo
linkedin.com/in/example`
    , note:"Rewrite the two bracketed lines for each company &mdash; a recruiter can smell a blast email. Send it from your phone in the parking lot while it's fresh."},

    {n:"07", short:"Order", lab:"Booth order &mdash; lines get long after 6", secs:"strategy", type:"order", items:[
      ["Halverson Equipment","best fit"],
      ["Cordova AgSystems","strong fit"],
      ["Nordveil Instruments","adjacent"],
      ["Briar Hollow Financial","warm-up only"]
    ], note:"Hit Halverson and Cordova early while you're sharp and the lines are short. Briar Hollow is a free rehearsal rep &mdash; only if you want to hear yourself talk once before the ones that count."},

    {n:"08", short:"Setup", lab:"Make this open like an app", secs:"30 sec, do it now", type:"steps", items:[
      "iPhone: open in Safari &rarr; Share &rarr; Add to Home Screen. Android: Chrome menu &rarr; Add to Home screen.",
      "Load every tab once before you walk into the building. Venue wifi is always bad and a loaded page keeps working.",
      "Turn your screen brightness up now. You'll be reading this in a dim hall with your coat on.",
      "Notes and &ldquo;Worked it&rdquo; marks save on this phone only &mdash; they won't follow you to a laptop."
    ]}
  ]
},
{
  id:"halverson", chip:"Halverson", rank:"Priority 1", title:"Halverson Equipment",
  sub:"Off-highway machinery &mdash; excavators, loaders, mining haulers. They've been public about moving toward battery-electric drivetrains, which is a <b>structures and thermal problem before it's an electrical one</b>: battery packs are heavy, and every kilogram has to go somewhere the frame can carry. Your unsprung-mass work is the same argument at a different scale.",
  blocks:[
    {n:"01", short:"Open", lab:"Open", secs:"~10 sec", type:"say", lines:[
      "&ldquo;Hi &mdash; I'm Maya, junior in mechanical engineering at Lakeside, looking for summer 2027. Before I take your time: do you cover the design and test internships, or is that a different group?&rdquo;"
    ], note:"Ten seconds spent routing saves two minutes with someone who only staffs manufacturing or supply chain."},
    {n:"02", short:"Pitch", lab:"Pitch", secs:"~30 sec", type:"say", lines:[
      "&ldquo;I lead the suspension subteam on our Formula SAE car &mdash; nine people, $14,000 budget. We redesigned the rear uprights and took <em>12% off unsprung mass</em>, worth about <em>1.8 seconds</em> on autocross.&rdquo;",
      "&ldquo;The reason I came to your table: the electric machine work is a weight and load-path problem before it's anything else, and that's the problem I've spent two seasons on.&rdquo;"
    ]},
    {n:"03", short:"Hook", lab:"Hook &mdash; proves you did homework", secs:"1 line", type:"say", lines:[
      "&ldquo;What I'm curious about is duty cycle &mdash; a machine that runs sixteen hours a day is a completely different battery and cooling problem than a car. Is that the hard part, or is it the frame loads?&rdquo;"
    ], note:"This is the question that makes an engineer at the table stop giving the tour and start talking. Duty cycle is the real constraint in off-highway electrification, and almost no student asks about it."},
    {n:"04", short:"Ask", lab:"Ask", secs:"pick 2", type:"qs", items:[
      ["Is the hard part of electrifying these machines the battery duty cycle or the structural load paths?","Open-ended, technical, and their answer tells you which team you'd actually want."],
      ["Do design interns own a part end to end, or support a senior engineer's project?","The single most useful thing to know about any engineering internship. Ask it everywhere."],
      ["When do summer 2027 postings open, and is there a date I should be watching?","Always close the loop on timeline. Most large manufacturers post in the fall for the following summer."]
    ]},
    {n:"05", short:"Close", lab:"Close", secs:"~20 sec", type:"say", close:true, lines:[
      "&ldquo;This is the closest fit I've seen tonight. <em>Can I get your email?</em> I'll send my resume tonight with the suspension project on the first page.&rdquo;",
      "&ldquo;And if there's someone on the chassis or structures side you'd point me to, I'd take that name.&rdquo;"
    ], note:"Then write on the card what <b>they</b> said, not what you said. Send the email before bed."}
  ]
},
{
  id:"cordova", chip:"Cordova", rank:"Priority 2", title:"Cordova AgSystems",
  sub:"Precision agriculture equipment, pushing hard on autonomy. The interesting mechanical work is in <b>the gap between a demo and a machine that runs unattended in a dusty field for a season</b> &mdash; sensor mounting, vibration, sealing, serviceability. Less glamorous than the software, and where most of the actual engineering is.",
  blocks:[
    {n:"01", short:"Open", lab:"Open", secs:"~10 sec", type:"say", lines:[
      "&ldquo;Hi &mdash; Maya, junior in mechanical engineering at Lakeside, looking for summer 2027. Is the autonomy work staffed out of the same internship program as the rest of engineering, or is it separate?&rdquo;"
    ]},
    {n:"02", short:"Pitch", lab:"Pitch", secs:"~30 sec", type:"say", lines:[
      "&ldquo;I run the suspension subteam on our Formula SAE car &mdash; nine people, $14k budget, and everything we design gets built and driven, so we find out fast when we're wrong.&rdquo;",
      "&ldquo;Last summer I interned at an HVAC manufacturer and built an automated validation fixture that cut a test cycle from <em>40 minutes to 6</em>. I like the part of the job where you have to make something survive being used.&rdquo;"
    ], note:"The test-fixture story is the right lead here, not the race car. Durability and validation are the whole problem in unattended field equipment."},
    {n:"03", short:"Hook", lab:"Hook", secs:"1 line", type:"say", lines:[
      "&ldquo;The part I keep wondering about is what breaks first &mdash; getting a sensor to survive a season of vibration and dust seems harder than getting the autonomy to work in a demo.&rdquo;"
    ]},
    {n:"04", short:"Ask", lab:"Ask", secs:"pick 2", type:"qs", items:[
      ["What fails first on an autonomous machine after a full season in the field?","A real engineer's question. It signals you understand the difference between a demo and a product."],
      ["Are you retrofitting autonomy onto existing platforms or designing machines around it from scratch?","Their answer tells you whether the mechanical work is packaging or clean-sheet design."],
      ["What does the summer internship timeline look like, and when do postings go up?","Timeline. Every booth, every time."]
    ]},
    {n:"05", short:"Close", lab:"Close", secs:"~20 sec", type:"say", close:true, lines:[
      "&ldquo;<em>Can I get your email?</em> I'll send my resume tonight &mdash; the test fixture project is the one that's closest to what you described.&rdquo;",
      "&ldquo;And a name on the autonomy hardware side, if you have one.&rdquo;"
    ]}
  ]
},
{
  id:"nordveil", chip:"Nordveil", rank:"Adjacent fit", title:"Nordveil Instruments",
  sub:"Consumer electronics &mdash; not the obvious stop for a mechanical engineer, but <b>they design and manufacture in-house</b>, which means real mechanical work in enclosures, thermal management, and manufacturing tooling. The domain is different from anything on your resume. The bridge is that you've already done design-build-test on a deadline, which is exactly the loop here.",
  blocks:[
    {n:"01", short:"Open", lab:"Open", secs:"~12 sec", type:"say", lines:[
      "&ldquo;Hi &mdash; Maya, junior in mechanical engineering at Lakeside. I know most people at your table are probably EE and software &mdash; do you take mechanical interns for enclosure and thermal work?&rdquo;"
    ], note:"Naming the mismatch yourself reads as self-awareness, not apology. It also gets you a straight answer in ten seconds instead of three minutes."},
    {n:"02", short:"Pitch", lab:"Pitch", secs:"~30 sec", type:"say", lines:[
      "&ldquo;My background is Formula SAE &mdash; I lead the suspension subteam, nine people, $14k budget &mdash; and a summer at an HVAC manufacturer where I automated a validation fixture and cut a test cycle from 40 minutes to 6.&rdquo;",
      "&ldquo;The products are different from yours, but <em>the problem shape isn't</em>: design it, build it, find out it's wrong, fix it before the deadline. I'd rather learn a new domain than a new way of working.&rdquo;"
    ], note:"&ldquo;The problem shape isn't&rdquo; is your bridge sentence for any company outside your obvious lane. Say it out loud before you go, so it comes out clean."},
    {n:"03", short:"Hook", lab:"Hook", secs:"1 line", type:"say", lines:[
      "&ldquo;What made me stop at your table is that you manufacture your own products &mdash; I'd guess that changes what a mechanical engineer actually gets to decide.&rdquo;"
    ]},
    {n:"04", short:"Ask", lab:"Ask", secs:"pick 2", type:"qs", items:[
      ["Does manufacturing in-house change how early mechanical engineers get involved in a design?","Shows you understand why vertical integration matters rather than just that it exists."],
      ["Do you hire mechanical interns from outside a consumer electronics background?","Direct, slightly brave, and the answer saves you weeks of applying into the wrong pile."],
      ["What's the timeline for summer 2027 postings?","Timeline."]
    ]},
    {n:"05", short:"Close", lab:"Close", secs:"~20 sec", type:"say", close:true, lines:[
      "&ldquo;<em>Can I get your email?</em> I'll send my resume tonight, and I'll add two lines on how the test and packaging work maps onto what you do &mdash; so you don't have to translate it yourself.&rdquo;"
    ], note:"That promise is the differentiator when you're the adjacent candidate. Doing the translation <b>for</b> them is what gets a resume forwarded instead of filed."}
  ]
},
{
  id:"briar", chip:"Briar Hollow", rank:"Warm-up only", warn:true, title:"Briar Hollow Financial",
  sub:"<b>No mechanical engineering roles.</b> They recruit broadly at engineering fairs for analyst and client-facing positions, which is a legitimate career &mdash; just not the one you're here for. Take this booth <b>only</b> as a free rehearsal rep before Halverson, or skip it entirely.",
  blocks:[
    {n:"01", short:"Open", lab:"Open", secs:"~10 sec", type:"say", lines:[
      "&ldquo;Hi &mdash; I'm Maya, junior in mechanical engineering. Do you hire engineers into technical roles, or is the campus program mostly analyst and client-facing?&rdquo;"
    ], note:"Ask the disqualifying question first. If the answer is what you expect, thank them warmly and go &mdash; ninety seconds spent, one rep gained."},
    {n:"02", short:"Debrief", lab:"What you're actually here for", secs:"the real point", type:"steps", close:true, items:[
      "Did you get through the pitch without saying &ldquo;um, so basically&rdquo;?",
      "Did they nod, or did their eyes glaze at one specific word? Cut that word before Halverson.",
      "Did you remember to ask for the email, or did you drift off into &ldquo;thanks so much&rdquo;?",
      "Reset, drink water, walk to Halverson."
    ]},
    {n:"03", short:"Close", lab:"Close", secs:"~10 sec", type:"say", close:true, lines:[
      "&ldquo;Appreciate the time &mdash; I think my background's further from what you're staffing tonight, but thank you.&rdquo;"
    ], note:"Ending a bad-fit conversation gracefully and early is a real skill. Practice it here, where nothing is at stake."}
  ]
}
];
