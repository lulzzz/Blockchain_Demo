/*
*   Module for configuring angular routing
*/
'use strict';

angular
    .module('appRoute', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                // HOME STATES AND NESTED VIEWS 
                .state('home', {
                    url: '/home',
                    templateUrl: '../modules/search/search.tpl.html',
                    controllerAs: 'vm',
                    controller: 'searchController'
                })
                .state("home.result", {
                    url: '/result',
                    templateUrl: '../modules/search/searchResult.tpl.html',
                    params: {
                        id: ''
                    },
                    controllerAs: 'vm',
                    controller: 'searchResultController'
                })
                // USER LOGIN/REGISTER/DASHBOARD STATES 
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
                })
                .state('logout', {
                    url: '/home',
                    controllerAs: 'vm',
                    controller: 'logoutController'
                })
                //Below has to comment out when dashboad screen gets ready. After login/register user will see it's dashboad. 
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: '../modules/product/dashboard.tpl.html',
                    controllerAs: 'vm',
                    controller: 'dashboardController'
                })

                // PRODUCT REGISTER/SHIPMENT/ACKNOWLEDGMENT STATES
                .state('product', {
                    url: '/product/register',
                    templateUrl: '../modules/product/product.register.tpl.html',
                    controllerAs: 'vm',
                    controller: 'productRegisterController'
                })
                .state('shipment', {
                    url: '/product/ship',
                    templateUrl: '../modules/product/product.ship.tpl.html',
                    controllerAs: 'vm',
                    controller: 'productShipController'
                })
                .state('acknowledge', {
                    url: '/product/acknowledge',
                    templateUrl: '../modules/product/product.ack.tpl.html',
                    controllerAs: 'vm',
                    controller: 'productAckController'
                });


            // use the HTML5 History API
            $locationProvider.html5Mode(true);
        }])


    .run(['$rootScope', 'userModel', '$state', 'appConstants',
        function ($rootScope, userModel, $state, appConstants) {
            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    try {
                        $rootScope.activeMenu = toState.url;
                        $rootScope.hasError = false;
                        // Authenticating user. Maintaining session on each route
                        const user = userModel.getUser();
                        if (!(appConstants.ROUTE_STATES_CONSTANTS.indexOf(toState.name) >= 0)) {
                            if (user === null || !user.isAuthenticatedUser) {
                                $rootScope.isLoggedIn = false;
                                event.preventDefault();
                                $state.go('home');
                            }
                        }
                    } catch (e) {
                        console.log(appConstants.FUNCTIONAL_ERR, e);
                    }
                });
        }])
