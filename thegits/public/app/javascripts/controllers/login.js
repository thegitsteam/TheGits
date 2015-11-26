angular.module('gitsApp.controllers')
.controller('LoginCtrl', [
    '$scope',
    'auth',
    function($scope, auth) {
        // If user is logged in, automatically redirect to home
        if (auth.isLoggedIn()) {
            window.location.href = '/#/home';
        }

        $scope.setUsername = function() {
            $scope.username = $('#username').val();
        };

        $scope.setPassword = function() {
            $scope.password = $('#password').val();
        };

        $scope.login = function() {
            var hasError = false;

            if ($scope.username === '') {
                $('.usernameError').removeClass('hide');
                hasError = true;
            } else {
                $('.usernameError').addClass('hide');
            }

            if ($scope.password === '') {
                $('.passwordError').removeClass('hide');
                hasError = true;
            } else {
                $('.passwordError').addClass('hide');
            }

            if (!hasError) {
                var login = {
                    username: $scope.username,
                    password: $scope.password
                };
                auth.login(login);
            }
        }

        $scope.logout = function() {
            login.logout();
        }
    }
]);