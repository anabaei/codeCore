

// let human = new Object();
const human = {
  eyeColour: "brown",
  hairColour: "black",
  height: 168,
  age: 38,
  weight: 140,
  hobby: "Rock Climbing",
  hobbies: ["stock trade","code"],
  dog: {name:"lucky", age:2},
  run: function(){console.log("I am runnig");}

};

human.hobbies; // returns array 

human.dog; //return an object
for(let property in human.dog){
	console.log(property);
	human.dog[property];
}

human.run; //this gets a refrence to function
human.run(); //run the 

// in JavaScript unlike Ruby (we needed acc_reader) or Java we can access to local variable directly
// Cookie.Sugar = "brown"



//Google Formula in Excel
//GoogleFinance("goog","price")
//

// const in convention to create an objct 

// Inheritance 
 class Dogy
 {
 	constructor(name){
       this.name = name;
 	}
 }
// this class inherit everything from Dogy class
 class Dogfighter extends Dogy
 {
 	constructor(name, ability)
 	{
 		super(name);
 		this.ability = ability;
 	}
 }

let d = new Dogy("tt","ttt");


