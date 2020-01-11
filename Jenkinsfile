pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3002:3002 -p 5001:5001'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        // stage('Test') {
        //     steps {
        //         sh 'npm run test'
        //     }
        // }
        // stage('Test') {
        //     steps {
        //         sh './jenkins/scripts/test.sh'
        //     }
        // }
    }
}
