var express = require('express');
var stormpath = require('express-stormpath');
module.exports.getAccountType = function(req,res){
  req.user.groups.each(function iterator(group, cb) {
    console.log('group:', group);
    cb();
  }, function done() {
    res.send('Finished logging all groups to the console!')
  });
};