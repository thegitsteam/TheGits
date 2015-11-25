var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');
var stormpathController = require('../../controllers/stormpath/stormpath');
var tempcontroller = require('../../controllers/users/users');
var array = [];

router.get('/account',stormpathController.getAcountInfo);
router.post('/create',getAccountFormInfo,tempcontroller.createAccount/*stormpathController.createAccount*/);
function getAccountFormInfo(req,res,next){
	account = {};
	try{
		account.username = req.body.username;
		account.givenName = req.body.firstName;
		account.middleName = req.body.middleInitial;
		account.surname = req.body.lastName;
		account.email = req.body.email;
		account.password = req.body.password;
		account.customData ={};
		account.customData.isSupervisor =req.body.isSupervisor;
		account.customData.employeeTitle = req.body.employeeTitle;
		account.customData.employeeNumber = req.body.employeeNumber;
		account.customData.userType = req.body.accountType;
	}
	catch(err){
		account = {};
	}
	req.account = account;
	next();
};
module.exports = router;