var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var suspectController = require('../../controllers/suspect/suspect');

router.get('/',suspectController.getAllSuspects);
router.post('/',suspectController.createSuspect);
router.get('/:id',suspectController.getSuspect);

router.put('/:id',function(req,res){
	res.send('modify this suspect');
});
router.delete('/:id',function(req,res){
	res.send('delete this suspect');
});
module.exports = router;