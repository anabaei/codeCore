class Hash{
constructor(Hash)
	{   
		this.myhash = Hash;
        console.log(this.myhash);		
	}

empty(){
   //  Object.keys(args).length;
	let empty = true;
	// if (this.args)
	// 	console.log("thisi is " + size);
		//console.log(this.args === {});
	    for (let key in this.args) {
	     empty = false;
        // if (key.hasOwnProperty(key)) size++;
        // console.log(this.args[key]);
         
  //human[property]; // the value associated with a property

    }
    
    console.log(empty);
    return empty
    }
    merge(args2){

      	// for(let key in this.args){
    	// 	console.log("CC" + this.args[key]);
        //  args2[key] = this.args[key];
    	for(let key in args2){
    	console.log("thi is key  "+ key);	
    		  for( let key22 in key){

    		console.log("" + key[key22] + " " + key22);
    	        }
    	}
    return args2;
    }
}

let shash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});
shash.empty();

let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
//console.log(merged);












