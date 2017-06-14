
"use strict";
let num1 = parseInt(prompt("what is your first number"));
let num2 = parseInt(prompt("what is your second number"));

for(let i=1; i<=100; i++)
{
  if(i%num1 ==0 && i%num2 == 0)
  {
    console.log("FiizzBuzz");
  }
  else if (i%num1 == 0) {
    console.log("Fizz");
  }
  else if (i%num2 == 0){
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}
