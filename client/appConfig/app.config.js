/*
*   Module for configuring constants and rootscopes
*/

'use strict';

angular
    .module('appConfig', ['LocalStorageModule', 'ngResource', 'ui.bootstrap', 'ngTable', 'ngAnimate', 'ngSanitize', 'ngFileUpload'])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptorService');
    }])
    .factory('httpInterceptorService', ['$q', '$rootScope', '$log', 'appConstants',
        function ($q, $rootScope, $log, appConstants) {
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
                     $rootScope.hasError = true;
                    if(appConstants.ACCESS_DENIED_CODE.indexOf(response.status) >= 0){
                        $rootScope.ERROR_MSG = appConstants.UNAUTHORIZED_ERROR;
                    }else{
                        $rootScope.ERROR_MSG = appConstants.SERVICE_ERROR;
                    }
                    $rootScope.$broadcast("loaderHide");
                    return $q.reject(response);
                }
            };
        }])
    .constant('appConstants', {
        SERVICE_ERROR: "Service is temporarily unavailable. Please try after sometime.",
        UNAUTHORIZED_ERROR: "Access denied ! You may not have permission to acccess.",
        FUNCTIONAL_ERR: "Something went wrong here....",
        ROUTE_STATES_CONSTANTS: ['login', 'register', 'home', 'home.result'],
        ACCESS_DENIED_CODE: [401, 403, 408],
        USER_ROLES: {
            admin: 'ADMIN',
            producer: 'PROD',
            manufacturer: 'MANUFACT',
            retailer: 'RETAIL'
        }
    })
    .run(['$rootScope', '$window', 'localStorageService', function ($rootScope, $window, localStorageService) {
        $rootScope.isLoggedIn = false;
        $rootScope.activeMenu = '';
        $rootScope.hasError = false;
        $rootScope.ERROR_MSG = "";
        $window.onunload = function () {
            localStorageService.remove('User');
        };
    }]);
