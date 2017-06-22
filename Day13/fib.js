
console.time("Fibonachi Recursive");
function fib(n){
  if (n==1 || n==2)
  	return 1;

  return  fib(n-1) + fib(n-2); 
}
console.timeEnd("Fibonachi Recursive");



console.time("Fibonachi Iterative");
function fib2(n){
   let result=1;
   let fibnum = 0;
   let cnt = 0;
   for (let i =1; i<=n;i++)
   {
   	if (n===1) result=1;
    else if (cnt ===1 || cnt ===2) fibnum = 1;
    else {
    	// console.log(fibnum);
    	 temp = fibnum;
         fibnum   =  fibnum + result
         result = temp
         }
   }
   return fibnum;
}
console.timeEnd("Fibonachi Iterative");


console.log(fib(9));
console.log(fib2(9));


