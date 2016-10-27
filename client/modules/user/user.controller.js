/*
**  userController for handling user login/registration business logic 
*/

"use strict";

angular.module('bverifyApp')
        .controller('userController', ['userModel', 'userServiceAPI', function(userModel, userServiceAPI){
            var vm = this;
            vm.user = userModel.getUser();
            vm.doRegistration = function(){
                var o = userServiceAPI.register(vm.user);
                console.log(o);
            }
            
            vm.doLogin = function(){
                var o = userServiceAPI.login(vm.user);
                console.log(o);
            }
        }]);