---
title: An approach to community building from Apache Beam
date: 2019-02-22
blog_post: true
published_by: Kenn Knowles, VP Apache Beam
tags: ["blog"]
---

[Apache Beam](https://beam.apache.org/) has been a top-level project since January 2017. I, current Beam PMC Chair,
would like to share some of Beam's recent efforts to tackle the challenges of growing our community.

_**[Updated Feb 27, 2019 to clarify that the article is authored by the Beam PMC Chair and describes the Beam project's
work to build their own community. Previously it could have mistakenly been read as an ASF Foundation statement about
the Beam project, or as describing an ASF action taken upon the Beam project. Neither is the the case.]**_

We identified two things we want to improve in our contributor/committer-base, common to many open source projects:

1. We could use more committers to review all the code being contributed, in part due to recent departure of a few committers
1. We want our contributor-base (hence committer-base) to be more spread across companies and backgrounds. This is a
core value of the Apache Software Foundation. In particular, the project's direction should not be dominated by any
company, and the project should be able to survive the departure of a major contributor or all contributors from a
particular employer. Eventually, we hope that our user base is active and diverse enough that this happens naturally.
But we are not there yet, so instead we have to work hard to build our community around the software we already have.

#### What we did

**Committer guidelines**

We published [committer guidelines](https://beam.apache.org/contribute/become-a-committer) for transparency and as an
invitation. We start by emphasizing that there are many kinds of contributions, not just code. We have committers from
community development, tech writing, training, etc. Then we have three aspects:

1. ASF code of conduct
1. ASF committer responsibilities
1. Beam-specific committer responsibilities

The best way to understand is to read the guidelines. The important influence on the community is this: you shouldn't
be proposing a committer for other reasons, such as a new member of your team at work, or forging political alliances.
And you shouldn't be blocking a committer for other reasons, such as any reason that isn't about their actions as an
individual.

**Instead of just discussing potential committers and PMC members, we discuss many layers of the community**

Previously, when a PMC member noticed a contributor that they thought might make a good committer, they would start a
thread with a subject like "[DISCUSS] Potential committer: Jane Doe". The PMC would discuss and it could lead to a vote
or not. More rarely, a similar process was followed for new PMC members.

We were fortunate to have Gris Cuevas (gris@apache.org) working with us, and she outlined these phases that people go
through in their relationship with our project:

1. aware of it
1. interested in it / checking it out
1. using it for real
1. first-time contributor
1. repeat contributor
1. committer
1. PMC

As soon as we notice someone, like a user asking really deep questions, we invite discussion on private@ on how we can
move them to the next level of engagement.

**Monthly cadence**

About every month, we call for new discussions and revisit prior discussions. This way we do not forget to keep up this
effort.

**Individual discussions**

For each person we have a separate thread on private@. This ensures we have quality focused discussions that lead to
feedback. In collective discussions that we used to do, we often didn't really come up with actionable feedback and
ended up not even contacting major contributors to encourage them. And consensus was much less clear.

**Feedback!**

If someone is brought up for a discussion, that means they got enough attention that we hope to engage them more.
But unsolicited feedback is never a good idea.

For an early contributor, we have sent a simpler encouragement email thanking them, being sure to be specific about the
contribution(s) discussed, so they know we really did pay attention and it is not just a form letter. And if we missed
something, they can let us know :-)

For a contributor who was discussed as a potential committer, we did this:

1. Send an email saying something like "you were discussed as a potential committer - do you want to become one? do you
want feedback?"
1. If they say yes (so far everyone) we send a few bullet points from the discussion and *most important* tie each
bullet to the committer guidelines. Formulating this feedback is important for helping contributors to learn, but it
also serves as a check against bias and politics. If we found ourselves unable to specify such feedback, that is a sign
that we are deciding for a reason other than those we have declared and agreed upon.

We have seen a _very_ significant increase in engagement from those we sent feedback to. Almost all of them become more
active but also they act on the feedback and really engage The Apache Way (as interpreted by Beam). Most become
committers. But not only that, they become mentors for other new contributors.

**Results**

* Q1 we had no process and we invited no new committers or PMC members.
* Q2 when we tried these new things we invited 7 committers and 1 PMC member, with a few obvious committer candidates
for next time around, plus positive feedback from other contributors, spread across five companies.
* Q3 we invited 3 committers
* Q4 we have invited 5 committers (so far!) 

We've had a pretty major uptick in building Beam as a result.

**Review-then-commit**

I want to conclude with another formal change we made around the same time. Beam uses
[review-then-commit](https://www.apache.org/foundation/glossary.html#RTC), a pretty typical GitHub workflow. Previously,
the reviewer was required to be a committer, even if the author was a committer. So non-committers had no opportunity
to review code. We changed our policy to require that _either_ the reviewer _or_ the author be a committer. Rationale:
if we trust someone as a committer, we should trust their choice of reviewer.

But most important for this post: reviews are not just a way to make code better or spread knowledge, they are a place
where community is built. Letting non-committers review code by committers gives them another opening to the Beam
community. I like to reference this quote by Richard Stallman that really drew me in to open source development:
"The fundamental act of friendship among programmers is the sharing of programs" and reviews are one place where we do
that.
