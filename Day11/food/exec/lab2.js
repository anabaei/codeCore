
// str = "amir"

// str = ' '.repeat(13) + str;
// str = str + ' '.repeat(13)

// console.log(str);
// Vector.prototype.sum = function() {
//   return this.x + this.y;
// };




// 'use strict';

//  class StringExtras extends String {

// let StringExtras ={
// 	 repeat(name,number){
//      name = name + name.repeat(number);
//      console.log(name);
// 	},
// 	rightPad(str, number){
//      str = str + ' '.repeat(number);
// 	  console.log(str);
// 	  // return str;
// 	 },
// 	 leftPad(str, number){
//      str =  ' '.repeat(number)+str;	  
// 	  console.log(str);
// 	 },
// 	 pad(str, number){
//      str =  ' '.repeat(number)+str+' '.repeat(number);	  
// 	  console.log(str);
// 	 },
// 	 capitalize(str){
// 	  str = str.charAt(0).toUpperCase() + str.slice(1);
// 	  console.log(str);
// 	 }
// 	}
// }


// 	let a = 'you';

// StringExtras.repeat(a, 3); // returns 'youyouyou'
// StringExtras.repeat(' ', 6); // returns '      '
// StringExtras.leftPad(a, 3); // returns '   you'
// //console.log(StringExtras.rightPad(a, 5) + 'me'); // returns 'you     me'
// StringExtras.rightPad(a, 5) + 'me';
// StringExtras.pad(a, 3); // returns '   you   '
// StringExtras.capitalize(a); // returns 'You


class Counter{

  constructor(number, step){
  this.number = number || 0;
  this.step = step || 0;
  }

  inc(){
   this.number = this.number + this.step;
   return this.number;
  }
  show(){
  console.log(this.number);
  }
  set(newnum){
  	this.number = newnum;
  }
  setStep(newstep){
  	this.step = newstep;
  }


}

const sushiEatenCounter = new Counter(3, 1);
sushiEatenCounter.inc(); // returns 4
sushiEatenCounter.show(); 
sushiEatenCounter.inc(); // returns 5
sushiEatenCounter.inc(); // returns 6
sushiEatenCounter.show(); // returns 6

const bunnyCounter = new Counter();
bunnyCounter.show() // return 0
bunnyCounter.set(10);
bunnyCounter.setStep(10);
bunnyCounter.inc(); // return 20
bunnyCounter.inc(); // return 30



