var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var stormpath = require('express-stormpath');
var userContoller = require('../../controllers/users/users');
var userMiddleware = require('./users-middleware');

router.get('/',stormpath.groupsRequired(['Admin','Law'],false),userContoller.getAllUsers);
router.post('/',stormpath.groupsRequired(['Admin']),userMiddleware.getAcountFormInfo,userContoller.createAccount);

router.get('/:id',stormpath.groupsRequired(['Admin','Law'],false),userContoller.getUser);
router.delete('/:id',userContoller.deleteUser);
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