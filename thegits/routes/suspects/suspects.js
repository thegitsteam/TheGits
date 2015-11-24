var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var suspectController = require('../../controllers/suspect/suspect');

router.get('/',function(req,res){
	res.send('Get suspects');
});
router.post('/',function(req,res){
	res.send('Post suspect');
});

router.post('/createSuspect/:name/:gangName/:status',suspectController.createSuspect);

router.get('/:id',suspectController.getSuspect);

router.put('/:id',function(req,res){
	res.send('modify this suspect');
});
router.delete('/:id',function(req,res){
	res.send('delete this suspect');
});
module.exports = router;