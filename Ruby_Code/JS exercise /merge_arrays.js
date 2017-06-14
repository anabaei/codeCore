
"use strict";
let array1 = [1, 2, 3];
let array2 = [3,4,5];

merge(array1, array2);

function merge(arr1, arr2)
{
  let result = arr1.concat(arr2);
  console.log(result);
}
