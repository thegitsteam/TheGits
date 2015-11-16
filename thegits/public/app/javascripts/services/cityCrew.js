angular.module('gitsApp.services')
.factory('cityCrew', [
	'$http',
	function($http) {
		var cityCrew = {};
		cityCrew.create = function(userData) {
			return $http.post('/users/cityCrew', userData).success(function(data) {
				alert(JSON.stringify(userData));
			});
		};

		cityCrew.delete = function(id) {
			return $http.delete('/users/cityCrew/' + id).success(function(data) {
				alert('delete user: ' + id);
			});
		};

		cityCrew.edit = function(userData) {
			return $http.put('/users/cityCrew', userData).success(function(data) {
				alert(JSON.stringify(userData));
			});
		};

		cityCrew.get = function(id) {
			return $http.get('/users/cityCrew/' + id).success(function(data) {
				alert('get user: ' + id);
			});
		}

		cityCrew.getAll = function() {
			return $http.get('/users/cityCrew').success(function(data) {
				alert('getAll');
			});
		}
		return cityCrew;
	}
]);