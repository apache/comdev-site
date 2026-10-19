---
title: ALC Chapters
url: /alc/chapters/
tags: ["alc"]
# Keep one Markdown file per chapter as the data model, but do NOT generate
# a standalone page for each one. The cascade makes every chapter headless
# (render: never) while still listable in LOCAL collections (list: local),
# so this page's `.Pages` can render them inline and the map/list shortcodes
# can enumerate them. A chapter that outgrows the wiki and wants its own page
# simply sets `build: { render: always }` in its own front matter, which
# overrides this cascade; the list and map then link to that page instead of
# the wiki. (Hugo "glossary" build-options pattern.)
cascade:
  - build:
      list: local
      render: never
---

Below are the current [Apache Local Community](/alc/) chapters. Each
chapter is one Markdown file in this directory. For now, most chapters
link out to their wiki page for organizers, events, and reports; a chapter
can graduate to its own page here when there's enough content to warrant
one.

{{< alc_chapter_list >}}

Don't see your town or city? [Start a chapter](/alc/start-a-chapter.html).
