//const even = function (n) { return n % 2 === 0 };


// function loudWith (arr,fn) {
//  // return (...args) => {
//  	for(let i of )
//     logFn(`Calling ${fn.name}`);
//     const returnValue = fn(...args);
//     logFn(`Called ${fn.name} & returned ${returnValue}`);
//     return returnValue;
//  // }
// }


//find([1,2,3,4], even);

const even = function (n) { return n % 2 === 0 };
// even returns true if its argument, n, is an odd number (false otherwise)
const odd = function (n) { return !even(n) };

// creates a function that returns true if its argument is above min
const above = function (min) {
  return function (n) {
    return n > min;
  }
}

let arr = [1,2,3,4,5,6];


const filter = function(array, callback){
    for(let v of array)
    {
     if(callback(v)){
     	console.log(v);
     }
    }
};

const filter = function(array, callback){
	if (callback === undefined)
    {   
       return true;
    }
	else {
		for (let v of array)
		console.log(v);
      return filter(callback);
	}	
    // for(let v of array)
    // {
    //  if(callback(v)){
    //  	console.log(v);
    //  }
    // }
};




filter(arr, even) // returns 2,4,6
filter(arr, odd) // returns 1,3,5
filter(arr, above(3)) // returns 4,5,6