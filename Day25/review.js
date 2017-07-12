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
Nested resource 

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




