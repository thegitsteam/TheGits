angular.module('gitsApp.services')
.factory('report', [
    '$http',
    function ($http) {
        var report = {
            reports: []
        };

        report.getAll = function() {
            return $http.get('/reports').success(function(res) {
                return res;
            });
        };

        report.create = function(data) {
            var report = JSON.stringify(data);
            $http.post('/reports', report).success(function(data) {
                report.reports.push(data);
            });
        };

        return report;
    }
]);