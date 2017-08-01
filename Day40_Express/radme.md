
 # Express Steps
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
sequelize init    it create several files, seeds, migration etc 


in config confgi jason, 
if you remove user name and password it assume yor databasa dont need password and use yoru com[uter databqase 
inside the app go to scripts and add belows 
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
yarn add -D faker
sequelize seed:create --name create-questions


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

inside app.js 
instead in line 9-10 
var question= require('./routes/questions')

// the first one is the starting a path and second one is the one going there 


33 app.user('/question',questions)



inside routes/questions.js

const {Question} = require('questions')


get user listing

routes.get('/', function(req, res, next) {
 Question 
  .all()
  

});

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















