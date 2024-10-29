---
title: New Committer
tags: ["pmc","committers","election"]
---

Identifying potential new committers, calling a vote for their recognition
as a committer and processing the relevant documents are tasks to which
the whole community can contribute.

Each project has a different approach to managing new committers. This page
describes a common process found in many Apache projects. It also provides
draft templates for the various communications that are necessary.

Some of the PMCs automatically make committers PMC members. The templates below
have conditional `[if]` clauses for that.

If the PMC has separate process for approving PMC members, see
[new PMC member](newpmcmember.html).  
The [Contributor Ladder](https://community.apache.org/contributor-ladder.html) helps explain different roles.

{{% toc %}}

<a name="NewCommitter-Summary"></a>
## TL;DR - Inviting a new Committer

1. Discuss the proposed committer (and optionally PMC member). (Use
   [this template](templates/committer-discuss.txt).)
1. If the discussion seems to be going positively,
   call a vote. (Use [this template](templates/committer-vote.txt) for
   committer, [this template](templates/committer-pmc-vote.txt) for
   committer and PMC member.)
1. Close the vote. (Use [this template](templates/committer-results.txt) for a committer vote, or [this template](templates/committer-pmc-results.txt) for a committer + PMC member vote.)
1. If the result is positive, invite the new committer. (Use [this
   template](templates/committer-invite.txt).)

If they accept, then:

1. If they already have an Apache id, grant appropriate commit privileges.
   Use the Whimsy tool to update the roster via [Comitee Roster](https://whimsy.apache.org/roster/committee/) or
   [PPMC Roster](https://whimsy.apache.org/roster/ppmc/)
1. If they have already filed an ICLA, request creation of the committer account.
   If they need to change anything in a previously filed ICLA, wait until the new ICLA is filed,
   then request the account.
   1. Wait until root says it is done
   1. PMC Chair updates LDAP group membership which enables svn, gitbox and other access.
      If the committer uses GitHub, let them know that they are responsible for linking 
      it to their ASF account.
   1. Add committer to the appropriate access groups for any services
      that your project uses, which are not tied to ASF LDAP.
1. Notify the committer of completion. (Use [this
   template](templates/committer-welcome.txt)
1. If committer is also to be a PMC member, the PMC Chair or other PMC
   members must [update the PMC roster](https://whimsy.apache.org/roster/committee/)
   See [new PMC member](https://www.apache.org/dev/pmc.html#newpmcmember) for more detail.
1. Announce the new committer. (Use [this
  template](templates/committer-announce.txt).


<a name="NewCommitter-Guidelinesforassessingnewcandidatesforcommittership"></a>
## Guidelines for assessing new candidates for committership

Frequently inviting new committers (and PMC members) to your project
helps to ensure the sustainability of the project, and brings new ideas
into the discussion.

When voting, all PMC members need to make up their own minds as to whether a candidate
should be approved to become a committer. They might search mailing lists and issue trackers to see
how the candidate interacts with others, and the contributions (code or doc patches, suggestions, engagement in conversation) they have made.

All new committers **must** adhere to the [Apache Code of Conduct](https://www.apache.org/foundation/policies/conduct.html).

Each PMC may want to create their own supplemental committer guidelines,
such as a minimum number of contributions, or number of months active on
the project. We encourage you to not make this bar artificially high.

The following are some points to consider when assessing a candidate's qualifications for committership.

<a name="NewCommitter-Abilitytoworkco-operativelywithpeers."></a>
### Ability to work cooperatively with peers.
How do we evaluate?

  - By the interactions they have through email.
  - By how they respond to criticism.
  - By how they participate in the group decision-making process.

<a name="NewCommitter-Abilitytobeamentor."></a>
### Ability to be a mentor.
How do we evaluate?

  - By the interactions they have through email.
  - By how clear they are and how willing they are to identify or even create appropriate background
materials.

<a name="NewCommitter-Community"></a>
### Community
How do we evaluate?

  - By the interactions they have through email.
  - Do they help to answer questions raised on the mailing list; do they show a helpful
attitude and respect for other people's ideas?

<a name="NewCommitter-Committment"></a>
### Commitment
How do we evaluate?

  - By time already given to the project.
  - By how well they stick with the process through tough issues.
  - By how they help on not-so-fun tasks.

<a name="NewCommitter-Personalskill/ability"></a>
### Personal skill/ability
How do we evaluate?

  - A solid general understanding of the project.
  - Quality of discussion in email.
  - Whether their patches (where applicable) are easy to apply with only a cursory review.

<a name="NewCommitter-NewCommitterProcess"></a>
## New Committer Process

This section describes a typical Apache project's process for handling the
vote to add a new committer. Templates mentioned in the process appear
later in this document.

<a name="NewCommitter-Discussion"></a>
### Discussion

We do the discussion and vote on the `private@` mailing list to enable a frank
discussion. Any PMC member may propose a potential committer or PMC
member. This is **not** the sole responsibility or right of the PMC
chair.

You can use [this template to start the
discussion](templates/committer-discuss.txt).

We invite people to join as committers/PMC members, not github ids. It is
fine to refer to the candidate's github id for context, but the person should
be referred to by their name. It is not necessary to have their full legal
name (that will be kept private) but it is important to use their name, as
they refer to themselves in email. If a person is known only by their github
id, it is ok to ask them for their real name prior to holding a VOTE.

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

### Vote

If the proposed candidate seems to be received positively by a majority
of those responding, it's time to [start a vote](templates/committer-vote.txt). 

In some projects, new committers are automatically also made PMC members.
If this is the case in your project, use [this template to start the
vote](committer-pmc-vote.txt) instead.

Start a separate [VOTE] thread for each new person. This makes it much easier
to review the email archives.

Let the Vote thread run for one week. A positive result is achieved by
more positive votes than negative ones, as per the [ASF voting process
document](https://apache.org/foundation/voting).

### Announcing results

After a positive result, record the result on the PMC list with a `[RESULT][VOTE]` subject
and then invite the candidate, using [this template](templates/committer-results.txt) 
for a new committer, or [this template](templates/committer-pmc-results.txt) 
for a committer and PMC member.

We give candidates a chance to decline committership 
in private. They can post a reply to the PMC mailing list.

After we reach a decision on the `private@` list, and after the steps above, we
[announce the new committer on the `dev` list](template/committer-announce.txt)

Alternately, use [this template](templates/committer-pmc-announce.txt) for new
committer + PMC member.

You can use [this template](templates/committer-welcome.txt) to welcome
the new committer to your project community. You are, however,
encouraged to create your own version of this template, customized to
your particular project community.

Other notes about the process are available on the main 
[Apache site](https://www.apache.org/dev/pmc.html#newcommitter).

### Committer Account Creation
Please see the [account creation instructions](https://www.apache.org/dev/pmc.html#newcommitter).

In summary:

If the ICLA identifies the project and a valid Apache ID, and the
`[RESULT][VOTE]` message has been posted to the PMC private list,
the account creation request is made by the
secretary or assistant secretary who files the ICLA.

Otherwise, the new account request should be made by the
PMC Chair (or any [ASF Member](https://www.apache.org/foundation/glossary.html#Member)
if the chair is unavailable).

The PMC chair needs to use the [ASF New Account Request](https://id.apache.org/acreq/pmc-chairs/) form to
send a new account request. Members may use [ASF New Account Request](https://id.apache.org/acreq/members/) page.

Please supply the [mail archives](https://lists.apache.org/) URL as
proof of the vote results.

<a name="NewCommitter-EmailTemplates"></a>
## Email Templates

The following templates are recommended ways to phrase your email
communications around inviting a new committer, to ensure that everyone
understands your intent.

* [Committer discussion template](templates/committer-discuss.txt)
* [Committer vote template](templates/committer-vote.txt)
* [Committer + PMC vote template](templates/committer-pmc-vote.txt)
* [Committer vote results template](templates/committer-results.txt)
* [Committer + PMC vote results template](templates/committer-pmc-results.txt)
* [Committer invite template](templates/committer-invite.txt)
* [New committer announcement](templates/committer-announce.txt)
* [New committer and PMC member announcement](templates/committer-pmc-announce.txt)
* [Welcome the new committer to your community](templates/committer-welcome.txt)

