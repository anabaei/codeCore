## Node Start

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
- Node comunicate directly with node
```javascript
node --inspect app.js
```
- Right now chrome give you a link on top left, then inside source you can add break point inside the courses, and on right it shows all functions and you can go and type request. 

### Middleware
- Middleware are functions that take  requests and do steps and operations until it gets to the pint rendering into the page.
- Mathed Routes
- CORS allow make rewueste from browers to server, CSRF make sure that the form is comming from an app not from somewhere else for securty and then authentication and finaly main. 
- We want to set up this for everytime we call 
- have a data as js object to work with them so a part of middleware have to convert texts into js objects 
- Express is a bunch of call backs. 

![alt text](https://user-images.githubusercontent.com/7471619/31191426-ec3d1aaa-a8f2-11e7-991a-46dc32413132.png)
![alt text](https://user-images.githubusercontent.com/7471619/31191505-2b3fbcf8-a8f3-11e7-9668-dc238a9ef77d.png)


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
    
