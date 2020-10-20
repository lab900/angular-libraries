#!/usr/bin/env groovy
GITHUB_URL='https://github.com/lab900/angular-libraries'
String currentCommit = ''
String previousSuccessfulCommit = ''
boolean isTriggeredManually = false
boolean buildExpected = true

static LinkedHashMap<String, Object> getBranch(String branch, String gitConfig) {
    return [
        $class: 'GitSCM',
        branches: [[name: branch]],
        gitTool: gitConfig,
        userRemoteConfigs: [
            [
                    credentialsId: 'Github',
                    url: GITHUB_URL
            ]
        ]
    ]
}


pipeline {
    agent none
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
            stage('Build Form library') {
                steps {
                    dir('./build') {
                        sh "npm run build:forms:prod"
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
                    }
                }
            }
        }
    }
}