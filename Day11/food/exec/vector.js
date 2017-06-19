class Vector{
  constructor(x,y,z){
  	 x.this= x;
  	 y.this = y;
  	 z.this = z;
  	 let resx = 0;
  	 let resy = 0;
  	 let resz = 0;
  }
  plus(x1,y1,z1)
  {
    this.resx = x1 + this.x; 
    colsole.log(resx);
    this.resy = y1 + this.y;
    this.resz = z1 + this.z;
console.log(this.resx + ' ' + this.resx + ' ' + this.resx);
  }


}

let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);

v1.plus(v2); // returns Vector {x: 5, y: 6, z: 2}
//v2.plus(v1) // returns Vector {x: 5, y: 6, z: 2}