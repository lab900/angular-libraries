#!/usr/bin/env groovy
String currentCommit = ''
String previousSuccessfulCommit = ''
boolean isTriggeredManually = false
boolean buildExpected = true

void setBuildStatus(String message, String state, String currentCommit) {
    script {
        if (currentCommit == null || currentCommit.isEmpty()){
            println("Cannot find commit to log.")
        } else {
            step([
                    $class: "GitHubCommitStatusSetter",
                    reposSource: [$class: "ManuallyEnteredRepositorySource", url: 'https://github.com/lab900/angular-libraries'],
                    commitShaSource: [$class: "ManuallyEnteredShaSource", sha: currentCommit],
                    contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "build-status"],
                    errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
                    statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
            ])
        }
    }
}

static LinkedHashMap<String, Object> getBranch(String branch, String gitConfig) {
    return [
        $class: 'GitSCM',
        branches: [[name: branch]],
        gitTool: gitConfig,
        userRemoteConfigs: [
            [
                    credentialsId: 'Github',
                    url: 'https://github.com/lab900/angular-libraries'
            ]
        ]
    ]
}


pipeline {
    agent none
    environment {
        GH_TOKEN = credentials('Github_token')
        NPMJS_TOKEN = credentials('npm')
    }
    stages {
        stage('Check branch changed') {
            agent { label 'master-node' }
            steps {
                dir('./build') {
                    script {
                        // gitCommit = checkout(getBranch(DEFAULT_BRANCH, 'Default')) will also get the variables
                        // from env but is has issues when the branch has been checkout before
                        checkout(getBranch(BRANCH_NAME, 'Default'))
                        currentCommit = env.GIT_COMMIT
                        previousSuccessfulCommit = env.GIT_PREVIOUS_SUCCESSFUL_COMMIT
                        println("Getting branch ${env.GIT_BRANCH}, and current commit ${currentCommit}, where the last successful commit was ${previousSuccessfulCommit}.")

                        isTriggeredManually = currentBuild.getBuildCauses('hudson.model.Cause$UserIdCause').size() > 0
                        println(isTriggeredManually ? "This job was triggered manually." : "This is an automatic job.")

                        if (isTriggeredManually || currentCommit != previousSuccessfulCommit) {
                            println("Running build pipeline.")
                            setBuildStatus("Build Pending", "PENDING", currentCommit)
                        } else {
                            currentBuild.result = 'SUCCESS'
                            setBuildStatus("No build.", "SUCCESS", currentCommit)
                            println "No build."
                            buildExpected = false
                            return
                        }
                    }
                }
            }
        }
        stage('Setup on remote machine') {
            agent { label 'jenkins-agent-packer' }
            stages {
                stage('Install') {
                    steps {
                        dir('./build') {
                            sh "npm install"
                        }
                    }
                }
                stage('Build & publish Form library') {
                    steps {
                        dir('./build/projects/forms/') {
                            sh 'git config --global user.email "info@lab900.com"'
                            sh 'git config --global user.name "lab900"'
                            sh "npm version patch"
                        }
                        dir('./build') {
                            sh "npm run build:forms:prod"
                        }
                        withEnv(["TOKEN=${NPMJS_TOKEN}"]) {
                            dir('./build/dist/@lab900/forms') {
                                sh 'echo "//registry.npmjs.org/:_authToken=${TOKEN}" >> .npmrc'
                                sh 'npm publish'
                            }
                        }
                    }
                }
                stage('Build UI library') {
                    steps {
                        dir('./build') {
                            sh "npm run build:ui:prod"
                        }
                    }
                }
                stage('Build Admin library') {
                    steps {
                        dir('./build') {
                            sh "npm run build:admin:prod"
                        }
                    }
                }
                stage('Deploy showcase') {
                    steps {
                        dir('./build') {
                            sh "npm run deploy:showcase"
                            script {
                                setBuildStatus("Build complete.", "SUCCESS", currentCommit)
                            }
                        }
                    }
                }
            }
        }
    }
    post {
        changed {
            script {
                if (currentBuild.result == 'SUCCESS') {
                    setBuildStatus("Build complete.", "SUCCESS", currentCommit)
                }
            }
        }
        unstable {
            node('master-node') {
                setBuildStatus("Unstable build.", "ERROR", currentCommit)
            }
        }
        unsuccessful {
            node('master-node') {
                setBuildStatus("Unsuccessful build.", "ERROR", currentCommit)
            }
        }
        failure {
            node('master-node') {
                setBuildStatus("Build Failed", "FAILURE", currentCommit)
            }
        }
    }
}
