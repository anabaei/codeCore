One to Many Associations:

one to one  example:-- user per a profile,



rails g model answer question:reference body:text

it tells question has foreign key, 

then it creates db for us, 

then we add index:true in front of that, 
index then create a data structure that its default is binary search with log(n) fast

then run the migration 

# belongs to can be optional 
belongs_to :question, optional: true


// these both are the same 
Question.find(a.question_id)
a.question 
http://guides.rubyonrails.org/association_basics.html#belongs-to-association-reference

// 
Has many 
http://guides.rubyonrails.org/association_basics.html#the-has-many-association

q is the one question
q.answers << Answer.create(body: 'tow')
q.answers // gives back all the answers belongs to that question

.to_formatted_s 


# POST /questions/5/answers
Nested resources 

in console we c we have app object 

// parent resource is question and child is answer 
app.question_answers_path(quesiton_id)

// each quesiton has many ids so we can define it as it is. 

resource :questions do
   resource :answers  , only: [:create, :destroy]
end 


inside the form because we want to have form for the each question belongs to each answer,
then we have to write it as 

<%= form_for [@question, @anwer] do |f| %>
  <% f.text_area :body %>
<% end %> 


def create 
 question = Question.find params[:quesiton_id]
 /// it means only one parametr as body is permited through the params 
 answer_params = params.require(:answer).permit(:body)
 
 // answer = Answer.new(answer_params)
 // answer.quesiton
 //render json: params
end 


/// 
validates :body, presence: true

we can use render by any display by providing the path, then for validation since we 
render the page, we have to intiialize all @ansers and other local variables 


now for delete


helpers:
simple function to refactor our code, the error messages to refactor the code, 
// search for rails content_tag 
<%= errors_for @answers %>

def errors_for(model)
  content_tag :div, somefunctions 
  some functions 

end 


html skip// by defaults strings returns from hlper method are escaped, 
// meaning special charactors are not interepreted as HTML
def htmlsafe
 '<div class="somehting"> this is what you want </div>'.html_safe 
end

it tell rails none of the charactors are not to be skipped and they are html_safe


Refrence Delete:

in has many: 
it delete all associated answers to question be deleted 

// will update the question_id in all associated answers to null
dependent: :nullify 
we can tell it dependent: :destroy 

if we go to answr controllers 

  ////////////// Dom  
Day 27 Dom Manipulation

toxicTim.children.__proto__

HTMLDIVElement /// we can manipulate them easily by adding things
HTMLCollection /// then we have to address the array  then manipulate them 

// toxiTim is an selected attribute here 
toxicTim.children.__proto__
toxicTim.children[0].__proto__


Document object model, 
is just taking an html we write and transfer to browser. 

Tag is just a text
but a node is DOM object which is transfer to browser. 

the very top node is document, you can type node inside console chrom, 

console.dir(document)
javascript representation of DOM, it convert DOM to an object javascript, 
even html is. 

$0 each node has a number, which works like an onject.

It can be used instead of any object instead of  document except getelementbyid, other get elements
work decsendending. 

// the way firt 
team[0].getelemensbyclass('name')

// it returns the first match 
document.querySelector('.doggo:last-of-type') 

document.querySelector('.doggo > .myname last-of-type')  
 class myname should be a child of doggo wihtout any div between
document.querySelector('.doggo  .myname last-of-type') 
 it covers all myname classes nested inside of doggo class 

document.querySelector('.doggo:last-of-child') 
document.querySelector('.oneclass .doggo:not(last-child)') 

document.querySelectorAll('.team')

/// the fastest selection is not query selector, it is getelemenbyid and is O(1). 

document.querySelector('#nameId')
document.querySelectorAll('#name')[0] // it selects only one 

// it selects twos 
document.querySelectorAll('#name , #lary')

// 
  document.querySelectorAll(.name .dogo:not(:first-child)) 
  
  // select the second child of them 
  document.querySelectorAll(.name .dogo:nth-child(2)) 

// it returns the next sibling one , if there is no sibling then we get null. 
toxicTim.nextElementSibling 
// it gets the same node that share same parent 
.previousElementSibling 

// returns the parent node of the current node 
.parentElement

.childeren

.childNodes
// you can access to text with it 


/// CSSS
let div = document.getElementById('toxic-tim')

// either of each 
div.style.color = 'green';
div.style['color'] = 'green';


getComputedStyle(div)


outerHTML

