var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');
var stormpathController = require('../../controllers/stormpath/stormpath');
var array = [];

router.get('/account',stormpathController.getAcountInfo);
router.post('/create',stormpathController.createAccount);
module.exports = router;