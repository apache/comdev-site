---
title: Start an ALC Chapter
tags: ["alc","community"]
---

So there's no [ALC chapter](/alc/) in your town or city yet, and you'd
like to start one. Wonderful! Here's what's involved.

{{% toc %}}

## Before you apply

* **Check the map first.** There is a single ALC chapter per town or
  city. Look at the [list of chapters](/alc/) to make sure one doesn't
  already exist in your location.
* For large metropolitan areas (for example the San Francisco Bay Area, or
  Los Angeles), more than one chapter can make sense. The ComDev PMC
  reviews these requests and decides on a case-by-case basis.

## How to apply

The formal application steps are maintained on the ALC wiki, in the
*Process to establish an ALC Chapter* document, linked from the
[ALC program page](https://cwiki.apache.org/confluence/display/COMDEV/Apache+Local+Community+-+ALC).
In outline:

1. Confirm there is no existing chapter in your town or city.
2. Follow the process linked at the above document.

Once your chapter is approved, [add it to this site](#adding-your-chapter-to-this-site)
so it appears on the map.

## Adding your chapter to this site

Each chapter on the map is a single Markdown file in
[`source/alc/chapters/`](https://github.com/apache/comdev-site/tree/main/source/alc/chapters)
in the website repository. To add yours, copy an existing file and edit
its front matter:

```yaml
---
title: ALC CityName
city: CityName
country: Country
lat: 00.0000
lon: 00.0000
status: active        # active | proposed | dissolved
started: 2026
last_activity: 2026-01-01   # YYYY-MM-DD of the chapter's most recent
                            # activity. A chapter with no activity for over
                            # a year is marked "dormant" — a distinct color
                            # on the map and a badge in the list (not hidden,
                            # so it can be revived). Organizer names are NOT
                            # listed here — they live on the wiki page.
links:
  website: https://example.org/
  slack: "#alc-cityname"
  wiki: https://cwiki.apache.org/confluence/display/COMDEV/...
---

A short paragraph about the chapter, its focus, and how to get involved.
```

The map and the chapter list are generated automatically from these
files, so a pull request adding one Markdown file is all it takes. By
default a chapter does **not** get its own page — all chapters are listed
together on the [chapters page](/alc/chapters/), each linking to its wiki
page. When a chapter has enough content to warrant a dedicated page, add
`build: {render: always}` to its front matter and the list and map will
link to that page instead of the wiki.
