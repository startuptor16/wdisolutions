(function(){
	/*TODO #1: Add a dependency on the router module*/
	angular
		.module('coderMdb', ['ngRoute']);

	angular
		.module('coderMdb')
		.config(function($routeProvider) {
			$routeProvider
	            .when('/home', {
	              templateUrl: 'movieList.html',
	              controller: 'MovieListCtrl as ctrl',
	              resolve:{ 
	              	movies:function(movieSrv){
	              		if(movieSrv.movies.length > 0){
	              			return movieSrv.movies;
	              		} else{
	              			return movieSrv.getMovieData();
	              		}
	              	}
	              }
	            })
	            .when('/movie/:movieId', {
	              templateUrl: 'movieDetails.html',
	              controller: 'MovieDetailsCtrl as ctrl',
	              resolve:{
	              	movie:function(movieSrv,$route){
	              		return movieSrv.getMovie($route.current.params.movieId)
	              	}
	              }
	            })
	            .otherwise({
	              redirectTo: '/home'
	            });
	  /*
	  TODO #2:
	  Configure the router to:
	    -load movieList.html and use the MovieListCtrl when the url is '/home'
	    -load movieDetails.html and use the MovieDetailsCtrl when the url is '/movie/:movieId'
	  For any other url redirect the user to the home page.
	  */
	});
})();
