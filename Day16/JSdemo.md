
```javascript 
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

// setTimeout(
// 	function(a,b){
// 		console.log(a);
//        // console.log(new Date(hours,minutes);
// 	}, 1000  
// );

// function logtime() 
//    {
//    	let d = new Date();
//    	console.log(d);
//    },1000
// 	);

// setTimeout('hello');
//logtime;
// var d = new Date(milliseconds);

// Exercise: Say Hello Every Two Seconds

/*
setInterval(
  () => { console.log("Hello")},
  2000
);

setInterval(
  () => { console.log(new Date())},
  1000
);
*/



// Demo: Stop Saying Hello after 8s
// how to cancel or reset something happening after
// a certain time of repeatation

const intervalId = setInterval(
  () => { console.log("Hello")},
  5000
);

setTimeout(() => clearInterval(intervalId), 8000);

// Closure :
// functions keeps refrence of the value where they declared
// console.dir(object) 
// gives the objects in Chrome

// everytime we create a refrence then we need 
// to call it 

// here only we need to pass one time consol.log as params 
// then for next times we just pass params to be added and 
// no need for function becyse it has its own refrence inside

function loudWith (logFn, fn) {
  return (...args) => {
    logFn(`Calling ${fn.name}`);
    const returnValue = fn(...args);
    logFn(`Called ${fn.name} & returned ${returnValue}`);
    return returnValue;
  }
}


function timer (startTime, onDone) {
  // you can check whether onDone is a function

  let count = startTime;
  const decrementer = () => {
    count -= 1;
    console.log(count);

    if (count <=  0) {
      clearInterval(intervalId);
      onDone();
     
    }
  };
  const intervalId = setInterval(
    () => {
      console.dir(decrementer);
      decrementer();
    },
    1000);

   
}

//timer(1, console.log);
timer(1,()=> console.log('Done'));





















