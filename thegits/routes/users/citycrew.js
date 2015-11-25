var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var cityCrewController = require('../../controllers/users/citycrew');

//router.post('/createUser/:username/:empnumber/:title/:supervisor',cityCrewController.createCityCrewWorker);

//router.get('/:id',cityCrewController.getUser);

router.get('/',function(req,res){
	res.status(200);
	res.send('GET');
});
router.post('/',function(req,res){
	res.status(200);
	res.send('POST');
});

router.delete('/:id',function(req,res){
	if(req.params.id){
		res.status(200);
		res.send('DELTE ' + req.params.id);
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