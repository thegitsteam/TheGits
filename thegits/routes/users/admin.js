var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var adminController = require('../../controllers/users/admin');

//router.post('/createUser/:username/:empnumber/:title',adminController.createAdmin);

//router.get('/:id',adminController.getAdmin);

router.get('/',function(req,res){
	res.status(200);
	res.send('GET');
});
router.post('/',function(req,res){
	res.status(200);
	res.send('POST');
});
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