
console.log('Arguments: ', process.argv)

//variables
var args 	= process.argv.slice(2); //array of arguments from user
var nums 	= []; //array that holds all numbers
var notNums = []; //array that holds anything that is not a number


if(args.length > 0){
	// using Array.map() and ternary operators
	args.map(function(arg){
		arg.match(/\d/) ? nums.push(Number(arg)) : notNums.push(arg);
	})

	// going through the array using a for loop:
	// for(var i = 0;i < args.length;i++){
	// 	if(args[i].match(/\d/)){ // if args[i] matches a digit (0-9	)
	// 		nums.push(args[i])
	// 	}
	// 	else{
	// 		notNums.push(args[i]);
	// 	}
	// }
	displayResults(); // call function to display results
}
else{
	console.log("You didn't provide any arguments.")
}

function displayResults(){
	console.log("")
	if(nums.length === 0){
		console.log("None of the arguments are numbers!")
	}
	else{
		// reduces the number array to a sum
		var sum = nums.reduce(function(a,b){
			return a+b;
		})
		
		//doing the same thing with a for loop:
		// var sum = 0;
		// for(var i = 0; i < nums.length; i++){
		// 	sum += nums[i];
		// }
		console.log("The numbers you provided: " + nums)
		console.log("The sum: " + sum)
	}
	
	if(notNums.length === 1){
		console.log("The following is not a number: " + notNums[0])
	}
	else if(notNums.length > 1){
		console.log("The following are not numbers: " + notNums)
	}
	console.log("")
}