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

This is the source code for the website of [Apache Comdev](https://community.apache.org/), hosted at:

    https://community.apache.org/

## Repository structure

This repository uses 2 branches for serving the website.
- The `master` branch, which contains all the sources for the website.
- The `asf-site` branch, which contains the generated website being used for the actual website.

When contributing patches, apply them to the `master` branch. Jenkins will then regenerate the website
and commit the changes to the `asf-site` branch.

## Content Management System

The website uses Hugo as static website generator. 
See [Hugo](https://gohugo.io/) for more info and for details how to install Hugo.

## Generate the website

To generate the static website, execute `hugo` to generate and serve the website on `localhost:1313`.

During development, it may be useful to run an incremental build. For this to work, execute `hugo server -D` to 
continuously generate and serve the website on `localhost:1313`.

## Publish the website

Jenkins is used for generating the website and committing the generated site to the `asf-site` branch.
