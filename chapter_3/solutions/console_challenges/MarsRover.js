/*
	Mars Rover
	---------------------------------------
	So it's your first day as a programmer at NASA... and naturally, they 
	have you working on the Mars rover.

	The Mars rover has limited movement and so it can only take
	a single command at a time, that is one of three commands; 
	drive straight, rotate 90 degrees left, and rotate 90 degrees right.


	THIS ONE MUST BE DONE USING JSFIDDLE SINCE PROMPT IS USED.


	Design a simple program that allows you to drive the Mars rover around
	a 5x5 grid.

	When drawing the map:
	Use X to represent the rover
	Use 0 to represent open area


	Here's a sample of what we want the interface to look like

	-- SAMPLE PROMPT --
	Mars Rover Controls
	 1. Drive
	 2. Turn 90 deg Left
	 3. Turn 90 deg Right
	 4. Quit Game

	00000
	00000
	00X00
	00000
	00000

	Rover is facing North
	-- SAMPLE PROMPT --

	If the user entered 1, the rover would drive up 1 space North and you would see this

	-- SAMPLE PROMPT --
	Mars Rover Controls
	 1. Drive
	 2. Turn 90 deg Left
	 3. Turn 90 deg Right
	 4. Quit Game

	00000
	00X00
	00000
	00000
	00000

	Rover is facing North
	-- SAMPLE PROMPT --


	== TIPS
	Make sure to implement the Quit functionality right away as it makes it easier to test.
	You'll need to loop through the grid positions and check to see if the rover is there or not!

	== BONUS
	As a bonus, make it so the rover can't go out of bounds of our 5x5 grid

	== DOUBLE BONUS
	As a double bonus, make it so the grid can be configurable to any size 20x20 or even 100x100!
*/

var controlsText = "Mars Rover Controls\n 1. Drive\n 2. Turn 90 deg Left\n 3. Turn 90 deg Right\n 4. Quit Game\n";
var gridSize = prompt('How big is Mars?');

// Rover
var roverPositionX = Math.floor(gridSize/2);
var roverPositionY = Math.floor(gridSize/2);
var roverFacing = 0;

// Directions
var NORTH = 0;
var EAST = 1;
var SOUTH = 2;
var WEST = 3;

function move(direction){
  	if(direction === 0){
	    roverPositionY === 0 ? alert('You are at the northern border!') : roverPositionY--;
  	} 
  	else if (direction === 1){
	    roverPositionX === (gridSize-1) ? alert('You are at the eastern border!') : roverPositionX++;
 	} 
 	else if (direction === 2){
	    roverPositionY === (gridSize - 1) ? alert('You are at the southern border!') : roverPositionY++;
  	} 
  	else if (direction === 3){
	    roverPositionX === 0 ? alert('You are at the western border!') : roverPositionX--;
  	}
  
}

function drawGrid() {
	var grid = '';
  	var dir = '';
  	var rover = '';
  	switch(roverFacing){
	  	case 0: dir = 'NORTH';
	  			rover = '^';
	    break;
	    case 1: dir = 'EAST';
	    		rover = '>';
	    break;
	    case 2: dir = 'SOUTH';
	    		rover = 'v';
	    break;
	    case 3: dir = 'WEST';
	    		rover = '<';
	    break;
  	}
	for(var i = 0; i < gridSize;i++){
  		for(var j = 0;j < gridSize;j++){
	    	if(i === roverPositionY && j === roverPositionX){
	    		grid += rover;
	    	}
	    	else{
	    		grid += 'O';
	    	} 
		}
		grid += '\n';
  	}
  	
  	grid += ('\nThe rover is facing ' + dir + ".");
	return grid;
}

var game = true;

while (game) {
	var cmd = prompt(controlsText + drawGrid());
	if(cmd == 4){
		alert('Game Over!');
		game = false;
	}
	else if(cmd == 1){
		move(roverFacing);
	}
	else if(cmd == 2){
		roverFacing === 0 ? roverFacing = 3: roverFacing--;
	}
	else if(cmd == 3){
		roverFacing === 3 ? roverFacing = 0: roverFacing++;
	}
	else{
		alert('Please enter a valid command.')
	}
}