// it does replace the the div selected with everything we pass even name of div  
div.outerHTML = '<h1> this samwa way </h1>'

// it replace the texts inside the the div we selected 
div.innerHTML = '<h1> this samwa way </h1>'


// 

div.classList
div.classList.add('labour')
div.classList.remove('injured ', 'lsboutr')
div.classAdd 
div.classRemove
// it tells is it 
div.classList.contains('labour')
// it add or remove the the class 
div.classList.toggle('labour') // returns on and off 


div.setAttribute('data-name', 'thename')
div.hasAttribute('data-name') // returns true or false 
div.getAttribute('data-name') // returns the value of attribute 


/// since queryselector select an array and then we loop through it. 
document.querySelectorAll('.team').forEach(node => {
  node.style.backgroundColor = 'fuchsia';
});


for (let node of document.querySelectorAll('.team')) {
  node.style.backgroundColor = 'fuchsia';
}



Creating nodes

// Create new nodes that isnt attach to Dom

call appendChild to a add a node passed arg as last child 

div.querySelector('.roster').appendChild(newdiv)

///???
insert before it insets the firstarguemnt, the second argument and after firstargu. in front of a child of second argument
div.insertBefore(firstargu, secondargu)







// SELECTING NODES

// document.getElementById
// getElementById is a method that returns a node with a given
// id pass as argument. It's the fastest of all the different
// selector methods.
let toxicTim = document.getElementById('toxic-tim')

// <Any-Node>.getElementsByClassName
// getElementsByClassName is a method that returns an array-like object
// containing all nodes that match the classes given as argument.
// It can be used on any node (including document) to search only
// the descendants of that node.
let doggos = document.getElementsByClassName('doggo')
// returns all nodes with the doggo class
let teamAquamarine = document.getElementsByClassName('team aquamarine')
// returns all nodes with team & aquamarine class

// <Any-Node>.querySelector
// querySelector is a method that returns the first node that matches
// a given CSS selection. You can use any CSS selector you know to find
// nodes.

let lastDoggoOfTeamSalmon = document.querySelector('.team.salmon .doggo:last-child')
let teamKhaki = document.querySelector('.team.khaki')

// <Any-Node>.querySelectorAll
// querySelectorAll is a method that returns all nodes that match a given CSS selection.
// You can use any CSS selector just like querySelector.

doggos = document.querySelectorAll('.doggo')
let lastDoggosOfAllTeams = document.querySelectorAll('.team .doggo:last-of-type')

// E X E R C I S E: Picking Doggos
// 1. Select Knight Nicholas by id
document.querySelector('#knight-nicholas')
document.getElementById('knight-nicholas')
document.querySelectorAll('#knight-nicholas')[0]

// 2. Select Moneybags Michael & Larry The Lion
document.querySelectorAll('#moneybags-michael, #larry-the-lion')

// 3. Select all Team Khaki Doggos but the first
document.querySelectorAll('.team.khaki .doggo:not(:first-child)')

// 4. Select the second doggo in every team
document.querySelectorAll('.team .doggo:nth-child(2)')

// NAVIGATING NODES
// With a node selected, we have access to several methods to access nodes
// that are siblings, parents or childen.

// .nextElementSibling & .previousElementSibling
// nextElementSibling gets the next node that shares a the same parent of the current
// node and the reverse for previousElementSibling.

let bumbleBertha = toxicTim.nextElementSibling
let ninaTheNinja = toxicTim.nextElementSibling.nextElementSibling

toxicTim.previousElementSibling // returns `null`, because it does wrap around

// .parentElement returns the parentNode of the current node
let roster = toxicTim.parentElement
let teamSalmon = roster.parentElement

// .children
// .children returns an HTMLCollection of all nodes that are immediate children
// of the current node

teamSalmon.children // returns its title and .roster
let teamSalmonDoggos = teamSalmon.children[0].children // returns all doggos of the team

// .matches
// Returns a boolean based on whether a node matches the CSS query given

toxicTim.matches('.doggo') // returns true
toxicTim.matches('div.fighter') // returns true
toxicTim.matches('a.doggo') // returns false

// MANIPULATING NODES

// Changing Inline Styles
// Nodes have a `style` property whici is an object that contains all inline styles.
// Changing these properties will be immediately reflected in the DOM.

toxicTim.style.color = 'Aquamarine'
toxicTim.style.border = 'thick solid salmon'
toxicTim.style['border-radius'] = '5px'

