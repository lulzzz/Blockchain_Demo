/*
**  product Controller for handling user based 
**  product register/ship/acknowledgement business logic 
*/

"use strict";

angular.module('bverifyApp')
    //For new product/material resgistration
    .controller('productRegisterController', ['userModel', 'appConstants', '$state',
        function (userModel, appConstants, $state) {
            try {
                var vm = this;
                vm.user = userModel.getUser();
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }])

    //For shipment of registered products
    .controller('productShipController', ['userModel', 'appConstants', '$state',
        function (userModel, appConstants, $state) {
            try {
                var vm = this;
                vm.user = userModel.getUser();
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }])

    //For acknowledging received product
    .controller('productAckController', ['userModel', 'appConstants', '$state',
        function (userModel, appConstants, $state) {
            try {
                var vm = this;
                vm.user = userModel.getUser();
            } catch (e) {
                aconsole.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }]);