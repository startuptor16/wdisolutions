(function(){
	angular
		.module('insultApp')
		.controller('InsultCtrl', InsultCtrl);

	//This line makes the controller safe for minification by preserving the dependency/service names when injecting
	InsultCtrl.$inject = ['insultSrv'];

	function InsultCtrl(insultSrv) {
		var insultVm = this;
		//insultVm == InsultCtrl
		//InsultCtrl cannot refer to itself using InsultCtrl; it must use 'this'
		//'this' will not refer to InsultCtrl inside another function 
		//So we create a new alias insultVm = this, i.e. insultVm = InsultCtrl
		//insultVm is just a naming convention

		//variables
		insultVm.insult = insultSrv.generateInsult(); 
		//calling and setting service



		//function bindings
		insultVm.replaceInsult = replaceInsult;
			// if you use ng-click and run function with ctrl.replaceInsult 

		function replaceInsult(){
			var newInsult = insultSrv.generateInsult();
			//generates a new insult using the service's generate function

			// function binding is used to call the function replaceInsult

			//creating a variable from the result of the generateInsult function that runs in the service


			insultVm.insult = newInsult;  //sets the insult variable to the newly generated insult
			// insultVM is changing the the object 
		}
		
	}
})();

// Minified version of this controller
// !function(){function n(n){function t(){var t=n.generateInsult();l.insult=t}var l=this;l.insult=n.generateInsult(),l.replaceInsult=t}angular.module("insultApp").controller("InsultCtrl",n),n.$inject=["insultSrv"]}();