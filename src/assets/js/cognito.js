var mysfitsApiEndpoint = 'https://f3mgdwkge9.execute-api.us-east-1.amazonaws.com/prod'; // example: 'https://abcd12345.execute-api.us-east-1.amazonaws.com/prod'
var streamingApiEndpoint = 'https://ep9kc2glh5.execute-api.us-east-1.amazonaws.com/prod'; // example: 'https://abcd12345.execute-api.us-east-1.amazonaws.com/prod'

var cognitoUserPoolId = 'us-east-1_XG9JMRGxm';  // example: 'us-east-1_abcd12345'
var cognitoUserPoolClientId = '2btjskfmptccs5uoq80l2kd1uh'; // example: 'abcd12345abcd12345abcd12345'
var awsRegion = 'us-east-1'; // example: 'us-east-1' or 'eu-west-1' etc.

initializeStorage();

var configString = localStorage.getItem("awsConfig");
var config = JSON.parse(configString);
if(config != null) {
  refreshAWSCredentials();
}

function refreshAWSCredentials() {
  var userPoolId = localStorage.getItem('userPoolId');
  var clientId = localStorage.getItem('clientId');
  var identityPoolId = localStorage.getItem('identityPoolId');
  var loginPrefix = localStorage.getItem('loginPrefix');

  var poolData = {
    UserPoolId : userPoolId, // Your user pool id here
    ClientId : clientId // Your client id here
  };
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  var cognitoUser = userPool.getCurrentUser();

  if (cognitoUser != null) {
    cognitoUser.getSession(function(err, result) {
      if (result) {
        console.log('You are now logged in.');
        cognitoUser.refreshSession(result.getRefreshToken(), function(err, result) {

          if (err) {//throw err;
            console.log('In the err: '+err);
          }
          else{
            localStorage.setItem('awsConfig', JSON.stringify(AWS.config));
            var sessionTokens =
            {
              IdToken: result.getIdToken(),
              AccessToken: result.getAccessToken(),
              RefreshToken: result.getRefreshToken()
            };
            document.getElementById('login_state').click();

          }
        });

      }
    });
  }
}

function initializeStorage() {
  var identityPoolId = cognitoUserPoolId;//
  var userPoolId = cognitoUserPoolId; //
  var clientId = cognitoUserPoolClientId;//
  var loginPrefix = 'cognito-idp.' + awsRegion + '.amazonaws.com/' + identityPoolId;

  localStorage.setItem('identityPoolId', identityPoolId);
  localStorage.setItem('userPoolId', userPoolId);
  localStorage.setItem('clientId', clientId);
  localStorage.setItem('loginPrefix', loginPrefix);
}

function loginUser(email, pwd) {
  var userPoolId = localStorage.getItem('userPoolId');
  var clientId = localStorage.getItem('clientId');
  var identityPoolId = localStorage.getItem('identityPoolId');
  var loginPrefix = localStorage.getItem('loginPrefix');

  var poolData = {
    UserPoolId : userPoolId, // Your user pool id here
    ClientId : clientId // Your client id here
  };
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  var authenticationData =
  {
    'Username': email,
    'Password': pwd
  }
  var userData = {
    Username : email,
    Pool : userPool
  };

  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      console.log('access token + \n' + result.getAccessToken().getJwtToken());

      var sessionTokens =
      {
        IdToken: result.getIdToken(),
        AccessToken: result.getAccessToken(),
        RefreshToken: result.getRefreshToken()
      };
      localStorage.setItem('sessionTokens', JSON.stringify(sessionTokens));

      //POTENTIAL: Region needs to be set if not already set previously elsewhere.
      AWS.config.region = 'us-east-1';
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId : identityPoolId, // your identity pool id here
        Logins : {
          // Change the key below according to the specific region your user pool is in.
           loginPrefix : sessionTokens.IdToken.jwtToken
        }
      });
      localStorage.setItem('awsConfig', JSON.stringify(AWS.config));
      localStorage.setItem('email', email);

      cognitoUser.getUserAttributes(function(err, result) {
        if (err) {
            alert(err);
            return;
        }
        for (i = 0; i < result.length; i++) {
            console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
            if (result[i].getName() == 'sub') {
              console.log('Overwriting userId into local storage');
              localStorage.setItem('userId', result[i].getValue());
            }
        }
        document.getElementById('login_state').click();
      });



    },

    onFailure: function(err) {
      alert(err.message);
    },

  });
}


function refreshAWSCredentials() {

  var userPoolId = localStorage.getItem('userPoolId');
  var clientId = localStorage.getItem('clientId');
  var identityPoolId = localStorage.getItem('identityPoolId');
  var loginPrefix = localStorage.getItem('loginPrefix');

  var poolData = {
    UserPoolId : userPoolId, // Your user pool id here
    ClientId : clientId // Your client id here
  };
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  var cognitoUser = userPool.getCurrentUser();

  if (cognitoUser != null) {
        cognitoUser.getSession(function(err, result) {
            if (result) {
                console.log('You are now logged in.');
                cognitoUser.refreshSession(result.getRefreshToken(), function(err, result) {

                    if (err) {//throw err;
                        console.log('In the err: '+err);
                    }
                    else{
                        localStorage.setItem('awsConfig', JSON.stringify(AWS.config));
                        var sessionTokens =
                        {
                          IdToken: result.getIdToken(),
                          AccessToken: result.getAccessToken(),
                          RefreshToken: result.getRefreshToken()
                        };
                        localStorage.setItem("sessionTokens", JSON.stringify(sessionTokens));

                    }
                });

            }
        });
    }


}
