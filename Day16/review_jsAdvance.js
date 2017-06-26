//function are first class citizens in js
// it means it is like strigngs, values, etc

//anonynose funtions
// we can not have constructor in anonymouse function
// const bark = function(name){ return '${name}';}
// arrow functions are another way to write functions
// const bark = (x,y) => {
//	return '${name}';
//} 

//if we can define in one line then we dont need to braces and return
// even if we have single params like x then even we dont need to parantheses around that

//Demo
function fn(a,b)={console.log("");}
//function add(a,b){console.log(a+b)};
//const add(a,b) => (console.log(a); a+b;} 

// we dont give a name we assign it to a variable
const notnull = obj => {return obj !== null;}


const flip = fn => { return function (a,b)
 { retrun fn(b,a);}}

const flip = fn => (a,b) => fn(b,a)

//
