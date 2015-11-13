var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');

router.use('/',stormpath.groupsRequired(['Admin','Law'],false),require('./suspects'));

module.exports = router;