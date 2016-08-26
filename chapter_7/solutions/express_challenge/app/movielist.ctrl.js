(function(){
	angular
		.module('coderMdb')
		.controller('MovieListCtrl', MovieListCtrl);

	function MovieListCtrl(movieSrv,movies, $location) {
		var movielVm = this;
	  /*TODO #3: Load all of the movies from the movieService*/
	  	movielVm.movies = movies;
	  	movielVm.search = "";
	  
	  	movielVm.sortOptions = [
		    {label: 'Title', sortField: 'Title', reverse: false},
		    {label: 'Rating', sortField: "imdbRating", reverse: true}
		]
		//stores currently selected sort options
		movielVm.sortSelect = movielVm.sortOptions[0];
	  
	  	movielVm.currentPage = 0;
	  	movielVm.moviesPerPage = 4;


	  	//function bindings
	  	movielVm.goToMovie = goToMovie;
	  	movielVm.roundUp = roundUp;

	  	function goToMovie(id){
	  		$location.path('/movie/'+id)
	  	}

	  	function roundUp(num){
	  		return Math.ceil(num)
	  	}

	}
})();
