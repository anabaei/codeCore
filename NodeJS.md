# Node Start

#### yarn init
#### yarn add ejs express nodemon
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

