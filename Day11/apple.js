class Apple{

  constructor(name, color){
  	this.name = name;
  	this.color = color;
  }
	
	bite(){}
	size(){}
}

// test code
let gala = new Apple("gla","red");
gala.bite();
gala.size();

// in Ruby or Java  we can not have this, but only in JavaScript we have access
gala.name;
