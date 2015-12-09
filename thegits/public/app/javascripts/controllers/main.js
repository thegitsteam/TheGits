angular.module('gitsApp.controllers')
.controller('MainCtrl', [
    '$scope',
    'auth',
    function($scope, auth) {
        $scope.firstName = auth.getFirstName();
    }
]);