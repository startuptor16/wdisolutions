(function(){

    angular
        .module('userApp')
        .service('apiSrv', ApiService);

    function ApiService($http) {
        var self = this;

        //private variables
        var BASE_URL = 'https://mock-login-server.herokuapp.com/api/';
        var LOGIN_URL = BASE_URL + 'login';
        var LOGOUT_URL = BASE_URL + 'logout';
        var PROFILE_URL = BASE_URL + 'user';
        var CREATE_ACCOUNT_URL = BASE_URL + 'createAccount';

        //public functions
        self.login = login;
        self.createAccount = createAccount;
        self.getProfile = getProfile;
        self.logout = logout;

        function login(username, password) {
            return $http.post(LOGIN_URL, {username: username, password: password})
            .then(function(response) {
                localStorage.authToken = response.data.authToken;
                return response;
            });
        };

        function createAccount(username, password){
            return $http.post(CREATE_ACCOUNT_URL, {username: username, password: password})
        }

        function getProfile(){
          return $http.get(PROFILE_URL)
        }

        function logout(){
          return $http.post(LOGOUT_URL)
        }

        /*TODO #5: 
          add a logout() function that sends a POST to
          https://mock-login-server.herokuapp.com/api/logout
        */

        /*TODO #3: 
          add a getProfile() function that sends a GET to
          https://mock-login-server.herokuapp.com/api/user
          
          This function should a return a promise that 
          resolves the user data
        */

        /*TODO #1:
          add a createAccount() function that sends POST to
          https://mock-login-server.herokuapp.com/api/createAccount
        */

    }

})();






