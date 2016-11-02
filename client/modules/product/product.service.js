/*
*   User service to make service calls for user login/registration using ngResource
*
*/

'use strict';
angular.module('bverifyApp')

    // Registering/Retreiving/shipping/acknowledging product
    .value('productUrl', {
        'register': 'api/product/register',
        'products': 'api/product/list',
        'ship': 'api/product/ship',
        'acknowledge': 'api/product/ack',
    })

    //Configuring resource for making service call
    .service('productResource', ['$resource', 'productUrl', function ($resource, productUrl) {
        return $resource('', {}, {
            productList: { url: productUrl.products, method: "GET" },
            registerProduct: { url: productUrl.register, method: "POST" },
            shipProduct: { url: productUrl.ship, method: "POST" },
            ackProduct: { url: productUrl.acknowledge, method: "POST" },
        });
    }])

    //Making service call 
    .service('productServiceAPI', ['productResource', 'appConstants', '$q', function (productResource, appConstants, $q) {
        
        this.registerProduct = function (product) {
            var deferred = $q.defer();
            try{
                productResource
                    .registerProduct(product)
                    .$promise
                    .then(function (response) {
                        deferred.resolve(response);
                    }, function (err) {
                        deferred.reject(err);
                    });
            }catch(e){
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
            return deferred.promise;
        };
        this.getProductList = function () {
            var deferred = $q.defer();
            try{
                productResource
                    .productList({})
                    .$promise
                    .then(function (response) {
                        deferred.resolve(response);
                    }, function (err) {
                        deferred.reject(err);
                    });
            }catch(e){
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
            return deferred.promise;
        };
         this.shipProduct = function (list) {
            var deferred = $q.defer();
            try{
                productResource
                    .shipProduct(list)
                    .$promise
                    .then(function (response) {
                        deferred.resolve(response);
                    }, function (err) {
                        deferred.reject(err);
                    });
            }catch(e){
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
            return deferred.promise;
        };
        this.ackProduct = function (list) {
            var deferred = $q.defer();
            try{
                productResource
                    .ackProduct(list)
                    .$promise
                    .then(function (response) {
                        deferred.resolve(response);
                    }, function (err) {
                        deferred.reject(err);
                    });
            }catch(e){
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
            return deferred.promise;
        };
    }]);