angular.module('gitsApp.controllers')
.controller('RegistrationCtrl', [
    '$scope',
    'admin',
    function($scope, admin) {
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

        $scope.setEmployeeTitle = function() {
            $scope.employeeTitle = $('#employeeTitle').val();
        };

        $scope.setPassword = function() {
            $scope.password = $('#password').val();
        };

        $scope.getDeleteID = function() {
            $scope.deleteID = $('#userToDelete').val();
        };

        $scope.deleteUser = function() {
            admin.delete($scope.deleteID);
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

            var user = {};
            user.accountType = $scope.accountType;
            user.firstName = $scope.firstName;
            user.middleInitial = $scope.middleInitial;
            user.lastName = $scope.lastName;
            user.employeeNumber = $scope.employeeNumber;
            user.password = $scope.password;

            if (user.accountType === 'Admin') {
                admin.create(user);
            }
        }
    }
]);