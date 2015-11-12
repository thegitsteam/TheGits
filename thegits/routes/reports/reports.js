var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send('getting all reports. this should be supervisor only');
});
router.post('/',function(req,res){
	res.send('creating new report');
});
router.get('/:id',function(req,res){
	if(req.params.id){
		res.send('get specific report.' + req.params.id);	
	}
	else res.send('invalid id');
	
});
router.put('/:id',function(req,res){
	if(req.params.id){
		res.send('moedify specific report.' + req.params.id);	
	}
	else res.send('invalid id');
	});
router.delete('/:id',function(req,res){
		if(req.params.id){
		res.send('delete specific report.' + req.params.id);	
	}
	else res.send('invalid id');
});

module.exports = router;