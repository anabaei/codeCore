

// document.querySelectorAll('.doggo').forEach(node => {
// 	node.addEventListener('click', event => {
// 		const {currentTarget} = event;
// 		console.log("${event.currentTarget.id} was click") 
// 	})
// })

// document.querySelectorAll('.doggo, .team, .teams').forEach(node => {
// 	node.addEventListener('click', event => {
// 		const {currentTarget} = event;
// 		console.log('${event.currentTarget.id} and ${evet.currentTarget.className} click') 
// 	})
// })

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

/*
document.querySelectorAll('.team').forEach(node => {
  node.style.backgroundColor = 'fuchsia';
});
*/

/*
for (let node of document.querySelectorAll('.team')) {
  node.style.backgroundColor = 'fuchsia';
}
*/

// 2. Rename all doggos to Rob The Slob

/*
for (let node of document.querySelectorAll('.doggo')) {
  node.innerHTML = '<h1>Rob The Slob</h1>';
}
*/

// 3. Change all doggo pictures to that of a cat from the internet

/*
let internetCatURL = 'https://creators-images.vice.com/content-images/article/24-hour-online-animal-tv-is-the-logical-conclusion-of-the-internet/b7391f23587dfa5cc59c75e53a19841a.jpg'

for (let node of document.querySelectorAll('.doggo')) {
  node.style.backgroundImage = `url(${internetCatURL})`;
}
*/

// CREATING NODES

// document.createElement
// Returns a new node that isn't attached to DOM. It takes
// a tag name as string for argument.

let drillBitDarel = document.createElement('div');

drillBitDarel.id = 'drill-bit-darel'
drillBitDarel.classList.add('doggo', 'fighter')
drillBitDarel.innerHTML = '<h1>Drill Bit Darel</h1>'
drillBitDarel.style.backgroundImage = `url(./images/drill_bit_darel.jpg)`

// ADDING NODES TO THE DOM
// <Any-Node>.appendChild
// Call .appendChild on a node to add a node passed argument as its last child.

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

// DOM MANIPULATION II

// EVENTS

// Creating our first event listener

// The .addEventListener is a method usable on any DOM Node instance.
// It takes at least two arguments:
// - A string named after an event that exists (e.g. 'click', 'submit', 'input',
//   'mouseenter', 'mouseleave', etc)
//   For a full list of events, go to https://developer.mozilla.org/en-US/docs/Web/Events
// - A callback that is called when the event is triggered. It receives an event
//   when called.

// When the node Toxic Tim is clicked, 'Toxic Tim was clicked!' will be logged
// to the console.
toxicTim.addEventListener('click', () => {
  console.log('Toxic Tim was clicked!');
})

// To check if an Object is an instance of a Node (or, any other prototype)
// use the `instanceof` operator.

document instanceof Node // true
'Bob' instanceof Node // false

document.querySelectorAll('div') instanceof Node // false
document.querySelectorAll('div') instanceof NodeList // true
document.querySelectorAll('div')[0] instanceof Node // true

// You can only `.addEventListener` on Nodes or the majority of the methods
// we saw during DOM Manipulation I. `instanceof` is a great to test if
// an object is a Node.

// Event Object

// The callback passed to .addEventListener is called with an event object
// that contains all sorts of information about the state of the program
// at the time the event was triggered. This includes:
//
// - the `target` node that originally triggered the event.
// - the `currentTarget` node which is the node that has the `.addEventListener`
// - the time at which the event was triggered
// - for mouse events, the coordinates of the cursor at the time the event was triggered
// - for keyboard events, the key that was pressed
// - and, many many more...

/*
document.addEventListener('click', function (event) {
  debugger;
  console.log(event);
})
*/

// the `this` inside the callback is assigned `event.currentTarget`. If you want
// to make us of it, make sure to define your callback as a regular function.
// Do not use an arrow function, because the `this` of an arrow function can
// not be changed.

/*
// BAD!
document
  .addEventListener('click', () => { console.log(this); }) // logs `undefined`
// GOOD!
document
  .addEventListener('click', function () { console.log(this); }) // logs the `body` node
*/

// MOUSE EVENTS

document.querySelectorAll('.doggo').forEach(node => {
  node.addEventListener('dblclick', event => {
    const {currentTarget, target} = event;
    // const currentTarget = event.currentTarget;
    // const target = event.target;
    console.log('target:', target);
    console.log('currentTarget:', currentTarget);
    // BAD!
    /*
    if (currentTarget.style.filter.indexOf('invert') !== -1) {
      currentTarget.style.filter = '';
    } else {
      currentTarget.style.filter = 'invert()';
    }
    */

    // GOOD!
    currentTarget.classList.toggle('invert');
  });

  node.addEventListener('mousedown', event => {
    const {currentTarget} = event;
    // ð Destructuring Assignment is syntax sugar for ð
    // const currentTarget = event.currentTarget;

    currentTarget.classList.add('slight-rotation');
  })

  node.addEventListener('mouseup', function () {
    this.classList.remove('slight-rotation');
  })
});

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

// DEMO: Type Loudly & Explode on submit

const random = n => Math.ceil(Math.random() * n);
const playKey = () => new Audio(`sounds/vintage-keyboard-${random(5)}.wav`);

document.querySelectorAll('#application-form input').forEach(node => {
  node.addEventListener('input', event => {
    const {currentTarget} = event;
    // console.log(currentTarget.value);
    playKey().play();
  })
})

document.querySelector('#application-form').addEventListener('submit', event => {
  const {currentTarget} = event;
  // prevent the submit from causing a web request as submitted forms
  // normally do
  event.preventDefault();
  new Audio('sounds/dog-bark-1.wav').play();
})

// EXERCISE: Keyboard events

document.addEventListener('keydown', event => {
  const {ctrlKey, shiftKey, key} = event;

  // console.log(ctrlKey, shiftKey, key)

  if (ctrlKey && shiftKey && key.toLowerCase() === 'n') {
    window.location.href = 'http://www.nyan.cat'
  }
})

// EXERCISE: Shortcuts of the Ninja

document.addEventListener('keydown', event => {
  const {altKey, ctrlKey, shiftKey, key} = event;

  // MacOS will use special character when Alt is held,
  // this is why have to check the with keyCode instead of key
  if (ctrlKey && altKey && event.keyCode === 68) {
    document.body.style.display = 'none';

    setTimeout(() => {
      document.body.style.display = 'initial';
    }, 2000)
  }
});

// Send user to http://hackertyper.net when 'panic' is typed anywhere on the page

let lastKeys = '';

document.addEventListener('keydown', event => {
  const {altKey, ctrlKey, shiftKey, key} = event;

  if (key.length > 1) return;

  lastKeys = (lastKeys + key).slice(-5);

  if (lastKeys.toLowerCase() === 'panic') {
    window.location.href = 'http://hackertyper.net';
  }
})

document.querySelectorAll('.doggo, .roster, .team, .teams').forEach(node => {
  node.addEventListener('click', event => {
    const {currentTarget, eventPhase} = event;
    // debugger;
    console.log(
      `${currentTarget.id} ${currentTarget.className} Phase #${eventPhase} was triggered!`
    )
  }, true)
  
  node.addEventListener('click', event => {
    event.stopPropagation();
    const {currentTarget, eventPhase} = event;
    // debugger;
    console.log(
      `${currentTarget.id} ${currentTarget.className} Phase #${eventPhase} was triggered!`
    )
  })
})









/* */