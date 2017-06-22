function flatten([first, ...second]){
  // if(second.length === 0)
  // 	return first;
  // if(second.length === 0) {
  //   console.log(first);
  // 	return 0;
  //  }
  //console.log("first line" + [first]);
   if(first === undefined) return [];

  if(Array.isArray(first))
  	{
  		return [...flatten(first), ...flatten(second)];
  	}
  	else{
  		return [first, ...flatten(second)];
  	}
  	//  for (let i in first){
   //   console.log("ff"+ first[i]);
   // 	return flatten([first[i]]);
  	// }
   // if(first.constructor === undefined)
   // flatten(second);
   // console.log(first);
   
  	//return first;
 // console.log(" _"+first.length);
 // return flatten([second]);

}

function flatten2(array) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten2(array[i]));
    } else {
      result.push(array[i])
    }
  }
  return result
}

console.log(flatten2([ 'a', [ 'b', ['c'] ] ]));

flatten([4,3,31]);










