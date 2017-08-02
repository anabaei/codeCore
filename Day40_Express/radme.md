
 # Express Steps
 https://github.com/CodeCoreYVR/AwesomeAnswersExpressJun2017
 
```javascript
  npm install -g express-generator
```
 basic css we can write with scss and ejs we need  
 ```javascript
   express --view ejs --css sass AwesomeAnswerExpress 
```
  we gonna use yarn instead of npm >>> i think
   yarn install 

we dont want commit node_modules folder
so we create file .gitignore and inside that we have:
node_modules/
.DS_Store


yarn install
yarn start


in favicon -- use the 

line 20 Body parser is use to request jason, and it takes json and convert to js object

line 23: there is indententsynatc so we change to 
line23 : we creaet a var instead of params inside it

var nodeSass = require('node-sass-middleware')

change all var to const.

line27: indentsyntax make it to false

In stylesheet the default is sass. 
we rename it to scss to be able to write css and sass tofather 
after renaming the file just add {} after body and : after padding: font: etc..

added as developmnet dependency 
 ```javascript
 yarn add nodemon -D
 "debug": "nodemon --inspect ./bin/www"
 ```
 the added to package.json
 
 then run this to install three packages 
  ```javascript
 yarn add sequelize pg pg-hstore 
```

npm i -g sequelize sequelize-cli pg pg-hstore 


## Setup Database in Express 

sequelize   then it show you all commands
```javascript
sequelize init   
```
it create several files, seeds, migration etc 


in config confgi jason, 
if you remove user name and password it assume yor databasa dont need password and use yoru com[uter databqase 
inside the app go to scripts and add belows 
add `"dialect": "postgres"` instead of mysql


"db:create":"createdb echo aae_dev",
"db:drop":"dropdb --if-exists --echo aae_dev"

### to create Model 
sequelize model:create --name Question --attributes title:string,content:text

inside migration are hash rather than object, 

They are methods of object we get through queryInterface, 
primary key is like an index that primay key shows as a row

in model classMethods are redundant, because sequelize no longer supports this way of adding association models.

right now we have a model name Question
so we have 


Question.associte = (models) => {
  // associations can be defined here  
};
  return Question;
};


yarn db:migrate


putting all your model objects and put them into one 
this just load everything inside model

let models = require('./models')  -- put all models inside models var
models.Question            --- to access one model we wrte like that which gives us Quesiton model
q = Question.new     -- give us the 
Question.findAll()
Question.findAll().then(console.info)

it returns an array of objects. 

to have a clear raw: true 
Question.findAll({raw: true}).then(console.info)



