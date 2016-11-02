/*
*   Module for configuring constants and rootscopes
*/

'use strict';

angular
    .module('appConfig', ['LocalStorageModule', 'ngResource', 'ui.bootstrap', 'ngTable'])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptorService');
    }])
    .factory('httpInterceptorService', ['$q', '$rootScope', '$log',
        function ($q, $rootScope, $log) {
            return {
                request: function (config) {
                    // Show loader
                    $rootScope.$broadcast("loaderShow");
                    return config || $q.when(config);
                },
                response: function (response) {
                    // Hide loader
                    $rootScope.$broadcast("loaderHide");
                    return response || $q.when(response);
                },
                responseError: function (response) {
                    $rootScope.$broadcast("loaderHide");
                    return $q.reject(response);
                }
            };
        }])
    .constant('appConstants', {
        SERVICE_ERROR: "Service is temporarily unavailable. Please try after sometime.",
        FUNCTIONAL_ERR: "Something went wrong here....",
        ROUTE_STATES_CONSTANTS: ['login', 'register', 'home', 'home.result']
    })
    .run(['$rootScope', '$window', 'localStorageService', function ($rootScope, $window, localStorageService) {
        $rootScope.isLoggedIn = false;
        $rootScope.activeMenu = '';
        $window.onunload = function () {
            localStorageService.remove('User');
        };
    }]);
