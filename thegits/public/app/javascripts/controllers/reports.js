angular.module('gitsApp.controllers')
.controller('ReportingCtrl', [
    '$scope',
    'auth',
    'report',
    function($scope, auth, report) {
        if (!auth.isLoggedIn) {
            window.location.href = '/#/login';
        }

        $scope.setBuildingType = function() {
            $scope.buildingType = $('#buildingType option:selected').val();
        };

        $scope.setDescription = function() {
            $scope.description = $('#description').val();
        };

        $scope.setAddress = function() {
            $scope.address = $('#address').val();
        };

        $scope.setZipCode = function() {
            $scope.zipCode = $('#zipCode').val();
        };

        $scope.setCrossStreet1 = function() {
            $scope.crossStreet1 = $('#crossStreet1').val();
        };

        $scope.setCrossStreet2 = function() {
            $scope.crossStreet2 = $('#crossStreet2').val();
        };

        $scope.submitReport = function() {
            $scope.setDescription();
            var location = {
                address: $scope.address,
                zipCode: $scope.zipCode,
                crossStreet1: $scope.crossStreet1,
                crossStreet2: $scope.crossStreet2
            };

            var report = {
                date: Date(),
                buildingtype: $scope.buildingType,
                description: $scope.description,
                location: location
            };

            alert(JSON.stringify(report));
        };
    }
]);