var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send('Get suspects');
});
router.post('/',function(req,res){
	res.send('Post suspect');
});
router.get('/:id',function(req,res){
	res.send('get this suspect');
});
router.put('/:id',function(req,res){
	res.send('modify this suspect');
});
router.delete('/:id',function(req,res){
	res.send('delete this suspect');
});
module.exports = router;