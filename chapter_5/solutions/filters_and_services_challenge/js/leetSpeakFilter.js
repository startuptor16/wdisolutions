(function(){
	angular
		.module('insultApp')
		.filter('leetSpeakFilter', leetSpeakFilter);
		
	function leetSpeakFilter() {
	   return function(in_str) {
	   		//replaces specific letters with the corresponding number
	        return in_str.replace(/o/gi, '0').replace(/i/gi, '1').replace(/e/gi, '3').replace(/a/gi, '4').replace(/s/gi, '5')
	    };
	};
})();
