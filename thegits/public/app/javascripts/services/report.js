angular.module('gitsApp.services')
.factory('report', [
    '$http',
    function ($http) {
        var report = {};

        report.getAll = function() {
            return $http.get('/reports').success(function(res) {
                return res;
            });
        };
        
        report.create = function(data) {
            var report = JSON.stringify(data);
            return $http.post('/reports', report).success(function(data) {
                return data;
            });
        };

        return report;
    }
]);