/*
**  User Object pojo model for capturing user details
*/

"use strict";

angular.module('bverifyApp')
    .factory('userModel', ['localStorageService', function (localStorageService) {

        var _init = {
            userName: '',
            certification: '',
            consortium: {
                id: '',
                name: ''
            },
            userProfile: {
                id: '',
                profile: ''
            },
            isAuthenticatedUser: false

        };

        var _user = {};
        var _reset = function () {
            this._user = angular.copy(_init);
            localStorageService.remove('User');
            return this._user;
        };
        var _setUserDetails = function (obj) {
            this._user = obj;
            localStorageService.set('User', angular.toJson(this._user));
        };
        var _getUserDetails = function () {
            this._user = angular.fromJson(localStorageService.get('User')) || angular.copy(_init);
            return this._user;
        };

        return {
            'getUser': _getUserDetails,
            'setUser': _setUserDetails,
            'resetUser': _reset
        }
    }]);
