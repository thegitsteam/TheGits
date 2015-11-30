var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var stormpath =  require('express-stormpath');
var reportController = require('../../controllers/report/report');


router.get('/',stormpath.groupsRequired(['Admin','Law'],false),reportController.getAllReports);

router.post('/',reportController.createReport);

router.post('/createreport/:desc/:loc',reportController.createReport);

router.get('/:id',reportController.showReport);

//Modifying location of report
router.put('/:id/:location',reportController.modifyLocation);

router.delete('/:id',reportController.deleteReport);

module.exports = router;