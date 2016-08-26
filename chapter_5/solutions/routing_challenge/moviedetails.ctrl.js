(function(){
	angular
		.module('coderMdb')
		.controller('MovieDetailsCtrl', MovieDetailsCtrl);

	function MovieDetailsCtrl(movieSrv,$routeParams,$location) {
		var moviedVm = this;
	  	/*TODO #4: Load the movie from the movieService using the id form the route params*/
		moviedVm.movie = movieSrv.getMovie($routeParams.movieId)
		
		//function binding
		moviedVm.goHome = goHome;

		function goHome(){
			$location.path('/home')
		}
	}

})();
