class Vector{
  constructor(x,y,z){
  	 this.x = x;
  	 this.y = y;
  	 this.z = z;
  }
  plus(vec)
  {
    let resx = vec.x + this.x; 
    let resy = vec.y + this.y;
     let resz = vec.z + this.z;
console.log(resx + ' ' + resy + ' ' + resz);
  }
    minus(vec)
  {
    let resx =  this.x - vec.x; 
    let resy =  this.y - vec.y;
     let resz= this.z - vec.z;
console.log(resx + ' ' + resy + ' ' + resz);
  }
  length()
  {
  	let powers = (Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2));
  	let length = Math.sqrt(powers);
  	console.log(length);
  }


}

let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);

v1.plus(v2); // returns Vector {x: 5, y: 6, z: 2}
//v2.plus(v1) // returns Vector {x: 5, y: 6, z: 2}
v1.minus(v2) // returns Vector {x: 3, y: 2, z: -2}
v2.minus(v1) // returns Vector {x: -3, y: -2, z: 2}
v1.length()
v2.length() // returns 3
