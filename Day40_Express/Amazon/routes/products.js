var express = require('express');
var router = express.Router();
const {Product} = require('../models');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  Product
    .all()
    .then(products => {

      res.render('products/index', {products});
    })
});


router.get('/:id', function(req, res, next) {
  const{id} = req.params;
  Product
  	.findById(id)
    .then(product => {

      res.render('products/show', {product});
    })
});

module.exports = router;
