angular.module('gitsApp.controllers')
.controller('LawReportingCtrl', [
    '$scope',
    function($scope) {
        $scope.setBuildingType = function() {
            var buildingType = $('#buildingType option:selected').val();
            $scope.buildingType = buildingType;
        };

        $scope.setBuildingAddress = function() {
            $scope.buildingAddress = $('#buildingAddress').val();
        };

        $scope.setMoniker = function() {
            $scope.moniker = $('#moniker').val();
        };

        $scope.submitReport = function() {
            var hasError = false;
            
            // Check building address
            if ($('#buildingAddress').val() === '') {
                $('.buildingAddressError').removeClass('hide');
                hasError = true;
            } else {
                $('.buildingAddressError').addClass('hide');
            }

            // Check moniker
            if ($('#moniker').val() === '') {
                $('.monikerError').removeClass('hide');
                hasError = true;
            } else {
                $('.monikerError').addClass('hide');
            }

            if (hasError) {
                $('.submissionError').removeClass('hide');
                return;
            }

            var report = {};
            report.buildingType = $scope.buildingType;
            report.buildingAddress = $scope.buildingAddress;
            report.moniker= $scope.moniker;
        }
    }
]);