/*
*   User service to make service calls for user login/registration using ngResource
*
*/

'use strict';
angular.module('bverifyApp')

    //Registering shipment track url
    .value('shipmentUrl', {
        'track': 'api/track'
    })

    //Configuring resource for making service call
    .service('trackResource', ['$resource', 'shipmentUrl', function ($resource, shipmentUrl) {
        return $resource('', {}, {
            trackShipment: { url: shipmentUrl.track, method: "GET" }
        });
    }])

    //Making service call for searching shipment details
    .service('searchServiceAPI', ['trackResource', '$q', function (trackResource, $q) {
        this.search = function (searchObj) {
            var deferred = $q.defer();
            trackResource
                .trackShipment({ id: searchObj.id })
                .$promise
                .then(function (response) {
                    deferred.resolve(response);
                }, function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        };
    }]);