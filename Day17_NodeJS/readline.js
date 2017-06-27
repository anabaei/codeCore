

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// this is callback function
// becuase in js we dont wait it is not sycn language like ruby 
// to run one by one, it runs all at the same time 
// so we have a call back function name
rl.question('What is your name?', function(name){
  console.log(`Hello ${name}`);
  process.exit();
});


module.exports = rl;