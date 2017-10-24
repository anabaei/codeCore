## Node
* Simple node in/out
```javascript
const readline = require('readline'); // built-in module
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name?', (name) => {
  console.log(name);
  process.exit(); // this will end our program
});
```

## Node Server
[References](https://nodejs.org/api/synopsis.html)
#### TCPserver 
```javascript
const net = require('net');
const server = net.createServer( (socket) => {
  socket.on('data', (data) => {
    console.log(`data received from client: ${data}`);
    socket.write('Thank you!');
  });
});
server.listen(5000, '127.0.0.1');
console.log('The server is running and listening on port 5000');
```
* Now to connect to above server on port 5000 we need a client as below
#### TCPClient
```javascript
const net = require('net');

const client = new net.Socket();

client.on('data', (data) => {
  console.log(`Data received from server: ${data}`);
  process.exit();
});

client.connect(5000, '127.0.0.1', () => {
  client.write('Hello World!');
});
```
#### HTTPserver 
```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' }); // HTTP Header
  res.write(htmlDocument());
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function htmlDocument()
 {
   return `<!DOCTYPE html>
          <html>
          <head>
            <title>My first web server</title>
          </head>
          <body>
            <h1>Hello !</h1>
          </body>
           </html>`;
 }
```

### Read URL Params
* To access urls just need to require the url module and define an object of it then we access to all methods in that module as
```javascript
const url  = require('url');
const params = url.parse(request.url, true).query;
// http://localhost:4000/?name=Tam&city=Burnaby then we can have
function name1(params.name) // function name1("Tam")
```
![alt test](https://cdn-images-1.medium.com/max/1600/1*9wOLuKSjCIAqSX_K8O0PKQ.png)
#### Deploy to Heroku with minimum settings
* Key: name app.js to server.js then vola!
* first create heroku remote then npm init and npm install --save express and finallu define a server.js and not app.js


---------
---------
* We use node with a framework called express.
* Node js is brought javascrip and uses same engine as chrome, so we can use everything use chrome. It is not server but can be used as server. 

### Packages
* We gonna use other people codes that other people wrote like gems in Ruby includes libraries. Library is a piece of code as public it has API to tell what functions are available. 
* -g means global so it means install it global in your computer not for a specific app
* `npmjs.com` you can find all packages 
```javascript
npm install -g faker
npm install -g chalk 
npm link faker 
npm link chalk
```
- In node console Then to use the package we need to use require it as below, since it is use globaly we have to link it first 
```javascript
const faker = require('faker')
faker.internet.jobTitle()
const c = require('chalk')
console.log(c.pink.bold('hello'))
```
- To start building app
```
npm init 
```
- During installation just add entry point as app.js
- Notice: you can have heroku git remote first then run npm init then it would include that heroku inside package.js
- Package.js  
- So far we just downloaded node.js, then we want to move to express as most popular js framework 
- A server is just a relationship. Server is like server at restourants A client is browser and server can be cloud or computer and the client asking from servers and servers never ask clients first they just respond to their clients and each server responsible for many clients. In REST API servers responds to http requests but sometimes a server is client if sever is asked that she doesnt have it she can go ask another server like facebook. Browser is always client. 

```javascript
npm install express
```
- Then it creates a file name node_modules folder which includes all packages dependents on them. Also it update packages 
for older versions you can have `npm install --save express `
- Create App.js and load express inside it as function
- Express was written before classes in js, so we need `app` to have an instance of express web app server to access all functions
- One of the built in functions is get.
- app.get it reads, the first argument is a url address and get method needs a callback. which users ask. 
request is already built and is what client asking server and respond is what we are going to implenet. Also send is a simple function that send everything to the browser.
```javascript
const Express= require('express')
const app = Express()
app.get('/', (request, response) => { response.send(`Hello, World!`) })
const PORT = 3000
app.listen(
PORT, ()=>console.log('server is running')
)
```
so this is all we needed, a path and what we have to send back. Right now nothing is happening so we need to create a server as well
so the first argument is the port, and the second argument runs when server is running and is optional. just our call back tell us that is running. Then it runs inside local  

- Now it should run after typing `node.js`
- Autoreloading for node.js. --dev means it installs only for developing 
```javascript
npm install --save-dev nodemon
```
- because you install it locally so you have to mention to use it in package.js therefore in package js change the start
"nodemon app.js" 
- to run a script in package.js we need to call it as npm run ...
```javascript 
npm run start
```
### Debuggin Node
![alt text](https://user-images.githubusercontent.com/7471619/31191505-2b3fbcf8-a8f3-11e7-9668-dc238a9ef77d.png)
- Node comunicate directly with node
```javascript
node --inspect app.js
```
- Right now chrome give you a link on top left, then inside source you can add break point inside the courses, and on right it shows all functions and you can go and type request. 

### Middleware
![alt text](https://user-images.githubusercontent.com/7471619/31191426-ec3d1aaa-a8f2-11e7-991a-46dc32413132.png)
- Middleware are functions that take  requests and do steps and operations until it gets to the pint rendering into the page.
- Mathed Routes
- CORS allow make rewueste from browers to server, CSRF make sure that the form is comming from an app not from somewhere else for securty and then authentication and finaly main. 
- We want to set up this for everytime we call 
- have a data as js object to work with them so a part of middleware have to convert texts into js objects 
- Express is a bunch of call backs. 
##### Creating a logging middleware
before the get request we put 'use' verb accepts anything and if dont put first params there it works with any path as below, when write next means this middleare is done and move on next middle ware and 
```javascript
app.use((request, response, next) => {
// put codes here
next()
})
```
- At the end of file adding next helps when midddle ware finished by doing some codes to move on 
- To costomize it we can display dates for example.
```javascript
const message = `Request at ${new Date()}`
console.log(message);
```
- Lets find the http request objects~!
- we can display also the ip where it comes from by putting debugger inside the middelware and inspect resuest we see there are mehtod or ip properties.


Destructive means having the properties of an object without wirign it, they are same 
creating variables with the same name of the object properties
```javascript
const method = request.method
const path = request.method
const {method, path} = request
```
- Middleware are used to save everything we want, one is `morgan` package 
- yarn is package manager and npm is kind of slow but yarn is new 
```javascript
npm install morgan 
yarn run start
```
now we add below to app.js
- `app.use(morgan('combined'))` or dev which returns a function for us, then we add this middleware.
- Now you can check the rest of available functions in github and just below code give us alo information
```javascript
app.use(morgan('dev'))
```

### EJS use javascrit to produce html effective javascript  http://ejs.co
- EJS can generate html and even other js. 
now you can have js to generate html
```javascript
npm install ejs 
```
- Then we just tell exress engine app to use ejs templating language to render views. 
```javascript
app.set('view engine', 'ejs')
```
- Node by default looking at views folder to rendering pages, so create index.ejs inside views 
- Response renders from views directory as the content of the response to the client
```javascript
app.get('/hello-world', (request, response) => { response.render(`index`)})
```
##### Partials 
- create a folder inside views, and two files inside it header.ejs and footer.ejs
- Inside index.ejs. EJS gives use a function called include that allows us to render anther `EJS` file inside another one
```javascript
<%- include('./partials/header') %>
<%- include('./partials/footer') %>
```
#### Form
- In views folder create about.ejs
```javascript
<form action='/' method='GET'>
<textarea name='content'></textara>
<input value='submit' type='submit' />
</form>
```
- Now if you submit the url chagned to get parameters. 
- Middleware is actullay a body parser, gets stuff from views and handle them.
##### body-parser
- it is mostly uses for forms 
```javascript
npm install body-parser

```
inside app.js
extended is just confiuration object and it only works with post 
```javascript
require bodyParser = require('body-parser')
app.user(bodyParser.urlencoded({extended: false}))
```
<%= vs <%- the first one scape html charactors

Then we get all our form data as the object of `request.body` if you set up body-parser as above
response render can take second argument where this object is available in index
```javascript
app.post('/', (request, response) => { const {body} = request; response.render('index', body) })
('index', {content: null})
```
Then inside the index.ejs we have if (content) 
```ejs
<% if (content) { %>
  <h2>You were thinking:</h2>
  <!--  that tag with the = escapes all the html characters inside -->
  <p><%= content %></p>
<% } %>
```

---------
* download a picture from a link (L helps to go redirect ifthere)
curl -LO url

#### Express static middleware
* Always node go to public first to find the url if not exist there then it just check routes.  
* So creae Public folder first and inside that define for example images folder, 
```javascript
const path = require('path')
console.log(__dirname)
app.use(Express.static(path.join(__dirname, 'public')))
```
#### Flex 
* bg or lg in nav bar bootstrap means when colapse 
* ml-auto is gonna fill out all space from left with a margin.it works in inside flex containers always
* In bootstrap to use flex we need a wrapper div class to use align  we can wrap it first with `d-flex` 
```css
class= "d-flex flex-column"
```
then inside that we can have 
```css
"align-self-end"
```
To use partially bootstrap we can use bootstrap-sass and use import for each partial of that.

##### Routes directory

create an instance of routes 
```javascript
const Express = require('express')
const router = Express.Router()
```
then instead of app use `router.get` or `router.post`
then inside app.js 
* we can require the files. welcome is not a router object, so we have to export `module.exports = router` so when we `require` it somewhere else, then we would access to a router object
```javascript
const welcome = require('./welcome')
app.user('/', welcome)
```
##### Database Postgres 
* this command creating a database name fororol_dev and echo just showing it
```unix
$ createdb --echo fotorol_dev
```
* so gonna add this command to package.js
```javascript
"db:create": "createdb --echo fotorol_dev"
"db:drop":"dropdb --echo --if-exist fotorol_dev"
```
To run this
```javascript
npm run db:drop
npm dun db:create
```
##### KNEX.JS http://knexjs.org/
pg is library that postgre knows, knex knows oracl sql so with pg we just install it for postgre
is javascript library whihc outputs sql queries
```javascript
npm install pg knex
```
for exmaple
```
knex.select('title', 'name').from('bookstable')
translate it to:
select "title", "name" from "bookstable"
```
```javascript
knex('users') means select * from users
```
Insert we can add an object for that.
* To run it we need to first configure the database 
* So we need a directory to hold all data we call it db and inside that we have connection.js and migration.js
* Setting up the connection
```javascript
const kx=  require('knex')({
client: 'pg',
connection: {
  database: 'fotorol_dev'
  }
})

module.exports = kn
```
* Even we can require it inside the console and use it. 

```
node --inspect
```
* click on the icon, then we have our node repo 
```javascript
const kx = require('knex')
kx.select().from('posts')
```
migartion is shapeing new database,

create connection,
then use schema property of knix,
table increament creates id
we create a table named posts, and use a callback to define attributes of table
```javascript
const kx = require('./connection')
kx.schema,createTable('posts', table => {

table.increments('id'),
table.string('username'),
table.string('photo_path'),
table.timestamps(false, true)
}).then(()=> process.exit()).catch(()=> process.exit())
```
we need .then() after it to know what to do if not it terminate it. Also node needs to quite only if was told.
so we need to pass a callback to then to know to quit 
process is running as an application object 
if we type above inside console and use toString() it converts to string the commands. 
* catch is only run when query fails the error message

* Now inside chrome debugger format we can see all fields inside database
```javascript
kx('posts').columnInfo().then(console.log)
```

by running  `node db/migration.js` we can create tables inside the database 
"db:migrate":"node db/migration.js"
* inside chrome console 
```javascript
kx.insert({content: 'lllok at '}).into('posts').toString
kx.insert({content: 'lllok at '}).into('posts').then(console.log)
kx.insert({content: 'lllok at '}).into('posts').returning('*').toString
kx.select().from('posts').then(console.log)
```
* returning just return what are returning
*then we can have above command inside the node without toString fn or then console.log to see the results

-----------
#### Express Parse encoded formats
when express parse a urlencoded form, which is a type that browser send at first, it converted name=amir&lastname=nabaei&.... to a hash format with keys and values. 
* Therefor we have to use multer middleware module.
```javascript
npm install multer
```
* Then inside the project, we give a property and a path utilitlity

```javascript
const path = require('path')
const multer = require('multer')
const upload = multer({dest: path.join(__dirname, 'public', 'uploads')})
```
we say number of inputs for multer whihc here is singl
also we need to say the name of input which multer just looking for that input name file 
uploadingle
so our post request has two middleware first it uses multer then send request
```javascript
router.post('/', upload.single('photonameinput'), (request, respond) => {

const {body} = request
}
```
* Inside form we should specify to the brower that the type if mulitper
```javascript
<form action="/" class = "" name= "photo"  enctype="multipart/form-data" metod="POST" />
```
* To cosutomize where to save the file
```javascript
const upload = multer({dest: path.join(__dirname, '..', 'public', 'uploads')})
```
* 
```javascript
router.post('/', upload.single('photo'), (request, response) => {
  const {content} = request.body;
  kx
    .insert({content: content})
    .into('posts')
    .then(() => response.redirect('/'))
})
```
-------------------
* So far what we have had in welcome.js
```javascript
const Express = require('express')
const multer = require('multer')
const path = require('path')
const router = Express.Router()
const kx = require('../db/connection')

const upload = multer({dest: path.join(__dirname, '..', 'public', 'uploads')})

router.get('/', (request, response) => {
  // Form data is available as an object on the property `request.body`
  // if you've setup `body-parser` middleware.
  console.log(request.body)

  // Doing database query with knex is asynchronous operation. knex
  // will return the results. We will receive the results of query as
  // argument to the callback given to `.then`.
  // This means that any code must be run after query or that needs
  // the results must written inside of the body the callback passed to
  // `.then`
  kx
    .select()
    .from('posts')
    .then(posts => {
      response.render('index', {content: null, posts})
    })

  // response.render will render template a file from the `/views`
  // directory as the content the response to the client.
  // Specify file by it path skipping `/views` and disregarding
  // its extension.
  // response.render('index', {content: null})
})

/*
To upload files with a form, you must give the html attribute:
`enctype="multipart/form-data"`.

<input
  class="form-control"
  name="photo" <-- "photo" is the argument to upload.single("photo")
  type="file"
/>
*/


// When using multer with the `.single`, only one file is allowed to be
// sent and it must share the same name as the argument.
router.post('/', upload.single('photo'), (request, response) => {
  // Form data is available as an object on the property `request.body`
  // if you've setup `body-parser` middleware.
  const {body} = request;
  // 👆 syntax sugar for 👇
  // const body = request.body;

  // request.body's properties will be all the name attributes of the
  // input fields in the submitted form. We have `textarea` with the `name`
  // `content` which makes available on `request.body`.
  const {content} = request.body;

  kx
    .insert({content: content})
    .into('posts')
    .then(() => response.redirect('/'))
  // We must response.redirect inside then's callback otherwise
  // the user's page might be rendered before our database was updated
  // with the new post meaning that user will not see the new post until
  // they manually reload the page.

  // response.render can take a second argument. It's an object where
  // all of its properties will be available as local variables inside of
  // of the rendered template.
  // response.render('index', body)

  // response.redirect will respond to the client with status code 302.
  // Indicating that it should make a GET request the given URL as argument.
  // `/` in this case.
  // response.redirect('/')
})

router.get('/about', (request, response) => {
  response.render('about')
})

router.get('/hello-world', (request, response) => {
  // The `request` object represents what the client is
  // asking of the server.
  // The `response` object represents the reply that our
  // server is going to send to the client.

  // When running node with the `--inspect` command,
  // you open a Chrome console and click on the Node logo in the
  // upper-left corner of the console to open a dedicated
  // debugger for Node. Anywhere you write the keyword, `debugger`
  // in you code, the debugger will pause program and you'll
  // be able to inspect the state of your program.
  // debugger
  response.send(`Hello, Class!`)
})

// Assign to `module.exports` the object that you want the file export when it
// is required with the `require` function.
module.exports = router
//

```
------------
* Inisde the console node 
```javascript
kx = require('./db/connection')
kx('posts').columnInfo().then(console.log)
```
means sending an object post to this template index
```javascript
response.render('index', {content: null, posts})
```
in javascript delete is a reserve word so kx uses del
```
kx.del().from('posts').toString()
```
rem is relative unit, is 100% of font. in default we have 16px so 1 rem is 16px.
select all childeren of this class except the one
```javascript
.clasname > *:not(.last){
}
```
* Add listing to gitignor to avoid commiting them in each push 

```javascript
vi .gitignore
*.D   means ignore all files begin with everything and end with *.D
public/uploads  means ignore the uploads folders 
```
--cashed means removing it only if it is tracked means you commit uploads but not push yet and you can see them in git status
and want to remove it 
```git 
git rm -r --cashed public/uploads 
```
git log
change last commit 

git add public.css 
git commit --amend  // can update your last commit and even you can change them actually it created a new commit and added previouse one into it becuase git commit are immutable

#### REST
* It gives us a pattern how client and server talk to each other, we gonna map html requests with CRUD operation
`PUT/PATCH` --> Update and `delete` not supported in forms but post and get are supported with forms. 

* Increase the speed with REST:  just need to cach requestes somewhere even in the browsers so if same request came RESTful send the same respond already cached and is tousands times faster than fetching new data. 
* At forms we say where to post the forms by defining action, and method tell us what verb it is used
```javascript
<form 
action="/posts"
method="post"
```
* Always show what to get it from resuest objects as below, which is a show
```javascript
router.get(':id', (request, response) => {
respond.send(request.params)
const {id} = request.params
kx.select(*).from().where({id})  // syntax sugar {id: id}
})
```
* In view forms 
```
<a href= "post/<% post.id %>"> 
```
kx return us array so if we can have kx.first instead 

#### Repl

```javascript
const repl = require('repl')
const kx = require('./db/connection')
cons {log} = console
```
```javascript
const context = repl.start('').context
context.log = log
context.kx = kx
```
now inside the node console, if we say node repl.js
then we would have it. 
```javascript
node --inspect repl.js
```
then we dont need to require them immediately 






## yarn init
## yarn add ejs express nodemon
    "body-parser": "^1.17.2",
    "cookie-parser": "^1.4.3",
    "ejs": "^2.5.6",
    "express": "^4.15.3",
    "faker": "^4.1.0",
    "nodemon": "^1.11.0",
    "pg-promise": "^6.2.1"
     },
      "scripts": {
      "start": "nodemon app.js",
      }
    }

####  create folder views with subfoler partial, public with sub css, images,js, db with index.js and routs with home.js
#### inside app.js add belows

    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const cookieParser = require('cookie-parser');
    const home = require('./routes/home');
    // create instance of a Express web server
    const app = express();
    // Configure our Express app to use ejs as our templating engine
    app.set('view engine', 'ejs');
    // app.use(logger('dev'));
    // configure app urls
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    const PORT = 3000;
    app.listen(PORT, () => {
    console.log(`🖥 Server listening on http://localhost:${PORT}`);
    });

#### inside routs/home add routings like:
    app.get('/', (req, res) => {
      res.render('index');
    });

#### to set Cookies
* in view index.ejs we have an input with name of mytask inside a submit form 
* in routs after post the form, set cookie to my cookie var and set it to result var and render result.ejs view

      app.post('/', (req, res) => {
      const mycookie = req.body.mytask
      res.cookie('cookie', mycookie);
      //console.log('cookie exists = ', res);
      res.render('results',{result: req.body});
      });

* in home.js

      app.use(function (req, res, next) {
      const mycookie = req.body.mytask
      res.locals.cookie = mycookie;
      next();
      });
      
#### inside db/index.js 

    const pgp = require('pg-promise')();
    const db = pgp({
      host: 'localhost',
      database: 'exp_dev'
    });
     module.exports = db;
#### Create db/migrate.js for our table        

    const db = require('./index');
    const faker = require('faker');

    db.query(`
      INSERT INTO posts (title, content, author)
      VALUES ($<title>, $<content>, $<author>)
    `, {
      title: faker.hacker.noun(),
      content: faker.hacker.phrase(),
      author: faker.name.findName()
    })
      .then(() => {
        console.log('🔨 Created a post!');
        process.exit();
      })
       
##### check database which you already created with, name of database here is exp_dev
      psql \exp_dev
      \d or \dt  
      \q to quit 

####  Create a file in database to seeds table first with fake data from faker like this 

    const db = require('./index');
    const faker = require('faker');

    db.query(`
      INSERT INTO posts (title, content, author)
      VALUES ($<title>, $<content>, $<author>)
    `, {
      title: faker.hacker.noun(),
      content: faker.hacker.phrase(),
      author: faker.name.findName()
    })
      .then(() => {
        console.log('🔨 Created a post!');
        process.exit();
      })

#### To add data into database from usr inputs, we only need to pass db insertion after post routing
on first line define db as 
    
     const db = require('./db/index');
      .
      .
      .
    app.post('/', (req, res) => {
      const mycookie = req.body.mytask
      res.cookie('cookie', mycookie);

    db.query(`
      INSERT INTO posts (title, content, author)
      VALUES ($<title>, $<content>, $<author>)
    `, {
      title: "faker.hacker",
      content: "faker.hacker",
      author: "faker.hacker"
    })
      .then(() => {
        console.log('🔨 Created a post!');
        process.exit();
      });

      res.render('results',{result: req.body});
    });
    
#### To display information on a post/index page from table inside app.js

    const express = require('express');
    const app = express;
   

    // posts#index URL: /posts HTTP VERB: GET
    app.get('/', (req, res) => {
      db.query(
        `SELECT * FROM posts ORDER BY id DESC`
      )
        .then(posts => {
          res.render('index', {posts: posts});
        })

    });

    // posts#show URL: /:id HTTP VERB: GET
    app.get('/:id', (req, res) => {
      console.log("came here");
      const {id} = req.params;
      // const id = req.params.id;
      db.one(
        `SELECT * FROM posts WHERE id = $<id> LIMIT 1`,
        {id: id}
      )
        .then(post => {
          res.render('show', {post: post});
        })
        .catch(err => res.send(err));
    });
    
    
 #### which we have in index.ejs
    
      <% for (let post of posts) { %>
    <div>
      <a href="/<%= post.id %>">
        <h3><%= post.title %></h3>
      </a>
    </div>
    <% } %>
    
