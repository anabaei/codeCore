

function changeorder(arr)
{
//  arr = ['a','b','b','c','d']
  length = arr.length;
 // Array.apply(null, Array(5)).map(Number.prototype.valueOf,0);
  result = []
  check = {}

  while(0!== length)
  {

    skip = false
    randomIndex = Math.floor(Math.random() * arr.length);
   //console.log(randomIndex)

      for( x in check)
      {
        if(parseInt(x) === randomIndex)
        skip = true
      }
     if(!skip)
     {
        // arr[randomIndex] = arr[length-1]
        check[randomIndex] = arr[length-1]
        length = length - 1
        // console.log(randomIndex)
        // console.log(check)
     }
  }
  return check;
}
  // for(x in check)
  // {
  //   result.push(check[x]);
  // }
  // console.log(result);
// return arr
// }
//
//console.log(changeorder(['a','b','b','c','d']))
