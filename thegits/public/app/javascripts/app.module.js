var app = angular.module('gitsApp', [
    'ui.router', 
    'gitsApp.controllers', 
    'gitsApp.services'
]);

// Routing
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/app/javascripts/templates/main.html',
            controller: 'MainCtrl'
        })

        .state('register', {
            url: '/register',
            templateUrl: '/app/javascripts/templates/registration.html',
            controller: 'RegistrationCtrl'
        })

	.state('login', {
            url: '/login',
            templateUrl: '/app/javascripts/templates/login.html',
            controller: 'LoginCtrl'
        });

        $urlRouterProvider.otherwise('home');
    }
]);

