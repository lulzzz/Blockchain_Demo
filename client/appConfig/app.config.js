/*
*   Module for configuring constants and rootscopes
*/

'use strict';

angular
    .module('appConfig', ['LocalStorageModule', 'ngResource'])
    
    /*.config('localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setDefaultToCookie(false);
    })*/
    .constant('appConstants', {
        SERVICE_ERROR: "Service is temporarily unavailable. Please try after sometime."
    })
    
    .run(['$rootScope',  function(rootScope) {
        rootScope.isLoggedIn = false;
    }]);