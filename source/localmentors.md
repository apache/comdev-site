---
title: LocalMentors
---

The Local Mentors project aims to allow people getting started in Apache
(both within the [Formal Mentoring Program](mentoringprogramme.html)
, and everyone else) to meet up with existing Apache developers in their
area.

<a name="LocalMentors-Why?"></a>
# Why?

When you're getting involved in a new open source project, it can be a little daunting. You engage in the mailing lists with people from all around the world. You solve bugs with people in different time zones. You develop patches with people from different languages and cultures. Perhaps you have a mentor ([Formal](mentoringprogramme.html)
 or informal) from your project, but the chances area, they're a thousand
miles away.

This global reach is some of where open source derives its power from.
However, for many people approaching it for the first time, it can present
an odd challenge.

No matter which project you're involved in, there may well be some things
that you're finding a little different or difficult that are specific to
where you are. Perhaps you'd like some tips on making the best use of the
time zone difference between yourself and a couple of the main developers
on the project? Perhaps English isn't your first language, and you'd like
to double check some points of technical language that are leading to
confusion? Perhaps you'd like to chat over some of the cultural differences
that you've spotted? Or maybe you've just spent a lot of time communicating
about open source electronically, and you'd really like to see a real face
for once\!

That's where the local mentor project steps in. Find an existing Apache
committer near you, head to a cafe or pub, grab a coffee or a beer, and
have a chat. They probably won't know your project, but they'll hopefully
know the rest\!


<a name="LocalMentors-Ifyou'relookingforalocalmentor"></a>
# If you're looking for a local mentor

First up, make sure a local mentor's the right thing for you. The Local
Mentoring project has different aims to the [Formal Mentoring Program](mentoringprogramme.html)
. If you're after someone who knows your project, or someone who's
available over a prolonged period of time, then the 
[Formal Mentoring Program](mentoringprogramme.html) is a better fit.

However, if you'd like to meet up with someone to put a friendly face on
the ASF, and discuss open source and Apache from where you are, hopefully
in your own language, then this might be the right thing for you.

  
  

To find a local mentor, please visit [http://community.zones.apache.org/](http://community.zones.apache.org/)

  
  

Using [http://community.zones.apache.org/](http://community.zones.apache.org/)
, you simply need to enter your location, and search for Apache committers
willing to act as local mentors near you. Drop them an email to introduce
yourself. However, please remember that they will be giving up their time
to meet and help you, so you'll almost certainly need to work to their
location and availability\!

While Apache has committers in almost all corners of the world, not all of
them are currently part of the local mentoring program. As such, you might
discover that you can't find anyone near you. In that case, either look for
people near where you might visit in the future, or failing that, see if
any other open source foundations or local groups have anything near you.

<a name="LocalMentors-HowexistingApacheCommitterscangetinvolved"></a>
# How existing Apache Committers can get involved

If you think you could spare the odd hour everyone once in a while, to sit
down over a beer or a coffee and chat about Open Source and the Apache Way,
then we'd love you to get involved\! You're not signing up to a long-term
mentoring relationship (see the [Formal Mentoring Program](mentoringprogramme.html)
 if you're interested in that though) Just every so often, helping out
someone who lives near you.

Firstly, you'll need a FOAF entry on people.apache.org. Take a look at [http://people.apache.org/foaf/](http://people.apache.org/foaf/)
 for instructions on setting this up if you haven't already done so. Next,
ensure that you have listed your location - we need that to be able to let
people search for you.

Now, if you haven't already done so, checkout the committers directory from
svn:

    svn co https://svn.apache.org/repos/private/committers/


Edit *local-outreach/CommunityDevelopment.rdf* and add yourself in as a
helper. If your FOAF file is in svn and showing up on people.apache.org,
add in:

     <helper>
       <foaf:Person rdf:resource="urn:org:apache:[your username].rdf" />
     </helper>

If you have your FOAF file externally hosted, then the **rdf:resource**
should point to the URL of the file.

For an apache committer with username "foo", your entry would be one of:

     <helper>
       <foaf:Person rdf:resource="urn:org:apache:foo.rdf" />
     </helper>
     <helper>
       <foaf:Person rdf:resource="http://www.example.com/foaf/foo.rdf" />
     </helper>


Within 24 hours of committing your addition to
*local-outreach/CommunityDevelopment.rdf*, you should appear in the web
application\! Head over to [http://community.zones.apache.org/](http://community.zones.apache.org/)
 a day later a check you're listed properly
