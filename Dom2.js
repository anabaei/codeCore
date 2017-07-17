Events:

// call back is a call when an event is trigged 
// addEventlistenor
// then name of the event, and the call back 

// Total structure of addeventlistener
nodeselected , addeventlisternr , name one event and the function


// When a node toxic Tim is clicked 
toxixTim.addEventListener('click', () =>{
	console.log('Toix Time was clicked');
}) 

// addEventListener usable on any Dom node (it can be document),
// takes two args first is an event click, submit, mouseleave,..
// second is callback, it receives an event object. 

// To verify it is node or not:
objectname instanceof Node  
'Bob' instanceof String  --> false, 
// although there is string object it is false but 
new String('Bob') instanceof String
// it returns true 
// javascript only returns basetypes to objects if it is neaded  

typeof 'database' --> string 
typeof document --> object 

// it returns false
document.querySelectorAll('.doggo') instanceof Node 


// it returns true
document.querySelectorAll('.doggo') instanceof NodeList 

///
To addeventListerner we need to have one node, otherwise it wont work
So we have to check if any nodes is an instance of a node.

document instanceof node  --> true 

// it is true 
document.querySelectorAll('.doggo')[0] instanceof Node 


/// If we want to know which event is click 
it is same but adding one event

toxixTim.addEventListener('click', event =>{
	console.log('Toix Time was clicked');
})
// target is the source of event
Important:
// current target is the node that is listening, 'this' is current target
// target is the node that is been clicked  

example: 

// Exent object

document.addEventListener('click', function(event){
	console.log(event);

})

// by tuping about, event contains  alot of information 
// even you can find target and currenttarget, 

//here the current target is body(or the node that has mentioned before addEventListener) which is lister and 
// target is the item that has been click and can be different

document.body.addEventListener('click', function(event){
	debugger;
	console.log(event);

})
// debugger inside js function, is like breakpoint. 

// arrow => means can not change the current target. so if 
// we use this here is undefined 
document.body.addEventListener('click', event => {
	console.log(this);
// this is undefined 	
})


/// Asynchronizing API

setTime allows us to Asynchronizing. 

// 
setTimeout(b, 10000);

// then it would put it in queue. queues always waited to call stack be clear 
// then put it puts in inside the stack, and it runs. Then 
// after nothing found in stack and queue then it waits to settime be done here one second then it puts it inside stack.


function a(){

}
function b(){
	a();
}
function c(){
	setTimeout(a);
	b();
}

function d(){
	setTimeout(b, 1000);
	c();
}


d();

Stack :
c, b, a, 

queue:
a 

empty stack, 

put a inside stack

empyt stack

put b inside stack
empy stack

////// 
/// we add invert to invert the color 
/// by adding the node to addeventlister then everything that 
// everything that has toggo class , listenors are only on doggo class


// const = currentTarget = event.currentTarget
//   cont taget = event.Target
//  as short cut   const{currentTarget, target} = event

document.querySelectorAll('.doggo').forEach(node => {
	node.addEventListener('dblclick', event => {
		const{currentTarget, target} = event
		event.target.style.filter ='invert()'
	})
}) 

// it checks whether the string exists or not, if can not fint it returns -1
// currentTarget.style.filter.indexOf('anything') === -1

classList it returns all the classes in a list 

<style>
.invert{
	filter: invert();
}
.sligh-rotation{
	transform: rotateZ(20deg);
}

// it checks all the classes and change to invert
target.classList.toggle(invert);


// document.querySelectorAll('.doggo').forEach(node => {
//   node.addEventListener('dblclick', event => {
//     const {currentTarget, target} = event;
//     // const currentTarget = event.currentTarget;
//     // const target = event.target;
//     console.log('target:', target);
//     console.log('currentTarget:', currentTarget);
//     // BAD!
    
//     if (currentTarget.style.filter.indexOf('invert') !== -1) {
//       currentTarget.style.filter = '';
//     } else {
//       currentTarget.style.filter = 'invert()';
//     }
    

//     // GOOD!
//     currentTarget.classList.toggle('invert');
//   });

//   node.addEventListener('mousedown', event => {
//     const {currentTarget} = event;
//     // ð Destructuring Assignment is syntax sugar for ð
//     // const currentTarget = event.currentTarget;

//     currentTarget.classList.add('slight-rotation');
//   })

//   node.addEventListener('mouseup', function () {
//     this.classList.remove('slight-rotation');
//   })
// });
// we have to define node at first so 

/// target is the one that clicked on it, current target is the one that pass it as node listenor
node.addEventlistener('mousedown', event => {
   const {currentTarget} = event;
   // const currentTarget = event.currentTarget;
   currentTarget.classList.add('sligh-rotation');
});

// this one remvoes the sligh-rotation class
node.addEventlistener('mouseup', function(){
	this.classList.remove('sligh-rotation');
});



/// exercise:
document.querySelectorAll('.doggo').forEach(node => {
  node.addEventListener('mouseenter', event => {
    const {currentTarget, target} = event;
    // const currentTarget = event.currentTarget;
    // const target = event.target;
     console.log(target);
       currentTarget.classList.add('mono');
 })
    node.addEventListener('mouseleave', function () {
    this.classList.remove('mono');
  })

});

///// Steve solution
// EXERCISE: Crouching Mouse Hidden Doggo

for (let doggo of document.querySelectorAll('.doggo')) {
  doggo.addEventListener('mouseenter', event => {
    const {currentTarget} = event;
    currentTarget.classList.add('monochrome');
  })

  doggo.addEventListener('mouseleave', event => {
    const {currentTarget} = event;
    currentTarget.classList.remove('monochrome');
  })
}

//////////

//preventDefault // it stop the event to do anything 






