---
title: New Committer
---

Identifying potential new committers, calling a vote for their recognition
as a committer and processing the relevant documents are tasks to which
the whole community can contribute.

Each project has a different approach to managing new committers. This page
describes a common process found in many Apache projects. It also provides
drafts for the various communications that are necessary.

{{% toc %}}

<a name="NewCommitter-Guidelinesforassessingnewcandidatesforcommittership"></a>
## Guidelines for assessing new candidates for committership

When voting, all PMC members need to make up their own minds as to whether a candidate
should be approved to become a committer. They might search mailing lists and JIRA to see
how the candidate interacts with others, and the contributions (code or doc patches, suggestions, engagement in conversation) they have made.

All new committers **must** adhere to the [Apache Code of Conduct](https://www.apache.org/foundation/policies/conduct.html).

Each PMC may want to create their own supplemental committer guidelines; here are the [Apache Forrest committer guidelines](https://forrest.apache.org/committed.html).

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

<a name="NewCommitter-Summary"></a>
### Summary

1. Discuss the proposed committer/PMC member. If positive, call a vote (templates/committerVote.txt)
1. Close the vote (templates/closeVote.txt)
1. If the result is positive, invite the new committer (templates/committerInvite.txt)

If they accept, then:

1. If they already have an Apache id, grant appropriate commit privileges.
1. If they have already filed an ICLA, request creation of the committer account.
   If they need to change anything in a previously filed ICLA, wait until the new ICLA is filed,
   then request the account.
   1. Wait until root says it is done
   1. PMC Chair enables svn, github, and other access
   1. Add committer to the appropriate groups in JIRA and CWiki
1. Notify the committer of completion (template/committerDone.txt)
1. If committer is also to be a PMC member, PMC Chair sends email to board@ asking for acknowledgement of new PMC member
(templates/email-member-ack.txt)
1. Announce the new committer (template/committerAnnounce.txt)

<a name="NewCommitter-Discussion"></a>
### Discussion

We do the vote on the `private@` mailing list to enable a frank discussion.

We invite people to join as committers/PMC members, not github ids. It is
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

New committers can be either quiet or active as they choose. If we find
that certain people lapse and don't ever contribute, then the project can take steps
to retire them.

After a positive result, record the result on the PMC list with a [RESULT][VOTE] subject
and then invite the candidate. We give candidates a chance to decline committership in private. They
can post a reply to the PMC mailing list.

After we reach a decision on the `private@` list, and after the steps above, we
announce the new committer on the `dev` list. We can then each follow up with
our praise in public.

Other notes about the process are available on the main [Apache site](https://www.apache.org/dev/pmc.html#newcommitter).

<a name="NewCommitter-EmailTemplates"></a>
## Email Templates

### Committer Vote Template
This is the email to commence a vote for a new committer.
Some projects make committers PMC members automatically. If this is the case,
merge this template with the following one (PMC Vote Template).
      
    ------------------------------------------------------------
    To: private@[PROJECT].apache.org
    Subject: [VOTE] New committer: Jo Bloggs
    
    [ add the reasons behind your nomination here ]
    
    Voting ends one week from today, i.e. midnight UTC on YYYY-MM-DD
    https://www.timeanddate.com/counters/customcounter.html?year=YYYY&month=MM&day=DD
    
    See voting guidelines at
    https://community.apache.org/newcommitter.html
    
    ------------------------------------------------------------

### PMC Vote Template
This is the email to commence a vote for a new **PMC candidate**. New PMC members need
to be voted for by the existing PMC members and subsequently approved by the Board
(or Incubator PMC for incubating projects).
    
    ------------------------------------------------------------
    To: private@[PROJECT].apache.org
    Subject: [VOTE] New PMC candidate: Jo Bloggs
    
    [ add the reasons behind your nomination here ]
    
    Voting ends one week from today, i.e. midnight UTC on YYYY-MM-DD
    https://www.timeanddate.com/counters/customcounter.html?year=YYYY&month=MM&day=DD
    
    See voting guidelines at
    https://community.apache.org/newcommitter.html
    
### Close Vote
This email ends the vote and reports the result to the project.
    
    ------------------------------------------------------------
    To: private@[PROJECT].a.o
    Subject: [RESULT] [VOTE] New committer (or PMC candidate): Jo Bloggs
    
    The vote has now closed. The results are:
    
    Binding Votes:
    
    +1 [TOTAL BINDING +1 VOTES]
     0 [TOTAL BINDING +0/-0 VOTES]
    -1 [TOTAL BINDING -1 VOTES]
    
    The vote is ***successful/not successful***

### Notify Board of new PMC member 
See [https://www.apache.org/dev/pmc.html#newpmc][1]

### Committer Invite Template
This is the suggested invitation email to send to the newly elected committer, 
sent after a positive result from the vote for a new committer.
    
    ------------------------------------------------------------
    To: JoBloggs@foo.net
    Cc: private@[PROJECT].apache.org
    Subject: Invitation to become [PROJECT] committer: Jo Bloggs
        
    Hello [invitee name],

    The [Project] Project Management Committee (PMC) 
    hereby offers you committer privileges to the project 
    [as well as membership in the PMC]. These privileges are
    offered on the understanding that you'll use them
    reasonably and with common sense. We like to work on trust
    rather than unnecessary constraints. 

    Being a committer enables you to more easily make 
    changes without needing to go through the patch 
    submission process. [Being a PMC member enables you 
    to guide the direction of the project.]

    Being a committer does not require you to 
    participate any more than you already do. It does 
    tend to make one even more committed.  You will 
    probably find that you spend more time here.

    Of course, you can decline and instead remain as a 
    contributor, participating as you do now.

    This personal invitation is a chance for you to 
    accept or decline in private.
    If you decline, please let us know in reply to the private@[PROJECT].apache.org 
    address only.
    
    A. If you accept, you will need an Apache account (id) with privileges. Please follow
    these instructions.
    
        1. If you already have an Apache account, let us know your id and we
    will grant you privileges on the project repositories.

        2. If you have previously sent an iCLA, let us know the email address
    and public name used on the iCLA and your preferred Apache id, and
    we will request your account. 

        3. If the email address on the previously submitted iCLA is no longer
    valid, let us know the email address and public name used on the new iCLA,
    and your preferred Apache id. Continue to step B below and file your new iCLA.
    
    Look to see if your preferred ID is already taken at 
    https://people.apache.org/committer-index.html

    B. Otherwise, you need to register an iCLA:
        1. Details of the iCLA and the forms are found 
        through this link: https://www.apache.org/licenses/#clas

        2. Instructions for its completion and return to 
        the Secretary of the ASF are found at
        https://www.apache.org/licenses/contributor-agreements.html#submitting

        Do not copy the project or any other individual on your message
        to Secretary, as the form contains Personally Identifiable Information
        that should be kept private.

        3. When you fill the iCLA form, include in the form
        the Apache [Project] project and choose a 
        unique Apache ID. Look to see if your preferred 
        ID is already taken at 
        https://people.apache.org/committer-index.html
        This will allow the Secretary to notify the PMC 
        when your iCLA has been recorded.

    When recording of your iCLA is noted, you will 
    receive a follow-up message with the next steps for 
    establishing you as a committer.
   
### Committer Account Creation
Follow the instructions
    [here](https://www.apache.org/dev/pmc.html#newcommitter).

In summary:

If the ICLA identifies the project and a valid Apache ID, and the
[RESULT][VOTE] message has been posted to the PMC private list,
the account creation request is made by the 
secretary or assistant who files the ICLA.

Otherwise, the new account request should be made by the
PMC Chair (or any [ASF Member][6] if the chair is unavailable).

The PMC chair needs to use the [ASF New Account Request][2] form to
send a new account request. Members may use [ASF New Account 
Request][3] page.

For elections held on public lists, please supply the 
[mail-archives.apache.org][4] url. For private lists, you can 
use the [Mail Search tool][5] to locate the appropriate url.

### Committer Announce Template
This is the email to announce the new committer to `[PROJECT]-dev` once the account has been created.
    
    ------------------------------------------------------------
    To: dev@[PROJECT].apache.org
    Subject: new committer: ###Jo Bloggs
    
    The Project Management Committee (PMC) for Apache [PROJECT]
    has invited Jo Bloggs to become a committer and we are pleased 
    to announce that they have accepted.
    
    ### add specific details here ###
    
    Being a committer enables easier contribution to the
    project since there is no need to go via the patch
    submission process. This should enable better productivity.
    A PMC member helps manage and guide the direction of the project.

### Committer Done Template
    After the committer account is established.
    
    ------------------------------------------------------------
    To: private@[PROJECT].a.o, ###JoBloggs@foo.net
    Subject: account request: ###Jo Bloggs
    
    ####, as you know, the ASF Infrastructure has set up your
    committer account with the username '####'.
    
    Please follow the instructions to set up your SSH,
    svn password, svn configuration, email forwarding, etc.
    https://www.apache.org/dev/#committers
   
    [If your project automatically adds committers to the PMC]
    Please subscribe to the [PROJECT] Project Management 
    Committee mailing list private@[PROJECT].apache.org.
    [/If]
    
    You have commit access to specific sections of the
    ASF repository, as follows:
    
    [PROJECT] has various resources at:
      https://svn.apache.org/repos/asf/[PROJECT]
      https://github.com/apache/[PROJECT-REPOSITORY]
    
    The general "committers" at:
    https://svn.apache.org/repos/private/committers
    
    If using svn, you will probably need to 'svn switch" previous checkouts to now use https, 
    for example:

    svn switch --relocate https://svn.apache.org/repos/asf/[PROJECT] https://svn.apache.org/repos/asf/[PROJECT]
        
    The developer section of the website describes roles within the ASF and provides other
    resources:
      https://www.apache.org/foundation/how-it-works.html
      https://www.apache.org/dev/
    
    The incubator also has some useful information for new committers
    in incubating projects:
      https://incubator.apache.org/guides/committer.html
      https://incubator.apache.org/guides/ppmc.html

    Just as before you became a committer, participation in any ASF community
    requires adherence to the ASF Code of Conduct:
      https://www.apache.org/foundation/policies/conduct.html
    
    [PROJECT should insert its own guidelines here; if none are available,
     the Apache Forrest guidelines are available as a template.]
      https://forrest.apache.org/guidelines.html

    If you have any questions during this phase, then please
    see the following resources:
    
    Apache developer's pages: https://www.apache.org/dev/
    Incubator committer guide: https://incubator.apache.org/guides/committer.html
    
    Naturally, if you don't understand anything be sure to ask us on the [PROJECT] dev mailing list. 
    Documentation is maintained by volunteers and hence can be out-of-date and incomplete - of course
    you can now help fix that.
    
    A PMC member will announce your election to the dev list soon.


  [1]: https://www.apache.org/dev/pmc.html#newpmc
  [2]: https://id.apache.org/acreq/pmc-chairs/
  [3]: https://id.apache.org/acreq/members/
  [4]: https://mail-archives.apache.org/
  [5]: https://mail-search.apache.org/
  [6]: https://www.apache.org/foundation/glossary.html#Member
