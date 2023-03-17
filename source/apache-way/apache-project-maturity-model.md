---
title: A Maturity Model for Apache Projects
---

The **Apache Project Maturity Model** provides a suggested framework for evaluating the overall maturity of an Apache project community and the codebase that it maintains.  While this model is specific to projects of the Apache Software Foundation (ASF), many of these factors apply to any open source project.

# Overview

The goals of this maturity model are to describe how Apache projects operate in a concise and high-level way, and to provide a basic framework that projects may choose to use to evaluate themselves.

It is usable outside of the ASF as well, for projects that might want to adopt some or all of these principles. Projects that envision moving to the ASF at some point might start working towards this to prepare for their move.

It does not describe all the details of how our projects operate, but aims to capture the invariants of Apache projects and point to additional information where needed. To be as concise as possible we use footnotes for anything that's not part of the core model.

Contrary to other maturity models, we do not define staged partial compliance levels. A mature Apache project complies with all the elements of this model, and other projects are welcome to adopt the elements that suit their goals.

Note that we try to avoid using the word "must" below. The model describes the state of a mature project, as opposed to a set of rules. 

Projects which incubate at the ASF might not fit into all the parts of this model; however a major goal of incubation is to bring the project's community closer to it.

We welcome questions and feedback about this model on the <a href="https://lists.apache.org/list.html?dev@community.apache.org" target="_blank">comdev mailing list</a>.

# The Apache Project Maturity Model

Each item in the model has a unique ID to allow it to be easily referenced elsewhere. 

## Code

<dl>
<dt id="CD10">CD10</dt>
<dd>
The project produces Open Source software for distribution to the public, at no charge.
<sup><a href="#fnref-a2e0cd066fd8f45af4e87bcdbf8d9abd3ad40872" id="fndef-a2e0cd066fd8f45af4e87bcdbf8d9abd3ad40872-0">1</a></sup>
</dd>

<dt id="CD20">CD20</dt>
<dd>
Anyone can easily discover and access the project's code. 
</dd>

<dt id="CD30">CD30</dt>
<dd>
Anyone using standard, widely-available tools, can build the code in a reproducible way.
</dd>

<dt id="CD40">CD40</dt>
<dd>
The full history of the project's code is available via a source code 
control system, in a way that allows anyone to recreate any released version. 
</dd>

<dt id="CD50">CD50</dt>
<dd>
The source code control system establishes the provenance of each line of code in a reliable way, based on strong authentication of the 
committer. When third parties contribute code, commit messages provide reliable information about the code provenance.
<sup><a href="#fnref-1a581282a720702d3a9e11f81f8c9eeddbee55a9" id="fndef-1a581282a720702d3a9e11f81f8c9eeddbee55a9-1">2</a></sup> 
</dd>

</dl>

## Licenses and Copyright

<dl>
<dt id="LC10">LC10</dt>
<dd>The Apache License, version 2.0, covers the released code.
</dd>

<dt id="LC20">LC20</dt>
<dd>
Libraries that are mandatory dependencies of the project's code do not create more restrictions than the Apache License does.
<sup><a href="#fnref-76d333d056757395d9b6eb1d62e91a57dad757fa" id="fndef-76d333d056757395d9b6eb1d62e91a57dad757fa-2">3</a></sup> 
<sup><a href="#fnref-3e4d977daeeb59a808fb0c40477b2cd50e913f2e" id="fndef-3e4d977daeeb59a808fb0c40477b2cd50e913f2e-3">4</a></sup> 
</dd>

<dt id="LC30">LC30</dt>
<dd>
The libraries mentioned in LC20 are available as Open Source software. 
</dd>

<dt id="LC40">LC40</dt>
<dd>Committers are bound by an Individual Contributor Agreement (the <a href="https://www.apache.org/licenses/icla.txt">"Apache iCLA"</a>) that 
defines which code they may commit and how they need to 
identify code that is not their own. 
</dd>

<dt id="LC50">LC50</dt>
<dd>
The project clearly defines and documents the copyright ownership of everything that the project produces.
<sup><a href="#fnref-258df7a61c975c67bbef17d3cf7851bafd40b8fb" id="fndef-258df7a61c975c67bbef17d3cf7851bafd40b8fb-4">5</a></sup>  
</dd>

</dl>

## Releases
<dl>

<dt id="RE10">RE10</dt>
<dd>Releases consist of source code, distributed using standard and open archive 
formats that are expected to stay readable in the long term.
<sup><a href="#fnref-d2389850862fcc9bddabb3c2e23b13922d68e3fc" id="fndef-d2389850862fcc9bddabb3c2e23b13922d68e3fc-5">6</a></sup> 
</dd>

