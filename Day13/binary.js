function binsearch(arr, node){
  if(arr.length === 1) {
  	if (arr[0] === node )
  		return node;
  }
  else return "no resule";

  if( arr[arr.length/2] === node )
  {
  	return node;
  }
  if(arr[arr.length/2] < node)
  {
  	binsearch(arr[arr.length/2] ...arr, node);
  }
  else
  {
  	binsearch(0 ...arr[arr.length/2], node);
  }
 
}