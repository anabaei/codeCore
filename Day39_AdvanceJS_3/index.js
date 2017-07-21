
// librayr of blue beries 

// function de() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const side = ['heads', 'tails'][random(2) - 1];
//       resolve(side);
//     }, 1000 + random(3000));
//     setTimeout(()=>{
//      reject('the coin was thrown too far!');
//     },3000);
//   });
// };


/// converting settimeout function to work as a promise delay


// Define a delay function 
// function delay (ms, value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), ms);
//   });
// }


// function delay (ms, value) {
//   return new Promise((resolve, reject) => {
//   	console.info('time', ms, 'value', value)
//     setTimeout(() => resolve(value), ms);
//   });
// }

// /// 
// delay(1000, 'hellow')
// // .then(() => {
// //   console.log('Waited 1s!')
// //   return delay(2000, 'hellwo')
// // })
// .then(() => (result => console.info(result)) 
// {
//   console.log('Waited another 2s!')
//   console.info('Waited another 2s!')
// })

/// 

/// think about it 
// /// then.resolve(3000).resulet
// // it checkes whether it has two values or not if dont so 
// // return the reuslt as an object holding a promise 
// function delayWith (ms, value) {
//   if (typeof value === 'undefined') {
//     return result => new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result), ms);
//     });
//   }

//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(value), ms);
//   });
// }

// ////// promise Utility Mehtods 


// /// Promise.resolve immediately returns that is resolve with an arg
// Promise.resolve(20) // returns promise that resolved with PromiseValue 20
// new Promise((resolve,reject)=>(20));

// // Promise.regect immediately returns that is rejected with an argument

// Promise.all executes an array of all promises and once the last one is resolved it returns, 



// function parallelDemo () {
//   console.time('parallelDemo total time');
//   Promise.all([
//     delay(1000 + random(2000), 10),
//     delay(1000 + random(2000), 20),
//     delay(1000 + random(2000), 30),
//     delay(1000 + random(2000), 40),
//     delay(1000 + random(2000), 50)
//   ])
//     .then(arrOfResolvedValues => {
//       console.timeEnd('parallelDemo total time');
//       console.log(arrOfResolvedValues)
//     })
// }

// // Async Functions 
// //with this we can eliminate call backs,
// Async functions are delcared prefixed with the word 'async'
// async function MyAsync (){}
// const My = async function(){};
// const my2 = async () => {};
// // these above are all defination of async functions 
// // async functions we added to 
// // async functions can treat promises as regular values if they are prefixed
// // these all are asynchronizing 
// async function asyncSequentialDemo () {
//   console.time('asyncSequentialDemo total time');
//   await delay(1000 + random(2000), 10);
//   await delay(1000 + random(2000), 20);
//   await delay(1000 + random(2000), 30);
//   await delay(1000 + random(2000), 40);
//   await delay(1000 + random(2000), 50);
//   console.timeEnd('asyncSequentialDemo total time');
// }

// async function asyncSequentialDemo () {
//   console.time('asyncSequentialDemo total time');
//   const results = [
//     await delay(1000 + random(2000), 10),
//     await delay(1000 + random(2000), 20),
//     await delay(1000 + random(2000), 30),
//     await delay(1000 + random(2000), 40),
//     await delay(1000 + random(2000), 50)
//   ]
//   console.timeEnd('asyncSequentialDemo total time');

//   console.log(results);
//   return results;
// }

// function math() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//      // const side = ['heads', 'tails'][random(2) - 1];
//       resolve(side);
//     }, 1000 + random(3000));
//     setTimeout(()=>{
//      reject('the coin was thrown too far!');
//     },3000);
//   });
// };



//Define a delay function 
// function add (num,r) {
// // 	if(typeof r === 'undefined') {
// // 		return new Promise((res,rej)=>{
// //    return num
// //   });
// // }
//  var temp = num; 
// return new Promise((resolve, reject) => {
//      setTimeout(() => resolve(), 100);
//     if(r !== "undefined") {
//     	temp++;
//     console.log(temp);
//     }	
//     else {
//     console.log("DD");
//      }
//   });
// }


// function add (num, r) {
// 	if (typeof r === 'undefined') {
// 		 return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), 10);
//   });
  
//   }

//  return result => console.log(r)
// }

function add(num, r=0) {
  return new Promise((resolve, reject) => {
     num =num + r; 
     if (r === 0)
     {
     	console.info(num)
    setTimeout(() => resolve(), 100);
      }
    resolve(num);
  });
}

function mult(num, r=1) {
  return new Promise((resolve, reject) => {
     num =num * r; 
     if (r === 1)
     {
     console.info(num)
    setTimeout(() => resolve(), 100);
      }
    resolve(num);
  });
}

function div(num, r=1) {
  return new Promise((resolve, reject) => {
  	if (typeof num !== "number") {
    // to throw an error inside a promise, user the reject function with error as its argument.
    reject(new Error('oops'))
      }
     num =num / r; 
     if (r === 1)
     {
     console.info(num)
    setTimeout(() => resolve(), 100);
      }
    resolve(num);
  });
}







/// first result is the one comming from resulve(num), and after => we pass it to fadein as first element
// add(8).then(result => fadeIb(result,1000))

//  add(9).then(function (r) { return add(9, r) }); // r is 9


class Counter {
  constructor (count = 0, step = 1) {
    this.count = count;
    this.step = step;
  }
  setCount (n) { this.count = n }
  setStep (step) { this.step = step }
  inc () { return this.count += this.step }
  dec () { return this.count -= this.step }
  now () { return this.count }
  show () { return this.count }
  reset () {
    this.count = 0;
    this.step = 1;
  }
  time (startTime) {
    this.setCount(startTime);
    const that = this;
    let intervalId = setInterval(function () {
      if (that.dec() <= 0) clearInterval(intervalId);
      console.info(that.show());
    }, 1000);
  }
}


// var p = new Counter();
// p.setCount(3);
// p.inc();
 





