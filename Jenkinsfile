#!groovy
/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

pipeline {
    agent {
        // https://cwiki.apache.org/confluence/display/INFRA/ci-builds.apache.org
        label 'git-websites'
    }

    environment {
        DEPLOY_BRANCH = "${env.BRANCH_NAME == "main" ? "asf-site" : "${env.BRANCH_NAME}-staging"}"
        HUGO_VERSION = '0.111.3'
        HUGO_HASH = 'b382aacb522a470455ab771d0e8296e42488d3ea4e61fe49c11c32ec7fb6ee8b'
        PAGEFIND_VERSION = '1.0.3'
        PAGEFIND_HASH = 'e84ec7e8cb424022aa70ca14e6735c67c9728596753321dec782a902c3bfe6f0'
    }

    stages {
        stage('Prepare') {
            steps {
                script {
                    // Capture last commit hash for final commit message
                    env.LAST_SHA = sh(script:'git log -n 1 --pretty=format:\'%H\'', returnStdout: true).trim()
                    env.HUGO_PATH = sh(script:'which hugo', returnStdout: true).trim()
                    sh "echo Hugo path: '${env.HUGO_PATH}'"
                    // Get current Hugo version (looks like hugo v0.111.3-5d4eb5154e1fed125ca8e9b5a0315c4180dab192+extended linux/amd64 ...)
                    // Use the location found above to ensure same hugo can be used later
                    env.HUGO_VERSION_CURRENT = sh(script:'${HUGO_PATH} version | cut -f 2 -d" "|cut -d- -f 1|sed -e "s!^v!!"', returnStdout: true).trim()
                    sh "echo Hugo current: '${env.HUGO_VERSION_CURRENT}'"
                    sh "echo Hugo  target: '${HUGO_VERSION}'"
                    // create the dir in case it is needed (simplifies tidyup)
                    env.HUGO_DIR = sh(script:'mktemp -d', returnStdout: true).trim()
                }
            }
        }
        stage("Install Hugo") {
            when {
              expression { env.HUGO_VERSION_CURRENT != HUGO_VERSION }
            }
            steps {
                script {
                    // Download Hugo
                    sh "mkdir -p ${env.HUGO_DIR}/bin"
                    sh "wget --no-verbose -O ${env.HUGO_DIR}/hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz"
                    // Verify the checksum
                    def hugo_hash = sha256 file: "${env.HUGO_DIR}/hugo.tar.gz"
                    assert hugo_hash == "${HUGO_HASH}"
                    // Unpack Hugo
                    sh "tar -C ${env.HUGO_DIR}/bin -xkf ${env.HUGO_DIR}/hugo.tar.gz"
                    env.HUGO_PATH = "${env.HUGO_DIR}/bin/hugo"
                }
            }
        }
        stage("Install Pagefind") {
            steps {
                script {
                    // Download Pagefind
                    env.PAGEFIND_DIR = sh(script:'mktemp -d', returnStdout: true).trim()
                    sh "mkdir -p ${env.PAGEFIND_DIR}/bin"
                    sh "wget --no-verbose -O ${env.PAGEFIND_DIR}/pagefind.tar.gz https://github.com/CloudCannon/pagefind/releases/download/v${PAGEFIND_VERSION}/pagefind-v${PAGEFIND_VERSION}-x86_64-unknown-linux-musl.tar.gz"
                    // Verify the checksum
                    def pagefind_hash = sha256 file: "${env.PAGEFIND_DIR}/pagefind.tar.gz"
                    assert pagefind_hash == "${PAGEFIND_HASH}"
                    // Unpack Pagefind
                    sh "tar -C ${env.PAGEFIND_DIR}/bin -xkf ${env.PAGEFIND_DIR}/pagefind.tar.gz"

                }
            }
        }
        stage("Setup directory") {
            steps {
                script {
                    // Setup directory structure for generated content
                    env.TMP_DIR = sh(script:'mktemp -d', returnStdout: true).trim()
                    env.OUT_DIR = "${env.TMP_DIR}/content"
                    sh "mkdir -p ${env.OUT_DIR}"

                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh "${HUGO_PATH} --destination ${env.OUT_DIR} --cacheDir ${env.HUGO_DIR}"
                    sh "${PAGEFIND_DIR}/bin/pagefind --site ${env.OUT_DIR}" --output-subdir "_pagefind"
                    sh "rm -f .hugo_build.lock"
                }
            }
        }
        // https://www.jenkins.io/doc/book/pipeline/syntax/#built-in-conditions
        // branch uses Ant-style patterns by default:
        // https://ant.apache.org/manual/dirtasks.html#patterns
        // Exclude branches ending in '-staging'
        // Also try to prevent deploy of top-level branches apart from main
        stage('Deploy') {
            when {
                not {
                    branch '**/*-staging'
                }
                anyOf {
                    branch 'main'
                    not {
                      branch '*'
                    }
                }
            }

            steps {
                script {
                    // Checkout branch with generated content, creating it if necessary
                    // We only want the generated content + .asf.yaml
                    sh """
                        if git checkout ${DEPLOY_BRANCH}
                        then
                          git pull origin ${DEPLOY_BRANCH}
                        else
                          echo "branch ${DEPLOY_BRANCH} is new; create basic site"
                          git checkout --orphan ${DEPLOY_BRANCH} -f
                          git rm -rf .
                          # assume we have an asf.yaml file
                          git checkout origin/${BRANCH_NAME} -- .asf.yaml
                          git add .asf.yaml -f
                        fi
                    """

                    // Remove the content of the target branch and replace it with the content of the temp folder
                    sh """
                        rm -rf ${WORKSPACE}/content
                        git rm -r --ignore-unmatch --cached content/*
                        mkdir -p ${WORKSPACE}/content
                        cp -rT ${env.TMP_DIR}/* ${WORKSPACE}/content
                    """

                    // Commit the changes to the target branch
                    env.COMMIT_MESSAGE1 = "Updated ${DEPLOY_BRANCH} from ${BRANCH_NAME} at ${env.LAST_SHA}"
                    env.COMMIT_MESSAGE2 = "Built from ${BUILD_URL}"
                    sh """
                        git add -A
                        git commit -m "${env.COMMIT_MESSAGE1}" -m "${env.COMMIT_MESSAGE2}" | true
                    """

                    // Push the generated content for deployment
                    sh "git push -u origin ${DEPLOY_BRANCH}"
                }
            }
        }
    }

    post {
        always {
            script {
                sh """
                    rm -rf ${env.HUGO_DIR}
                    rm -rf ${env.PAGEFIND_DIR}
                    rm -rf ${env.TMP_DIR}
                """
            }
            deleteDir() /* clean up our workspace */
        }

        // If the build failed, send an email to the list.
        failure {
            script {
                if (env.BRANCH_NAME == 'main') {
                    emailext(
                        to: "dev@community.apache.org",
                        recipientProviders: [[$class: 'DevelopersRecipientProvider']],
                        from: "Jenkins <jenkins@ci-builds.apache.org>",
                        subject: "[website] Jenkins job ${env.JOB_NAME}#${env.BUILD_NUMBER} failed",
                        body: """
There is a build failure in ${env.JOB_NAME}.

Build: ${env.BUILD_URL}
"""
                    )
                }
            }
        }

        // Send an email, if the last build was not successful and this one is.
        fixed {
            script {
                if (env.BRANCH_NAME == 'main') {
                    emailext(
                        to: "dev@community.apache.org",
                        recipientProviders: [[$class: 'DevelopersRecipientProvider']],
                        from: 'Jenkins <jenkins@ci-builds.apache.org>',
                        subject: "[website] Jenkins job ${env.JOB_NAME}#${env.BUILD_NUMBER} back to normal",
                        body: """
The build for ${env.JOB_NAME} completed successfully and is back to normal.

Build: ${env.BUILD_URL}
"""
                    )
                }
            }
        }
    }
}
