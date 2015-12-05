angular.module('gitsApp.controllers')
.controller('ReportingCtrl', [
    '$scope',
    'auth',
    'report',
    function($scope, auth, report) {
        if (!auth.isLoggedIn()) {
            window.location.href = '/#/login';
        }

        $scope.isAuthorizedToSeeReports = function() {
            return !auth.isCityCrew();
        };

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
            var hasError = false;

            // Check building type
            if (!$scope.buildingType) {
                $('.buildingTypeError').removeClass('hide');
                    hasError = true;
            } else {
                $('.buildingTypeError').addClass('hide');
            }

            // Check description
            if (!$scope.description) {
                $('.descriptionError').removeClass('hide');
                    hasError = true;
            } else {
                $('.descriptionError').addClass('hide');
            }

            // Check Zipcode is number
            if (isNaN($('#zipCode').val())) {
                $('.zipCodeNotNumberError').removeClass('hide');
                    hasError = true;
            } else {
                $('.zipCodeNotNumberError').addClass('hide');
            }

            // Check Zipcode
            if ($('#zipCode').val() === '') {
                $('.zipCodeError').removeClass('hide');
                hasError = true;
            } else {
                $('.zipCodeError').addClass('hide');
            }

            // Check Cross Street 1
            if ($('#crossStreet1').val() === '') {
                $('.crossStreet1Error').removeClass('hide');
                hasError = true;
            } else {
                $('.crossStreet1Error').addClass('hide');
            }

            // Check Cross Street 2
            if ($('#crossStreet2').val() === '') {
                $('.crossStreet2Error').removeClass('hide');
                hasError = true;
            } else {
                $('.crossStreet2Error').addClass('hide');
            }

            if (hasError) {
                $('.submissionError').removeClass('hide');
            } else {
                $('.submissionError').addClass('hide');
            }

            if (!hasError) {
                var location = {
                    address: $scope.address,
                    zipCode: $scope.zipCode,
                    crossStreet1: $scope.crossStreet1,
                    crossStreet2: $scope.crossStreet2
                };

                var reportData = {
                    date: Date(),
                    buildingType: $scope.buildingType,
                    description: $scope.description,
                    location: location
                };

                $scope.toggleLoading();

                alert($scope.zipCode);
                report.create(reportData).success(function(data) {
                    if ($scope.reports) {
                        $scope.reports.push(data);
                    }
                    $scope.toggleLoading();
                    if ($scope.isAuthorizedToSeeReports()) { 
                        $('#reportingModal').modal('toggle');
                    }
                    $('.form-control').val('');
                });
            }
        };

        $scope.toggleLoading = function() {
            $('.submission').toggleClass('hide');
            $('.loading-gif').toggleClass('hide');
        };

        // Get all reports upon load
        if ($scope.isAuthorizedToSeeReports()) {
            report.getAll().success(function(data) {
                $('.report-loading').toggleClass('hide');
                $scope.reports = data;
                $('.report-view').toggleClass('hide');
            });
        }
    }
]);