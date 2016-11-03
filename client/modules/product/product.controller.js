/*
**  product Controller for handling user based 
**  product register/ship/acknowledgement business logic 
*/

"use strict";

angular.module('bverifyApp')

     //For dashboard of logged in user
    .controller('dashboardController', ['userModel', 'appConstants', '$state', '$rootScope', 'productServiceAPI',
        function (userModel, appConstants, $state, $rootScope, productServiceAPI) {
            try {
                var vm = this;
                vm.user = userModel.getUser();
                $rootScope.isLoggedIn = userModel.isLoggedIn();
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }])

    //For new product/material resgistration
    .controller('productRegisterController', ['userModel', 'appConstants', '$state', '$rootScope', 'productServiceAPI',
        function (userModel, appConstants, $state, $rootScope, productServiceAPI) {
            try {
                var vm = this;
                vm.user = userModel.getUser();
                $rootScope.isLoggedIn = userModel.isLoggedIn();
                vm.isManufacturer = userModel.isManufacturer();
                vm.isRetailer = userModel.isRetailer();
                vm.header = vm.isManufacturer ? 'REGISTER NEW PRODUCT' : 'REGISTER NEW MATERIAL';
                vm.product = {};
                vm.productList = [];

/*      TO-DO need to test with actual data and implementation
                // Register new Product/material
                productServiceAPI
                    .registerProduct(vm.product)
                    .then(function (response) {
                        vm.product = response.product;
                        //$state.go('product'); //TO-DO this has to be redirect to dashboard screen
                    }, function (err) {
                        console.log(appConstants.FUNCTIONAL_ERR, err);
                    })
                    .catch(function (e) {
                        console.log(appConstants.FUNCTIONAL_ERR, e);
                    });
                
                // get complete previous Product/material list
                productServiceAPI
                    .getProductList({})
                    .then(function (response) {
                        vm.productList = response.list;
                        //$state.go('product'); //TO-DO this has to be redirect to dashboard screen
                    }, function (err) {
                        console.log(appConstants.FUNCTIONAL_ERR, err);
                    })
                    .catch(function (e) {
                        console.log(appConstants.FUNCTIONAL_ERR, e);
                    });
                
*/
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }])

    //For shipment of registered products
    .controller('productShipController', ['userModel', 'appConstants', '$state', '$rootScope', 'productServiceAPI',
        function (userModel, appConstants, $state, $rootScope, productServiceAPI) {
            try {
                var vm = this;
                vm.user = userModel.getUser();
                $rootScope.isLoggedIn = userModel.isLoggedIn();
                vm.product = {};

/*      TO-DO need to test with actual data and implementation
                // do Product/material shipment
                productServiceAPI
                    .shipProduct(vm.product)
                    .then(function (response) {
                        vm.product = response.shippedProduct;
                        //$state.go('product'); //TO-DO this has to be redirect to dashboard screen
                    }, function (err) {
                        console.log(appConstants.FUNCTIONAL_ERR, err);
                    })
                    .catch(function (e) {
                        console.log(appConstants.FUNCTIONAL_ERR, e);
                    })
*/
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }])

    //For acknowledging received product
    .controller('productAckController', ['userModel', 'appConstants', '$state', '$rootScope', 'productServiceAPI',
        function (userModel, appConstants, $state, $rootScope, productServiceAPI) {
            try {
                var vm = this;
                vm.user = userModel.getUser();
                vm.isManufacturer = userModel.isManufacturer();
                vm.isRetailer = userModel.isRetailer();
                vm.header = vm.isManufacturer ? 'PROCURE RAW MATERIALS' : 'ACKNOWLEDGE PRODUCTS';
                vm.productList = [];

/*      TO-DO need to test with actual data and implementation
                // do Product/material shipment
                productServiceAPI
                    .ackProduct(vm.product)
                    .then(function (response) {
                        vm.product = response.shippedProduct;
                        //$state.go('product'); //TO-DO this has to be redirect to dashboard screen
                    }, function (err) {
                        console.log(appConstants.FUNCTIONAL_ERR, err);
                    })
                    .catch(function (e) {
                        console.log(appConstants.FUNCTIONAL_ERR, e);
                    });
*/
            } catch (e) {
                aconsole.log(appConstants.FUNCTIONAL_ERR, e);
            }
        }]);