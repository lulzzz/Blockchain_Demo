/*
*   User service to make service calls for user login/registration using ngResource
*
*/

'use strict';
angular.module('bverifyApp')

    .value('shipmentUrl', {
            'track' : 'api/track'
        })

    .service('trackResource', ['$resource', 'shipmentUrl', function ($resource, shipmentUrl) {
        return $resource('', {}, {
                    trackShipment: { url: shipmentUrl.track, method: "GET"}
        });
    }])

    .service('searchServiceAPI', ['trackResource', function(trackResource) {
            this.search = function (id) {
                return trackResource.trackShipment(id).$promise;
            }
}]);