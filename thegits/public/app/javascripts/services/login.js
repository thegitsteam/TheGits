angular.module('gitsApp.services')
.factory('login', [
	'$http',
	function($http) {
		var login = {};
		login.login = function(username, password) {

		}

		login.logout = function() {

		}
		return login;
	}
]);