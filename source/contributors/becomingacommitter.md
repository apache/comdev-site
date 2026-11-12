---
title: Becoming a committer
slug: becomingacommitter
tags: ["committers","newcomers","contributing"]
---

# Becoming a committer
{{% toc %}}

## Disclaimer
Nothing in this post should be construed as a guarantee. You can do everything listed here for years, and still not become a committer. This is because individuals on the project PMC, who do things for their own reasons, make the decision.

Instead, this document discusses how things should work, and sometimes do work, in some Apache Software Foundation (ASF) projects, but might not on the one you’re interested in.

Behind each of these recommendations is the assumption that you are acting in good faith, for the benefit of the project. Simply attempting to check these boxes to game the system and become a committer will reflect badly on you, and probably on your employer, too.

## Becoming a committer
Remember that becoming a committer is not a reward or a recognition, so much as it is the project expressing self-interest. That is the PMC, acting for the project, adds a person as a committer because it benefits the project, not because it’s some kind of pat on the back for the person. So every behavior we suggest here is about advancing the interests of the project. It is critical that you think, first and foremost, about being a project owner, and working towards the benefit of the project and its users.

These, therefore, are the behaviors that you should exhibit if you want to become a committer, and then a PMC member, on an ASF project. 

### Read the mailing list
ASF projects communicate on the mailing list. If you want to be involved in the community, you must set aside time every week (preferably every day) to keeping current with community discussions.

