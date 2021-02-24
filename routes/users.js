var express = require('express');
var router = express.Router();
const userController = require('../controllers/userFunctions');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user get req');
});

/* POST user */
router.post('/handle', userController.createUser);

module.exports = router;
