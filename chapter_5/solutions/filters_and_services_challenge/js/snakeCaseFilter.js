(function(){
	angular
		.module('insultApp')
		.filter('snakeCaseFilter', snakeCaseFilter);
		
	function snakeCaseFilter() {
	   return function(in_str) {
	   		//replace any space character "\s" with a underscore "_"
	        return in_str.replace(/\s/g, '_');
	    };
	};
})();
