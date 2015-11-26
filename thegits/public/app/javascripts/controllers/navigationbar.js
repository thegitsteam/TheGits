angular.module('gitsApp.controllers')
.controller('NavigationBarCtrl', [
    '$scope',
    'auth',
    function($scope, auth) {
        // init function
        $scope.$on('$viewContentLoaded', function() {
            $scope.username = auth.getCurrentUser();
        });

        $scope.isLoggedIn = function() {
            return auth.isLoggedIn();
        };
        
        $scope.logout = function() {
            auth.logout();
        };
    }
]);