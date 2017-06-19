'use strict'

class Doggo{
 constructor(name){
 	this.name = name;
 }
}

class DogoFighter extends Doggo {
 
 constructor(name, specialattck){
 	super(name);
 	this.specialattck = specialattck;
 
 }
fight(){
	return this.name+' nas special attack';
}
}



// test
let doggo = new Doggo("snoop");
let dogoFighter = new DogoFighter("fighter1");
console.log(dogoFighter.fight());
console.log(Math.random());