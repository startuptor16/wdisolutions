(function(){
	//you dont need to change anything here, 
	//but can for testing purposes... if you please
	
	angular
		.module('MyApp')
		.controller("AppCtrl", AppCtrl);
	
	function AppCtrl() {
		var appVm = this;

		appVm.name = "AnGulAr";

		appVm.names=["John","Ned","Yigritte","Sansa","Maurice the Vengeful"];

		appVm.items=[12,1,5,69,10,1000,9,111,67];
		
		appVm.last_letter_name = "makemylastletteruppercase";
	}
})();


