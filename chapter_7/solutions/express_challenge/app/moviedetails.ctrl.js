(function(){
	angular
		.module('coderMdb')
		.controller('MovieDetailsCtrl', MovieDetailsCtrl);

	function MovieDetailsCtrl(movieSrv,$routeParams,$location,movie) {
		var moviedVm = this;
		moviedVm.movie = movie;

		//in case the movie service hadn't loaded the movies before the resolve, try getting data again
		if(!movie){
			moviedVm.movie = movieSrv.getMovie($routeParams.movieId);
		}
		
		//function binding
		moviedVm.goHome = goHome;

		function goHome(){
			$location.path('/home')
		}
	}

})();
