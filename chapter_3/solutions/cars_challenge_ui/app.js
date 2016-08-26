/***
	Event Listeners
****/
$('#start').click(startFactory);
$('#create-factory').submit(function(e){
	e.preventDefault();

	createFactory($(this));
});
$('#manufacture-cars').submit(function(e){
	e.preventDefault();
	manufactureCars($(this));
});

//create  global variable for car factory
var carfactory;


/***
	App Functions
***/

function startFactory(){
	//change the the text in the button and
	//remove the old click event to attach 
	//the new one
	$(this)
		.unbind('click')
		.click(cancelFactory)
		.html('Cancel');

	//show the first form
	$('#create-factory').show();
}

function cancelFactory(){
	//change the the text in the button and
	//remove the old click event to attach 
	//the new one
	$(this)
		.unbind('click')
		.click(startFactory)
		.html('Start Car Factory');

	//if you cancel bring the page back
	//to its initial state
	$('form').hide();
	$('#result').hide();
}

function createFactory(frm){
	//see JQuery form element if you are curious
	console.log(frm);

	//find each element and get its data
	//this statement essentially says
	//"in this form, find the input with the name = xxxx"
	var make   = frm.find('input[name="make"]').val();
	var model  = frm.find('input[name="model"]').val();
	var colour = frm.find('input[name="colour"]').val();

	//not using the var keyword 
	//so you can access global car factory variable
	//if you were to use var here it would create 
	//a local variable that the manufacture function
	//would not be able to see
	carfactory = new CarFactory(make,model,colour);

	//hide the first form and show the next one
	$('#create-factory').hide();
	$('#manufacture-cars').show();

	//add the values for make, model, and colour to all
	//the elements that have the corresponding classes
	//(in this case there are 6 span's, 2 set of 3)
	//if you were to use an id here, JQuery would never
	//see the second set of span tags farther down the page
	$('.make').html(make);
	$('.model').html(model);
	$('.colour').html(colour);
}

function manufactureCars(frm){

	var numcars   = frm.find('select[name="numcars"]').val();
	
	//this is accessing global car factory variable
	carfactory.manufacture(numcars);
	$('#numcars').html(numcars);
	$('#manufacture-cars').hide();
	$('#result').show();

	//Hide cancel button now that the app is done
	$('#start').hide();
	console.log(carfactory);

}
