angular.module('gitsApp.controllers')
.controller('LoginCtrl', [
    '$scope',
    'login',
    function($scope, login) {
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
                login.login($scope.username, $scope.password);
            }
        }

        $scope.logout = function() {
            login.logout();
        }
    }
]);