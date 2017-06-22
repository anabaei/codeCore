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

empty()
   {
	    for (let key in this.myhash) 
	    {
	     return false;
        }
    return true
    }

    hashprops(){
     //  this.you = new Hash();
    	for(let key in this.myhash){
    	 ("_"+ key + " "+ this.myhash[key]);
        //myhash[key] = key; 
        this.result[key] = this.myhash[key];    

    }
    // console.log(this.result);
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
      }
    //this.myhash = this.result;
    return this.result;
    }

    hasKey(key){

    	for(let k in this.myhash){
    		if( k === key) return true;

    	}
    	return false;
    	
    }
    invert(){
    	for(let k in this.myhash){
    		// let temp = this.myhash[k];
    		this.inv[this.myhash[k]] = k;
    		
    	}
    return this.inv;
    }

    inspect()
    {
     let str = " ";	
     str = str.concat("{");	
      for(let k in this.myhash){
      str = str.concat(k + " => " + this.myhash[k]+ ",");
      }

      str = str.concat("}");
      console.log("result");
      console.log(str.charAt(0));
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
 


let shash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});
// console.log(shash.empty());
 //console.log(hash);
// hash.hashprops();

let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
console.log(merged);

// console.log(merged !== hash); // should be true
// console.log(hash.result === merged);
 console.log(hash.hasKey('a')); // returns true
 console.log(hash.hasKey('bob')); // returns false
//merged.hasKey('bob'); 
 console.log(hash.invert());
 hash.inspect();
 hash.keys();
 hash.values();


 ////////////////////////////////////////////////////////////////////////////////
 ///////////////////// Question 2 //////////////////////////////////////////////

// class queue{
// 	constructor(value){
// 		this.value = value;
//         this.next=null;
// 	}


  function  node(data){
     this.data = data;
     this.next = null;
    }

// class queue
  function  queuenew(){
     this.lenght = 0;
     this.head = null;
    }

  function  add(value){
    	var node = new node(value);
        currentnode = this.head;
        
        if(!currentnode){
        	this.head = node;
            this.lenght++;
        }
        while(currentnode.next)
        {
        	currentnode = currentnode.next;
        }

     currentNode.next = node;
     this._length++; 
     return node;
    }

// 	add(newstack){
//    this.next = newstack;

//     console.log(newstack.value);
// 	}
   
//    remove(){
//    	while(this.next !== null){
     
//    	}
//    	console.log(this.value);

//    }
// }

// let v = new stack("amir");
// let v1 = new stack("eli");
// let v2 = new stack("armin");
// v1.remove();

//v.add(v1);
//v1.add(v1);
node("amir");







