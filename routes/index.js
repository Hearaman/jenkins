var express = require('express');
require('dotenv').config();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', env: process.env.ENV });
});

module.exports = router;
