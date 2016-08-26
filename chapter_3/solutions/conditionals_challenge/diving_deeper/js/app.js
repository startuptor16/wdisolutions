$(document).ready(function(){
	$('#submit-question').click(submit_question);
});

var number_of_conditions = 5;
var first_load = true;
var last = null; //variable to save last asked question
var last2 = null; //variable to save 2nd last question

function submit_question(){
	$('#submit-question').prop('disabled',true);
	var question = $('#question').val();
	var option = 0;
	
	/*
	There are several different ways to check for repeats and 'is' questions.
	Here we store the last two questions in variables, but you could use arrays to store all the asked questions and check against that.
	We use regular expressions to check if the question begins with 'is', but String methods like String.charAt(0) could accomplish the same thing.
	*/

	//check for repeats and is questions
	if(!$('#question').val() || !question.match(/\?$/)){ //if field is blank or not a question
		display_answer("You need to actually ask a question");
	} else if (question == last && question == last2){ //if a question is asked three times in a row
		display_answer("Seriously, stop."); 
	} else if(last == question){ //if a question is asked twice in a row
		display_answer("Stop asking the same question");
	} else{
		if(question.match(/^is\b/i)) { //if a question starts with is
			option = Math.floor((Math.random() * 2) + 1); //gives option a value of either 1 or 2
			console.log('is')
		} else {
			option = Math.floor((Math.random() * number_of_conditions) + 3); // gives option a value of 3 - 7 
		}
		show_answer(option);
	}
	last2 = last;
	last = question;
}

function display_answer(answer){

	$('#msg-txt').fadeOut(500,function(){
		$('#msg-txt').html(answer);
		$('#msg-txt').fadeIn(500);
		$('#submit-question').prop('disabled',false);	
	});
	if(first_load){
		$('.msg').fadeIn(300,function(){
			first_load = false;
		});
	}
}

function show_answer(option){
 
	var answer;
	switch(option){
		case 1:
			answer = 'Yes';
			break;
		case 2:
			answer = 'No';
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
		case 6:
			answer = 'Chances are good';
			break;
		case 7:
			answer = 'Yes, absolutely';
			break;
		default:
			answer = 'Ask me a real question';
			break;
	}
	display_answer(answer);
}