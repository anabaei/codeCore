'use strict';

module.export = class Cookie{
	constructor(sugar, flour){}
    this.sugar = sugar;
    this.flour = flour;
}

class Oreo extends Cookie {

}

let cookie = new Cookie(10,20);
console.log('cookie sugar: ${cookie.sugar}');
let oreo = new Oreo(2,4);
//console.log()
