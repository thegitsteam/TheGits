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

        auth.isLoggedIn = function() {
            var token = auth.getToken();
            return token !== null;
        };

        auth.getCurrentUser = function() {
            var token = JSON.parse(auth.getToken());
            if (token) {
                return token.username;
            }
        };

        auth.getFirstName = function() {
            var token = JSON.parse(auth.getToken());
            if (token) {
                return token.givenName;
            }
        };

        auth.getUserType = function() {
            var token = JSON.parse(auth.getToken());
            if (token) {
                return token.group;
            }
        };

        auth.getEmployeeNumber = function() {
            var token = JSON.parse(auth.getToken());
            if (token) {
                return token.employeeNumber;
            }
        };

        auth.isAdmin = function() {
            return auth.getUserType() === 'Admin';
        };
        
        auth.isCityCrew = function() {
            return auth.getUserType() === 'City';
        };

        // Triangle of DOOOOOOM
        auth.login = function(user) {
            return $http.post('/login', user).success(function() {
                $http.get('/users').success(function(data) {
                    auth.saveToken(data);
                    location.reload();
                });
            });
        };

        auth.logout = function() {
            $http.get('/logout').success(function() {
                localStorage.removeItem('gitsUser');
                location.reload();
            });
        };

        auth.register = function(route, user) {
            return $http.post('/users/' + route, user).success(function() {
                $http.get('/users').success(function(data) {
                    window.location.href = '/';
                });
            });

        };

        return auth;
    }
]);