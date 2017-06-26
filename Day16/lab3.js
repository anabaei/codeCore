

// 
const numberSeq = function(){
let cnt = 0;
return (() =>
 {console.log(cnt); cnt++} )	
};

const numberSeq2 = function (begin, step){
// let cnt = begin;
console.log(begin);
let result = begin;
return (() =>
 {  result += step;
 	console.log(result); } )	
};


// function numberSeq2(begin, step){
// let cnt = begin;
// let result = step;
// return (() =>
//  {  result = step + result;
//  	console.log(result); } )	
// };




// const numbers = numberSeq();
// numbers() // returns 0
// numbers() // returns 1
// numbers() // returns 2
// numbers() // returns 3
// numbers() // returns 4

const numbers = numberSeq2(10, 5);
numbers() // returns 10
numbers() // returns 15
numbers() // returns 20
numbers() // returns 25
numbers() // returns 30




const hel = function(){
	return function(name){
		return 'Hello'+ '${name}';

	}
}

