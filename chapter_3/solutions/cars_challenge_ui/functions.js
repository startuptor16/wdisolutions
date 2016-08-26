function CarFactory(make,model,colour){
	this.make = make;
	this.model = model;
	this.colour = colour;

	this.cars = [];

	this.manufacture = function(numofcars){
		for(var i = 0; i < numofcars; i++){
			var car = new Car(this.make, this.model, this.colour);
			this.cars.push(car);
		}
	}
}

function Car(make, model, colour){
	this.make = make;
	this.model = model;
	this.colour = colour;
}



