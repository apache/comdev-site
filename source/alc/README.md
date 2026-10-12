# ALC section (`/alc/`)

This directory implements the **Apache Local Community (ALC)** section of
the ComDev website: a landing page with an interactive map of chapters, a
per-chapter page model, a "start a chapter" guide, and an organizer guide.

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
    └── <city>.md          One file per chapter. Front matter drives the
                           map + list; body is the chapter blurb.
```

Supporting layout files (in `layouts/shortcodes/`):

- `alc_map.html` — renders the Leaflet map. Iterates the front matter of
  every page in section `alc` that has a `lat` param, emits a JS array of
  chapters, and plots colored markers (green=active, orange=proposed,
  grey=dissolved). Leaflet CSS/JS are loaded from a *local vendored copy*
  under `/vendor/leaflet/<version>/` (see "Vendored Leaflet" below), so the
  only thing fetched remotely at view time is the OpenStreetMap base-map
  tiles — which can't be bundled (they're a live tile service). The
  `<link>`/`<script>` live *inside this shortcode*, so only the ALC page
  loads Leaflet — `baseof.html` is untouched.
- `alc_chapter_list.html` — renders a text list of chapters grouped by
  status, from the same front matter.

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
organizers: "Name(s) or team"
links:
  website: https://example.org/
  slack: "#alc-cityname"
  wiki: https://cwiki.apache.org/confluence/display/COMDEV/...
tags: ["alc"]
---
```

Adding a chapter = adding one Markdown file here. The map and both list
pages regenerate from it automatically; there is no separate data source.

## How the map works

`alc_map.html` uses Hugo's `where .Site.RegularPages "Section" "alc"`
filtered to pages with a non-nil `lat`, so only chapter files appear on
the map (the landing/guide pages are excluded). Marker color is keyed off
`status`. The map auto-fits to the markers' bounds. Built against Hugo
v0.111.3 (the version in the Jenkinsfile).

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
