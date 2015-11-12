var express = require('express');
var router = express.Router();

router.use('/citycrew',require('./citycrew'));
router.use('/law',require('./law'));
router.use('/admin',require('./admin'));
module.exports = router;
