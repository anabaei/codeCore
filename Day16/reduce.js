





const plus = function (a, b) { return a + b };
const mult = function (a, b) { return a*b };
const multAndPlus = function (a, b, c) { console.log(a + " "+ b + " "+c);return plus(mult(a,b), c) };

let arr = [1,2,3,4,5];

// const reduce = function(arr, fn) {
//    result = 0;
//    for(let i in arr){
//     // console.log(i);
//      result = fn(arr[i], result);
//      result = fn(arr[i], arr[i+1],result);

// 	}
// 	console.log(result);
// 	return result;
// }

const reduce = function([first,second,third ...rest], callbackFunction) 
{
  let result = 0;
  if (!second) {
    console.log(first);
  } else if(callbackFunction(first,second)) {
  	 result = callbackFunction(first,second);
    return [reduce([result,rest], callbackFunction)]
  } else if(callbackFunction(first,second, third)) {
    result = callbackFunction(first,second,third);
    console.log("res= " +result);
    return [reduce([result, second, ...rest], callbackFunction)]
  }
}
//reduce(arr, plus); // returns 15
//reduce(arr, mult); // returns 120
reduce(arr, multAndPlus); // returns 239
//console.log(reduce(arr, multAndPlus));
