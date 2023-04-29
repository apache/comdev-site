---
title: How Apache Projects Use Consensus
date: 2010-09-21
blog_post: true
published_by: bimargulies
tags: ["blog"]
---

The Apache Software Foundation exists to provide legal and technological infrastructure for open source projects. By and
large, the Foundation leaves the individual project communities to make their own choices about their development
process. There are some constraints that result from the fundamental legal umbrella held by the Foundation. For the
Foundation to protect contributors, projects must respect the rules regarding IP management and releases. A more
interesting set of constraints, however, stems from the Foundation's commitment to Open Source software development as
a _communal_ process. Apache projects are _communities_, and some of the few pan-Foundation norms exist to ensure
transparent, fair, collegial, decision-making processes.

Roughly speaking, the two pillars of the Apache community model are mailing lists and consensus process. The mailing
list policy is simple enough. Community decisions must be reached on the mailing list. This allows anyone in the
community, whatever their location or time zone, to participate. Consensus is a more complex matter.

At a first glance, consensus process is defined by the **veto**. When an important matter it put to a vote, even one '
-1' vote blocks progress. This seems like a recipe for gridlock. It isn't. It **could** be, if the consensus process
consisted only of veto rights.

Consensus wasn't invented, of course, at Apache. The most famous example of consensus process is the Quaker Meeting,
though many organizations have adopted and adapted it since. In a consensus-based organization, you'll hardly ever hear
someone use the term 'veto'. Instead, you will hear the phrase, 'block consensus'. And, from these two words, we can
unpack the larger model of consensus.

The goal of consensus is make decisions that are acceptable to everyone in the group. 'Acceptable,' not 'ideal.' For a
consensus organization to function, all the participants have to be willing to balance their personal views with the
good of the group. Anyone can block consensus -- but blocking consensus is not a choice that anyone takes lightly.

People being people, this is not a natural state of affairs. People disagree. A functional consensus process requires a
group of people who are willing to spend as much time as it takes to reach complete agreement -- where 'complete
agreement' is defined as 'acceptable to everyone.' Consensus groups discuss a decision, at length, until someone thinks
that the group has reached a consensus. At this point, the moderator asks, 'do we have a consensus'?

Silence, at this point, defines success.

The process I just described was built, over many years, for face-to-face meetings. At Apache, project decisions aren't
made at face-to-face meetings, but rather on mailing lists. Further, Apache projects are full of impatient programmers.
Silence, then, is not a practical measurement. ASF projects use two adjustments to classic consensus process to adapt it
to the Foundation's needs: the three-valued vote and 'lazy' consensus.

When an Apache Project Management Committee needs to make an important, binding, hard-to-reverse decision, such as
declaring a release, it holds a vote. Members vote -1, 0, or 1.

Any member of the committee can block consensus by voting '-1'.

Without face-to-face meetings, Apache projects need a way to tell if, in fact, enough people are in favor of an decision
to justify proceeding. Face-to-face, this might be left to the judgement of a moderator. At Apache, this is the job of
the two other voting options: '0' and '+1'. A vote of '+1' is a positive endorsement of the proposal, while a vote of '
0' is an abstention. Different situations require different minimum numbers of +1 votes.

If a three-valued vote is a more formal, electoral, sort of event than a traditional consensus process, the 'lazy'
consensus is just the opposite -- a means of making a decision without any explicit decision-making process at all. Many
projects use lazy consensus for routine, reversible, decisions. The group has an existing consensus on an overall
approach, and individual members go ahead and make the day-to-day decisions without stopping to poll their peers. The
most common application of lazy consensus is software development itself. In a project using lazy consensus, a committer
will post a patch and notify the list. Absent any objection, she goes ahead and checks it in. Now, in some sense, this
is just like classic consensus; silence is consent. Some projects take this a step further. Committers go ahead and
commit routine changes. If someone objects, the original committer backs the change out. Some objections result in a
discussion followed, perhaps, by removing the change, and others result in reverting followed by discussion. The net
result is that committers can progress on the work at hand without having to wait around for approval.

This process is not a magic cure for human nature. Apache projects suffer from disputes and dissension just like
everyone else. The consensus rules, however, encourage collegial behavior (the goal is to convince everyone, not to
assemble a majority block). And, in the worse case, they serve as a firewall. If an Apache community grinds to a halt
due to an abject inability to reach consensus, it will be painfully obvious from the voting records, and the board can
take note and act.
