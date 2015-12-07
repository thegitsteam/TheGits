angular.module('gitsApp.services')
.factory('incident', [
    '$http',
    function ($http) {
        var incident = {};

        incident.getAll = function() {
            return $http.get('/incidents').success(function(res) {
                return res;
            });
        };

        incident.update = function(data) {
            var incidentData = JSON.stringify(data);
            return $http.put('/incidents/' + incidentData._id, incidentData).success(function(data) {
                return data;
            });
        };

        incident.create = function(data) {
            var incident = JSON.stringify(data);
            return $http.post('/incidents', incident).success(function(data) {
                return data;
            });
        };

        return incident;
    }
]);