var fs = require('fs');

//default input file name
var fileName = 'pyramid.txt'
//gets the file name from user if they specify one
if(process.argv[2]){
	fileName = process.argv[2];
}

//create name for compressed image file based on input file name
var compName = fileName.slice(0,fileName.indexOf('.txt')) + '_comp.txt'

//read input file
fs.readFile(fileName, 'utf8', function (err,data) {
  	if (err) {
    	return console.log(err);
  	}
  	console.log('Input Data:')
  	console.log(data);

	console.log("Compressing " + fileName + ".");
	var comp = compress(data); //compress function compresses the file data and returns compressed string
	console.log('Compressed data:')
	console.log(comp)

	//write compressed data to file
	fs.writeFile(compName, comp, function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved to "+ compName + "!");

	    //once saved, read compressed file and expand
	  	fs.readFile(compName, 'utf8', function (err,data) {
		  	if (err) {
		    	return console.log(err);
		  	}
		  	console.log("Expanding " + compName + ".")
		  	var expanded = expand(data) //expand function outputs 
		  	console.log("Expanded data:")
			console.log(expanded)
		});
	});
});

function compress(data){
	//counter variable to track the number of times a character repeats
	var count = 1;
	//str variable to hold the compressed data
	var str = "";

	for(var i = 0;i < data.length;i++){
		if(i === data.length - 1){ // for the last character in the file, simply add to compressed string
			str += (count + data[i]);
			count = 1;
		}
		else { // if not at the end of the string
			if(data[i] === data[i+1]) { // checks if the next character is the same as the current character
				count++; // if repeating, add to count
			} 
			else { // if repeating stops
				if(data[i] === '\n'){ // if newline character, simply add to string
					str += data[i]; 
				} 
				else { // when no more repeats, add number of occurrences and character to compressed string
					str += (count + data[i]);
				}
				count = 1; // reset count for each character
			}
		}
	}
	return str;
}

function expand(data){
	//string that will store the expanded data
	var exp = '';
	//counter variable for number of character repeats
	var count = '';

	for(var i = 0; i < data.length;i++){
		if(data[i] == '\n'){ // if a newline character is read, simply add it to the expanded str
			exp += data[i];
		} 
		else if(data[i].match(/\d/)){ //if a number is found in the data, store the number in the counter variable
			//we take advantage of string concatenation here to simplify handling numbers with more than 1 digit.
			//since the data is a string, adding '4' + '1' = '41'.
			count += data[i];
		} 
		else{
			//when a character is read, repeat character 'count' number of times then reset counter
			//remember to parse count to number form to use in the for loop
			exp += data[i].repeat(Number(count)) //using the String.repeat() method;
			// for(var j = 0;j < Number(count);j++){ // can also be done with a simple for loop
			// 	exp += data[i];
			// }
			count = '';
		}
	}
	return exp;
}