angular.module('gitsApp.controllers')
.controller('RegistrationCtrl', [
    '$scope',
    'auth',
    function($scope, auth) {
        if (!auth.isLoggedIn) {
            window.location.href = '/#/login';
        } else if (auth.getUserType() !== 'Admin') {
            window.location.href = '/#/home';
        }

        $scope.setAccountType = function() {
            var accountType = $('#accountType option:selected').val();
            if (accountType !== 'Admin') {
                $('.supervisor-select').removeClass('hide');
            } else {
                $('.supervisor-select').addClass('hide');
            }
            $scope.accountType = accountType;
        };

        $scope.setFirstName = function() {
            $scope.firstName = $('#firstName').val();
        };

        $scope.setMiddleInitial = function() {
            $scope.middleInitial = $('#middleInitial').val();
        };

        $scope.setLastName = function() {
            $scope.lastName = $('#lastName').val();
        };

        $scope.setUsername = function() {
            $scope.username = $('#username').val();
        };

        $scope.setEmployeeNumber = function() {
            var employeeNumber = $('#employeeNumber').val();
            if (isNaN(employeeNumber)) {
                $('.employeeNumberError').removeClass('hide');
                $scope.employeeNumberError = true;
            } else {
                $('.employeeNumberError').addClass('hide');
                $scope.employeeNumber = employeeNumber;
                $scope.employeeNumberError = false;
            }
        };

        $scope.setEmail = function() {
            $scope.email = $('#email').val();
        };

        $scope.setEmployeeTitle = function() {
            $scope.employeeTitle = $('#employeeTitle').val();
        };

        $scope.setPassword = function() {
            $scope.password = $('#password').val();
        };

        $scope.getDeleteID = function() {
            $scope.deleteID = $('#userToDelete').val();
        };

        $scope.registerUser = function() {
            var hasError = false;
            
            // Check first name
            if ($('#firstName').val() === '') {
                $('.nameError').removeClass('hide');
                hasError = true;
            } else {
                $('.nameError').addClass('hide');
            }

            // Check m.i.
            if ($('#middleInitial').val() === '') {
                $('.nameError').removeClass('hide');
                hasError = true;
            } else {
                $('.nameError').addClass('hide');
            }

            // Check last name
            if ($('#lastName').val() === '') {
                $('.nameError').removeClass('hide');
                hasError = true;
            } else {
                $('.nameError').addClass('hide');
            }

            // Check username
            if ($('#username').val() === '') {
                $('.usernameError').removeClass('hide');
                hasError = true;
            } else {
                $('.usernameError').addClass('hide');
            }

            // Check employee number
            if ($scope.employeeNumberError) {
                hasError = true;
            }

            // Check employee title
            if ($('#employeeTitle').val() === '') {
                $('.employeeTitleError').removeClass('hide');
                hasError = true;
            } else {
                $('.employeeTitleError').addClass('hide');
            }

            // Check supervisor boolean
            if ($('#supervisorCheckbox').is(':checked') && $scope.accountType !== 'Admin') {
                $scope.isSupervisor = true;
            } else {
                $scope.isSupervisor = false;
            }

            // Check password
            if ($scope.password !== $('#passwordConfirmation').val()) {
                $('.passwordError').removeClass('hide');
                hasError = true;
            } else {
                $('.passwordError').addClass('hide');
            }

            if (hasError) {
                $('.submissionError').removeClass('hide');
                return;
            }

            if (!hasError) {
                var registration = {
                    username: $scope.username,
                    firstName: $scope.firstName,
                    middleInitial: $scope.middleInitial,
                    lastName: $scope.lastName,
                    email: $scope.email,
                    password: $scope.password,
                    isSupervisor: $scope.isSupervisor,
                    employeeTitle: $scope.employeeTitle,
                    employeeNumber: $scope.employeeNumber,
                };

                var route;

                switch($scope.accountType) {
                    case 'Admin':
                        registration.accountType = 'Admin';
                        route = 'admin';
                        break;
                    case 'City Crew':
                        registration.accountType = 'City';
                        route = 'citycrew';
                        break;
                    case 'Law Enforcement':
                        registration.accountType = 'Law';
                        route = 'law';
                        break;
                }

                auth.register(route, registration);
            }
        }
    }
]);