(function(){
	angular
		.module("formApp")
		.controller("FormCtrl",FormCtrl)

	function FormCtrl ($http,$sanitize){
		var formVm = this;

		//variables
		formVm.user;
		formVm.bio;
		formVm.city;
		formVm.gender;
		formVm.agree;
		formVm.response;

		//function bindings
		formVm.submitForm = submitForm;

		function submitForm (isValid){
			//only submit if form is valid
			if(isValid){
				//since the php backend doesn't accept the form data as JSON, 
				// we need to encode the data in the default structure for HTML forms
				// the data needs to follow the structure: input1Name=input1Value&input2Name=input2Value, etc.
				var __form = "user=" + formVm.user
					__form += "&bio=" + formVm.bio
					__form += "&city=" + formVm.city
					__form += "&gender=" + formVm.gender
					__form += "&agree=" + formVm.agree
				console.log(__form) // take a look at the encoded form data

				$http({
					method:'POST',
					url:"http://174.129.248.23/brainstation/files/submittingforms.php",
					data:__form,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				})
				.then(function(res){
					//for the HTML forms challenge, the response data was the html for the page that displays the data sent to the server.
					//to use it in angular, we save this html in formVm.response, and then we use ng-bind-html to display it.
					console.log(res)
					formVm.response = res.data;
				})
			}
		}
	} // end of FormCtrl

})();