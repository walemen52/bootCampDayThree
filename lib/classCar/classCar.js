/* Below is a Car class that is used to instantiate various vehicles. 
It takes in arguments that depict the type, model, and name of the vehicle, provided they are set.
Author: Olawale Animashaun
Task at Andela Boot camp Day 3*/
class Car{
	constructor(name,model,type){
		this.type = type
		this.speed = "0 km/h";

		if(typeof(name) !== "string"){
			this.name = "General";

		}else{
			this.name = name;
		}

		if (typeof(model) !== "string"){
			this.model = "GM";

		}else{
			this.model = model
		}

		if(name === "Koenigsegg" || name === "Porshe"){
			this.numOfDoors = 2;

		}else{
			this.numOfDoors = 4;

		}
		if(type === "trailer"){
			this.numOfWheels = 8;

		}else{
			this.numOfWheels = 4;

		}
		if(this.numOfWheels === 4){
			this.isSaloon = true;
		}

		else{
			this.isSaloon = false;
		}
	}


	let drive(speed){
		if(this.name === "Porshe"){
			this.speed = 50 * speed+ " " + "km/h";
			return this;
		}

		else{
			this.speed = 11 * speed+ " " +"km/h";
			return this;
		}
	}

}

module.exports.Car = Car