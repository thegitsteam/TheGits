angular.module('gitsApp.controllers')
.controller('NavigationBarCtrl', [
    '$scope',
    'auth',
    function($scope, auth) {
        // init function
        $scope.$on('$viewContentLoaded', function() {
            $scope.username = auth.getCurrentUser();
            $scope.userType = auth.getUserType();
        });

        $scope.isLoggedIn = function() {
            return auth.isLoggedIn();
        };
        
        $scope.logout = function() {
            auth.logout();
        };

        $scope.isAuthorizedToSeeIncidents = function() {
            return !auth.isCityCrew();
        };

        $scope.isAdmin = function() {
            var userType = auth.getUserType();
            if (userType === 'Admin') {
                return true;
            } else {
                return false;
            }
        };
    }
]);