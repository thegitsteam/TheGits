angular.module('gitsApp.services')
.factory('admin', [
	'$http',
	function($http) {
		var admin = {};
		admin.create = function(userData) {
			return $http.post('/users/admin', userData).success(function(data) {
				alert(JSON.stringify(userData));
			});
		};

		admin.delete = function(id) {
			return $http.delete('/users/admin/' + id).success(function(data) {
				alert('delete user: ' + id);
			});
		};

		admin.edit = function(userData) {
			return $http.put('/users/admin', userData).success(function(data) {
				alert(JSON.stringify(userData));
			});
		};

		admin.get = function(id) {
			return $http.get('/users/admin/' + id).success(function(data) {
				alert('get user: ' + id);
			});
		}

		admin.getAll = function() {
			return $http.get('/users/admin').success(function(data) {
				alert('getAll');
			});
		}
		return admin;
	}
]);