// When using dot notation to refer to a CSS style, make sure to
// use camelCase instead of kebab-case.

// To get all calculated styles, those that are default, declared in a stylesheet
// or even inline, use getComputedStyle

let toxicTimsStyles = getComputedStyle(toxicTim)
toxicTimsStyles.top
toxicTimsStyles.bottom
toxicTimsStyles.borderRadius

// Modifying the contents of node
// .innerHTML
// When read, returns the HTML inside of a node
toxicTim.innerHTML // returns `<h1>Toxic Tim</h1>`
// When written to, replaces the innerHTML with a string
/*
toxicTim.innerHTML = '<h1>Conny Coneface</h1>'
*/

// .outerHTML works nearly the same way as innerHTML except that
// it includes the node itself. This means that it can be used
// to completely the node and its contents.

// Manipulating HTML attributes
// For non-custom HTML attributes, you can refer to them by name except for class
// Use className or, better yet, classList

/*
toxicTim.id // returns Toxic Tim's id `toxic-tim`
toxicTim.id = 'bumble-bertha' // replaces Toxic Tim's id
*/

// For classes, it is recommended that you use the classList properties.
// In returns an array-like object with several utility methods:

toxicTim.classList
toxicTim.classList.add('labourer')
toxicTim.classList.add('injured', 'cancer')
toxicTim.classList.remove('fighter')
toxicTim.classList.contains('cancer')
// returns true if toxicTim has the class `cancer`
toxicTim.classList.toggle('cancer') // turns on and off the class
toxicTim.classList.toggle('cancer')

// There are more general methods to manipulate attributes on a node

// .setAttribute can be used to add an attribute. It takes the name of
// the attribute as the first argument and its value as the second argument.

// HTML attributes can only have strings as values.
toxicTim.setAttribute('data-date', '2018-01-01')
// ð adds custom addtribute `data-date` to Toxic Tim. This can be used for
// any kind of attribute.
toxicTim.getAttribute('data-date') // returns the value of the attribute `data-date`
toxicTim.hasAttribute('data-date') // returns true if the attribute exists ortherwise false
toxicTim.removeAttribute('data-date') // removes the attribute

// E X E R C I S E: Vandalise the Arena

// 1. Change the color of all teams to fuchsia

/*
document.querySelectorAll('.team').style.backgroundColor = 'fuchsia'
// BAD! querySelectorAll doesn't a return a node, but a collection of nodes
*/

// To affect all the nodes of a NodeList or an HTMLCollection,
// loop over with the .forEach method or use a `for .. of` loop.


document.querySelectorAll('.team').forEach(node => {
  node.style.backgroundColor = 'fuchsia';
});


for (let node of document.querySelectorAll('.team')) {
  node.style.backgroundColor = 'fuchsia';
}

// 2. Rename all doggos to Rob The Slob

for (let node of document.querySelectorAll('.doggo')) {
  node.innerHTML = '<h1>Rob The Slob</h1>';
}

// 3. Change all doggo pictures to that of a cat from the internet

let teamSalmonRoster = teamSalmon.querySelector('.roster')
teamSalmonRoster.appendChild(drillBitDarel)
// ð adds the newly created node, drillBitDarel, as child of `.team.salmon > .roster`
// node

// <Any-Node>.insertBefore
// Call .insertBefore on a node to add a node passed as the first argument
// in front a of a child (of <Any-Node>) passed as a second argument.

teamSalmonRoster.insertBefore(
  drillBitDarel,
  teamSalmonRoster.firstElementChild
)



/// get the first link of a page 
document.querySelector('a')

// get all links 
document.querySelectorAll('a')

// change all links from craiglist of links to my name
for (let node of document.querySelectorAll('a')) { node.innerHTML = "amir" }



/// change image of header 
var img = new Image();
img.src = "https://image.flaticon.com/teams/slug/google.jpg"
$0.appendChild('https://image.flaticon.com/teams/slug/google.jpg')

//change the font of all docs
document.body.style.fontFamily = 'papyrus'
// or 
document.querySelector('body').style.fontFamily = 'papyrus'


////
document.querySelector('a.image img').srcset = 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKTAAAAJDRmNTA3MDk1LTNkNDEtNDgyOS1hYjA1LTA2Yjc1YTE2OGE5Yg.jpg'

document.getElementById('firstHeading').innerHTML = 'Tam Kbeili'

