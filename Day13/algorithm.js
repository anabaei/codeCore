//set of steps to accomplish a task
console.time("factorial Recursive");
function factorial(n) {
 if (n===1) return 1;
 return n * factorial(n-1);
  }
console.timeEnd("factorial Recursive");
// console.log(factorial(7));

function revers([first, ...second]){
	if(second.length === 0){
		
		return first;
	}
   return revers(second) + first;
}

console.log(revers("ABCDEF"));


 function mul([first, ...second]){
      if (second.length === 0) return [first *first];
      return [first*first, ...mul(second)]; 
}

	function mul2(arr){
	if (arr.length === 0)
		return 0;  
     return [arr[0]*arr[0]].concat(mul(arr.slice(1)));
}
 
 console.log(mul([1,2,3]));
 console.log(mul2([1,2,3]));


// Get a randome array with arbitrary numebrs
 let a = Array.from({length:5}, function(){return Math.random()* 100});

// Comparison between numbers 
let b =9;
let aaa = 2;
 b = aaa > 3 ? 4 : 5;


console.time("factorial iterative");
function fac2(n)
  {
let result = 1;
while(n>1)
	{
	 result = n * result 
	 n-=1;
	}
return result;
  }
console.timeEnd("factorial iterative");

// console.log(fac2(5));
// console.log(factorial(5));




