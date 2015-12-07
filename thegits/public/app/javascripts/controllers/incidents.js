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

        $scope.isAuthorizedToSeeIncidents = function() {
            return !auth.isCityCrew();
        };

        $scope.setStatus = function() {
            $scope.status = $('#status option:selected').val();
        };

        $scope.setGraffitiInformation = function(){
            $scope.graffitiInformation = $('#graffitiInformation').val()
        };

        $scope.setSupervisorName = function() {
            $scope.supervisorName = $('#supervisorName').val();
        };

        $scope.setCityCrewId = function() {
            $scope.cityCrewId = $('#cityCrewId').val();
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

        $scope.setTypeOfBuilding = function() {
            $scope.typeOfBuilding = $('#typeOfBuilding option:selected').val();
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

        supervisor.getCityCrewSupervisors().success(function(data) {
            $scope.supervisors = data;
        });

        suspect.getAll().success(function(data) {
            $scope.suspects = data;
        });


        $scope.submitIncident = function() {
            var hasError = false;

            /*// Check building type
            if (!$scope.buildingType) {
                $('.buildingTypeError').removeClass('hide');
                    hasError = true;
            } else {
                $('.buildingTypeError').addClass('hide');
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
            }*/

            if (!hasError) {
                var locationData = {
                    address: $scope.address,
                    zipCode: $scope.zipCode,
                    crossStreet1: $scope.crossStreet1,
                    crossStreet2: $scope.crossStreet2
                }

                var gpsCoordinates = [$scope.latitude, $scope.longitude];
                alert($scope.graffitiInformation);
                var incidentData = {
                    cityCrewId: $scope.cityCrewId,
                    lawEnforcementEmployeeNumber: String,
                    cityCrewSupervisorEmployeeNumber: String,
                    lawEnfSupervisorEmployeeNumber: String,
                    graffitiInfo: $scope.graffitiInformation,
                    dateCreated:{ type: Date, default: Date.now },
                    dateOnSite: $scope.dateOnSite,
                    scaleOfCleanUp: $scope.scaleOfCleanup,
                    typeOfBuilding: $scope.typeOfBuilding,
                    location: locationData,
                    gpsCoordinates: gpsCoordinates,
                    moniker: $scope.moniker,
                    images: String,
                    suspects: $scope.suspects,
                    status: $scope.status
                };

                $scope.toggleLoading();

                incident.create(incidentData).success(function(data) {
                    if ($scope.incidents) {
                        $scope.incidents.push(data);
                    }
                    $scope.toggleLoading();
                    if ($scope.isAuthorizedToSeeIncidents()) { 
                        $('#incidentModal').modal('toggle');
                    }
                    $('.form-control').val('');
                });
            }
        };


        $scope.toggleLoading = function() {
            $('.submission').toggleClass('hide');
            $('.loading-gif').toggleClass('hide');
        };

        // Get all incidents upon load
        if ($scope.isAuthorizedToSeeIncidents()) {
            incident.getAll().success(function(data) {
                $('.incident-loading').toggleClass('hide');
                $scope.incidents = data;
                $('.report-view').toggleClass('hide');
            });
        }
    }
]);