for (let node of document.querySelectorAll('p')) {
  node.innerHTML = node.innerHTML.split('Pug').join('SPUD')
}

// prepands
function prepand(arg1,arg2){
  var parent = document.getElementById(arg1)
  var child = document.getElementById(arg2)
  child.id = 'newid'
  parent.appendChild(chile);
}


//////    Day30  jQuery 
////// Two capture phases in reading DOM. 

Events are dipatch to target node, they trickes down descendants to dispatching node (capture phase)
once the event reaches to target node, it is in between phase at target. Then event bubble up to parent 
until to reach parent node it is bubble phase. by passing a third argument true to addEventListener are triggered. 

/////// this phase is danger
Event start from target travel upward to ancester nodes (bubble phase)

/// we want to check how the events are spreading through capture phase,
to see capturing and bubbling phases, we have to use debug mood 

when you click on something then you would have all ancestors that are trigger. 
// to see phases it is an object of event name phase 

event.stopPropagation(); 
// it stop going down and up in event. it means we want to just trigger it. 


/// it returns tons of functions are available in jquery 
console.dir($) 
// tag name 
$('button')
$('button:nth-of-type(2)')

//select all ancer tags a inside li tags
$('li a')

$('.blue.circle').length
// it returns the length of object 

// select individual nodes 
$('.blue.circle')[0].className or
$('.blue.circle').eq(0)

add,remove,toggle alll are done in classList
but in jquery we use addclass, removeclass and toggleclass

// when you use a method to read it returns only one argument 

// it changes all attributes of href to google
$('a').attr('href', 'google')

// look at the second circle there is no . 
$('.circle').removeClass('circle').addClass('diamond')
// if we had to do it in javascript we had to loop trhou all 
// when writing in jquery all nodes all affected but when reading only the first node is affected
// remove the blue class from all shapes and replace with red 
$('.shape').removeClass('blue').addClass('.red')

// EXERCISE: Practice

// 1. Set the âclassâ attribute of all anchors to âhighlightâ with attr method
$('a').attr('class','highlight') // this works, but avoid using it becaue it totaly replace the class
// instead use addclass removeclass toggleclass instead.

// 2. Replace all âcircleâ classes with the âdiamondâ class.
$('.circle').removeClass('circle').addClass('diamond')
// 3. Remove all shapes in the green & purple container.
$('#green-container .shape, #purple-container .shape').remove();
it retuens all the shapes inside containers 

// DEMO: html
innerHTML in jquery is html method
children property in jquery is children method filters 
parent property in jquery is a parent method filters 

// 1. Get "html" of the reset button.
$('#reset').html() it returns html inside that
// 2. Get "html" of all links.
$('ul').html() // returns only one 

$('a').map((index,node) => node.innerHTML())
$('a').map((index,node) => $(node).html())
// javascript $('ul').[0]

// 3. Change "reset" button to read "Launch Doggos!".
  $('#reset').html('loaunch Doggos!');
// EXERCISE: practice

// 1. Replace contents of every "td" with "yass"
$('td').html('yaaas');
// 2. Select parents of td tags
$('tr').parent();

// createElement method in javascript 
// 1. Create a "small blue diamond" with $ function
$(`
  <div class="small blue diamond shape"></div>
`)

// 2. Append "small blue diamons" to all containers

$('.container').append(
  $(`
    <div class="small blue diamond shape"></div>
  `)
)
/// add a section to a DOM and append a circle inside a container to it.  
// prepanad added before the current one and append added inside that 
$('h1').append($('<div class="container"></div>'))
$('.container:nth-of-type(1)').append($('<div class="small black circle shape"></div>'))

// 3. Prepend a new link, "http://www.nyan.cat", to the list of links
$('ul').prepend(
  $(`
    <li><a href="http://www.nyan.cat">Nyan Cat</a></li>
  `)
)

$('ul').prepend(
  $("<li><a href=\"http://www.nyan.cat\">Nyan Cat</a></li>")
)

///.on is more consitant 

JavaScript is run before the entire HTML is loaded. 
so all the dom manipulations that related to DOM so we need to wait the whole dom load first.

//in JavaScript we put all stuff inside this which needs the DOM be loaded first. 
document.addEventListener('DOMContentLoaded',() =>{

})


// Listening for events with jquery
// use the .on method with a jQuery list. jQuery will add an event
// listener for every in the list. It behaves nearly identically to addEventListener.
// It takes an event name as the first argument and a callback as the second argument.

