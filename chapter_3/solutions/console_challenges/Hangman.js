/*
	Hangman
	---------------------------------------
	Let's make Hangman! Some code is already provided for printing
	a simple man as you guess wrong. Using the printHangman(count)
	function, add the code the print the man as someone gets
	wrong answers as well as the logic for the game.

	THIS ONE MUST BE DONE USING JSFIDDLE SINCE PROMPT IS USED.

	It would be helpful to write a command that allows you to stop 
	the game incase someone wants to quit.

	Your game wont be perfect but do your best!

	HINT: What type of conditional would be best for implementing
	the printHangman function? 
*/

function printHangman(count) {
	var man = "";
	var head = " ( ) \n";
	var arms = " \\|/\n";
	var belly = "  |\n";
	var legs = " / \\";
  
	switch(count){
  	case 1: man = head;
    	break;
    case 2: man = head+arms;
    	break;
    case 3: man = head+arms+belly;
    	break;
    case 4: man = head+arms+belly+legs;
    	break;
  }
	alert('The man: \n' + man);
}

var game = true;

while (game) {
    if (start == undefined) {
        var count = 0;
        var win = 0;
        var current = ''
        var guesses = [];
        var word = prompt("Pick a word!");
        var gameWin = word.length;

        //create blank word to display
        for(var i = 0;i<word.length;i++){
        	current += "_";
        }
        alert(gameWin + " wrong answers and you lose!");
    }
    var guess = prompt("Pick a letter! \n You've guessed these letters: " + guesses);
    //quit condition
    if(guess == 'quit'){
    	game = false;
    }
    //if prompt left blank
    else if(guess == ""){
    	alert('You need to guess a letter!');
    }
    //if more than one letter
    else if(guess.length > 1){
    	alert('One letter at a time!')
    }
    //if letter was already guessed
    else if(guesses.indexOf(guess) > -1){
    	alert('You already guessed that! Try a different letter.')
    }
    //try to find guess in word
    else if(word.indexOf(guess) != (-1)){
    	guesses.push(guess);
    	alert("You guessed: " + guess + ".\n That's in the word!")
    	for(var i = 0;i < word.length;i++){
      	if(word[i] == guess){
        	current = current.substr(0, i) + guess + current.substr(i + 1);
        }
      }

      //check for win condition
      if(current == word){
      	alert('You Win!');
        game = false;
      } 
      else {
      	alert('Word so far: ' + current)
      }
      index = [];
    }
    //if guess was not found
    else if (word.indexOf(guess) == -1){
    	guesses.push(guess);
    	alert('You guessed: ' + guess +'.\n That was wrong.')
    	count++;
      if(count == gameWin){
      	alert('You Lose!')
        printHangman(4);
        game = false;
      }
      else{
      	alert('You have ' + (gameWin-count) + ' guesses left.')
      	printHangman(Math.floor((count/gameWin) * 4));
      }
    }
    var start = true;
}
