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
            views: {
                'main-view': {
                    templateUrl: '/app/javascripts/templates/main.html',
                    controller: 'MainCtrl'
                },
                'navigation-bar': {
                    templateUrl: '/app/javascripts/templates/shared/navigationbar.html',
                }
            }
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
        })

	.state('lawreporting', {
            url: '/lawreporting',
            templateUrl: '/app/javascripts/templates/lawreporting.html',
            controller: 'LawReportingCtrl'
        });


        $urlRouterProvider.otherwise('home');
    }
]);