<dt id="RE20">RE20</dt>
<dd>
The project's PMC (Project Management Committee, see CS10) approves each software release in order to make the release an act of the Foundation.
</dd>

<dt id="RE30">RE30</dt>
<dd>
Releases are signed and/or distributed along with digests that anyone can reliably use to validate the downloaded archives.
</dd>

<dt id="RE40">RE40</dt>
<dd>The project can distribute convenience binaries alongside source code, but they are not Apache Releases, they are provided with no guarantee.
</dd>

<dt id="RE50">RE50</dt>
<dd>The project documents a repeatable release process so that
someone new to the project can independently generate the complete
set of artifacts required for a release.
</dd>

</dl>


## Quality
<dl>

<dt id="QU10">QU10</dt>
<dd>The 
project is open and honest about the quality of its code. Various levels
 of quality and maturity for various modules are natural and acceptable 
as long as they are clearly communicated. 
</dd>

<dt id="QU20">QU20</dt>
<dd>
The project puts a very high priority on producing secure software.
<sup><a href="#fnref-89a5257606b929cc5ced2bee207c80b43541d488" id="fndef-89a5257606b929cc5ced2bee207c80b43541d488-6">7</a></sup> 
</dd>

<dt id="QU30">QU30</dt>
<dd>
The project provides a well-documented, secure and private channel to report security issues, along with a documented way of responding to them.
<sup><a href="#fnref-7c23a24b04dcf9b4b10423685fbd37f69b2b3783" id="fndef-7c23a24b04dcf9b4b10423685fbd37f69b2b3783-7">8</a></sup> 
</dd>

<dt id="QU40">QU40</dt>
<dd>The project puts a high priority on backwards compatibility and aims to document any incompatible changes and provide tools and documentation to help users transition to new features. 
 </dd>
 
 <dt id="QU50">QU50</dt>
 <dd>
 The project strives to respond to documented bug reports in a timely manner. 
 </dd>
 </dl>

## Community

<dl>

<dt id="CO10">CO10</dt>
<dd>
The project has a well-known homepage that points to all the information required to operate according to this maturity model. 
</dd>

<dt id="CO20">CO20</dt>
<dd>
The community welcomes contributions from anyone who acts in good faith and
 in a respectful manner, and who adds value to the project. 
</dd>
 
<dt id="CO30">CO30</dt>
<dd>
Contributions include source code, documentation, constructive bug 
reports, constructive discussions, marketing and generally anything that adds value to the project. 
</dd>
 
<dt id="CO40">CO40</dt>
<dd>
The community strives to be meritocratic and gives more rights and 
responsibilities to contributors who, over time, add value to the project. 
</dd>

<dt id="CO50">CO50</dt>
<dd>
The project documents how contributors can earn more rights such as commit
access or decision power, and applies these principles consistently.
</dd>

<dt id="CO60">CO60</dt>
<dd>
The community operates based on consensus of its members (see CS10) who 
have decision power. Dictators, benevolent or not, are not welcome in 
Apache projects. 
</dd>

<dt id="CO70">CO70</dt>
<dd>
The project strives to answer user questions in a timely manner.
</dd>

</dl>

## Consensus Building
<dt id="CS10">CS10</dt>
<dd>The 
project maintains a public list of its contributors who have decision 
power. The project's PMC (Project Management Committee) consists of
those contributors. 
</dd>

<dt id="CS20">CS20</dt>
<dd>
Decisions require a consensus among PMC members
<sup><a href="#fnref-08fda1a3461c11086b8542178f35e0c27a4a46c3" id="fndef-08fda1a3461c11086b8542178f35e0c27a4a46c3-8">9</a></sup>
 and are documented on the project's main communications channel. 
The PMC takes community opinions into account, but the PMC has the final word.
 </dd>
 
 <dt id="CS30">CS30</dt>
 <dd>
 The project uses documented voting rules to build consensus when discussion is not sufficient.
 <sup><a href="#fnref-9b0cf71f04bcd81dddbf6199f1c771e27566611e" id="fndef-9b0cf71f04bcd81dddbf6199f1c771e27566611e-9">10</a></sup> 
 </dd>
 
 <dt id="CS40">CS40</dt>
 <dd>In Apache projects, vetoes are only valid for code commits. The person exercising the veto must justify it with a technical explanation, as per the Apache voting rules
