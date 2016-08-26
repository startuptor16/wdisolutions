(function(){
    angular
        .module('MyApp')
        .filter('lastLetterFilter', lastLetterFilter);

    function lastLetterFilter() {
        return function(input_string) {
            //capitalized using regular expressions and replace
            return input_string.replace(/\w$/,function(chr){
                return chr.toUpperCase();
            })

            //capitalized using string methods and concatenation
            // var new_string = input_string.substring(0,input_string.length - 1)
            //     + input_string.substring(input_string.length - 1).toUpperCase();
            // return new_string;
        }
    };
})();


