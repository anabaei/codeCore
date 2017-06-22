
function max(array)

{
	let maxnum = array[0];
	for (let i = 1; i < array.length; i++) {
    maxnum = array[i] > maxnum ? array[i]: maxnum;
       	}
       	console.log(maxnum);
 }

// Recursive Function
function max2([first, second, ...rest])
{    
	if (second === undefined) 
	{
        console.log(first);
		return first;
     }
   first = second > first ? second : first;
 max2([first, ...rest]);
}


max2([ 213, 12, 66, 999 ]); // should return 999
max([ 1, 2, 3, 11, 3, 6, 5 ]); // should return 11