angular.module('gitsApp.services')
.factory('report', [
    '$http',
    function ($http) {
        var report = {};

        report.createReport = function(data) {
            var report = JSON.stringify(data);
            $http.post('/reports', report).success(function() {
                window.location = '/';
            });
        };

        return report;
    }
]);