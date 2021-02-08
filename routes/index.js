var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/people', function(req, res, next) {
  res.send('people route on index');
});

module.exports = router;
