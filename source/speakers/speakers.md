---
title: Listing yourself as a Potential Speaker
---

If you're an Apache committer interested in speaking about Apache 
Technologies, Apache Projects or the Apache Software Foundation as a whole, 
we encourage you to get involved and list yourself in our speaker 
application!

## Finding Speakers

If you are organising an event and looking for speakers, see
[the Apache Speakers homepage](/speakers/) for details.

## Listing yourself as a potential speaker

To list yourself as someone interested in being an Apache speaker, there are
two steps. The first is to create a FOAF ("friend of a friend") file for yourself that includes
a couple of key pieces of information. The second is to list yourself in the
speaking DOAP ("description of a project") file.

### Creating your FOAF file

If you do not already have a FOAF file for yourself, creating one is very easy. Details on how to create a FOAF file, along with a
handy wizard to guide you through the process, are available at
[https://people.apache.org/foaf/](https://people.apache.org/foaf/).

Since you are a potential speaker we do require you
to include a few key bits of information in the FOAF file. These are:

 * Your location
 * The projects you are involved in (include foundation-wide ones, too, if you're
   happy to talk about these)
 * Your Twitter ID (so we can point people at your speaking history on 
   [Lanyrd](http://lanyrd.com/))


### Listing yourself in the Speakers DOAP file

If you haven't already done so, check out the committers directory from
svn:

    `svn co https://svn.apache.org/repos/private/committers/`

Edit `local-outreach/ApacheSpeakers.rdf` and add yourself in as a
helper. If your FOAF file is in svn and showing up on people.apache.org,
add in:

```
     <helper>
       <foaf:Person rdf:resource="urn:org:apache:[your username].rdf" />
     </helper>
```

If you have your FOAF file externally hosted, the **rdf:resource**
should point to the URL of the file.

For an apache committer with username "foo", your entry would be one of:

```
     <helper>
       <foaf:Person rdf:resource="urn:org:apache:foo.rdf" />
     </helper>
     <helper>
       <foaf:Person rdf:resource="https://www.example.com/foaf/foo.rdf" />
     </helper>
```

Within 24 hours of committing your addition to
*local-outreach/ApacheSpeakers.rdf*, you should appear in the web
application as a potential speaker! Head over to 
[https://community.zones.apache.org/](https://community.zones.apache.org/)
a day later to confirm that you're listed properly.
