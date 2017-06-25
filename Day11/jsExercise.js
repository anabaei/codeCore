////////////////////////////////////////////////////////////////////////////////
///////////////////// Question 1 //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//Notice: function hasKey works fine for hash.hasKey('a') // returns true
//hash.hasKey('bob') but not for merged.hasKey()!

class Hash{
constructor(Hash)
	{   
		this.myhash = Hash;
       // console.log(this.myhash);
        this.result = ({});
        this.inv = {};
        this.ins = {};
        this.key = [];
        this.value = [];		
	}

isEmpty()
   {
	    for (let key in this.myhash) 
	    {
	      console.log(false);
        return false;
        }
        console.log(true);
    return true
    }

    hashprops(){
    	for(let key in this.myhash){
        this.result[key] = this.myhash[key];    
    }
}


  // Write a program to return current key of current object
  // write another to return current values of current object
  // write  merge first create a new hash and then inside that hash has key 
  // and values from above programs 


    merge(args2){
      args2.hashprops();
      this.hashprops();
      for(let l in args2.result){

        this.result[l] = args2.result[l];
        this.result[l] = args2.result[l];
      }
    console.log(this.result);
    return ({}, this.result);
    }

    hasKey(key){
     
     console.log(key);

    	for(let k in this.myhash)
       {
    		if( k === key) 
         {
        console.log(true);
        return true;
    	   }
      }
      console.log(false);
    	return false;
           
    }

    invert(){
    	for(let k in this.myhash){
    		// let temp = this.myhash[k];
    		this.inv[this.myhash[k]] = k;
    		
    	}
    console.log(this.inv);
    }

    inspect()
    {
     let str = " ";	
     str = str.concat("{");	
      for(let k in this.myhash){
      str = str.concat(k + " => " + this.myhash[k]+ ",");
      }

      str = str.concat("}");
      // console.log("result");
      // console.log(str.charAt(0));
     console.log(str);
    }

    keys(){
    	for(let key in this.myhash){
    		this.key.push(key);
    	}
    console.log(this.key);
    }
   values(){
    	for(let key in this.myhash){
    		this.value.push(this.myhash[key]);
    	}
    console.log(this.value);
    }
}

// let shash = new Hash({});
// let hash = new Hash({a: 1, b: 2, c: 3});

// let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
// console.log(merged);

// // console.log(merged !== hash); // should be true
// // console.log(hash.result === merged);
//  console.log(hash.hasKey('a')); // returns true
//  console.log(hash.hasKey('bob')); // returns false
//  //merged.hasKey('bob'); 
//  console.log(hash.invert());
//  hash.inspect();
//  hash.keys();
//  hash.values();

console.log(" Test for Question 1 ");
let emptyHash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});

hash.isEmpty() // returns false
emptyHash.isEmpty() // returns true

let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
// returns Hash {a: 1, b: 2, c: 3, bob: 'yo', jane: 'ya'}
// should not mutate original hash

merged !== hash // should be true

hash.hasKey('a') // returns true
hash.hasKey('bob') // returns false

//merged.hasKey('bob') // returns true

// Values will have to made into strings
hash.invert() // returns Hash {'1':'a', '2':'b', '3':'c'}

hash.inspect() // returns "{'a' => 1, 'b' => 2, 'c' => 3}"

hash.keys() // returns ['a', 'b', 'c']
hash.values() // returns [1, 2, 3]

console.log("End of Test for Question 1");


 ////////////////////////////////////////////////////////////////////////////////
 ///////////////////// Question 2 //////////////////////////////////////////////

// Queue is FIFO data structure. This is use for data when we want to access by 
// the order we put into our queue.


  class queue{

     constructor(){
        this.queue = [];


     }
  	add(data){
       
      this.queue.push(data);
       process.stdout.write("after adding "+ data +"  queue is = (" );
      
      for(let n = this.queue.length -1 ; n> -1; n--)
      {
        process.stdout.write(" "+ this.queue[n]);
       
      }
       console.log(" )");
      // for (let n in this.queue)
      //   process.stdout.write(" "+ this.queue[n]);
      //   console.log(" )");
  	}

    remove(){
      let h = [];
      h = this.queue;
      let data = this.queue[0];
      for(let i =1 ; i< h.length  ; i++)
      {
      	this.queue[i-1]=h[i];
      }
       this.queue.pop();
       
       process.stdout.write("after removing "+ data +" remaining queue is like (" );
      for(let n = this.queue.length -1 ; n> -1; n--)
      {
        process.stdout.write(" "+ this.queue[n]);
      }
        console.log(" )");   
   
    }


  }

// Stack is FILO data structure. It is usefull when we want 
// to access to saved data based on last modifications. It meanins
// the last data we put it in our stack would be first one when we recall stack.

class stack{

     constructor(){
        this.stack = [];

     }
  	add(data){
      
      this.stack.push(data);
  	    process.stdout.write("after adding "+ data +"  stack is like (" );
      for (let n in this.stack)
        process.stdout.write(" "+ this.stack[n]);
        console.log(" )");
    }

    remove(){
      
      let result = this.stack[this.stack.length -1];
      let data = this.stack.pop();
      process.stdout.write("after removing toppest data  "+ data +" remaining stack is = (" );
      for (let n in this.stack)
        process.stdout.write(" "+ this.stack[n]);
        console.log(" )");
    }
    
  }


console.log("start testitng Queue and Stack");
let v = new queue();
v.add("1");
v.add("2");
v.add("3");
console.log("___");
v.remove();
v.remove();
v.add("4");
v.add("5");
v.remove();
v.remove();
v.remove();
let v1 = new stack();
v1.add("1");
v1.add("2");
v1.add("3");
v1.remove();
v1.remove();
v1.remove();
console.log("End of testitng Queue and Stack");


 ////////////////////////////////////////////////////////////////////////////////
 ///////////////////// Question 3 //////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////
 function digitProduct(n){
 remain = n;
 cnt = 1;
 temp = 1; 
 result = 1;

 do
 {
  if (cnt === 1)
    { result = 1 }
  
 else {
      resrem = 1;
      temprem = [];
      temp = result;

      while(temp>9) 
      {
        temprem.push(temp%10);
        temp = parseInt(temp/10);  
      }
      temprem.push(temp);
      for(let m in temprem) {
        resrem = temprem[m] === 0 ? resrem : (resrem * temprem[m]);
         }
         result += resrem;
      }
      cnt +=1;
  } while(cnt <= n);
  console.log(result);
 } 

console.log("Test Question 3 with n=12");
 
digitProduct(3) // returns 4
digitProduct(6) // returns 22
digitProduct(9) // returns 62






















