/*
**  User Object pojo model for capturing user details
*/

"use strict";

angular.module('bverifyApp')
    .factory('userModel', ['localStorageService', 'appConstants', function (localStorageService, appConstants) {

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
            try {
                this._user = angular.copy(_init);
                localStorageService.remove('User');
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
            return this._user;
        };
        var _setUserDetails = function (obj) {
            try {
                this._user = obj;
                localStorageService.set('User', angular.toJson(this._user));
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
        };
        var _getUserDetails = function () {
            try {
                this._user = angular.fromJson(localStorageService.get('User')) || angular.copy(_init);
            } catch (e) {
                console.log(appConstants.FUNCTIONAL_ERR, e);
            }
            return this._user;
        };

        return {
            'getUser': _getUserDetails,
            'setUser': _setUserDetails,
            'resetUser': _reset
        }
    }]);
