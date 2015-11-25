angular.module('gitsApp.controllers')
.controller('NavigationBarCtrl', [
    '$scope',
    function($scope) {
        $scope.getUsername = function() {
            $scope.username = "Officer Penis";
        };
    }
]);