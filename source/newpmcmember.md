---
title: New PMC member
tags: ["pmc", "pmcmembers", "election"]
---

## New PMC member process

This section describes a typical Apache project's process for handling the
vote to add a new PMC member - when it is separate from becoming committer.
Templates mentioned in the process appear later in this document. If your PMC
adds automatically committers as PMC members, the process for doing both at the
same time is described in the [New committer](https://community.apache.org/newcommitter.html)

<a name="NewPMCMember-Summary"></a>
### Summary

1. Discuss the proposed PMC member. If the discussion seems to be going positively, call a vote following
   the template below.
1. Close the vote following the template below.
1. If the result is positive, invite the new committer following the template below.

If they accept, then:

1. In case the new PMC member is already  is already a committer, they have Apache id,
   you should grant them appropriate PMC privileges. Use the Whimsy tool to update the roster via
   https://whimsy.apache.org/roster/committee/ or https://whimsy.apache.org/roster/ppmc/
1. Announce the new PMC member following the template below.

<a name="NewPMCMember-Discussion"></a>
### Discussion

We do the discussion and vote on the `private@` mailing list to enable a frank
discussion. Any PMC member may propose a potential PMC member.
This is **not** the sole responsibility or right of the PMC chair.

We invite people to join as PMC members, not github ids. It is
fine to refer to the candidate's github id for context, but the person should
be referred to by their name. It is not necessary to have their full legal
name (that will be kept private) but it is important to use their name, as
they refer to themselves in email. If a person is known only by their github
id, it is ok to ask them for their real name prior to holding a VOTE.

Start a separate [VOTE] thread for each new person. This makes it much easier
to review the email archives.

We need to be sure that they are committed people with whom we can work.
They will be our peers. We will have already observed that they are
committed to the project and graceful toward users and other developers.

Don't wait too long before proposing and don't be too hasty. There is a
trade-off and something about timeliness. A point is reached where it
becomes obvious that we should invite them. This encourages them and keeps
them enthusiastic. If we leave it too long, then we risk them becoming
disillusioned.

On the `private@` list we can each say exactly what we feel about each person,
with no holds barred. Keep the discussion concise. The praise part can
be done later in public. Keep in mind, however, that if the member becomes
a PMC member later, they will have access to this discussion.

Let the Vote thread run for one week.

A positive result is achieved by **Consensus Approval**: at least 3 +1
votes and no vetoes.

Any veto must be accompanied by reasoning and the vetoer must be prepared to defend it.
Other members can attempt to encourage them to change their mind.

New PMC members can be either quiet or active as they choose. If we find
that certain people lapse and don't ever contribute, then the project can take steps
to retire them.

After a positive result, record the result on the PMC list with a `[RESULT][VOTE]` subject
and then invite the candidate. We give candidates a chance to decline PMC membership in private.
They can post a reply to the PMC mailing list.

After we reach a decision on the `private@` list, and after the steps above, we
announce the new PMC member on the `dev` list. We can then each follow up with
our praise in public.

Other notes about the process are available on the main [Apache site](https://www.apache.org/dev/pmc.html#newpmcmember).

<a name="NewCommitter-EmailTemplates"></a>
## Email Templates

### PMC member Vote Template
This is the email to commence a vote for a new PMC member.

    ------------------------------------------------------------
    To: private@[PROJECT].apache.org
    Subject: [VOTE] New PMC member candidate: Jo Bloggs

    [ add the reasons behind your nomination here ]

    Voting ends one week from today, i.e. midnight UTC on YYYY-MM-DD
    https://www.timeanddate.com/counters/customcounter.html?year=YYYY&month=MM&day=DD

    See voting guidelines at
    https://community.apache.org/newpmcmember.html

    ------------------------------------------------------------

### Close Vote
This email ends the vote and reports the result to the project.

    ------------------------------------------------------------
    To: private@[PROJECT].a.o
    Subject: [RESULT] [VOTE] New PMC member candidate: Jo Bloggs

    The vote has now closed. The results are:

    Binding Votes:

    +1 [TOTAL BINDING +1 VOTES]
     0 [TOTAL BINDING +0/-0 VOTES]
    -1 [TOTAL BINDING -1 VOTES]

    The vote is ***successful/not successful***

### PMC member Invite Template
This is the suggested invitation email to send to the newly elected PMC member candidate,
sent after a positive result from the vote for a new PMC member.

    ------------------------------------------------------------
    To: JoBloggs@foo.net
    Cc: private@[PROJECT].apache.org
    Subject: Invitation to become [PROJECT] PMC member: Jo Bloggs

    Hello [invitee name],

    The [Project] Project Management Committee (PMC)
    hereby offers you membership in the PMC. These privileges are
    offered on the understanding that you'll use them
    reasonably and with common sense. We like to work on trust
    rather than unnecessary constraints.

    Of course, you can decline and instead remain as a
    contributor, participating as you do now.

    This personal invitation is a chance for you to accept or decline in private.
    Please let us know in reply to this message whether you accept or decline.

### PMC member Announce Template

This is the email to announce the new committer to `[PROJECT]-dev` once the account has been created.

    ------------------------------------------------------------
    To: dev@[PROJECT].apache.org
    Subject: new PMC member: ###Jo Bloggs

    The Project Management Committee (PMC) for Apache [PROJECT]
    has invited Jo Bloggs to become a PMC member and we are pleased
    to announce that they have accepted.

    ### add specific details here ###

    A PMC member helps manage and guide the direction of the project.

### PMC Member Done Template
    After the PMC member account is established.

    ------------------------------------------------------------
    To: private@[PROJECT].a.o, ###JoBloggs@foo.net
    Subject: account request: ###Jo Bloggs

    Please subscribe to the [PROJECT] Project Management
    Committee mailing list private@[PROJECT].apache.org.

    A PMC member will announce your election to the dev list soon.
