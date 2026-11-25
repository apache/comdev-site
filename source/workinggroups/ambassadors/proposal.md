---
title: Project Ambassadors proposal
url: /workinggroups/ambassadors/proposal.html
tags: ["wg","workinggroups","ambassadors"]
---

# Project Ambassadors proposal

*Identifying and supporting community champions within Apache projects*

## The opportunity

Most Apache projects have no designated "face" for community building. When someone outside a project wants to know how to engage — whether they're a new contributor or an event organizer seeking speakers — there's no clear point of contact beyond the generic `dev@` mailing list. The people who actually do community work inside projects are invisible, unsupported, and unconnected to each other.

## Project Ambassadors

Many active Apache projects already have someone who cares about community activity — a PMC member who answers newcomer questions, a committer who triages "good first issues," someone who shows up at conferences and makes the project welcoming. The problem isn't that these people don't exist; it's that they're invisible, unsupported, and unconnected to each other.

**The Ambassador role makes that existing work visible and supported.** An ambassador is a PMC member or active committer — someone *from within the project* who the project identifies as their community champion. ComDev doesn't assign ambassadors from outside; ComDev **recruits, equips, connects, and recognizes** them.

**ComDev's role:**

1. **RECRUIT** — Approach projects and ask: "Who's your community person?" Help them identify one if the answer isn't obvious.
2. **EQUIP** — Give ambassadors tools: a metrics dashboard, Good First Issues infrastructure, access to the speaker travel program, outreach templates, and onboarding guides.
3. **CONNECT** — Bring ambassadors together weekly as a peer network so they can learn from each other's successes and struggles.
4. **RECOGNIZE** — Make "community ambassador" a visible, valued role with public listing, conference badge ribbons, recognition at Community Over Code, and letters to their employers.

**Phase 1 — Pilot:**
- Approach initial project PMCs and ask who their community champion is: **Cassandra, Airflow, Iceberg, Kafka, Cloudstack**.
- If they don't have an obvious candidate, help them identify one — look at who answers newcomer questions, who mentors contributors, who represents the project at events.
- Ambassador responsibilities (to their own PMC, not to ComDev):
  - Be the visible point of contact for community-building questions
  - Encourage the PMC to recognize contributors and identify potential new committers
  - Surface needs to ComDev where tooling, mentoring, or outreach support would help
  - Connect the project to the Conference Speaker Travel Program - Optionally share a brief weekly community update with the ambassador peer network

**Phase 2 — Expand + Formalize:**
- Extend outreach to all Top 20 projects by activity
- Contact every project that graduated in the past year and ask: "Who is your community champion?" — establish the expectation that every project has one, even if it's informal at first. The ask itself is the intervention: "Who's your community person? We'd like to support them."
- Contact mentors of recently-graduated podlings and recruit them into the ambassador network — they already know how to nurture a community through growth.
- Ambassadors rotate naturally as project needs evolve — ComDev doesn't impose rotation schedules; projects decide who fills the role.

**Designated contact roles within each project (aspirational):**
- Press contact (for project-related media inquiries)
- Events contact (for conference CFPs, speaker recruitment)
- Community contact (for contributor onboarding, mentoring)
- Infrastructure contact (for tooling issues, CI/CD, website)

By default these all fall to the dev@ list. The ambassador doesn't have to fill all of them — but having someone who can point inquiries to the right person (or say "that's me") prevents the "someone else will do it so nobody does" outcome on mailing lists.

