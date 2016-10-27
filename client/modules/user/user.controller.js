/*
**  userController for handling user login/registration business logic 
*/

"use strict";

angular.module('bverifyApp')
    .controller('userController', ['userModel', 'userServiceAPI', 'appConstants', '$state',
        function (userModel, userServiceAPI, appConstants, $state) {
            var vm = this;
            userModel.resetUser();
            vm.user = userModel.getUser();
            vm.doRegistration = function () {
                userServiceAPI
                    .register(vm.user)
                    .then(function (response) {
                        userModel.setUser(response.user);
                        vm.user = response.user;
                        $state.go('product'); //TO-DO this has to be redirect to dashboard screen
                    }, function (err) {
                        console.log(appConstants.FUNCTIONAL_ERR, err);
                    })
                    .catch(function (e) {
                        console.log(appConstants.FUNCTIONAL_ERR, e);
                    })
            }

            vm.doLogin = function () {
                userServiceAPI
                    .login(vm.user)
                    .then(function (response) {
                        console.log(response);
                    }, function (err) {
                        console.log(appConstants.FUNCTIONAL_ERR, err);
                    })
                    .catch(function (e) {
                        console.log(appConstants.FUNCTIONAL_ERR, e);
                    })
            }
}])
    .controller('logoutController', ['userModel', 'appConstants', '$state',
        function (userModel, appConstants, $state) {
            var vm = this;
            userModel.resetUser();
            $state.go('home');
}]);