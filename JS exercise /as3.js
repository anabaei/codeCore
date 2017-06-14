


"use strict";
for (let i= 2014; i < 2050; i++)
{
let date =  new Date(i, 1, 1, 1, 1, 1, 1);
if(date.getDay() === 0){
console.log(date);
break;
  }
}
