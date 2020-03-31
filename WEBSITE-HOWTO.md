How to publish the community.apache.org website
====

TODO these instructions are outdated - the svn repository has moved to https://gitbox.apache.org/repos/asf?p=comdev-site.git , mirrored at https://github.com/apache/comdev-site , see https://issues.apache.org/jira/browse/INFRA-20009

Not sure where the build runs now, but changes made in commit b9ea80fde3f6d14acaa6ced94a3a561be4c6058b were built and found at https://cms.apache.org/community/publish?diff=1 

Here's the older build information:
 * On commit, build runs at https://ci.apache.org/builders/community-site-staging , any build errors are reported there
 * Content is staged under http://community.staging.apache.org/
 * Use https://cms.apache.org/community/publish?diff=1 to check diffs and publish changes. Quite often, this includes changes made by others which haven't been published.

Notifications are sent to (at least) https://lists.apache.org/list.html?commits@community.apache.org
