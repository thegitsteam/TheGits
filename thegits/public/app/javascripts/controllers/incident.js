angular.module('gitsApp.controllers')
.controller('IncidentCtrl', [
    '$scope',
    'auth',
    'incident',
    'supervisor',
    'suspect',
    function($scope, auth, incident, supervisor, suspect) {
        if (!auth.isLoggedIn()) {
            window.location.href = '/#/login';
        }

        $scope.setStatus = function() {
            $scope.status = $('#status option:selected').val();
        };

        $scope.setSupervisorName = function() {
            $scope.supervisorName = $('#supervisorName').val();
        };

        $scope.setCityCrewID = function() {
            $scope.cityCrewID = $('#cityCrewID').val();
        };

        $scope.setDateOnSite = function(date) {
            $scope.dateOnSite = Date(date);
        };

        $scope.setScaleOfCleanup = function() {
            $scope.scaleOfCleanup = $('#scaleOfCleanup option:selected').val();
        };

        $scope.setAddress = function() {
            $scope.address = $('#address').val();
        };

        $scope.setCrossStreet1 = function() {
            $scope.crossStreet1 = $('#crossStreet1').val();
        };

        $scope.setCrossStreet2 = function() {
            $scope.crossStreet2 = $('#crossStreet2').val();
        };

        $scope.setZipCode = function() {
            $scope.zipCode = $('#zipCode').val();
        };

        $scope.setStructureType = function() {
            $scope.structureType = $('#structureType option:selected').val();
        };

        $scope.setLongitude = function() {
            $scope.longitude = $('#longitude').val();
        };

        $scope.setLatitude = function() {
            $scope.latitude = $('#latitude').val();
        };

        $scope.setDamage = function() {
            $scope.damage = $('#damage').val();
        };

        $scope.setSuspectName = function() {
            $scope.suspectName = $('#suspectName').val();
        };

        $scope.setSuspectStatus = function() {
            $scope.suspectStatus = $('#suspectStatus option:selected').val();
        };

        $scope.setMoniker = function() {
            $scope.moniker = $('#moniker').val();
        };

        $scope.setGangName = function() {
            $scope.gangName = $('#gangName').val();
        };

        $scope.toggleLoading = function() {
            $('.submission').toggleClass('hide');
            $('.loading-gif').toggleClass('hide');
        };

        $scope.submitIncident = function() {
            alert('button');
        };

        supervisor.getCityCrewSupervisors().success(function(data) {
            $scope.supervisors = data;
        });

        suspect.getAll().success(function(data) {
            $scope.suspects = data;
        });
    }
]);