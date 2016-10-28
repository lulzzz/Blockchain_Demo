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
    .service('searchServiceAPI', ['trackResource', '$q', 'appConstants', function (trackResource, $q, appConstants) {
        this.search = function (searchObj) {
            var deferred = $q.defer();
            try {
                trackResource
                    .trackShipment({ id: searchObj.id })
                    .$promise
                    .then(function (response) {
                        deferred.resolve(response);
                    }, function (err) {
                        deferred.reject(err);
                    });
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
            return deferred.promise;
        };
    }]);