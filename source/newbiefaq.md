---
title: Apache Newcomer FAQs
---

These answers to frequently asked questions may help newcomers to
The Apache Software Foundation (ASF) and our many Apache projects understand how we work.

*Index of Questions*

  - [About The Apache Software Foundation](#NewbieFAQ-AboutTheApacheSoftwareFoundation)
      - [How do I find projects or technologies at the ASF?](#NewbieFAQ-WhatprojectscanIfindinTheApacheSoftwareFoundation?)
      - [How are projects managed at the ASF?](#NewbieFAQ-HowareprojectsmanagedinTheApacheSoftwareFoundation)
      - [How do I ask a question about the ASF in general?](#NewbieFAQ-HowdoIaskaquestionabouttheASFingeneral?)
      - [How do I get user support for an Apache project?](#NewbieFAQ-HowdoIgetusersupportforanASFproject?)
  - [Getting involved with Apache projects](#NewbieFAQ-GettingInvolvedwithApacheprojects)
      - [How do I choose an Apache project to work on?](#NewbieFAQ-HowdoIchooseanApacheprojecttoworkon?)
      - [How do I get involved with an Apache project?](#NewbieFAQ-HowdoIgetinvolvedwithanApacheproject?)
      - [Is there a Code of Conduct for Apache projects?](#NewbieFAQ-IsthereaCodeofConductforApacheprojects?)
  - [How do I suggest or make changes to this website?](#websitecms)
  - [What other useful websites about Apache are there?](#comdevweb) 
  - [How do I report a bug for Comdev websites or tools?](#comdevbug)   

We are always looking for better ways to help newcomers to the ASF find 
the information they're looking for. Please ask questions or give us suggestions on
[dev@community.apache.org](mailto:dev@community.apache.org) (subscribe by sending an email to
[dev-subscribe@community.apache.org](mailto:dev-subscribe@community.apache.org) first).


<a name="NewbieFAQ-AboutTheApacheSoftwareFoundation"></a>
# About The Apache Software Foundation

<a name="NewbieFAQ-WhatprojectscanIfindinTheApacheSoftwareFoundation?"></a>
## What projects can I find in The Apache Software Foundation?

There are over 350 separate projects and communities hosted at the Apache Software Foundation. We have
three classes, or types, of project (in terms of their community, not in terms of technology):

   * [Top Level Projects](https://projects.apache.org) (TLPs): these are projects with healthy communities and active development; and supported software products you can find here: [listing by technologies](https://projects.apache.org/).
   * [Incubating Projects](https://incubator.apache.org): these are projects that have yet to build a sustainable community, but
have active development and are moving towards graduating to become TLPs.
   * [Attic](https://attic.apache.org): these are end-of-life projects that are no longer receiving active
development, but may still be useful.

<a name="NewbieFAQ-HowareprojectsmanagedinTheApacheSoftwareFoundation"></a>
## How are projects managed in the Apache Software Foundation?

Apache project participants all believe that if we look after the community, good
code will emerge from that community. That is, when people with similar
needs come together, they will work out a way to solve their common
problems. For this reason we created the Community
Development project (where you are right now). The ASF has grown to be very
large and, from the outside, can look too mature for newcomers and novices.
However, these communities seek to be flat in structure. No single person
in any community has more influence than the next; a newcomer with a good
idea has just as much input and influence as the original creator of the
project.

We do have a system, _meritocracy_, that allows those who have
demonstrated commitment and understanding to the community to earn certain
privileges, such as being able to make changes directly to documentation
and program code. However, these privileges simply streamline the
process; they do not (in most cases) give additional powers over the
project.

In summary, Apache projects work because people like you participate
constructively within them!

To learn more about "The Apache Way" in general, see the [How it Works](https://apache.org/foundation/how-it-works.html)
 pages. We also have [detailed overviews of how the ASF and projects are governed](https://www.apache.org/foundation/governance/).

<a name="NewbieFAQ-HowdoIaskaquestionabouttheASFingeneral?"></a>
## How do I ask a question about the ASF in general? ## {#generalquestion}

The Community Development Project is here for this very purpose. Check out
the resources on this site first. If you don't find the answer to your question, send an email
to `dev@community.apache.org` (subscribe first by sending an email to
`dev-subscribe@community.apache.org`).

<a name="NewbieFAQ-HowdoIgetusersupportforanASFproject?"></a>
## How do I get user support for an ASF project?

Everyone active in ASF projects is here as a volunteer. You need to be
careful not to waste people's time, so do your homework. Generally, if
people can see that you have tried to solve your problem before asking for help, they are more
likely to respond. So, before asking a question, do the following:

* Search that project's documentation
* Search that [project's user@ mailing list archives](https://mail-archives.apache.org/mod_mbox/)
* Search the project issue tracker for any related known issues
* Search the web in general

If you don't find a solution, send a concise, but detailed, request for
support to the appropriate `users@` mailing list (you will usually need to
subscribe first, by sending an email to `users-subscribe@`). Indicate that you have read the appropriate documentation
and explain what you have tried, what you expect to happen and what
actually happens. All Apache projects should have a "Mailing List", 
"How to Contribute" or similar link on their home page that tells you how to subscribe 
to that project's specific lists. Mailing lists at Apache are also 
[publicly archived][1] at the ASF and [elsewhere][2].

Be patient waiting for a response: give it at least three working days
before you send a second message. People are busy, and they will deal with your
request when they can. If you need urgent help it is best not to rely on
the community support channels, but to find an outside organization willing to support you for
a fee. Remember that committers on Apache mailing lists are generally working as volunteers.

It is worth noting that people are more willing to help those who
contribute back to the project in some way. If you hit a problem that was
not documented, it is likely others will, too. A good idea is to propose a
patch to the project to improve its documentation. Then those
who follow in your footsteps get an answer in the first step above and you
start to build merit in the community that will result in further help in
the future.

A second way of contributing is to provide user support to others as your
expertise grows. Again, earning merit in this way will help you to get
the support you need in the future.


<a name="NewbieFAQ-GettingInvolvedwithApacheprojects"></a>
# Getting Involved with Apache projects

<a name="NewbieFAQ-HowdoIchooseanApacheprojecttoworkon?"></a>
## How do I choose an Apache project to work on?

The key to working on projects at Apache (and any open source project, for that
matter) is to have a personal reason for being involved. You might be
trying to solve a day job issue, you might be looking to learn a new
technology or you might simply want to do something fun in your free time.
The key is that you must *want* to get involved. It is also important that
you have appropriate skills to be able to help the project.

Our [projects page](https://projects.apache.org/) provides a list of projects that you can sort alphabetically, by category or by language. When you view a project's details
page you can find out about its mailing lists, issue tracker and other resources.

In the project's issue tracker you will find details of bugs and feature
requests the project would like help with. This should give you some
inspiration about how you might be able to help the project community. If
you see an issue you would like to tackle, it's time to join the project's
mailing list and get started.

<a name="NewbieFAQ-HowdoIgetinvolvedwithanApacheproject?"></a>
## How do I get involved with an Apache project?

You can improve your programming skills by watching the `commit`
lists, receiving code reviews and participating in discussions. However,
this learning opportunity is a healthy side effect of open source
activities rather than a goal in itself. Nobody in an Apache project is
going to spend time teaching you Programming 101, technical writing or
testing (to mention just a few of the skills we need). You need to know the basics
and be willing to research the rest.

To learn more about getting involved with an Apache Project, see our [getting
started guide][3]. You will also find our [get involved](https://apache.org/foundation/getinvolved.html) page a useful starting point.

<a name="NewbieFAQ-IsthereaCodeofConductforApacheprojects?"></a>
## Is there a Code of Conduct for Apache projects?

Our code of conduct is posted at 
[https://www.apache.org/foundation/policies/conduct.html](https://www.apache.org/foundation/policies/conduct.html).
The ASF expects that everyone participating on an Apache project, whether it be improving websites; contributing to email lists, bugtrackers, or forums hosted at `apache.org`; or contributing code will abide by our code of conduct.

PMCs are allowed to define their own additional codes of conduct for their individual communities, but all PMCs are expected to abide by the Foundation-wide policy.

The [Incubator document](https://incubator.apache.org/guides/committer.html) also 
has some really useful information for both the newbie and the
old hands. The section on **ASF Mottos** is especially useful as a reminder of the way things are in most ASF
projects. This section includes such gems as:

* Put community before code. 
* Let them who do the work make the decisions. 
* If it didn't happen on a mailing list, it didn't happen. 
* Don't feed the trolls. 

# How do I suggest changes to this website? # {#websitecms}

The content for the `community.apache.org` website is written in Markdown
and published automatically using a [Jenkins job](https://ci-builds.apache.org/job/Community%20Development/job/site/).
Any contributor is able to submit changes via pull requests. Comdev committers are able to merge
proposed changes.

Website sources are available via:
- GitHub: https://github.com/apache/comdev-site
- Gitbox: https://gitbox.apache.org/repos/asf/comdev-site.git

For general questions you can [ask us on dev@community](#generalquestion)
or read our [mailing list archives][7] for past questions and answers.

For technical website details, see [About this Website][8].
To submit a formal bug, see our [COMDEV JIRA](#comdevbug).

# What else does Community Development publish or manage? # {#comdevweb}

The Community Development project maintains several other tools 
that help you navigate the ASF.

  - The [Apache Projects Directory][9] lists all our software technologies, and you can learn [how it works][10] and what JSON data feeds are available.
  - [Home.apache.org][11] serves as a telephone directory of all Apache committers.  
  - Apache committers can log in to the [Project Reporting Tool][14] that helps PMCs create quarterly board reports; you can [see the code that does this][15].
  - A [ComDev Wiki][wiki] is also available for scratch or experimental work, although most permanent content should be here in the website.

# How do I report a bug for Comdev websites or tools? # {#comdevbug}

The Community Development project has a Jira issue tracker queue where you
can submit bug reports related to any of our services or websites.

  - [https://issues.apache.org/jira/browse/COMDEV](https://issues.apache.org/jira/browse/COMDEV)


  [1]: https://mail-archives.apache.org/mod_mbox/
  [2]: https://apache.markmail.org/
  [3]: /gettingStarted/101.html
  [7]: https://lists.apache.org/list.html?dev@community.apache.org:lte=3M:
  [8]: /about/#about-this-website
  [9]: https://projects.apache.org/
  [10]: https://projects.apache.org/about.html
  [11]: https://home.apache.org/
  [14]: https://reporter.apache.org/
  [15]: https://svn.apache.org/repos/asf/comdev/reporter.apache.org/

[wiki]: https://cwiki.apache.org/confluence/display/COMDEV/ComDev+Wiki
