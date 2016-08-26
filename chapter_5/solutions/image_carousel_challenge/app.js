(function(){

	angular
		.module('carousel', []);

	angular
		.module('carousel')
		.controller('CarouselCtrl',CarouselCtrl);

	function CarouselCtrl() {
		var carouselvm = this;
		
		//Declare variables
		carouselvm.count = 0; // this keeps track of which image is currently being displayed
		carouselvm.images = [
			'http://imgur.com/9itd49u.png',
			'http://imgur.com/n19BXfZ.png',
			'http://imgur.com/VBwQmzA.png',
			'http://imgur.com/nawDxVv.png'
		];

		//Function bindings
		carouselvm.next = next;
		carouselvm.previous = previous;
		carouselvm.change = change;

		//functions for going forward and back in the carousel
		function next(){
			//this can be done using a ternary operator (?):
			carouselvm.count === (carouselvm.images.length - 1) ? carouselvm.count = 0 : carouselvm.count++; 

			//using if/else statement:
			// if(carouselvm.count === (carouselvm.images.length - 1)){
			// 	carouselvm.count = 0;
			// }else{
			// 	carouselvm.count++;
			// }
		}

		function previous(){
			//ternary form
			carouselvm.count === 0 ? carouselvm.count = (carouselvm.images.length - 1) : carouselvm.count--;

			//using if/else statement:
			// if(carouselvm.count === 0){
			// 	carouselvm.count = (carouselvm.images.length - 1);
			// }else{
			// 	carouselvm.count--;
			// }	
		}

		//the diving deeper solution
		function change(i){
			carouselvm.count = (carouselvm.count + i + carouselvm.images.length) % carouselvm.images.length;
		}
	}

})();
