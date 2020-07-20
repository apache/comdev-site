---
title: New Committer
---

Identifying potential new committers, calling a vote for their recognition
as a committer and processing the relevant documents is something to which
the whole community can contribute.

Each project has a different approach to managing new committers. This page
describes a common process found in many Apache projects. It also provides
drafts for the various communications that are necessary.

{{% toc %}}

<a name="NewCommitter-Guidelinesforassessingnewcandidatesforcommittership"></a>
## Guidelines for assessing new candidates for committership

When voting, all PMC members need to make up their own minds as to whether a candidate
should be approved to become a committer. They might search mailing lists and JIRA to see
how the candidate interacts.

All new committers **must** adhere to the [Apache Code of Conduct](https://www.apache.org/foundation/policies/conduct.html).

Each PMC may want to create their own supplemental committer guidelines; here are the [Apache Forrest committer guidelines](https://forrest.apache.org/committed.html).

The following are some points to consider when assessing a candidate's qualifications for committership.

<a name="NewCommitter-Abilitytoworkco-operativelywithpeers."></a>
### Ability to work cooperatively with peers. 
How do we evaluate?

  - By the interactions they have through mail.
  - By how they respond to criticism.
  - By how they participate in the group decision-making process.

<a name="NewCommitter-Abilitytobeamentor."></a>
### Ability to be a mentor.
How do we evaluate?

  - By the interactions they have through mail.
  - By how clear they are and how willing they are to point at appropriate background
materials (or even create them).

<a name="NewCommitter-Community"></a>
### Community
How do we evaluate?

  - By the interactions they have through mail.
  - Do they help to answer questions raised on the mailing list; do they show a helpful 
attitude and respect for other people's ideas?

<a name="NewCommitter-Committment"></a>
### Commitment
How do we evaluate?

  - By time given to the project already
  - By sticking through tough issues
  - By helping on not-so-fun tasks as well

<a name="NewCommitter-Personalskill/ability"></a>
### Personal skill/ability
How do we evaluate?

  - A solid general understanding of the project. 
  - Quality of discussion in mail.
  - Patches (where applicable) easy to apply with only a cursory review.

<a name="NewCommitter-NewCommitterProcess"></a>
## New Committer Process

This section describes a typical Apache project's process for handling the
vote to add a new committer. Templates mentioned in the process appear at
later in this document.

<a name="NewCommitter-Summary"></a>
### Summary

1. Call a vote (templates/committerVote.txt)
1. Close the vote
1. Invite the new committer (templates/committerInvite.txt)

If they accept, then do:

1. Accept the committer (templates/committerAccept.txt)
1. Wait until we see that receipt of CLA is recorded
1. Request creation of the committer account (template/committerCreate.txt)
   1. now wait until root says it is done
   1. PMC Chair to enable svn and other access
   1. Add committer to the appropriate groups in JIRA and CWiki
1. Notify the committer of completion (template/committerDone.txt)
1. If committer is also to be a PMC member, PMC Chair sends email to board@ asking for acknowledgement of new PMC member
(templates/email-member-ack.txt)
1. Announce the new committer (template/committerAnnounce.txt)

<a name="NewCommitter-Discussion"></a>
### Discussion

We do the vote on the private mailing list to enable a frank discussion.

Start a separate [VOTE] thread for each new person. This makes it much easier
to review the mail archives.

We need to be sure that they are committed people that we can work with.
They will be our peers. We will have already observed that they are
committed to the project and graceful toward users and other developers.

Don't wait too long before proposing and don't be too hasty. There is a
trade-off and something about timeliness. A point is reached where it
becomes obvious that we should invite them. This encourages them and keeps
them enthusiastic. If we leave it too long, then we risk them becoming
disillusioned.

On the PMC list we can each say exactly what we feel about each person,
with no holds barred. Keep the discussion concise. The praise part can
be done later in public. Keep in mind, however, that if the member becomes
a PMC member later, they will have access to this discussion.

Let the Vote thread run for one week.

A positive result is achieved by **Consensus Approval**: i.e. at least 3 +1
votes and no vetoes.

Any veto must be accompanied by reasoning and the vetoer must be prepared to defend it.
Other members can attempt to encourage them to change their minds.

New committers can be either quiet or active as they choose. If we find
that certain people lapse and don't ever contribute, then each project can take steps
to retire them.

After a positive result, record the result on the PMC list with a [RESULT][VOTE] subject
and then invite the candidate. We give candidates a chance to decline committership in private. They
can post a reply to the PMC mailing list.

After we reach a decision on the PMC list, and after the steps above, we
will announce it on the dev list. We can then each follow up with
our praise in public.

Other notes about the process are available on the main [Apache site](https://www.apache.org/dev/pmc.html#newcommitter)

<a name="NewCommitter-EmailTemplates"></a>
## Email Templates

### Committer Vote Template
This is the email to commence a vote for a new committer member.
Some projects make committers PMC members automatically, if this is the case then
merge this with the following template (PMC Vote Template)
      
    ------------------------------------------------------------
    To: private@[PROJECT].apache.org
    Subject: [VOTE] New committer: Joe Bloggs
    
    [ add the reasons behind your nomination here ]
    
    Voting ends one week from today, i.e. midnight UTC on YYYY-MM-DD
    https://www.timeanddate.com/counters/customcounter.html?year=YYYY&month=MM&day=DD
    
    See voting guidelines at
    https://community.apache.org/newcommitter.html
    
    ------------------------------------------------------------

### PMC Vote Template
This is the email to commence a vote for a new **PMC candidate**. New PMC members need
to be voted for by the existing PMC members and subsequently approved by the Board
(or Incubator PMC for Incubating projects).
    
    ------------------------------------------------------------
    To: private@[PROJECT].apache.org
    Subject: [VOTE] New PMC candidate: Joe Bloggs
    
    [ add the reasons behind your nomination here ]
    
    Voting ends one week from today, i.e. midnight UTC on YYYY-MM-DD
    https://www.timeanddate.com/counters/customcounter.html?year=YYYY&month=MM&day=DD
    
    See voting guidelines at
    https://community.apache.org/newcommitter.html
    
### Close Vote
    This is the email ends the vote and reports the result to the project.
    
    ------------------------------------------------------------
    To: private@[PROJECT].a.o
    Subject: [RESULT] [VOTE] New committer (or PMC candidate): Joe Bloggs
    
    The vote has now closed. The results are:
    
    Binding Votes:
    
    +1 [TOTAL BINDING +1 VOTES]
     0 [TOTAL BINDING +0/-0 VOTES]
    -1 [TOTAL BINDING -1 VOTES]
    
    The vote is ***successful/not successful***

### Board Approval of new PMC member 
See [https://www.apache.org/dev/pmc.html#newpmc][1]

### Committer Invite Template
This is the suggested invitation email to send to the newly elected committer, 
sent after a positive result from the vote for a new committer.
    
    ------------------------------------------------------------
    To: JoeBloggs@foo.net
    Cc: private@[PROJECT].apache.org
    Subject: Invitation to become [PROJECT] committer: Joe Bloggs
        
    Hello [invitee name],

    The [Project] Project Management Committee] (PMC) 
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

    A. This personal invitation is a chance for you to 
    accept or decline in private.  Either way, please 
    let us know in reply to the [private@project.apache.org] 
    address only.

    B. If you accept, the next step is to register an iCLA:
        1. Details of the iCLA and the forms are found 
        through this link: https://www.apache.org/licenses/#clas

        2. Instructions for its completion and return to 
        the Secretary of the ASF are found at
        https://www.apache.org/licenses/#submitting

        3. When you transmit the completed iCLA, request 
        to notify the Apache [Project] and choose a 
        unique Apache id. Look to see if your preferred 
        id is already taken at 
        https://people.apache.org/committer-index.html     
        This will allow the Secretary to notify the PMC 
        when your iCLA has been recorded.

    When recording of your iCLA is noticed, you will 
    receive a follow-up message with the next steps for 
    establishing you as a committer.
       
### Committer Accept Template
This is the followup email after the new committer has accepted the invitation
    
    ------------------------------------------------------------------------
    To: JoeBloggs@foo.net
    Cc: private@[PROJECT].apache.org
    Subject: Re: invitation to become [PROJECT] committer
    
    Welcome. Here are the next steps. After that we will make
    an announcement to the [PROJECT]-dev list.
    
    You need to send a Contributor License Agreement to the ASF.
    Normally you would send an Individual CLA. If you also make
    contributions done in work time or using work resources then
    see the Corporate CLA. Ask us if you have any issues.
    https://www.apache.org/licenses/#clas
    
    You need to choose a preferred ASF user name and alternatives.
    In order to ensure it is available you can view a list of taken ids at
    https://people.apache.org/committer-index.html
    
    Please notify us when you have submitted the CLA and by what means 
    you did so. This will enable us to monitor its progress.
    
    We will arrange for your Apache user account when the CLA has 
    been recorded.
    
    After that is done, please make followup replies to the [PROJECT]-dev list.
    We generally discuss everything there and keep the
    private@[PROJECT].apache.org list for occasional matters which must be private.
    
    The developer section of the website describes the roles and provides other
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
    
    Yours,
    The Apache [PROJECT] PMC

### Committer Account Creation
Follow the instructions
    [here](https://www.apache.org/dev/pmc.html#newcommitter).

In summary:

If the ICLA identifies the project and a valid Apache id, and the
[RESULT][VOTE] message has been posted to the PMC private list, then
the account creation request is made by the 
secretary or assistant who files the ICLA.

Otherwise, the new account request should be made by the
PMC Chair (or any [ASF Member][6] if the chair is unavailable).

The PMC chair needs to use the [ASF New Account Request][2] form to
send a new account request. Members may use [ASF New Account 
Request][3] page for ASF members to use.

For elections held on public lists, please supply the 
[mail-archives.apache.org][4] url. For private lists, you can 
use the [Mail Search tool][5] to locate the apprpropriate url.    

### Committer Announce Template
This is the email to announce to [PROJECT]-dev once the account has been created.
    
    ------------------------------------------------------------
    To: dev@[PROJECT].apache.org
    Subject: new committer: ###Joe Bloggs
    
    The Project Management Committee (PMC) for Apache [PROJECT]
    has invited Joe Bloggs to become a committer and we are pleased 
    to announce that he has accepted.
    
    ### add specific details here ###
    
    Being a committer enables easier contribution to the
    project since there is no need to go via the patch
    submission process. This should enable better productivity.
    Being a PMC member enables assistance with the management
    and to guide the direction of the project.

### Committer Done Template
    After the committer account is established.
    
    ------------------------------------------------------------
    To: private@[PROJECT].a.o, ###JoeBloggs@foo.net
    Subject: account request: ###Joe Bloggs
    
    ####, as you know, the ASF Infrastructure has set up your
    committer account as the username '####'.
    
    Please follow the instructions to set up your SSH,
    svn password, svn configuration, mail forwarding, etc.
    https://www.apache.org/dev/#committers
   
    [If your project automatically adds committers to the PMC]
    Please subscribe to the [PROJECT] Project Management 
    Committee mailing list private@[PROJECT].apache.org.
    [/If]
    
    You have commit access to specific sections of the
    ASF repository, as follows:
    
    [PROJECT] has various resources at:
      https://svn.apache.org/repos/asf/[PROJECT]
    
    The general "committers" at:
    https://svn.apache.org/repos/private/committers
    
    You will probably need to 'svn switch" previous checkouts to now use https, 
    for example:

    svn switch --relocate https://svn.apache.org/repos/asf/[PROJECT] https://svn.apache.org/repos/asf/[PROJECT]
        
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
