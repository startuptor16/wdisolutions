/* 	Psuedo Code For Magic 8-Ball
	
	On submit button click:
		Generate a random integer  from 1 to 'number of conditions'
		Set 'option' to equal the generated integer
		If 'givenoption' is equal to some value, set 'answer' appropriately
		Display 'answer' on the DOM
*/


var number_of_conditions = 8;

function show_answer(givenoption){
 
	var answer;

	/* Using if/else statements */
	if(givenoption == 1){
		answer = 'Yes';
	} else if(givenoption == 2){
		answer = 'No';
	} else if(givenoption == 3){
		answer = 'Cannot predict now';
	} else if(givenoption == 4){
		answer = 'Ask again later';
	} else if(givenoption == 5){
		answer = 'It is certain';
	} else if(givenoption == 6){
		answer = 'Without a doubt';
	} else if(givenoption == 7){
		answer = 'My sources say no';
	} else{ // givenoption == 8
		answer = 'Don\'t count on it';
	}

	/* Using a switch statment */
	// switch(givenoption){
	// 	case 1:
	// 		answer = 'Yes';
	// 		break;
	// 	case 2:
	// 		answer = 'No';
	// 		break;
	// 	case 3:
	// 		answer = 'Cannot predict now';
	// 		break;
	// 	case 4:
	// 		answer = 'Ask again later';
	// 		break;
	// 	case 5:
	// 		answer = 'It is certain';
	// 		break;
	// 	case 6:
	// 		answer = 'Without a doubt';
	// 		break;
	// 	case 7:
	// 		answer = 'My sources say no';
	// 		break;
	// 	default:
	// 		answer = 'Don\'t count on it';
	// }
	
	display_answer(answer);

} // end of show_answer() function definition