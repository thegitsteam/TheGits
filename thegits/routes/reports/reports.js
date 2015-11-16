var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var reportController = require('../../controllers/report/report');


router.get('/',function(req,res){
	res.send('getting reports');
});

router.post('/',function(req,res){
	res.send('creating new report');
});

router.post('/createreport/:desc/:loc',reportController.createReport);

router.get('/:id',reportController.showReport);

//Modifying location of report
router.put('/:id/:location',reportController.modifyLocation);

router.delete('/:id',reportController.deleteReport);

module.exports = router;