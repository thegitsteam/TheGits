var express = require('express');
var router = express.Router();
var incidentController = require('../../controllers/incident/incident');


router.get('/',incidentController.getAllIncidents);

router.post('/',incidentController.createIncident);

router.get('/:id',incidentController.getIncident);

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