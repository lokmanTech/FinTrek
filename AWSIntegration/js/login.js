// Import AWS SDK
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk';

// AWS Cognito configuration
const poolData = {
    UserPoolId: 'YOUR_USER_POOL_ID', // Your user pool id here
    ClientId: 'YOUR_CLIENT_ID' // Your client id here
};
const userPool = new CognitoUserPool(poolData);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    authenticateUser(email, password)
        .then(result => {
            if (result) {
                window.location.href = 'main.html';
            }
        })
        .catch(error => {
            document.getElementById('loginMessage').textContent = 'Login failed. Please try again.';
        });
});

function authenticateUser(email, password) {
    const authenticationDetails = new AuthenticationDetails({
        Username: email,
        Password: password
    });

    const userData = {
        Username: email,
        Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: result => resolve(true),
            onFailure: err => reject(err)
        });
    });
}

