# community.apache.org website content

## How to publish the community.apache.org website

As per https://issues.apache.org/jira/browse/INFRA-20009 the old svn repository has moved to https://github.com/apache/comdev-site , mirrored at https://gitbox.apache.org/repos/asf?p=comdev-site.git 

### Older, probably invalid build instructions
 * On commit, build runs at https://ci.apache.org/builders/community-site-staging , any build errors are reported there
 * Content is staged under http://community.staging.apache.org/
 * Use https://cms.apache.org/community/publish?diff=1 to check diffs and publish changes. Quite often, this includes changes made by others which haven't been published.
* Notifications are sent to (at least) https://lists.apache.org/list.html?commits@community.apache.org
