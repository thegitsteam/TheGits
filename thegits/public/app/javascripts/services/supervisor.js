angular.module('gitsApp.services')
.factory('supervisor', [
    '$http',
    function($http) {
        var supervisor = {};

        supervisor.getCityCrewSupervisors = function() {
            return $http.get('/users/city?isSupervisor=1').success(function(res) {
                return res;
            });
        };

        return supervisor;
    }
]);