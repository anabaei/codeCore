"use strict";

mostRecurring('REEA FEAsfvn rfeajlkv');

function mostRecurring(str)
{
str = str.toLowerCase();
let count = 0;
let newcount = 0;
let word = null;

for(let i=0; i < str.length; i++)
{
//var res = str.charAt(0);
for(let j=0; j< str.length; j++)
{

  if(str.charAt(i) === str.charAt(j))
  {
    newcount++;
  }

}
if(newcount > count)
{
word = str.charAt(i);
count = newcount;
}

}
console.log(word);
}
