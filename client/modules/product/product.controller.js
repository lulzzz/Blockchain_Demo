/*
**  product Controller for handling user based 
**  product register/ship/acknowledgement business logic 
*/

"use strict";

angular.module('bverifyApp')
    .controller('productRegisterController', ['userModel', 'appConstants', '$state',
        function (userModel, appConstants, $state) {
            var vm = this;
            vm.user = userModel.getUser();
    }])

    .controller('productShipController', ['userModel', 'appConstants', '$state',
        function (userModel, appConstants, $state) {
            var vm = this;
            vm.user = userModel.getUser();
    }])

    .controller('productAckController', ['userModel', 'appConstants', '$state',
        function (userModel, appConstants, $state) {
            var vm = this;
            vm.user = userModel.getUser();
    }]);