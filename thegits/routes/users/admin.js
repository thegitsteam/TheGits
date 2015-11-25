var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var stormpath = require('express-stormpath');
var userContoller = require('../../controllers/users/users');
var userMiddleware = require('./users-middleware');

router.get('/',function(req,res){
	res.status(200);
	res.send('GET');
});
router.post('/',stormpath.groupsRequired(['Admin']),userMiddleware.getAcountInfo,userContoller.createAccount);

router.get('/:id',function(req,res){
	if(req.params.id){
		res.status(200);
		res.send('GET id' + req.params.id);
	}
	else{
		res.send('no id');
	}
});
router.delete('/:id',function(req,res){
	if(req.params.id){
		res.status(200);
		res.send('DELETE ' + req.params.id);
	}
	else{
		res.send('no id');
	}
});
router.put('/:id',function(req,res){
	if(req.params.id){
		res.status(200);
		res.send('PUT ' + req.params.id);
	}
	else{
		res.send('no id');
	}
});


module.exports = router;