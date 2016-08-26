(function(){
    
    angular
        .module('coderMdb')
        .service('movieSrv', MovieService);

    function MovieService($http) {
        var self = this;
        //call the getMovieData function and store return in self.movies for use in the app
        self.movies = [];

        self.getMovies = getMovies;
        self.getMovie = getMovie;
        self.getMovieData = getMovieData;
        getMovieData();

        function getMovies(){
            return self.movies;
        };

        function getMovie(id){
            return self.movies.filter(function(movie) {return movie.imdbID === id})[0];
        };

        //this function gets the movie data from our server
        function getMovieData(){
            return $http.get('/movies')
                .then(function(res){
                    self.movies = res.data;
                    return res.data;
                })
        }
    }

})();
