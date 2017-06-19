
// str = "amir"

// str = ' '.repeat(13) + str;
// str = str + ' '.repeat(13)

// console.log(str);
// Vector.prototype.sum = function() {
//   return this.x + this.y;
// };

 class StringExtras extends String {

let StringExtras ={
	 repeat(name,number){
     name = name + name.repeat(number);
     console.log(name);
	},
	rightPad(str, number){
     str = str + ' '.repeat(number);
	  
	  return str;
	 },
	 leftPad(str, number){
     str =  ' '.repeat(number)+str;	  
	  console.log(str);
	 },
	 pad(str, number){
     str =  ' '.repeat(number)+str+' '.repeat(number);	  
	  console.log(str);
	 },
	 capitalize(str){
	  str = str.charAt(0).toUpperCase() + str.slice(1);
	  console.log(str);
	 }
	}
}

	let a = 'you';

StringExtras.repeat(a, 3); // returns 'youyouyou'
StringExtras.repeat(' ', 6); // returns '      '
StringExtras.leftPad(a, 3); // returns '   you'
console.log(StringExtras.rightPad(a, 5) + 'me'); // returns 'you     me'
//StringExtras.rightPad(a, 5) + 'me';
StringExtras.pad(a, 3); // returns '   you   '
StringExtras.capitalize(a); // returns 'You


