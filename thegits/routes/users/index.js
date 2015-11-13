var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');

router.use('/citycrew',stormpath.groupsRequired(['Admin','City'],false),require('./citycrew'));
router.use('/law',stormpath.groupsRequired(['Admin','Law'],false),require('./law'));
router.use('/admin',stormpath.groupsRequired(['Admin']),require('./admin'));
module.exports = router;
