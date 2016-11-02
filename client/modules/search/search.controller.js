/*
**  controller for tracking shipment details and displaying result
*/

"use strict";

angular.module('bverifyApp')
    // searchController for tracking shipment details
    .controller('searchController', ['$state', 'appConstants', 'userModel',
                 function ($state, appConstants, userModel) {
        try {
            var vm = this;
            vm.searchQuery = ''; //TO-DO need to remove harcode
            vm.user = userModel.getUser();
            vm.search = function () {
                $state.go('home.result', { id: vm.searchQuery });
            }
        } catch (e) {
            console.log(appConstants.FUNCTIONAL_ERR, e);
        }
    }])
    // searchResultController for rendering shipment details
    .controller('searchResultController', ['searchServiceAPI', '$state', '$stateParams', 'appConstants',
        function (searchServiceAPI, $state, $stateParams, appConstants) {
            try {
                var vm = this;
                (function (vm, $stateParams) {
                    vm.product = searchServiceAPI.search($stateParams.id);
                    console.log(vm.product);
                })(vm, $stateParams);
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }]);        