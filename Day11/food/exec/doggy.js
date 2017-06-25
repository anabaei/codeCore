class Doggo {
  constructor (name) {
    this.name = name;
    this.hitPoints = 100;

  }
  bark () {
    return "Woof!";
  }

  sleep () {
    return "Zzzzzz! *snore*";
  }
}

class DoggoFighter extends Doggo {
  constructor (name, specialAttack) {
    super(name); // super calls the same named method in the extended class
    this.specialAttack = specialAttack;
  }

  fight (doggoFighter) {
    let winner = "";
    let cnt = {};
    
    // who will win in a one-hit fight?
    if (Math.random() > 0.5) {
      winner = this.name;
      this.hitPoints -=10;
    } else {
      winner = doggoFighter.name;
        this.hitPoints -=10;
    }
   
    return `----\n${ this.name } has ${ this.hitPoints } health \nand is battling ${ doggoFighter.name }. \nAnd his special attack is ${ this.specialAttack }.\n--- And the winner is ${ winner }`;
  //  return cnt.length;
  }
}

// test
let doggo = new Doggo("Snoop");
console.log(doggo.bark());
console.log(doggo.sleep());
// doggo.fight(); // method is not defined

let twoPac = new DoggoFighter("2Pac", "Go For the Throat"); // expecting 2 args and only 1
console.log(twoPac.bark());
console.log(twoPac.sleep());


let biggie = new DoggoFighter("Biggie", "Shock Damage");
console.log(biggie.bark());
console.log(biggie.sleep());