angular.module('gitsApp.services')
.factory('auth', [
	'$http',
    '$window',
    function ($http, $window) {
        var auth = {};

        auth.saveToken = function(token) {
            var storage = JSON.stringify(token);
            localStorage.setItem('gitsUser', storage);
        };

        auth.getToken = function() {
            return localStorage.getItem('gitsUser');
        };

        // Triangle of DOOOOOOM
        auth.login = function(user) {
            return $http.post('/login', user).success(function() {
                $http.get('/stormpath/account').success(function(data) {
                    auth.saveToken(data);
                    location.reload();
                });
            });
        };

        auth.isLoggedIn = function() {
            var token = auth.getToken();
            return token !== null;
        };

        auth.getCurrentUser = function() {
            var token = JSON.parse(auth.getToken());
            return token.email;

        };

        auth.logout = function() {
            $http.get('/logout').success(function() {
                localStorage.removeItem('gitsUser');
                location.reload();
            });
        };

        auth.register = function(user) {
            return $http.post('/register', user).success(function() {
                auth.saveToken(user);
            });
        };

        return auth;
    }
]);