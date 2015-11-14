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
        .state('main', {
            url: '/home',
            templateUrl: '/app/javascripts/templates/main.html',
            controller: 'MainCtrl'
        });
        $urlRouterProvider.otherwise('main');
    }
]);

