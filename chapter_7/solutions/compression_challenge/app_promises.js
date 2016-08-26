//This is the same challenge, but using promises instead of callbacks. Notice the difference in how the code is organized.
//The bluebird module is used to 'promisify' the fs methods.
//To test this file, you will need to install bluebird. You can do this by typing the following into your terminal:
//npm install bluebird


fs = require('fs')
var Promise = require("bluebird");
Promise.promisifyAll(fs);

var filename = 'pyramid.txt'
if(process.argv[2]){
	filename = process.argv[2];
}

var compname = filename.slice(0,filename.indexOf('.txt')) + '_comp.txt'

fs.readFileAsync(filename, 'utf8')
	.then(function (data){
		console.log('Original:')
		console.log(data)

		var comp = compress(data);
		console.log('Compressed data:')
		console.log(comp)
		return comp;
	})
	.then(function (comp){
		//write compressed data to file
		return fs.writeFileAsync(compname, comp)
	})
	.then(function(){
		//read compressed data to file
		return fs.readFileAsync(compname,'utf8')
	})
	.then(function(comp_data){
		var expanded = expand(comp_data)
		console.log("Expanded data:")
		console.log(expanded)
	})
	.catch(function(err){
		console.log(err)
	})


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