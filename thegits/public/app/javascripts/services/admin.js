angular.module('gitsApp.services')
.service('admin', [
	'$http',
	function($http) {
		var admin = {};
		admin.create = function(userData) {
			return $http.post('/users/admin', userData).success(function(data) {
				alert(JSON.stringify(userData));
			});
		};
		return admin;
	}
]);