When first participating in an ASF project, you can (and should) look back in the email lists several months (or as far as you have time for) to see what has been discussed recently. You can do this at [lists.apache.org](http://lists.apache.org/).

A growing number of projects also have a presence on Slack, Discord, or somewhere else. Find where that is, and become a regular part of the conversation. A shrinking number of projects, mostly much older ones, have a presence on Libera IRC. This is where you’ll connect with the older members of the projects and learn more of the ancient project lore.

### Contribute code (and other things)
If you want to become a committer, you should make significant contributions to the project. The most obvious thing to contribute to a software project is code. Code contributions should be diverse in terms of size and significance: work on small issues and large. Collaborate with others on features and fixes, and propose significant changes yourself as they occur to you. Dig up old tickets and work towards resolving them.

In particular, work on code that is of benefit to all users, rather than focusing solely on features that benefit only yourself or your employer. As a project owner, you should care about the entire health and sustainability of the project.

Code contributions are not the only type of contribution that counts towards becoming a committer; it’s just the most common. PMCs consider design, documentation, testing, marketing, event management, and many other ways of contributing to the success of a project when thinking of making someone a committer. While the term “committer” implies committing code, it can also be interpreted as someone who is committed to the project.

### End-user support
Answering end-user questions has many benefits. It’s the best way to establish expertise in aspects of the software that effect actual users, and, thus, the best way to stay in touch with user concerns. It’s also a great way to establish and maintain visibility in the project community, because your name is always visible on the `users@` mailing list.

Caution: Do not just jump in and answer every question with visibility as a primary goal. Ensure that your answers are actually useful and contribute something to the conversation. Simply posting to every conversation, particularly when someone else has already offered a good answer, can be perceived as attempting to game the metrics.

### Documentation
Improving product documentation is one of the most effective things that you can do to improve the user experience. If you notice many people asking similar questions, this is usually an indication that the documentation is weak on that point. Fix it. When the question is asked again, point to the improved documentation and ask for feedback as to how you could improve it further.

Take criticism of the documentation as a challenge, rather than a personal attack.

As you learn about the project, consider yourself a tester of the documentation. If anything is unclear, propose a patch.

### Review PRs and tickets
Dig into unmerged PRs and outstanding tickets. Figure out how to navigate the process to get an old ticket resolved, or a PR merged. This is an investment in the project in two ways:

- The obvious improvement is getting an issue fixed or a PR merged, thus enhancing the project.
- The less-obvious way is that ancient tickets, and unmerged PRs, communicate that the project is not actively maintained, and that user issues are being ignored. This undermines project trust. Thus, addressing these things builds community trust, and increases your personal value to the project and its users.

### Be visible
Participate meaningfully in discussions on the developer mailing list. Drive discussions through to action. Advocate for changes that help yourself and your employer, but also for those that improve the project as a whole.

Get to know the important people on the project and what their priorities are. Help them achieve those priorities in whatever way you can. Figure out who you can best collaborate with to advance your own personal interests in the project, but also to improve the overall health of the project and community.

Start conversations around topics you’re passionate about, and volunteer to be the one to address them.

Do not, however, just talk to be seen. Nobody is fooled by that.

### Test and vote on releases (non-binding)

* [How to verify a release](https://apache.org/info/verification.html)

Verifying release candidates and voting whether to approve the release are critical
parts of an ASF project's life. They are also a great way to learn more
about the project, understand how and why the ASF releases software, and
raise your own profile in the project community.

Each time a project proposes to release an artifact, there is a `[VOTE]`
thread on the project's `dev` mailing list.
([Example](https://lists.apache.org/thread/48co7brm91pv0yjqd9fgpptrb7r9jnp3))
Since you're already monitoring the mailing list, you'll see these votes. 

Any community participant can vote on the release, including you! Although only PMC members' votes officially count towards the final vote tally, your review of the release candidate and vote are important for several reasons.

* Help ensure it's a good release by potentially finding problems that need to be fixed before end-users run into them
* Build trust in the project community by demonstrating your engagement and interest
* Stay current with new releases to keep your knowledge fresh
* Learn about project components you're not directly involved with (especially for projects which release multiple artifacts)

Release verification has two main purposes:

1. Ensuring the release artifact follows all official ASF release rules.
2. Confirming the release works as expected.

So in your vote message, you *should* indicate what you
verified. If you tested functionality, say what you tested, and on what
operating system(s) and architecture(s). (See example vote thread listed above for
how you might format this information.)

Non-PMC members should indicate their votes as `"(Non-binding)"` to help
the release manager tally votes correctly.

### Give talks

Propose talks to conferences about the project, and about how your employer’s customers are using it.

Proposing "Introduction to Apache Woobly" talks has many benefits. It is a great way to get the word out about the project. It’s good for establishing yourself as an expert in the field. It educates users (and potential customers) about operating the software. And it will help you identify what’s actually important about the software, how people use it, and what kinds of questions real users are asking about the software.

The ASF's Community Over Code events are obvious opportunities to give these talks, but also look for conferences about the general technology space around the project you’re contributing to.

## Once you’re a committer …

If and when you achieve your goal of becoming a committer, don’t consider your journey done. [Becoming a PMC member](/committers/becomingapmcmember.html) is a continuation of the same path. Continue to do all of the above things, focusing more on the health of the project as a whole, rather than just your personal interests or those of your employer or manager.

Also, take an active interest in other contributors, both those on your team, and those who work for other employers. Mentor them in following the same path that you followed. Encourage them. Celebrate them, and mention them to other contributors. This is an investment in the future of the project, so that, some day, when you move on to something else, the project will live on.

Interest across multiple projects, and at the Foundation-wide level, is the start of the path to becoming a Foundation Member, if that is something that interests you.

## Summary
Finally, a reminder: there’s no way to guarantee promotion to committer or the PMC. However, if you make your goal the improvement of the project, rather than just about personal promotion, and approach these recommendations as a path to project ownership, in good faith, that's your best path towards that goal.

## Resources

* Find your project’s [committer and PMC membership lists](https://projects.apache.org/)
* Read [mailing list archives](https://lists.apache.org/)
* Find your contribution count to date on Github, for example: [Apache Hadoop contributors](https://github.com/apache/hadoop/graphs/contributors) (You can drag a date range to narrow it down to recent contributions.)
* View [past board reports from your project](https://www.apache.org/foundation/board/calendar.html). This is a good way to judge the rate at which a given project adds committers and PMC members. It’s also a way to compare how long other individuals took to attain committer status.
* A number of projects have information pages on contributing and becoming a committer. As of 2023, at least [Kafka](https://kafka.apache.org/contributing.html), [NetBeans](https://netbeans.apache.org/community/committer.html), [Beam](https://beam.apache.org/contribute/become-a-committer/), [Maven](https://maven.apache.org/guides/development/guide-committer-school.html) and [Submarine](https://submarine.apache.org/docs/community/HowToBecomeCommitter/) have such pages. They might be specific to how they operate, but help see the big picture.
