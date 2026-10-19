# ALC section (`/alc/`)

This directory implements the **Apache Local Community (ALC)** section of
the ComDev website: a landing page with an interactive map of chapters, a
single chapters page that lists every chapter inline, a "start a chapter"
guide, and an organizer guide. Each chapter is one Markdown data file, but
by default no standalone page is generated for it (see "Chapter page
model" below).

## What each file is

```
source/alc/
├── _index.md             Landing page. Intro, embedded map + chapter
│                         list (via shortcodes), how to get involved,
│                         contact. URL: /alc/
├── start-a-chapter.md     How to establish a chapter + the program rules
│                         (one-per-city, metro exceptions, CoC, quarterly
│                         reports, 3-month inactivity dissolution, no
│                         press releases). Includes the front-matter
│                         template for adding a chapter.
├── organizers.md          Practical guide for chapter organizers (running
│                         events, finding speakers, reporting, resources).
└── chapters/
    ├── _index.md          Chapter list page. URL: /alc/chapters/
    └── <city>.md          One file per chapter (the data model). Front
                           matter drives the map + list; body is the blurb
                           shown inline on the chapters page. Headless by
                           default — no standalone page (see below).
```

Supporting layout files (in `layouts/shortcodes/`):

- `alc_map.html` — renders the Leaflet map. Iterates the front matter of
  every page in section `alc` that has a `lat` param, emits a JS array of
  chapters, and plots colored markers (green=active, orange=proposed,
  grey=dissolved). Leaflet CSS/JS are loaded from a *local vendored copy*
  under `/vendor/leaflet/<version>/` (see "Vendored Leaflet" below), so the
  only thing fetched remotely at view time is the OpenStreetMap base-map
  tiles — which can't be bundled (they're a live tile service). Those
  tiles load **only after the visitor opts in** (see "Map consent" below).
  Nothing map-related — not even the vendored Leaflet CSS/JS — is loaded
  on page view; it is all injected inside this shortcode on consent, so
  `baseof.html` is untouched and the ALC page itself makes no third-party
  request until the visitor clicks "Load the map".
- `alc_chapter_list.html` — renders a text list of chapters grouped by
  status, from the same front matter. Each chapter is rendered inline
  (title, location, status, body) and links to its own page only if one is
  rendered, otherwise to its wiki page.

## Chapter page model (single page, per-chapter data files)

Each chapter is one Markdown file under `chapters/` — a good, reviewable
data model — but we do **not** generate a standalone page per chapter.
Instead every chapter is rendered inline on the single `/alc/chapters/`
page, and links out to its wiki page for organizers, events, and reports.

This uses Hugo's build options (the "glossary" pattern). `chapters/_index.md`
carries a cascade:

```yaml
cascade:
  - build:
      list: local      # keep chapters in LOCAL page collections (.Pages)
      render: never    # but don't render a standalone page for each
```

Because `render: never` also removes pages from `.Site.RegularPages`, both
shortcodes enumerate the chapters section via
`.Site.GetPage "/alc/chapters"` then `.Pages` (the local collection, which
still includes headless pages) rather than `.Site.RegularPages`.

**Graduating a chapter to its own page:** when a chapter has enough content
to warrant a dedicated page, add `build: {render: always}` to *that
chapter's* front matter. It overrides the cascade, Hugo renders the page,
and the list and map automatically link to the page instead of the wiki.

## Dormancy / staleness

Each chapter carries a `last_activity: YYYY-MM-DD` field. A chapter whose
`last_activity` is more than **one year** before build time is flagged
**dormant**:

- On the **map** it is kept (not hidden) but drawn in a distinct color
  (blue) with a "Dormant" legend entry, so someone might revive it.
- In the **list** it keeps its place with a `dormant` badge.

A chapter with no `last_activity` is treated as current (never
auto-flagged). The one-year threshold is `now.AddDate -1 0 0` in both
shortcodes. The current `last_activity` dates were set to 2026-10-19 as
placeholders and should be reconciled against each chapter's wiki page over
time.

## Map consent (OpenStreetMap)

Loading the base map fetches tiles from `*.tile.openstreetmap.org`, a
third-party service that receives the visitor's IP and request data.
Per ASF website policy and the OSMF privacy FAQ — the ASF cannot sign a
Data Processing Agreement with OpenStreetMap — the tile layer must not
load until the visitor explicitly, revocably opts in.

