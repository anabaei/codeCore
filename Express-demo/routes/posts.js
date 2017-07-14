const express = require('express');
const router = express.Router();
const db = require('../db');

// posts#index URL: /posts HTTP VERB: GET
router.get('/', (req, res) => {
  db.query(
    `SELECT * FROM posts ORDER BY id DESC`
  )
    .then(posts => {
      res.render('posts/index', {posts: posts});
    })
});

// posts#show URL: /posts/:id HTTP VERB: GET
router.get('/:id', (req, res) => {
  const {id} = req.params;
  // const id = req.params.id;
  db.one(
    `SELECT * FROM posts WHERE id = $<id> LIMIT 1`,
    {id: id}
  )
    .then(post => {
      res.render('posts/show', {post: post});
    })
    .catch(err => res.send(err));
});

module.exports = router;
