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
                    searchServiceAPI
                        .search($stateParams.id)
                        .then(function (response) {
                            vm.product = response;
                        }, function (err) {
                            console.log(appConstants.FUNCTIONAL_ERR, err);
                        })
                        .catch(function (e) {
                            console.log(appConstants.FUNCTIONAL_ERR, e);
                        });
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }]);        