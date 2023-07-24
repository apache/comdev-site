---
title: Mailing lists
tags: ["communication","mailing-lists"]
---

The ASF has a long tradition of using mailing lists as the primary
communication format in projects. This is not merely because we've
always done it that way, but is an intentional decision for the health
and sustainability of our communities.

## Inclusion and transparency

Mailing lists ensure that all members of the community can participate
on a level field, regardless of time zone or availability, whereas
synchronous communication platforms (IRC, Slack, Discord, etc.) benefit
only those who are online, and in the channel, at the time of the 
conversation.

Mailing lists also allow archiving, so that decisions can be understood
by people who were not there at the time - what was decided, why, and by
whom - even years after the fact.

Synchronous communication platforms are great for end-user support,
where an answer is needed quickly, and asking for clarification can be
done real-time. It's also good for social interactions, and for quick
brainstorming.

But decisions, and important technical discussions, should be taken back
to the mailing list so that the whole community can participate.

This is why we say, at the ASF, **If it didn't happen on the mailing
list, it didn't happen.**

## Mailing list etiquette

*To Be Written*

* Meaningful subject lines
* Inline vs top-posting
* HTML and "rich text" messages
* Clear language, use of colloquialisms and metaphor, etc. (writing for a
  diverse audience)

## Mailing list configuration

Modern software development tools, including GitHub, your various ticket
trackers, and CI tools, generate a lot of email. This can make your
development mailing list difficult to approach for new contributors, as
they appear as a wall of identical subject lines. This makes it hard for
beginners to break into your project, and find out what's going on.

Here's some configuration tips for your mailing lists to cut through the
noise and make your project's lists more approachable and welcoming.

Infra is providing some tooling to implement the automatically sent emails.
There are generally two important parts: 

1. Where should stuff be sent 
2. How should the subject lines be built up

Both these settings are done in your repositories `.asf.yaml` file.
Please refer to the full
[documentation of .asf.yaml features](https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features)

### Configuring where to send things

In order to configure where to send emails, please add or update the 
`notifications` section in your `.asf.yaml`.

```
notifications:
  commits:      commits@foo.apache.org
  issues:       dev@foo.apache.org
  pullrequests: dev@foo.apache.org
  jobs:         dev@foo.apache.org
  discussions:  dev@foo.apache.org
```
This will sort of make everything go to your `dev`-list. 
Some projects have sent some of these to other lists, as the amount
of emails sent from GitHub was too excessive. I will explain in the
next chapter how to make this flood of emails manageable.

One thing that might be anoying, expecially for project with many
third party dependencies, might be that dependabot will also be 
flooding your mailinglist with pretty atomic mini pull-requests.

In many projects we therefore forward dependabot emails to the 
commits list.

```
notifications:
  commits:      commits@foo.apache.org
  issues:       dev@foo.apache.org
  pullrequests: dev@foo.apache.org
  jobs:         dev@foo.apache.org
  discussions:  dev@foo.apache.org
  # Send dependabot PRs to commits@ instead
  pullrequests_bot_dependabot: commits@foo.apache.org
```

### Configuring the subject lines of the emails being sent

The defaults that the tooling uses seems a bit odd to me:

```
github:
  custom_subjects:
    new_pr: "Created: PR {repository}/#{pr_id}: {title}"
    close_pr: "Closed: PR {repository}/#{pr_id}: {title}"
    comment_pr: "Commented: PR {repository}/#{pr_id}: {title}"
    merge_pr: "Merged: PR {repository}/#{pr_id}: {title}"
    new_issue: "Created: Issue {repository} {title}"
    comment_issue: "Commented: Issue {repository} {title}"
    close_issue: "Closed: Issue {repository} {title}"
    catchall: "Updated: {repository}/#{issue_id}: {title}"
    new_discussion: "Created: Discussion {repository}: {title}"
    edit_discussion: "Edited: Discussion {repository}: {title}"
    close_discussion: "Closed: Discussion {repository}: {title}"
    close_discussion_with_comment: "Closed: Discussion with comment {repository}: {title}"
    reopen_discussion: "Reopened: Discussion {repository}: {title}"
    new_comment_discussion: "Commented: Discussion {repository}: {title}"
    edit_comment_discussion: "Edited a comment: Discussion {repository}: {title}"
    delete_comment_discussion: "Deleted a comment: Discussion {repository}: {title}"
```
However these result in emails that no email client I have come
across is able to group to threads and I have not come acoss even one 
email where I got to what the email is about on my phone because all I 
could see was: "Commented: Discuss...".

We therefore updated these in some projects to a lot shorter versions:

```
github:
  custom_subjects:
    new_pr: "[PR] {title} ({repository})"
    close_pr: "Re: [PR] {title} ({repository})"
    comment_pr: "Re: [PR] {title} ({repository})"
    merge_pr: "Re: [PR] {title} ({repository})"
    catchall: "Updated: {repository}/#{issue_id}: {title}"
    new_issue: "[I] {title} ({repository})"
    comment_issue: "Re: [I] {title} ({repository})"
    close_issue: "Re: [I] {title} ({repository})"
    catchall: "[GH] {title} ({repository})"
    new_discussion: "[D] {title} ({repository})"
    edit_discussion: "Re: [D] {title} ({repository})"
    close_discussion: "Re: [D] {title} ({repository})"
    close_discussion_with_comment: "Re: [D] {title} ({repository})"
    reopen_discussion: "Re: [D] {title} ({repository})"
    new_comment_discussion: "Re: [D] {title} ({repository})"
    edit_comment_discussion: "Re: [D] {title} ({repository})"
    delete_comment_discussion: "Re: [D] {title} ({repository})"
```
For some reason, the `repository` is required to be part of the pattern.
Moving this to the end made the emails a lot more readable.

### Conclusion

The custom templates help make the GitHub content readable on your 
mailinglist it will therefore not feel as overwhelming as with the 
defaults. Moving dependabot to the commits lists, helped reduce the 
content with very little information. 

We would strongly encourage projects to keep as much of the discussions
on their main mailingslist. If it's a larger project and still the 
volumne is so high, it's overwhelming people, think about directing
some of the content to other lists. 

Simply directing all GitHub content to dedicated mailing lists or 
lists nobody reads doesn't help with keeping the community knowledge
available. Even if it's "on the list" someweere, it doesn't really 
serve the reasoning behind the "If if didn't happen on the list, 
it didn't happen".
