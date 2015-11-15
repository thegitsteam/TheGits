angular.module('gitsApp.controllers').
controller('MainCtrl', [
    '$scope',
    function($scope) {
        $scope.test = 'Hello World!';
    }
]);