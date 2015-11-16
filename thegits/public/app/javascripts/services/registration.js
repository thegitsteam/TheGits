angular.module('gitsApp.services')
.factory('registration', [
    '$http',
    function($http) {
        var registration = {};
        registration.isLoggedIn = function() {
            return true;
        };
        registration.currentUser = function() {
            return 'dickbag';
        };
        return registration;
    }
]);