angular.module('gitsApp.services')
.factory('lawEnforcement', [
	'$http',
	function($http) {
		var lawEnforcement = {};
		lawEnforcement.create = function(userData) {
			return $http.post('/users/lawEnforcement', userData).success(function(data) {
				alert(JSON.stringify(userData));
			});
		};

		lawEnforcement.delete = function(id) {
			return $http.delete('/users/lawEnforcement/' + id).success(function(data) {
				alert('delete user: ' + id);
			});
		};

		lawEnforcement.edit = function(userData) {
			return $http.put('/users/lawEnforcement', userData).success(function(data) {
				alert(JSON.stringify(userData));
			});
		};

		lawEnforcement.get = function(id) {
			return $http.get('/users/lawEnforcement/' + id).success(function(data) {
				alert('get user: ' + id);
			});
		}

		lawEnforcement.getAll = function() {
			return $http.get('/users/lawEnforcement').success(function(data) {
				alert('getAll');
			});
		}
		return lawEnforcement;
	}
]);