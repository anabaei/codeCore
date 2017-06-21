class Hash{
constructor(Hash)
	{   
		this.myhash = Hash;
       // console.log(this.myhash);
        this.result = {};		
	}

empty()
   {
	    for (let key in this.myhash) 
	    {
	     return false;
        }
    return true
    }

    hashprops(){
      
    	for(let key in this.myhash){
    	 ("_"+ key + " "+ this.myhash[key]);
        //myhash[key] = key; 
        this.result[key] = this.myhash[key];    

    }
    console.log(this.result);
}


  // Write a program to return current key of current object
  // write another to return current values of current object
  // write  merge first create a new hash and then inside that hash has key 
  // and values from above programs 


    merge(args2){
        
      	// for(let key in this.args){
    	// 	console.log("CC" + this.args[key]);
        //  args2[key] = this.args[key];
    //	for(let key in args2){
    //	console.log("thi is key  "+ key);	
    		//   for( let key22 in key){
    		// console.log("" + key[key22] + " " + key22);
    	 //        }
    //	}
      args2.hashprops();
      this.hashprops();
      for(let l in args2.result){
        this.result[l] = args2.result[l];
      }
    return this.result;
    }
}

let shash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});
// console.log(shash.empty());
 //console.log(hash);
// hash.hashprops();

let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
console.log(merged);