document.addEventListener('DOMContentLoaded', () => {
  $('.blue.circle').on('mouseenter', event => {
    console.log('Blue circle away with DOMContentLoaded!')
  })
})

$(function () {
  $('.blue.circle').on('mouseenter', event => {
    console.log('Blue circle away with jQuery!')
  })

  $('#button-1').on('click', event => {
    $('.shape').remove()
  })
})


// 

$('#button-1').on('click', event =>{
  const{currentTarget} = event;
  $(currentTarget).attr('disable', true)

})


$('tr').on('mouseenter', event =>{
  const{currentTarget} = event;
  $(currentTarget).addClass('highlight');
})


/// Animations & affects
// Velocity JS is very good 
first one is the time we want to be done and second arg is the 
call back when the effects is complete 

// it is good idea to not to use => function because we need to use this here 
$('.blue').fadeIn(5000, funciton(){
    $(this).slidDown(1000);
})

/// also we can chain in another funciton 
$('.blue').fadeIn(500, funciton(){
     $(this).slidDown(1000, function(){
      $(this).fadeOut(200);
    });
});

/// To select a class combination of two or three in jquery we have to add them next to each other wihtout space
// space in selections means we nested selector or 

/// Exercise Labs
document.addEventListener('DOMContentLoaded', () => {

$('#form-1').append($(`
    <div id="22"></div>
  `));  
$('#form-message').html(' ');
  $('.shape').on('mouseenter', event => {
     const{currentTarget} = event;
     $(currentTarget).addClass('highlight');
  })



    $('.shape.small').on('click', event => {
     const{currentTarget} = event;
      
     $(currentTarget).hide();
  })

  $('.shape.medium').on('click', event => {
     const{currentTarget} = event;
      
     $(currentTarget).addClass('small');
     $(currentTarget).removeClass('medium');
  })
    $('.shape.large').on('click', event => {
     const{currentTarget} = event;
      
     $(currentTarget).addClass('medium');
     $(currentTarget).removeClass('large');
  })



 $('table').prepend('<tr> <td>  0 </td>  <td>  - </td></tr>');


    $('#button-1').on('click', event => {
     const{Target} = event;
      
     $('#green-container').toggle();
  })

      $('#button-2').on('click', event => {
      $('#button-2').fadeOut()
  })
      
      $('#button-3').on('click', event => {
      $('#button-2').fadeIn()
  })

       $('#button-4').on('click', event => {
      $('#green-container').slideUp()
  })

  //      $('#button-2').on('click', event => {
  //     $('#button-2').html("Button 2 ").fadeIn(30000)
  // })

  $(document).on('keyup', event => {
    if(event.keyCode == 71){
      $('.shape.grey').fadeOut()
    }else if (event.keyCode == 32){
      $('#green-container').append('<div class = "small blue circle shape"></div>')
    }
  })

  
  
  $('input').on('keyup', event => {
  a =   $('input').val();
  b = 14 - a.length; 
   $('#22').html(b);
  })

  /// Lab4 

  $('#form-1').submit(event =>{
   a = $('input').val();
   b = "red blue yellow green"
   
   if (a === "red" ||a === "blue" || a === "yellow" ||a === "green" )

   $('.'+a).hide();
   else 
   {
    $('#form-message').html('Alert, the color inoput is invalid');
   // event.stopPropagation(); 
    $('input').val('')
  }
  })


 /// Lab 5
  rev = [];
  $('input').on('keyup', event => {
  a =   $('input').val();
    a = a.slice(-1);
   // console.log(a);
   rev.push(a);
    console.log(rev);
    
   $('#form-message').prepend(a);
 //  $('#form-message').html(a);
  })


  $('#orange-container').on('click', event => {
    $('.shape.red').hide();
    
 //  $('#form-message').html(a);
  })
})

//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// Day 39 /////////////////////////////////////////
////////////////////////////// Advance JavaScript /////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

//concept of promises 
promises are kind of abstraction of asynchronyses 
callback is a function that call another function. 
all callbacks are asynchronyses. 
getting values from asynchronyses functiones. 
so when we want to get asynchronyses, we use callbacks. 
promises. ES6 
An abstraction


new Promise(function (){})
// here [[]] are set in language, open the promise, we gonna use 'catch' and 'then' methods 
new Promise((resolve, reject)=>{
  const resolveValue = 'It worked';
  resolve(resolveValue);
})

