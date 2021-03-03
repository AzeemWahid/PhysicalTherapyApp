var express = require('express');
var router = express.Router();
const upload = require('../upload');
const exerciseController = require('../controllers/exerciseFunctions');

/* GET exercises listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST exercise */
router.post('/uploadgif', upload.single('gif'), function(req, res, next) {

});

module.exports = router;
