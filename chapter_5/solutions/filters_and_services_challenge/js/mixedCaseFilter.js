(function(){
	angular
		.module('insultApp')
		.filter('mixedCaseFilter', mixedCaseFilter);
		
	function mixedCaseFilter() {
	   return function(in_str) {
	   		//takes each pair of letters in the string, makes the first one uppercase and the second one lowercase.
	        return in_str.replace(/\w\S|\w$/g, function(str){
	        	return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
	        });

	        //can also be done with a for loop:
	        // var new_str = "";
	        // for(var i = 0;i < in_str.length; i += 2){
	        // 	new_str += in_str.charAt(i).toUpperCase() + in_str.charAt(i+1).toLowerCase();
	        // }
	        // return new_str;
	    };
	};

})();