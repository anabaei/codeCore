// function add(a, b) { console.log(a + b);};

function  after(rep, fn) {
 let cnt = 1;
 return (a,b) => {
  	if(cnt > rep){
    console.log(fn(a,b));
    }
    else {
    	cnt+=1;
      console.log('undefined');
    }
  }
}


const add = function (a, b) { return a + b};
add(1,1) // returns 2
add(1,3) // returns 4
add(2,3) // returns 5

const addAfter3Tries = after(3, add);
addAfter3Tries(4,5) // returns undefined
addAfter3Tries(4,2) // returns undefined
addAfter3Tries(1,6) // returns undefined
addAfter3Tries(5,5) // returns 10 (add is only allowed to return now)
addAfter3Tries(1,5) // returns 6

function  before(rep, fn) {
	let cnt = 0;
  return (a,b) => {
  	if(cnt < rep){
    console.log(fn(a,b));
    cnt += 1; 
    }
    else {
    	
    	
      console.log('undefined');
    }
  }
}

const only3Times = before(3, add);
only3Times(4,5) // returns 9
only3Times(4,2) // returns 6
only3Times(1,6) // returns 7
only3Times(5,5) // returns undefined (no more calls to add allowed)
only3Times(9,9) // returns undefined

