/*
**  User Object pojo model for capturing user details
*/

"use strict";

angular.module('bverifyApp')
        .service('userModel',['localStorageService', function(localStorageService){

         function User(userName, certification, consortium, userProfile){
             this.userName = userName || "";
             this.certification = certification || "";
             this.consortium = consortium || "";
             this.userProfile = userProfile || "";
         };
         
         User.prototype.setUser = function(){
             localStorageService.set('User', angular.toJson())
         }


}]);