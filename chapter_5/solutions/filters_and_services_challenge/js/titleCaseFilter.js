(function(){
	angular
	    .module('insultApp')
	    .filter('titleCaseFilter', titleCaseFilter);

	function titleCaseFilter() {
	    return function(inputString) {
	    	//takes the first letter "\w" after a word boundary "\b" (space or dash) and capitalizes it.
	        return inputString.replace(/\b\w/g,function(chr){
	        	return chr.toUpperCase();
	        });
	    };


	    // SAVE THIS FOR LAST
	    // google how to titlecase with javascript
	    
	}
})();
