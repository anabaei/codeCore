// create a class
function Vector() {
  this.x = 0;
  this.y = 0;
  // this.sum = function() {
  //   return this.x + this.y;
  // }
}

// New way dynamically add new mehtods 
// this is a way optimize our classes in the old school method, where the method will not be recreated for every instance, rather it will refer to single prototype method to draw from.
Vector.prototype.sum = function() {
  return this.x + this.y;
};

// function prototype.

// let numbers = new Array();
// let human = new Object();

let vector = new Vector();
// getter
vector.x;
vector.y;
// setter
vector.x = 10;
vector.y = 20;
console.log( vector.sum());