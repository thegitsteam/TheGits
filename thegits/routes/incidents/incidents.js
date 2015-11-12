var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send('getting all incidents. this should be supervisor only');
});
router.post('/',function(req,res){
	res.send('creating new incident');
});
router.get('/:id',function(req,res){
	if(req.params.id){
		res.send('get specific incident.' + req.params.id);	
	}
	else res.send('invalid id');
	
});
router.put('/:id',function(req,res){
	if(req.params.id){
		res.send('moedify specific incident.' + req.params.id);	
	}
	else res.send('invalid id');
	});
router.delete('/:id',function(req,res){
		if(req.params.id){
		res.send('delete specific incident.' + req.params.id);	
	}
	else res.send('invalid id');
});

module.exports = router;