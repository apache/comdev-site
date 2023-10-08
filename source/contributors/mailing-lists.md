---
title: Mailing lists
tags: ["communication","mailing-lists","etiquette"]
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

Mailing lists are also [permanently and publicly archived][1],
so that decisions can be understood
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

What you send to ASF mailing lists is [archived, publicly, forever][1]. But
that's not the only reason for observing basic email etiquette. We
expect you to conduct yourself politely on our mailing lists, because
this is where we work, communicate, and build community. Here's a few
tips. See also [general etiquette tips][2].

### Meaningful subject lines

Your subject line largely determines whether anyone reads what you
write. Try to summarize the topic that you wish to discuss as concisely
as possible.

If an email thread starts to diverge *substantially* from the original topic, change the
subject line to reflect the direction that the thread has taken.

### Inline vs top-posting

Most modern email clients default to top-posting - that is, putting the
entire reply to a message above the quoted body of the message to which
you are preferring.

We encourage you, instead, to respond inline - that is, put each
response after the quoted paragraph to which you are responding, so that
the resulting message reads like a conversation. This makes it very
clear which points you are responding to. You can then also delete the
portions of the message that you are not responding to at all, making
the resulting message self-contained, and not forcing everyone to
re-read everything that has gone before in order to understand your
response.

### HTML and "rich text" messages

ASF communities tend to prefer plaintext email messages, rather than
HTML or other so-called "rich text". This makes messages more
consistently readable on multiple devices, multiple operating systems,
and multiple screen sizes. It also makes computer-consumption of these
message easier, for the purpose of translation, screen readers, and
other automatic ingestion and processing.

### Colloquialisms

When you speak to your friends and colleagues, you can, and
usually do, use idioms, slang, colloquialisms, metaphors, and other
locally-understood figures of speech.

But when you're writing to an open source mailing list, your audience is
much more diverse, including people all around the world, who are likely
to not understand these phrases.

Write clearly, plainly, and without resorting to figures of speech,
wherever possible. If you use slang or a metaphor, consider linking to a
definition or explanation. Remember that not everyone reading your
message speaks your language natively. Including them in the
conversation is essential to collaboration.

ASF mailing lists default to English, unless specified otherwise.

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

If not explicitly managing the subject lines, the defaults are as follows (These are the new defaults which are valid starting October 1st 2023):

```
github:
  custom_subjects:
    new_pr: "[PR] {title} ({repository})"
    close_pr: "Re: [PR] {title} ({repository})"
    comment_pr: "Re: [PR] {title} ({repository})"
    merge_pr: "Re: [PR] {title} ({repository})"
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
In general, you can use any of the following variables in your custom subject lines (However some only apply to some types of messages. If this is the case, it is noted in the line what types of messages they apply to):

- `{action}`: The generic action that happened (created/deleted/edited)
- `{user}`: The GitHub user than initiated the action
- `{title}`: The title of the discussion that was affected
- `{category}`: The category slug for the discussion
- `{url}`: The URL for the discussion or comment that was affected (Discussions)
- `{link}`: The URL for the issue or pr that was affected (PRs and Issues)
- `{body}`: The body of text, either the discussion itself or a comment.
- `{action_human}`: If a comment happened, this is a human readable representation of the action
- `{recipient}`: The mailing list this was sent to
- `{unsub}`: The unsubscribe address of the mailing list this was sent to
- `{pr_id}`: The GitHub pull-request id related to the action (PRs)
- `{issue_id}`: The GitHub issue id related to the action (Issues)

If your project uses multiple github repositories, we recommend using the `repository` variable to let people know which repo the email is related to. 
If your project is a single-repo project (or for the other repositories GitHub integration is not enabled or not used much) feel free to also remove that part.

```
github:
  custom_subjects:
    new_pr: "[PR] {title}"
    close_pr: "Re: [PR] {title}"
    comment_pr: "Re: [PR] {title}"
    merge_pr: "Re: [PR] {title}"
    new_issue: "[I] {title}"
    comment_issue: "Re: [I] {title}"
    close_issue: "Re: [I] {title}"
    catchall: "[GH] {title}"
    new_discussion: "[D] {title}"
    edit_discussion: "Re: [D] {title}"
    close_discussion: "Re: [D] {title}"
    close_discussion_with_comment: "Re: [D] {title}"
    reopen_discussion: "Re: [D] {title}"
    new_comment_discussion: "Re: [D] {title}"
    edit_comment_discussion: "Re: [D] {title}"
    delete_comment_discussion: "Re: [D] {title}"
```

#### Using the old defaults (prior to October 1st 2023)

If for any reason, you would like to use the old defaults that were valid till October 1st 2023, please use the following configuration:

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

### Conclusion

The custom templates help make the GitHub content readable on your 
mailinglist. It will therefore not feel as overwhelming as with the 
defaults. Moving dependabot to the commits lists, helped reduce the 
content with very little information. 

We would strongly encourage projects to keep as much of the discussions
on their main mailingslist. If it's a larger project and still the 
volume is so high that it's overwhelming people, think about directing
some of the content to other lists. 

Simply directing all GitHub content to dedicated mailing lists or 
lists nobody reads doesn't help with keeping the community knowledge
available. Even if it's "on the list" somewhere, it doesn't really 
serve the reasoning behind the "If if didn't happen on the list, 
it didn't happen".


  [1]: https://lists.apache.org/
  [2]: https://community.apache.org/contributors/etiquette.html
