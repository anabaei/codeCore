

///// 

const express = require('express');
const router = express.Router();
const db = require('../db');

// posts#index URL: /posts HTTP VERB: GET
router.get('/', (req, res) => {
  db.query(
    `SELECT * FROM posts ORDER BY id DESC`
  )
    .then(posts => {
      res.render('posts/index',{posts: posts});
    })
});


// To chlsck 
 // .thn(posts => {
 // 	res.send(post);
 // })
 // to pop up the error 
 // .catch (err)


module.exports = router;


///.then is a call back that the results of the query 
// is posts as an argument 
// 
// this one puts results inside the path with that 
// variable 
// .then(postsresults => {
// 	rec.sender(/posts/index) = {posts: postsresults}
// })
// db.one returns a hash 
// db.query resturns an array


// 