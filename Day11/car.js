class Car{
 constructor(year, make, model){
 	this.year= year;
 	this.make = make;
 	this.model = model;
 }

   info(){
  	console.log(this.year + this.make + this.model);
  }
}

let car = new Car("BMS","Germany", "2020"); 
car.info();