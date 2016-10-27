/*
*   User service to make service calls for user login/registration using ngResource
*
*/

'use strict';
angular.module('bverifyApp')

    .value('userUrl', {
            'login' : 'api/login',
            'register' : 'api/register'
        })

    .service('userResource', ['$resource', 'userUrl', function ($resource, userUrl) {
        return $resource('', {}, {
                    authenticateUser: { url: userUrl.login, method: "POST"},
                    registerUser: { url: userUrl.register, method: "POST"},
        });
    }])

    .service('userServiceAPI', ['userResource', function(userResource) {
            this.register = function (user) {
                return userResource.registerUser(user).$promise;
            };
            this.login = function (user) {
                return userResource.authenticateUser(user).$promise;
            }
}]);