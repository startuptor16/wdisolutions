(function(){
	
	angular
		.module('userApp')
		.controller('ProfileCtrl', ProfileCtrl);

	function ProfileCtrl($location, profileData,apiSrv) {
		var profileVm = this;
		
		profileVm.data = profileData.data;

		profileVm.apiSrv = apiSrv;
  		profileVm.logout = logout;

  		function logout(){
  			profileVm.apiSrv.logout()
  				.then(function(){
  					$location.path('/login');
  				})
  		}
	}
})();