q1 = Question.create({title: 'this, content: 'yes'})

### seeds 
```express
yarn add -D faker
sequelize seed:create --name create-questions
```

const {Question} = require('./models')
// The methods up and down must always return the promise, this is only way sequelize can know that the seed is completed
const faker = require('faker')

in node console. we can pass all different thing inside the array. 
Array.from({length: 20})  // it creates 20 array map random 
Array.from({length: 20}).map(()=>1)   fill out [1,1,1,1,1]
Array.from({length: 20}).map((v,i)=>i)   fill out [0,1,2,3,4,5]

-- to understand below code, understand above code 

const questions = Array.from({length:100})
.map(() => {
  return Question.create({
   title: '${faker.hacker.adjective()} ${faker.hacker.noun()}',
   content: faker.hacker.phrase()
  })
  
  return Promise.all(questions)
}

psql -d aae_dev

### routes

Rename routes/users.js to questions.js
inside app.js 
instead in line 9-10 
var question= require('./routes/questions')

// the first one is the starting a path and second one is the one going there 


33 app.user('/question',questions)



inside routes/questions.js

const {Question} = require('questions')


get user listing

router.get('/', function(req, res, next) {
  Question
    .all()
    .then(questions => {
      res.send(questions);
    })
});

#### To address a show page same in product.js
router.get('/:id', function(req, res, next) {
  const{id} = req.params;
  Product
  	.findById(id)
    .then(product => {

      res.render('products/show', {product});
    })
});
module.exports = router;


* First express look at app.js, if ay routes matches like / or /user then it goes to second params which we defined on top page as line 9`var products = require('./routes/products');` as params name inside routes folder, and there it reades get and params and send back the templates with params objects as above. 



-- now it list all questions

inisde the views/partial create header and footer ejs 

and in each view have these 
<%- include('./partials/header') %>


the property of question 
all the properties of second object is available inside the template 
res.render('questions/index',{questions}); 

to get a value from a promise use then, then a call back uses after then to render questions object inside that path.


<div class="question-list"


git commit --amend  -- it erase all the commits and replace it in total
git oush -f this push all forcebly and delete others pushes 


// in routes we define it
// params only gives url and not like rails functions so we would have id
//question#show path: /question/:id method: Get 
router.get('/:id',(req,res, next) => {
 const{id} = req.params
 Question.findById(id).then(question => {res.send(question)})
})

<a href="/questions/<%= question.id %>"><%= question.title %> </a>

#### Creaet a view for question show
inside questions/views/show.ejs

catch(error=> news(error))

## Next Step Express
lab :https://github.com/CodeCoreLabs/AmazonExpress
### Routing 

#### Question/new

* inside routes/questions.js  
* the path is new and we just render new form so it is like this:
```Javascript
router.get('/new', function(req, res, next) {
 const question = Question.build(); // just pass a new question to form 
  res.render('questions/new', {question});
});
```
* inside viewsnew, we have to provide the action  
```Javascript
<%- include('../partials/header') %>

<h1>New Question</h1>

<form action="/questions" method="post">
  <div>
    <label for="title">Title</label>
    <input type="text" id="title" name="title" value="<%= question.title %>" />
  </div>

  <div>
    <label for="description">Description</label>
    <textarea
      type="text"
      id="description"
      name="description"><%= question.description %></textarea>
  </div>

  <input type="submit" value="Submit" />

</form>

<%- include('../partials/footer') %
```
* So we have to handle the post in routes. with question create with post mehtod . inside `routes/quesitions.js`
* The information is inside the body not inside the params like rails 
```Javascript
router.post('/', function(req, res, next) {
res.send(req.body)
});
```
* now if we submit we would have the info about the forms 
* rewrite above to get parameters that we need 
```Javascript
 router.post('/', function(req, res, next) {
   const {title,content} = req.body;
   Question.create({title,content}).then(question => {res.redirect(`/questions/${question.id}`)
    }).catch(next)   
  res.send(req.body)
 });
```

## Many to Many 


create model answers
* notice capitalizing in naming is important 
*foreignkey is capitalize and kamel key, very importatnt 
```javascript
sequelize model:create --name Answer --attributes content:text,QuestionId:integer
```
* now check migration we aff references property inside QuestionId migration to configure foreign key 
* what happen if it gets destroy, we wanted to make sure the question is deleted the answer is deleted 
references: {
    model:'Questions',
    key: 'id'    specify the key inside the model on the column that host the key, questionid inside answer table is foreign     
    
},
    onDelete: 'cascade', // when question delete answer is deleted same as dependant: :destroy 
    onUpdate: 'cascade',
    allowNull: false   // it means we wont allow to create answer without question id on database 
 },
* Now in terminal we migrate 
* Now we go to by running 
`psql -d aae_dev`
```javascript
\d "Answers"
\q 
```
inside answer model setup association
```javascript
'use strict';
module.exports = function(sequelize, DataTypes) {
  const Answer = sequelize.define('Answer', {
    content: DataTypes.TEXT,
    QuestionId: DataTypes.INTEGER
  });

  Answer.associate = function({Question}) {
    Answer.belongsTo(Question);
    
  // now because of that answer only gets two methods 
  // Answer#setQuestion
  // Answer#getQuestion
  
  }

  return Answer;
};

```
* now inside question model we do the same 

```javascript
.
.
 Question.associate = function({Answer}) {
    Question.hasMany(Answer);
    
  // we get following instance methods from hasMany 
  // Question#getAnswers
  // Question#setAnswers
  // Question#addAnswer
  //usage: 
  // Question.findById(2).then(question => question.addAnswer(answer))
  
  };
```

#### seeds 

```javascript
sequelize  seed:create --name create-answers
```
* inside the seed to access those models we assign 
* when use async we can use await for the result value of the promise and 
* we wait for all questions for answers and we move another line 
```javascript
'use strict';
const faker = require('faker');
const {Question, Answer} = require('../models');

function random (n) {
  return Math.floor(Math.random() * n);
}

module.exports = {
  // When declaring a function with the keyword `async`, we
  // can use the keyword `await` inside its body to wait for the
  // resolved value of a promise and assign to variables.
  up: async (queryInterface, Sequelize) => {
    const questions = await Question.all();

    for (let question of questions) {
      // Create up to 5 answers for every question and associate them
      for (let i = 0, max = random(6); i <= max; i += 1) {
        await Answer.create({
          content: faker.lorem.paragraph(),
          QuestionId: question.id
        });
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    await Answer.destroy({where: {}});
  }
};
```

```javascript
sequelize db:seed:undo:all
```
select * from "Question"

* To generate a random number we create below random funciton add to create seed above 
```javascript
funciton random(n) {
 return Math.floor(Math.random() * n);
}
```
*inside the forloop it is acceptable to have `let i = 0, max = random(6);` to initialize the i 


### Forms for Ansers

* in quesiton router 
* in sequelize doc and in queryinh part there is `include` key word to allow us to render question through answer to allow us add multiple nested associations 
include takes an array of objects, 
to
below is like byebug to dump question objects and instead of rendering we always put it 
res.send(question).
routes/question.js 
```javascript
const express = require('express');
const router = express.Router();
const {Question, Answer} = require('../models');

// questions#index PATH: /questions METHOD: GET
router.get('/', function(req, res, next) {
  Question
    .all()
    .then(questions => {
      // To pass a variable to a template, pass
      // an object as a second argument to res.render.
      // All the properties of that object will be available
      // as local variables inside of the template.
      res.render('questions/index', {questions});
    })
});

// questions#new PATH: /questions/new METHOD: GET
router.get('/new', (req, res, next) => {
  const question = Question.build();
  res.render('questions/new', {question});
});

// questions#create PATH: /questions METHOD: POST
router.post('/', (req, res, next) => {
  const {title, content} = req.body;

  Question
    .create({title, content})
    .then(question => {
      res.redirect(`/questions/${question.id}`)
    })
    .catch(next)
});

// questions#show PATH: /questions/:id METHOD: GET
router.get('/:id', (req, res, next) => {
  // To get params from Express, use req.params. It's a property
  // of the request object. It doesn't contain form data. It only
  // has params related to the path such as `id`, `question_id`, etc.
  const {id} = req.params;
  Question
    .findById(id, {include: [ {model: Answer} ] })
    .then(question => {
      res.render('questions/show', {question, answers: question.Answers});
    })
    // .catch(error => next(error))
    // 👆 👇 are equivalent
    .catch(next)
})

module.exports = router;
```

* now inside question show we display answers

```javascript
<%- include('../partials/header') %>

<h1><%= question.title %></h1>

<p><%= question.content %></p>
<p><strong>Created At:</strong> <%= question.createdAt %></p>
<p><strong>Updated At:</strong> <%= question.updatedAt %></p>

<h2>Answers</h2>

<ul class="answers-list">
  <% answers.forEach(answer => { %>
    <li>
      <p><%= answer.content %></p>
      <p><strong>Last Edited:</strong> <%= answer.updatedAt %></p>
    </li>
  <% }) %>
</ul>

<%- include('../partials/footer') %>
```
* We gonna add form on top of the the answers show page
* we have to able to pass the qestion id the action pot 

So we add this on answr show page 
```javascript
<form action="/questions/<%= question.id %>/answers" method="post">
  <div>
    <textarea name="content" rows="8" cols="80"></textarea>
  </div>
  <input type="submit" value="Submit" />
</form>
```
* Next we set up routes for the form 
* create new routes file name answer.js
get instance of the router we write const router = express.Router()
when we set opetion mergeparams to true when we create a router it will preserve the params of `req.params` from the parent router. 
// res.send(req.params) // this code is for checking the results, the rest is doing inside questio.js 
```javascript
const express = require('express');
const {Question, Answer} = require('../models');
const router = express.Router({mergeParams: true});

// Setting the option mergeParams to true when creating
// a router, it will preserve the params of `req.params` from
// the parent router.

router.post('/', async (req, res, next) => {
  try {
    const {content} = req.body;
    const {questionId} = req.params;
    const question = await Question.findById(questionId);

    await Answer.create({content, QuestionId: questionId});
    res.redirect(`/questions/${questionId}`);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
```
* in question js we add
```javascript
const answers = require('./answer')
```
`.user` is used for everything get post path ... 
all the answers routs are going to begin with first argument of below function 
```javascript
route.used('/:QuestionId/answers', answers)
```
### Order by
the first arg is model, second is the field and third is order 
order: [ [Answer, 'careatedAt', 'DESC' ]]
* inside question controller 
```javascript
findById(id, { order: [ [Answer, 'careatedAt', 'DESC' ]], include: ... same as above the rest
```
### Deletion
* Add delete button in question 
* To create mehtod delete we create a button in question show page, just right before the answers we add delete button
html method only supports post and get so we can not write delete in mthod, but we add a hidden button to trigeer the middlewear function delete 
```javascript
<form action="/questions/<%= question.id %>" method="post">
  <input type="hidden" name="_method" value="DELETE" />
  <input type="submit" value="Delete" />
</form>
```
* mthod-override express allow us to override th post mehtod, use custom logic look at
we have middle wear methodoverrid check if resuw body exiss t  hten assign to a variable and ddelete whatever it returns is used as hettp request 

* to indtal add yarn add method-override 
* inside app.js
load middle weara
```javascript
const methodOverrid = rewuire('method-override');

```
* inside the app.js 
* in checks inside of the object if the property exist or not 
```javascript
const methodOverride = require('method-override');
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    // Whatever is returned from this callback will be used
    // by methodOverride to replace the request's HTTP verb.
    return method;
  }
}))
```
in question.js add new route
```javascript
// questions#destroy
router.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  Question
    .findById(id)
    .then(question => question.destroy())
    .then(() => res.redirect(`/questions/`))
    .catch(next);
})
```
* Notice: () => res.redirect(`/questions/` -- this is a function that its budy is after => and returns everything after => 

### Edit

// question
```javascript
// questions#edit
router.get('/:id/edit', (req, res, next) => {
  const {id} = req.params;
  Question
    .findById(id)
    .then(question => res.render('questions/edit', {question}))
    .catch(next)
})

// questions#updated
router.patch('/:id', (req, res, next) => {
  res.send(req.body);
});
````

* Add form to question 
```javascript
<%- include './_form`, {question} %>

```

if it sees a pass a question with id the it call it otherwise if nothing is there then it wont go there,
this checks if the question we pass to the form is in the databse then we put that hidden field to put it into the path,

```javascript

<form action="/questions/<%= question.id %>" method="post">
 <% if (!question.isNewRecord) { %>
    <input type="hidden" name="_method" value="PATCH" />
  <% } %>
  <div>
    <label for="title">Title</label>
    <input type="text" id="title" name="title" value="<%= question.title %>" />
  </div>

  <div>
    <label for="content">Content</label>
    <textarea
      type="text"
      id="content"
      name="content"><%= question.content %></textarea>
  </div>

  <input type="submit" value="Submit" />

</form>
```

* to add the edit button, we need to make it a button with empty tag with just a link to edit 

```javascript
<a href="/questions/<%= question.id %>/edit">Edit</a>
```




