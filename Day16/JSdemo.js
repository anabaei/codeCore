///Anonymouse functions
function add(a,b)  {return a+b;}
const obj = {
	a:1, 
	example: function(){
		console.log(this);
		return this;
	// },
	// emaple2: function(){
	// return (function () {console.log(this) })();
	// } 
	//arrow: () => this
}
}
//example is property of obj that has a function property 
//to call it we need to use dot 

//obj();
// console.log(obj());



obj.example();
// obj.emaple2();

//Demo Loud function
// give a function name with add.name


function loud (fn) {
  console.log(`Calling ${fn.name}`);
  const returnValue = fn();
  console.log(`Called ${fn.name} & returned ${returnValue}`);
  return returnValue;
}
// to pass arguments to function we need to defined like below
function loud (fn,a,b) {
  console.log(`Calling ${fn.name}`);
  const returnValue = fn(a,b);
  console.log(`Called ${fn.name} & returned ${returnValue}`);
  return returnValue;
}

// in ES6 we can use gather syntax .... to have arguments like Ruby
// took all elemnts into arg array and pass all elements
function loud (fn, ...arg) {
  console.log(`Calling ${fn.name}`);
  const returnValue = fn(...arg);
  console.log(`Called ${fn.name} & returned ${returnValue}`);
  return returnValue;
}


// function loud (logfn, log) {
//   console.log(`Calling ${logfn.name}`);
//   const returnValue = logfn(log);
//   console.log(`Called ${logfn.name} & returned ${returnValue}`);
//   return returnValue;
// }

function loud (logfn, fn,  ...arg) {
  console.log(`Calling ${logfn.name}`);
  const returnValue = fn(...arg);
  logfn(returnValue);
  console.log(`Called ${fn.name} & returned ${returnValue}`);
  return returnValue;
}

loud(console.info, add, 1,2);

// Demo: Implement each

function each (fn, arr) {
  for (let val of arr) {
    fn(val);
  }
}

each( val => console.log(val*2), [2,3]);

// CALL BACK means passing a function as a params 
// because after passing it it is still not run as long as we 
// call it by using () in front of that

// 
// define a customize console log
//loud(function(arf){ console.log('${arr}')};
// class stuff{
// 	constructor(...args){
// 		console.log(arges);
// 	}
// }


/// undefined + undefined = NaN
// NaN + NaN = NaN
// undefined + NaN = NaN
// null + null = 0 
// null + 0 = 0

/// map applies a function to each elements of an array and 
// returns an array same order


// const repeatDigit = function (digit, n){
// 	return numner ("Dd");
// }


function repeat(fn, args)
{
	result = [];
	for(let i of args){
	 	result.push(fn(i));
	}

}


repeat( val => console.log(val*9), [1,2]);
//repeat(n=> n**3, [3,2])
//repeat((n,i)=> n**3, [3,2])
// it read each element from array 
// each((v,i)=> v*i;)


















