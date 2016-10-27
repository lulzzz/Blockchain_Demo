/*
*   User service to make service calls for user login/registration using ngResource
*
*/

'use strict';
angular.module('bverifyApp')

    //Registering user login/register url
    .value('userUrl', {
        'login': 'api/login',
        'register': 'api/register'
    })

    //Configuring resource for making service call
    .service('userResource', ['$resource', 'userUrl', function ($resource, userUrl) {
        return $resource('', {}, {
            authenticateUser: { url: userUrl.login, method: "POST" },
            registerUser: { url: userUrl.register, method: "POST" },
        });
    }])

    //Making service call for user login/register
    .service('userServiceAPI', ['userResource', '$q', function (userResource, $q) {
        this.register = function (user) {
            var deferred = $q.defer();
            userResource
                .registerUser(user)
                .$promise
                .then(function (response) {
                    deferred.resolve(response);
                }, function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        };
        this.login = function (user) {
            var deferred = $q.defer();
            userResource
                .authenticateUser(user)
                .$promise
                .then(function (response) {
                    deferred.resolve(response);
                }, function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }
    }]);