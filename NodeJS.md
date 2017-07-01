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
* in view index.ejs we have an input with name of mytask
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
* to create a table named 14 with some attributes and pass db as a database refrence to other files 


        const pgp = require('pg-promise')();
        const db = pgp({
          host: 'localhost',
          database: 'exp_dev'
        });

        db.query(`
          CREATE TABLE posts14 (
            id SERIAL,
            title VARCHAR(255),
            content TEXT,
            author VARCHAR(255)
          )
        `)
          .then(() => {
            console.log('🛠 Created table posts!');
            // process is a global object provided by node (only)
            // that gives access to the running program. We can use it
            // to exit the program amongst other things.
            process.exit();
          })
          .catch(err => {
            console.error(err);
            process.exit();
          })
        module.exports = db;
