var number_of_conditions = 5;

function show_answer(option){
 
	var answer;
	// write conditions here
	/* If-Else structure for 2 conditions
	if(option == 1){
		answer = 'Yes';
	}
	else if(option == 2){
		answer = 'No';
	}
	else{
		answer = 'You broke me';
	}*/

	//Switch structure for 5 conditions
	switch(option){
		case 1:
			answer = 'Chances are good';
			break;
		case 2:
			answer = 'Yes, absolutely';
			break;
		case 3:
			answer = 'Outlook murky, ask again';
			break;
		case 4:
			answer = "Doesn't look like it";
			break;
		case 5:
			answer = 'Nope, sorry';
			break;
		default:
			answer = 'Ask me a real question';
			break;
	}
	display_answer(answer);
}

/* Pseudo Code
1: Get question from user
2: Function for generating random number
3: Function to generate answer based on random variable
	can use if-else for low # of conditions
	use switch for higher # of conditions and known input(random int)
4: Function to display answer
*/