// promise contstrcutor returns two call back functions 
//here in below only reject works and another one doesnt work, 
new Promise((resolve, reject)=>{
  if (true) {
    // to throw an error inside a promise, user the reject function with error as its argument.
    reject(new Error('oops'))
  }
  const resolveValue = 'It worked';
  // to return a value from a promise, call the resolve function with the value as its argument
  // 
  resolve(resolveValue);
})

// DEMO: Flipping coin 

function flipCoin(){
  return new Promise((resolve, reject) =>{
    const side = ['head','tail'][Math.floor(Math.random()*2)]
    resolve()
  })

}

/// call function with call back in asyncronize mood 
function flipCoinWithCb(cb){
    const side = ['head','tail'][Math.floor(Math.random()*2)]
    if (typeof cb === 'function') cb(side);
}


// my solution 
// function rolldie(n){
//    const number = Math.floor(Math.random()*n + 1);
//       resolve(number)
// }

function roll(){
new Promise((resolve, reject)=>{
  const resolveValue = Math.floor(Math.random()*4 + 1);
  resolve(resolveValue);
})
}


new Promise((resolve, reject)=>{
  if (true) {
    // to throw an error inside a promise, user the reject function with error as its argument.
    reject(new Error('oops'))
  }
  const resolveValue = 'It worked';
  // to return a value from a promise, call the resolve function with the value as its argument
  // 
  resolve(resolveValue);
})

// resolve is somthing has meaning 


// EXERCISE: Roll Die
function random (number) {
  return Math.ceil(Math.random() * number);
}

function rollDie(number) {
  return new Promise(function (res, rej) {
    res(random(number));
  });
}
 

// DEMO: Throwing the Coin Too Far
function flipCoin () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const side = ['heads', 'tails'][random(2) - 1];
      resolve(side);
    }, 1000 + random(3000));
  });
};

// promises has three states, 
// [[]] means they are properties that you can not touch them, and already defien in lang

function flipCoin () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const side = ['heads', 'tails'][random(2) - 1];
      resolve(side);
    }, 1000 + random(3000));
    setTimeout(()=>{
     reject('the coin was thrown too far!');
    },3000);
  });
};

// .then always return a promise, argument pass to next then is the result 
// catch is the error 
// now you can run it inside the chrome 
flipCoin().then(resolveValue => {console.log(resolveValue)})
.then(resolveValue => {console.info('next value', resolveValue); return 10})
.then(resolveValue => {console.info('next value', resolveValue); return 14})
.then(resolveValue => {console.info('next value', resolveValue); return 18})

// output is 
head
10
14
18 
// these are asyncronize after  each other, the return always hand the value as resolveValue to 
// the next then. 

// the return of the flip always going be that 
flip.then(function(value){console.log(value)});

/// 


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


function delay (ms, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), ms);
  });
}

/// 
delay(1000, 'hellow')
// .then(() => {
//   console.log('Waited 1s!')
//   return delay(2000, 'hellwo')
// })
.then(() => (result => console.info(result)) 
// {
//   console.log('Waited another 2s!')
//   console.info('Waited another 2s!')
// })

/// 

/// think about it 
/// then.resolve(3000).resulet
// it checkes whether it has two values or not if dont so 
// return the reuslt as an object holding a promise 
function delayWith (ms, value) {
  if (typeof value === 'undefined') {
    return result => new Promise((resolve, reject) => {
      setTimeout(() => resolve(result), ms);
    });
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), ms);
  });
}

////// promise Utility Mehtods 


/// Promise.resolve immediately returns that is resolve with an arg
Promise.resolve(20) // returns promise that resolved with PromiseValue 20
new Promise((resolve,reject)=>(20));

// Promise.regect immediately returns that is rejected with an argument

Promise.all executes an array of all promises and once the last one is resolved it returns, 


///
function parallelDemo () {
  console.time('parallelDemo total time');
  Promise.all([
    delay(1000 + random(2000), 10),
    delay(1000 + random(2000), 20),
    delay(1000 + random(2000), 30),
    delay(1000 + random(2000), 40),
    delay(1000 + random(2000), 50)
  ])
    .then(arrOfResolvedValues => {
      console.timeEnd('parallelDemo total time');
      console.log(arrOfResolvedValues)
    })
}

// Async Functions 
//with this we can eliminate call backs,






















