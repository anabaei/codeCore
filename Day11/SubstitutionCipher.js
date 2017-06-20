class SubstitutionCipher{
	constructor(first, second){
     this.first = first;
     this.second = second;
	}
  encode(str){
  	let cnt = 0;
   while( cnt<str.length){
    let charposition= (str.charAt(cnt)).indexOf;
    console.log(charposition);
     cnt++;
   }
  }
}

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";

const sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"
