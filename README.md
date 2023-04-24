<!--                                                                                                                                                                                                    
Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to You under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at
   
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
# Apache Community Development website

This is the source code for the ASF Community Development PMC website, hosted at
[community.apache.org](https://community.apache.org)

To get in touch with that PMC please use the [dev@community.apache.org](https://lists.apache.org/list.html?dev@community.apache.org) mailing list.

The [events.apache.org](https://events.apache.org/) website is also managed by the Community Development PMC
but managed in the [comdev-events-site](https://github.com/apache/comdev-events-site) repository.

## Automated website publishing and staging

Changes to the `main` or `preview/*` branches of this repository trigger the [comdev-site Jenkins Job](https://ci-builds.apache.org/job/Community%20Development/job/site/job/main/), which generates and pushes the website content.

There's currently (April 2020) a lag of about ten minutes for the corresponding Jenkins job to start, if you commit directly to the GitHub repository, but you can also start the job manually if you have the required Jenkins access rights.

For the `main` branch, the generated content is pushed to the `asf-site` branch, and 
the [ASF's gitpubsub mechanism](https://blogs.apache.org/infra/entry/git_based_websites_available) then synchronizes that content to the live [community.apache.org](https://community.apache.org/) website, usually within a few seconds.

Branches named `preview/<name>` are staged automatically, a branch named `preview/0421b` for example
is staged at https://community-0421b.staged.apache.org/ .

More details about the publication process can be found in the [ASF Documentation about Project sites](https://infra.apache.org/project-site.html). If for some reason this process fails, you can use [the self-service page from ASF Infra](https://selfserve.apache.org/) to trigger a resync of the git repo.

## Powered by Hugo!

The website uses Hugo as static website generator, see the [Hugo website](https://gohugo.io/) for more information
and for how to install and run it if needed.

Other Apache websites that are built with Hugo should be listed by [this GitHub query for the 'hugo' tag](https://github.com/search?q=topic%3Ahugo+org%3Aapache&type=Repositories).

## How to test the website and changes on your own computer

You need a recent version of `hugo`, to find out which one is used to deploy this site
look at the Jenkins build output, linked above.

To generate the static website, execute `hugo` to generate the website under `target/content` and execute
`npx -y pagefind --source target/content` to index the content for Pagefind (the search bar on the website).

During development, it may be useful to run an incremental build. For this to work, execute
`hugo server -D -d /tmp/comdev-generated-site` to continuously (re)generate and serve the website on `localhost:1313`
(-D means include draft pages). In another terminal, execute `npx -y pagefind --source /tmp/comdev-generated-site` to
index the site content for Pagefind (the search bar on the website).
