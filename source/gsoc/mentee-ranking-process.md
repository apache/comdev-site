---
title: Mentee Ranking Process
aliases:
- /mentee-ranking-process.html
---

This page describes the ranking process The Apache Software
Foundation uses to evaluate mentee proposals.

The ranking process makes sure the most promising
applicants get a mentor with an ASF project. The goal is *not* to
identify the "best" projects for the ASF, but the best mentees who have
applied to the ASF.

Remember, mentoring is all about the mentee and open source as a whole. It
is not about the mentors or their projects.

Any ASF committer can help with the ranking: all you need to do is register
as a potential mentor (you don't actually have to _become_ a mentor).

The instructions below described ranking proposals using the Google Summer
of Code application.

<a name="MenteeRankingProcess-ScoringSystem"></a>
# Scoring System

We rank projects using this scoring system:

## *Pre-Selection Phase* : a mentor does this when accepting to be mentor of a given proposal

* if the proposal is for a project you will be mentoring and you feel the
proposal looks good enough for you to commit your time to it, click the
"I am willing to Mentor" button in Melange (the software that administers the Google Summer of Code).

Please only offer to mentor a single project unless you have discussed why you should mentor more than one on
mentors@community.apache.org first. We encourage multiple mentors per project, though.

Other community members are free to comment on proposals as they see fit.
In the re-evaluation phase (see below) admins use
comments provided by mentors and community members.

##*Selection Phase* : a mentor does this during ranking time

In this phase mentors evaluate each proposal. We do all scoring in the Google Docs spreadsheet shared on
mentors@community.apache.org. Add an explanation to every score, using the criteria below, to help admins in the later stages of evaluation.
DO NOT ADD SCORES IN MELANGE! Use integer numbers only!

_Please do not add scores outside these criteria._

Address any questions to the admins on mentors@community.apache.org

* Did the student demonstrate that they have the required skills to start
the project and learn what's needed along the way? And how happy are we
with the results? (0-4 points)

* How do we rate the quality of the student's proposal, in terms of
technical relevance, completeness, awareness of issues, and realistic planning
(less copy and paste)? (0-4 points)

* How does the mentor rate the student's chances of success, based on an
in-person (face-to-face, video, audio, IRC,  email) interview? (0-3 points, or
0-1 if email interview only)

* How do we rate the originality of the student's contributions to the
proposal? (0-2 points: 0 if mentor provides proposal, 1 if student builds
proposal from suggested ideas, 2 if proposal is original idea from student)

* Did the student work with the project community, on our public mailing lists,
to create the proposal? (0-2 points)

* Did the student explicitly indicate how much time they are going to dedicate
to GSoC for the project's duration, and mention any other committments that
could conflict with the project (holidays, course work, etc.)? Are we happy with
this commitment (it should be their major occupation during the summer)? (0-2 points)

* Did the student respond quickly to mentor inquiries? (0-2 points)

* Are you or your student affiliated in any way (e.g. share(d) the same employer or will do so in the foreseeable future, are
you their adviser at university, personal relationships, etc.)? (yes/no)


Other community members are free to comment on proposals inside Melange as they see fit.
However, DO NOT ADD A SCORE TO THE PROPOSAL. In the re-evaluation phase (see below) admins use
comments provided by mentors and community members.

At the end of the selection phase proposals to be considered for support
will have a score of between 0 and +19, and should only have scores from
the assigned mentor and admins (at this stage admin scores are only
corrections). The admins check in periodically during the selection phase
to look for problems by scanning the scores (i.e. anything
over +19 has an error). 

At the end of this selection phase we know the minimum score a proposal
must have in order to be selected (i.e. if we have 30 slots, projects with
a score at or above the project ranked 30th will go forward to the next
phase). Before progressing to the next phase, admins read all proposals
above or near the minimum score and ensure that there are no errors
in this phase of ranking.

## *Re-Evaluation* : admins do this during or after selection phase

In this phase admins evaluate all proposals above the required score and
those that are just below it. We check those just below the required score
to ensure that the scores have been equally assigned across all proposals
(some mentors are more generous than others).

* Has the mentor fully engaged with the student during the writing of the
proposal? (0-4 points)
* Does the mentor show an understanding of how to mentor a student? (0-4
points)
* Discretionary score: admins may use their experience and the comments of
community members to mark a proposal up or down (-4 to +4).
* Admin discretionary points (-10 to +10 points, only used to break
"deadlocks" across the cut-off point, see below).

The admins transfer the scores to Melange.

At the end of this phase there is a short window for the community to
verify the admins' work before the final selection is made.

<a name="MenteeRankingProcess-Whatarewelookingforinagoodproposal?"></a>
# What are we looking for in a good proposal?

In general we much prefer new mentees to repeat mentees. The goal is to
enable new people to learn about open source software development.

In past years we have seen some consistent patterns in high-quality proposals:

* Detailed proposal with realistic and measurable milestones
* Engagement with the project communication during proposal writing
* Willingness to engage with the ranking process (i.e. responding to
requests for more info)
* Acknowledgment of weaknesses in existing skill set and a plan for
addressing those weaknesses

<a name="MenteeRankingProcess-Warningsignsinabadproposal"></a>
# Warning signs in a bad proposal

* No engagement with project community
* Lack of understanding of what open source is and how it is developed
* Indication of external commitments (exams, job etc.)
* Previous failures within the mentor programme

<a name="MenteeRankingProcess-Whathappensnext?"></a>
# What happens next?

Towards the end of the ranking period Google announces how many slots
the ASF has. Shortly after that we ask ASF committers to
stop ranking, and the ASF GSoC admins adjust the rankings to
ensure that the right number of projects are ranked above the cut-off line.

In this last stage we avoid adjusting community rankings; however, in past
years there has been a cluster of students with equal rankings around the
cut-off point. In this case the admins cast a final vote on those
projects to ensure that Google can assign awards as appropriate.

For example, imagine that 7 is the number of points that causes the
clustering, and we have the following projects ranked at 7:

# A
# B
# C
# D
# E

Now imagine the cut-off point for selection is currently at the third
position (C).

The admins need to look at these projects and ensure they are ordered in the
webapp to make the most appropriate appear at the top of the list. This
ensures that they are most likely to receive a slot. So we may end up
with:

# B
# C
# A
# E
# D

Unfortunately this process needs to happen very quickly and there is no
time for community discussion around these points. Therefore it is
important that mentors and mentees provide as much information in the
previous ranking stages as possible.

The problem becomes a little more complicated when we remember that the
cut-off point may move as well, so Google may give us one extra slot. So we
need to ensure that all rank-7 projects are correctly ordered, not just the
best.

<a name="MenteeRankingProcess-Theprocessofbreakingclusters"></a>
## The process of breaking clusters

Admins work through all applications, adding a +8 to all those ranked above
the cut off score. This has the effect of increasing the "space" we have to
work with in re-ranking the clustered projects.

Admins then work through all the clustered applications, adding scores as
defined above (with a comment justifying the ranking).

If there is still a cluster of projects around the cut-off point, the
lead admin looks at the mentors and projects involved. If a project/mentor
already has a higher scored application, the lead admin reduces the
score for this one (i.e. to try to spread the love).

It's not practical to ask the community to comment at this point as we are
on a tight deadline. We ask that the community trust the assigned admins.

<a name="MenteeRankingProcess-Resolveconflicts"></a>
# Resolve conflicts

Inevitably there will be one or two students who have been accepted in
multiple organizations. We resolve these conflicts during an IRC meeting with Google
admins during the final hours of ranking. In these cases the admins
attempt to contact mentors and students; but we sometimes have to make a
judgment call on how to best resolve such conflicts, as things happen quite
fast during this meeting.
