/*
*   Module for configuring angular routing
*/
'use strict';

angular
    .module('appRoute', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            // HOME STATES AND NESTED VIEWS 
            .state('home', {
                url: '/home',
                templateUrl: '../modules/search/search.tpl.html',
                controllerAs: 'vm',
                controller: 'searchController'
            })
            .state( "home.result",  {
                url: '/result',
                templateUrl: '../modules/search/searchResult.tpl.html',
                // controllerAs: 'vm',
                // controller: 'searchController'
            })
            .state('register', {
                url: '/register',
                templateUrl: '../modules/user/register.tpl.html',
                controllerAs: 'vm',
                controller: 'userController'
            })
            .state('login', {
                url: '/login',
                templateUrl: '../modules/user/login.tpl.html',
                controllerAs: 'vm',
                controller: 'userController'
            });


        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }]);
