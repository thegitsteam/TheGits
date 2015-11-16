var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');
var stormpathController = require('../controllers/stormpath');
var array = [];
router.get('/', stormpath.loginRequired, function(req, res) {
  var groupsArray = [];

  req.user.getGroups(function(err, groups) {
    if (err) return next(err);

    groups.each(function(group, cb) {
      groupsArray.push(group.name);
      cb();
    }, function done() {
      	res.send(groupsArray);
    });
  });
});

module.exports = router;