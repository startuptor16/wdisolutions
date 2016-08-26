(function(){

	angular
		.module('userApp')
		.controller('LoginCtrl', LoginCtrl);
		
	function LoginCtrl($http,$location, apiSrv) {
  		var loginVm = this;
  		
  		loginVm.username = '';
  		loginVm.password = '';

  		//public methods
  		loginVm.createAcc = createAcc;
  		loginVm.login = login;
  		loginVm.toProfile = toProfile;

  		function createAcc(){
  			console.log('create')
  			apiSrv.createAccount(loginVm.username,loginVm.password)
  				.then(function(res){
  					alert('Account Created.')
  					// console.log(res);
  					loginVm.login();
  				},function(err){
  					console.log(err);
  				});
  		}

  		function login(){
  			console.log('login')
  			apiSrv.login(loginVm.username,loginVm.password)
  			  .then(function(res){
  			  		// console.log(res)
  					loginVm.toProfile();
  				},function(err){
  					console.log(err);
  					alert('That is not a valid username and password.')
  				});

  		}

  		function toProfile(){
  			$location.path('/profile');
  		}
	}
})();