defined in CS30. 
</dd>

<dt id="CS50">CS50</dt>
<dd>
All "important" discussions happen asynchronously in written form on the 
project's main communications channel. Offline, face-to-face or private discussions
<sup><a href="#fnref-d9e7a517f046358463f038f3830fef171e69f78b" id="fndef-d9e7a517f046358463f038f3830fef171e69f78b-10">11</a></sup> 
that affect the project are also documented on that channel. 
</dd>

</dl>

## Independence

<dl>

<dt id="IN10">IN10</dt>
<dd>
The project is independent from any corporate or organizational influence.
<sup><a href="#fnref-764b2c2fd32deb4ff73ea01efa67c8556303c359" id="fndef-764b2c2fd32deb4ff73ea01efa67c8556303c359-11">12</a></sup> 
</dd>

<dt id="IN20">IN20</dt>
<dd>Contributors act as themselves, not as representatives of a corporation or organization.
</dd>

</dl>

# How To Use The Apache Project Maturity Model

**Remember:** This model is a guide; it is not a requirements document. The model shows what generally good behaviors in an Apache project look like.

So far, inside the ASF, podlings preparing their graduation 
from the [Apache Incubator](https://incubator.apache.org) have used this model, mostly for self-assessment.

It might be useful for top-level ASF projects to regularly assess their maturity based on this model, but this is not a requirement at this time.

Here are a few self-assessment examples:

* [Apache Groovy podling self-assessment, 2015](https://github.com/apache/groovy/blob/576b3c5d6a7022ac4a8df1ef118666456ce627fb/MATURITY.adoc)
* [Apache Taverna Graduation Maturity Assessment, 2016](https://cwiki.apache.org/confluence/display/TAVERNADEV/2016-03+Taverna+Graduation+Maturity+Assessment)
* [Apache CarbonData Podling Maturity Assessment, 2017](https://cwiki.apache.org/confluence/display/CARBONDATA/Apache+Maturity+Model+Assessment+for+CarbonData)
* [Apache ServiceComb Maturity Model Assessment, 2018](https://cwiki.apache.org/confluence/display/SERVICECOMB/Apache+Maturity+Model+Assessment+for+ServiceComb)

## Other Open Source Project Models

See [https://s.apache.org/apache_maturity_model](https://s.apache.org/apache_maturity_model) for the discussions that led to this document. Thanks to the many people who provided input! The links below are both inspirations for our model, and are some of the other ways that FOSS project participants have tried to quantify ways to measure open source projects.

* [http://oss-watch.ac.uk/resources/ssmm](http://oss-watch.ac.uk/resources/ssmm)
* [https://osswatch.jiscinvolve.org/wp/2014/12/11/open-or-fauxpen-use-the-oss-watch-openness-rating-tool-to-find-out/](https://osswatch.jiscinvolve.org/wp/2014/12/11/open-or-fauxpen-use-the-oss-watch-openness-rating-tool-to-find-out/)
* [https://blogs.apache.org/comdev/entry/what_makes_apache_projects_different](https://blogs.apache.org/comdev/entry/what_makes_apache_projects_different)
* [https://rfc.zeromq.org/spec:16](https://rfc.zeromq.org/spec:16)
* [http://oss-watch.ac.uk/resources/reusereadinessrating](http://oss-watch.ac.uk/resources/reusereadinessrating)
* [https://en.wikipedia.org/wiki/Capability_Maturity_Model_Integration](https://en.wikipedia.org/wiki/Capability_Maturity_Model_Integration)
* [https://www.apache.org/dev/project-requirements](https://www.apache.org/dev/project-requirements)

## Status / Document Version

v 1.0, February 2015, defined by consensus by Apache Community Development project.

v 1.1, October 2016 added RE50.

v 1.2, February 2018, reworked the "how to use" section with more links to self-assessments.

v 1.3, June 2021, improve readability and simplify the language where possible.

See the <a href="https://svn.apache.org/viewvc/comdev/site/trunk/content/apache-way/apache-project-maturity-model.mdtext?view=log" target="_blank">svn revision history</a> (for older
versions) and <a href="https://github.com/apache/comdev-site/commits/master/source/apache-way/apache-project-maturity-model.md">GitHub history</a> (since March 2020) of this document for more details and other minor changes.

### Footnotes

<ol>

<li>
<a id="fnref-a2e0cd066fd8f45af4e87bcdbf8d9abd3ad40872"></a>
"For distribution to the public at no charge" is straight from the from the ASF Bylaws at <a class="http" href="https://apache.org/foundation/bylaws.html" target="_blank">https://apache.org/foundation/bylaws.html</a>.  

(<a href="#fndef-a2e0cd066fd8f45af4e87bcdbf8d9abd3ad40872-0">1</a>)
</li>

<li>
<a id="fndef-1a581282a720702d3a9e11f81f8c9eeddbee55a9-1"></a>
See also LC40.  

(<a href="#fndef-1a581282a720702d3a9e11f81f8c9eeddbee55a9-1">2</a>)
</li>

<li>
<a id="fnref-76d333d056757395d9b6eb1d62e91a57dad757fa"></a>
It's ok for platforms (like a runtime used to execute our code) to have  different licenses as long as they don't impose reciprocal licensing on 
what we are distributing.  

(<a href="#fndef-76d333d056757395d9b6eb1d62e91a57dad757fa-2">3</a>)
</li>

<li>
<a id="fnref-3e4d977daeeb59a808fb0c40477b2cd50e913f2e"></a>
<a class="http" href="https://apache.org/legal/resolved.html">https://apache.org/legal/resolved.html</a> has information about acceptable licenses for third-party dependencies.  

(<a href="#fndef-3e4d977daeeb59a808fb0c40477b2cd50e913f2e-3">4</a>)
</li>

<li>
<a id="fnref-258df7a61c975c67bbef17d3cf7851bafd40b8fb"></a>
In Apache projects, the ASF owns the copyright for the collective work, 
i.e. the project's releases. Contributors retain copyright on their 
contributions but grant the ASF a perpetual copyright license for them. 

(<a href="#fndef-258df7a61c975c67bbef17d3cf7851bafd40b8fb-4">5</a>)
</li>
 
 <li>
 <a id="fnref-d2389850862fcc9bddabb3c2e23b13922d68e3fc"></a>
 See <a class="http" href="https://www.apache.org/legal/release-policy.html">https://www.apache.org/legal/release-policy.html</a> for more info on Apache releases.  
 
 (<a href="#fndef-d2389850862fcc9bddabb3c2e23b13922d68e3fc-5">6</a>)
 </li>
 
 <li>
 <a id="fnref-89a5257606b929cc5ced2bee207c80b43541d488"></a>
 The required level of security depends on the software's intended uses, of course. Projects should clearly document security expectations.  
 
 (<a href="#fndef-89a5257606b929cc5ced2bee207c80b43541d488-6">7</a>)
 </li>
 
 <li>
 <a id="fnref-7c23a24b04dcf9b4b10423685fbd37f69b2b3783"></a>
 Apache projects can just point to <a class="http" href="https://www.apache.org/security/">https://www.apache.org/security/</a> or use their own security contacts page, which should also point to that.  
 
 (<a href="#fndef-7c23a24b04dcf9b4b10423685fbd37f69b2b3783-7">8</a>)
 </li>
 
 <li>
 <a id="fnref-08fda1a3461c11086b8542178f35e0c27a4a46c3"></a>
 In Apache projects, "consensus" means <em>widespread agreement among people who have decision power</em>. It does not necessarily mean "unanimity".  
 
 (<a href="#fndef-08fda1a3461c11086b8542178f35e0c27a4a46c3-8">9</a>)
 </li>
 
 <li>
 <a id="fnref-9b0cf71f04bcd81dddbf6199f1c771e27566611e"></a>
 For Apache projects, <a class="http" href="https://www.apache.org/foundation/voting.html" target="_blank">https://www.apache.org/foundation/voting.html</a> defines the voting rules.  
 
 (<a href="#fndef-9b0cf71f04bcd81dddbf6199f1c771e27566611e-9">10</a>)
 </li>
 
 <li>
 <a id="fnref-d9e7a517f046358463f038f3830fef171e69f78b"></a>
Each Apache project has a private mailing list that its PMC is expected to use 
only when really needed. The private list is typically used for 
discussions about people, for example to discuss and to vote on PMC 
and committer candidates.

(<a href="#fndef-d9e7a517f046358463f038f3830fef171e69f78b-10">11</a>)
</li>

<li>
<a id="fnref-764b2c2fd32deb4ff73ea01efa67c8556303c359"></a>
Independence can be understood as basing the project's decisions on the open 
discussions that happen on the project's main communications channel, 
with no hidden agendas.
  
(<a href="#fndef-764b2c2fd32deb4ff73ea01efa67c8556303c359-11">12</a>)
</li>

</ol>