`alc_map.html` implements this:

- On page view the map area shows a **consent placeholder** explaining the
  third-party request; no Leaflet and no tiles are loaded.
- Clicking **"Load the map"** injects the vendored Leaflet CSS/JS, builds
  the map, and (if "Remember my choice" is checked) sets the
  `alc_map_consent=yes` cookie (path `/`, `SameSite=Lax`, 1-year expiry).
- A returning visitor with that cookie gets the map auto-loaded.
- **"Hide the map & stop loading OpenStreetMap"** revokes consent: it
  clears the cookie and restores the placeholder.
- The chapter list (`alc_chapter_list`) is local data and always renders,
  independent of consent.

The matching server-side change is a CSP allowance for
`*.tile.openstreetmap.org` in the site's `.htaccess`
(`SetEnv CSP_PROJECT_DOMAINS ...`). Both the consent mechanism and the CSP
change were approved by ASF VP Infrastructure (Niall Pemberton) on
2026-10-14, on the explicit basis that tiles load only behind consent.

## Vendored Leaflet

Leaflet 1.9.4 is checked into the repo at
`static/vendor/leaflet/1.9.4/` (`leaflet.js`, `leaflet.css`, and the
marker/layer images under `images/`). Serving it from our own origin
removes the runtime dependency on the unpkg CDN; only the OpenStreetMap
tiles remain external, which is unavoidable for a slippy map.

To update to a newer Leaflet, run the helper and bump the version path in
`layouts/shortcodes/alc_map.html`:

```
static/vendor/leaflet/update-leaflet.sh 1.9.4   # or a newer version
```

It downloads the JS, CSS, and images into
`static/vendor/leaflet/<version>/`. The CSS references its images by
relative path, so keep the `images/` subfolder alongside `leaflet.css`.
## Chapter front matter

```yaml
---
title: ALC CityName
city: CityName
country: Country
lat: 00.0000          # decimal degrees; drives the map
lon: 00.0000
status: active        # active | proposed | dissolved
started: 2026
last_activity: 2026-01-01   # YYYY-MM-DD; >1 yr old ⇒ flagged "dormant"
links:
  website: https://example.org/
  slack: "#alc-cityname"
  wiki: https://cwiki.apache.org/confluence/display/COMDEV/...
tags: ["alc"]
---
```

Adding a chapter = adding one Markdown file here. The map and the chapters
page regenerate from it automatically; there is no separate data source.
Organizer names are intentionally NOT stored here — they live on the
chapter's wiki page, which each entry links to.

## How the map works

`alc_map.html` enumerates the chapters section (`.Site.GetPage
"/alc/chapters"` → `.Pages`) filtered to pages with a non-nil `lat`, so
only chapter data files appear on the map. Marker color is keyed off
`status`, with dormant chapters overridden to blue. The map auto-fits to
the markers' bounds. Built against the Hugo version in the Jenkinsfile
(0.152.2).

## Navigation wiring

- **Events** dropdown gains a "Local Communities (ALC)" → `/alc/` entry.
- The old "ALC: Apache Local Communities" link under "Join the
  Conversation" now points at `/alc/` instead of the cwiki.
- The homepage "Apache Local Community" card now links to `/alc/`
  (was the `s.apache.org/alc` shortlink).

## Relationship to the cwiki

The authoritative ALC program documentation (formal apply/dissolve
processes, the ALC Resources library, Slack invite) stays on the
[ALC wiki](https://cwiki.apache.org/confluence/display/COMDEV/Apache+Local+Community+-+ALC).
This section is the public, newcomer-facing front door plus the map, and
links back to the wiki for the authoritative process docs.

## Provenance / status of the seed data

The initial chapter pages (Indore, Beijing, Warsaw, Budapest, Shanghai)
were **seeded from the ALC wiki and public ASF announcements** — not from
a complete export. Before merging:

- Reconcile the chapter list against the cwiki's authoritative
  `ALC Chapters` child pages — some chapters are likely missing.
- Confirm each chapter's `status`, `organizers`, `started` year, and
  coordinates with the chapter itself.
- Budapest is marked `proposed` and should be verified (it may be active
  or may never have launched).

## How this was made

Amazon Quick generated the initial drafts of these files (section pages,
chapter template, shortcodes, navbar/homepage wiring) as part of a
website-architecture cleanup; Rich reviews and edits before merge. This
work lives on the `rbowen-alc` branch.
