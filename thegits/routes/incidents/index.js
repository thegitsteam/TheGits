var express = require('express');
var router = express.Router();

router.use('/',require('./incidents'));

module.exports = router;