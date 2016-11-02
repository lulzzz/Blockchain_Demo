/*
**  product Controller for handling user based 
**  product register/ship/acknowledgement business logic 
*/

"use strict";

angular.module('bverifyApp')

     //For dashboard of logged in user
    .controller('dashboardController', ['userModel', 'appConstants', '$state', '$rootScope',
        function (userModel, appConstants, $state, $rootScope) {
            try {
                var vm = this;
                vm.user = userModel.getUser();
                $rootScope.isLoggedIn = userModel.isLoggedIn();
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }])

    //For new product/material resgistration
    .controller('productRegisterController', ['userModel', 'appConstants', '$state', '$rootScope',
        function (userModel, appConstants, $state, $rootScope) {
            try {
                var vm = this;
                vm.user = userModel.getUser();
                $rootScope.isLoggedIn = userModel.isLoggedIn();
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }])

    //For shipment of registered products
    .controller('productShipController', ['userModel', 'appConstants', '$state', '$rootScope',
        function (userModel, appConstants, $state, $rootScope) {
            try {
                var vm = this;
                vm.user = userModel.getUser();
                $rootScope.isLoggedIn = userModel.isLoggedIn();
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }])

    //For acknowledging received product
    .controller('productAckController', ['userModel', 'appConstants', '$state', '$rootScope',
        function (userModel, appConstants, $state, $rootScope) {
            try {
                var vm = this;
                vm.user = userModel.getUser();
            } catch (e) {
                aconsole.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }]);