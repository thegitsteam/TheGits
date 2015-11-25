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
            views: {
                'main-view': {
                    templateUrl: '/app/javascripts/templates/registration.html',
                    controller: 'RegistrationCtrl'
                },
                'navigation-bar': {
                    templateUrl: '/app/javascripts/templates/shared/navigationbar.html',
                }
            }
        })

    	.state('login', {
            url: '/login',
            views: {
                'main-view': {
                    templateUrl: '/app/javascripts/templates/login.html',
                    controller: 'LoginCtrl'
                },
                'navigation-bar': {
                    templateUrl: '/app/javascripts/templates/shared/navigationbar.html',
                }
            }
        })

    	.state('lawreporting', {
            url: '/lawreporting',
            views: {
                'main-view': {
                    templateUrl: '/app/javascripts/templates/lawreporting.html',
                    controller: 'LawReportingCtrl'
                },
                'navigation-bar': {
                    templateUrl: '/app/javascripts/templates/shared/navigationbar.html',
                }
            }
        });


        $urlRouterProvider.otherwise('home');
    }
]);

