"use strict";

angular.module('bverifyApp')
        .controller('searchController', ['$state', function($state){
            var vm = this;
			vm.redirect = function(){
				$state.go('home.result');
			};
        }]);