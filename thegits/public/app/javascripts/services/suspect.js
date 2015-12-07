angular.module('gitsApp.services')
.factory('suspect', [
    '$http',
    function ($http) {
        var suspect = {};

        suspect.getAll = function() {
            return $http.get('/suspects').success(function(res) {
                return res;
            });
        };

        suspect.create = function(data) {
            var suspect = JSON.stringify(data);
            return $http.post('/suspects', suspect).success(function(data) {
                return data;
            });
        };

        return suspect;
    }
]);