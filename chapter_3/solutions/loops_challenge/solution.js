/******************
 * Exercise 1:
 * Work through the exercises at the end of Chapter 2 in Eloquent JavaScript.
 *******************/

/* Looping a triangle
 * Write a loop that makes 7 calls to console.log to output the following:
	#
	##
	###
	####
	#####
	######
	#######
 */
function triangle(){
	console.log('TRIANGLE');

	var line = ''; // initialize our line variable

	// using a for loop
	for(var i = 0; i < 7; i++) {
		/* Each time we go through the loop we add a '#' to our line.
		 * The first time the loop runs, line = '#'.
		 * The second time, line = '##'... etc.
		 */
		line += '#'; // equivalent to: line = line + '#'
		console.log(line);
	}

	// using a while loop
	// var j = 0;
	// while(j < 7){
	// 	line += '#';
	// 	console.log(line);
	// 	j++;
	// }
}

/* Fizz Buzz: Part 1
 * Write a program that uses console.log to print all the numbers from 1 to 100,
 * with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
 * number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 */
function fizzBuzzOne(){
	console.log('FIZZ BUZZ 1');

	// using a for loop
	for(var i = 1; i <= 100; i++) {
		if(i % 3 == 0){ // if i modulus 3 equals 0, i is divisible by 3
			console.log('Fizz');
		} else if(i % 5 == 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}

	// using a while loop
	// var j = 1;
	// while(j <= 100){
	// 	if(j % 3 == 0){ // if j modulus 3 equals 0, j is divisible by 3
	// 		console.log('Fizz');
	// 	} else if(j % 5 == 0){
	// 		console.log('Buzz');
	// 	} else {
	// 		console.log(j);
	// 	}
	// 	j++;
	// }
}

/* Fizz Buzz: Part 2
 * When you have that working, modify your program to print "FizzBuzz",
 * for numbers that are divisible by both 3 and 5 (and still print "Fizz"
 * or "Buzz" for numbers divisible by only one of those).
 */
function fizzBuzzTwo(){
	console.log('FIZZ BUZZ 2');
	// using a for loop
	for(var i = 1; i <= 100; i++) {
		if((i % 3 == 0) && (i % 5 == 0)) { // if i is divisible by 3 AND 5
			console.log('FizzBuzz');
		} else if(i % 3 == 0) { // if i is divisible by 3
			console.log('Fizz');
		} else if(i % 5 == 0) { // if i is divisible by 5
			console.log('Buzz');
		}else {
			console.log(i);
		}
	}

	// using a while loop
	// var j = 1;
	// while(j <= 100){
	// 	if((j % 3 == 0) && (j % 5 == 0)){ // if j is divisible by 3 AND 5
	// 		console.log('FizzBuzz');
	// 	} else if(j % 3 == 0){ // if j is divisible by 3
	// 		console.log('Fizz');
	// 	} else if(j % 5 == 0){ // if j is divisible by 5
	// 		console.log('Buzz');
	// 	}else {
	// 		console.log(j);
	// 	}
	// 	j++;
	// }
}

/* Chess Board
 * Write a program that creates a string that represents an 8×8 grid,
 * using newline characters to separate lines. At each position of the 
 * grid there is either a space or a “#” character. The characters should
 * form a chess board. Passing this string to console.log should show
 * something like this:
	  # # # #
	# # # #
	 # # # #
	# # # #
	 # # # #
	# # # #
	 # # # #
	# # # #
 */
function chessBoard(){
	console.log('CHESS BOARD');
	
	var size = 8;
	var board = '';

	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			if ((i + j) % 2 == 0) {
				board += ' ';
			} else {
				board += '#';
			}
		}
		board += '\n';
	}

	console.log(board);
}

function exerciseOne() {
	console.log('EXERCISE 1');
	triangle();
	fizzBuzzOne();
	fizzBuzzTwo();
	chessBoard();
}
exerciseOne();

/*****************
 * Exercise 2:
 * Create a function that takes in an integer and prints all numbers from
 * 1 to the given integer the number of times equal to the current loop
 * index (ie. 1, 2, 2, 3, 3, 3, ...).
 ******************/
function exerciseTwo(givenInteger) {
	console.log('EXERCISE 2');
	var j = 0;
	var output = ''; // initialize the string for our output
	for(var i = 0; i <= givenInteger; i++) {
		while(j < i) {
			output += String(i); // casting 'i' to be of type String
			j++;
		}
		j = 0;
	}
	console.log(output);
}
exerciseTwo(3);

/****************
 * Exercise 3:
 * Alter your answer to exercise 2 to log the numbers in the form
 * of a pyramid.
    1
   2 2
  3 3 3
 ****************/
function exerciseThree(givenInteger) {
	console.log('EXERCISE 3');
	var j;
	var pyramid = ''; // initialize the string for our output
	for(var i = 0; i <= givenInteger; i++) {
		if(i != 0){
			// add decreasing number of spaces at the start of each line
			for(var k = 0; k < (givenInteger - i); k++) {
				pyramid += ' ';
			}
			// you could use the built-in string.repeat() instead of the above loop
			// pyramid += (' ').repeat(givenInteger - i);
		}
		
		for(var j = 0; j < i; j++) {
			pyramid += String(i) + ' ';
		}
		pyramid += '\n'; // add a newline
	}
	console.log(pyramid);
}
exerciseThree(3);


/********************
 * Diving Deeper
 * While loops will not execute the body of the loop (within the closures)
 * if the condition evaluates to false. However, do while loops will always
 * execute the body of the loop at least once.
 *
 * Come up with one or two practical examples where we would want the body
 * to execute at least once (do while loop) and another where we would not
 * want the body to execute (while loop).
 ********************/