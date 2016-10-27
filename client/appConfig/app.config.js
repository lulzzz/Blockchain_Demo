/*
*   Module for configuring constants and rootscopes
*/

'use strict';

angular
    .module('appConfig', ['LocalStorageModule', 'ngResource'])
    .constant('appConstants', {
        SERVICE_ERROR: "Service is temporarily unavailable. Please try after sometime.",
        FUNCTIONAL_ERR: "Something went wrong here...."
    })

    .run(['$rootScope', function (rootScope) {
        rootScope.isLoggedIn = false;
    }]);
    