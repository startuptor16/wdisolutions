$(document).ready(function(){
	$('#submit-question').click(submit_question);
});

var first_load = true;
var old_question = ""; // initialize 'old_question' to equal an empty string

function submit_question(){
	$('#submit-question').prop('disabled',true);
	
	var option; // instantiate the 'option' variable
	var question = $('#question').val(); // get the user's question from the DOM

	if (question == old_question){ // check if new question is equal to old question
		// old question
		display_answer('Stop asking that question!');
	} else {
		// not an old question
		old_question = question; // set old_question equal to current question

		/*	Using .search() function and a Regular Expression.
		 *	Search the question string using a Regular Expression (RegEx).
		 *	If there is a match, .search() returns the index of the match.
		 *	Since we are looking for a substring at the START of question,
		 *	if there is a match at the start of the question .search() returns 0.
		 *	Remember 0 in JavaScript is false, so we not ('!') the result of .search().
		 *	This RegEx (/^is\s.* /i) means, from the start of the string '^', match the
		 *	characters 'is', match any whitespace character '\s', match any character '.'
		 *	any number of times '*', the flag 'i' means ignore case.
		 */
		var starts_with_is = !question.search(/^is\s.*/i)

		/*	You don't have to use a Regular Expression in your solution.
		 *	The below search works the same way!
		 */
		// var starts_with_is = !question.search('is ' || 'IS ' || 'iS ' || 'Is ');


		/*	Using .startsWith() function.
		 *	This funciton checks if the string begins with the specified substring.
		 *	Returns 'true' if it starts with the exact substring, else returns 'false'.
		 */
		// var starts_with_is = question.startsWith(/is\s/i);

		if(starts_with_is){
			// question starts with 'is', restrict to 'yes' or 'no' options only
			option = Math.floor((Math.random() * 2) + 1);
			show_answer(option);
		} else{
			// question doesn't start with 'is', anything goes
			option = Math.floor((Math.random() * number_of_conditions) + 1);
			show_answer(option);
		}
	}

} // end of submit_question() function definition

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