**What the weekly office hours are (and isn't):**

The monthly/weekly ambassador office hours are a **peer network**, not a reporting structure. Ambassadors don't report to ComDev — they report to their own PMC. The office hour is a space where community champions from different projects share what's working, ask for help, and learn from each other. ComDev facilitates the office hour and shares new tools/resources, but doesn't set agendas or assign homework.

## The Ambassador Toolkit

This is what ComDev actually provides to every ambassador — the concrete value that makes the role worth raising your hand for.  ComDev builds these once; ambassadors apply them across N projects.

**1. Project Metrics Dashboard Page**
Each ambassador gets a live view of their project's contributor trends, mailing list activity, release cadence, and roster changes — without having to track anything manually.

**2. Quarterly Activity Summary Template**
A standard set of questions pre-filled with data from the dashboard: How many new contributors this quarter? Unanswered questions on dev@? Last release date? Committer nominations pending? The ambassador adds 2–3 sentences of context and posts to their own dev@ list.

**3. Good First Issues Page**
Aggregated from GitHub `good-first-issue` labels across the project's repos. The ambassador can point newcomers directly to it without maintaining a separate list.

**4. Speaker Travel Program Connection** (separate program, see event funding proposal)
The ambassador knows who in their project should be speaking at conferences. They can connect people to the Speaker Travel Program when it's funded — identifying contributors doing great work who lack employer travel support.

**5. Contributor Onboarding Page Template**
Standard structure every project can customize: "How to build, how to find issues, how to submit a patch, who to ask." ComDev provides the template; the project fills in specifics. Prevents every project from reinventing this from scratch.

**6. "New Contributor Welcome" Email Template**
A standard reply ambassadors can customize when someone shows up on dev@ for the first time. Warm, informative, points to the onboarding page and Good First Issues.

**7. Peer Network Access**
The weekly office hour where ambassadors from different projects share what works. "Kafka solved contributor retention by doing X — could that work for your project?"

**8. Escalation Path**
Clear process: "If you identify something you can't fix alone (need mentoring help, losing contributors to a fork, PMC won't nominate committers), here's who at ComDev to raise it with and how."

**9. Recognition**
Listed on community.apache.org/ambassadors/. Mentioned in ComDev Board reports. Invited to speak at Community Over Code about their community work.

**The key insight**: Most of this is templates and pre-filled data.  The ambassador doesn't create anything from scratch — they customize and apply. ComDev does the de-duplication work once; ambassadors multiply the value across their projects.

**What wg-site needs to build before recruiting** (the "equip" prerequisite): Items 2, 3, 5, and 6 above. Items 1, 4, 7, 8, 9 are already built or are process/policy, not tooling.

## Graduation Outreach — Process & Templates

*The primary mechanism for recruiting new ambassadors: welcoming newly-graduated projects and connecting them with ComDev resources.*

## Goals

1. Every newly-graduated project hears from ComDev within 2 weeks of their board resolution
2. The outreach asks the project to do specific things (not just "let us know if you need anything")
3. The process is delegatable — any ComDev PMC member or ambassador can run it
4. It creates a relationship, not a transaction

## The Process (Step by Step)

### Trigger

The board passes a graduation resolution (monthly board meeting). Within the same week, the graduation outreach process starts.

**Who monitors**: Whoever is on rotation for graduation outreach this month (see "Rotation" below). Can check:
- Board meeting minutes (published after approval at the following month's meeting)
- whimsy.apache.org/board/minutes/ (immediate)
- Incubator general@ list (graduation announcements)

### Step 1: Send the Welcome Email (within 1 week of resolution)

Send to: `dev@<project>.apache.org`
From: The outreach person on rotation (rotates quarterly — no single person owns this)
Subject: `Welcome to TLP — ComDev resources for your community`

*(Use Template A below)*

### Step 2: Wait 2 weeks for response

If no response, that's fine. The email is informational. Do not follow up aggressively — the relationship starts when they're ready.

If they DO respond, connect them with the appropriate resource (ambassador toolkit, metrics page, speaker travel info, etc.)

### Step 3: Add to tracking

Log the outreach in the tracking file: ComDev private SVN (`https://svn.apache.org/repos/private/pmc/comdev/` — exact location TBD)

Fields: Date, Project, Who sent, Response (Y/N), Follow-up needed

### Step 4: 90-day check-in (optional, ambassador-driven)

If the project identified a community champion in their response, that person gets added to the ambassador peer network. If not, no further action — we offered, they know we exist.


## Rotation

To prevent this from falling on one person:

- Maintain a rotation list of 3–5 ComDev PMC members willing to do graduation outreach
- Each month, one person handles all graduations that month (typically 1–2 projects)
- Rotation tracked in the outreach log
- If the person on rotation is too busy that month, they swap with the next person (pull model, not push)

**Bootstrap**: Whoever starts the process handles the first 2–3 months while recruiting 2–4 others into the rotation.


## What we ask _of_ the project (not just _for_ them)

This is critical. The email is NOT "here's what ComDev will do for you." It's "here are resources, and here's how to plug in":

**We ask them to**:

1. **Identify a community champion** — "Who on your PMC thinks about contributor experience? We'd like to support them." (This seeds the ambassador program)

2. **Add `good-first-issue` labels** to their GitHub issues — "We aggregate these across all ASF projects. If you label issues, newcomers will find your project." (This populates the Good First Issues aggregator)

3. **Check their metrics page** — "Your project now has a public activity dashboard at community.apache.org/metrics/?project=X.  Take a look and let us know if anything seems off." (This drives dashboard adoption)

4. **Join the weekly ambassador office hour** (optional) — "Your community champion is welcome to join the weekly peer office hour where ambassadors from different projects share what's working."

These are LOW-EFFORT asks. None requires more than 15 minutes from the project. But each one creates a connection point.

### What We Offer (Concrete, Not Vague)

**We provide**:

1. Their metrics dashboard page
2. Listing in the Good First Issues aggregator (if they label)
3. Access to the Speaker Travel Program (when funded)
4. Ambassador toolkit for their community champion
5. Weekly peer office hour invitation
6. Escalation path if they need help (mentoring, contributor recruitment, conflict resolution)


### Template A: Welcome email

```
Subject: Welcome to TLP — ComDev resources for [Project]

Hi [Project] community,

Congratulations on graduating from the Incubator! I'm [Name]
from Apache Community Development (ComDev). I'm reaching out
because we offer a few resources that newly-graduated projects
often find useful, and I have a couple of small asks.

WHAT'S AVAILABLE TO YOU:

- Your project now has a public community activity dashboard at:
  https://community.apache.org/metrics/?project=[project_id]
  It shows 12-month trends for mailing list activity, commit
  velocity, and contributor growth.

- The Speaker Travel Program (when funded) covers up to $3K for
  anyone with an accepted conference talk about [Project]. Details
  at community.apache.org/speakers/travel/

- The Ambassador Support Network connects community champions
  from different projects for weekly peer exchange.

A COUPLE OF ASKS:

1. Who's your community champion? — Is there someone on your PMC
   who thinks about contributor experience, onboarding, or
   community growth? We'd like to support them with tools and
   connect them with peers doing similar work at other projects.
   (Just reply with a name and we'll take it from there.)

2. Do you use `good-first-issue` labels on GitHub? — We aggregate
   these across all ASF projects to help newcomers find their
   first contribution. If you're already labeling, great — you'll
   show up automatically. If not, consider adding a few.

No response needed if none of this is relevant to you right now.
We're here when you need us: dev@community.apache.org

Cheers,
[Name]
Apache Community Development
```



### Template B: 90-Day Check-in (Ambassador Sends)

```
Subject: Quick check-in from ComDev — [Project]

Hi [Champion name],

I'm [Ambassador name], supporting [Project] through the ComDev
ambassador network. Quick 90-day check-in:

- Your metrics page:
  https://community.apache.org/metrics/?project=[id]
- Any community challenges I can help with?
- Any contributors who deserve recognition (committer nomination
  nudge, speaker opportunity, etc.)?

Our next weekly peer office hour is [date] — topics are [brief list].
You're welcome to join if useful.

No reply needed if all is well!

[Ambassador name]
```



### Template C: Rotation handoff

```
Subject: [ComDev internal] Graduation outreach rotation — [Month]

Hi [next person],

You're on graduation outreach this month. Here's what to expect:

- Board meeting is [date]. Check minutes/whimsy afterward for
  new TLPs
- Typically 1-3 projects graduate per meeting
- Send Template A to each project's dev@ list within a week
- Log in the tracking file in ComDev private SVN (`https://svn.apache.org/repos/private/pmc/comdev/` — exact path TBD)

Recent graduations and their responses are in the log if you want
context on how it's been going.

If you can't do it this month, swap with [next-next person].

Thanks,
[previous person]
```


