"use strict";

angular.module('bverifyApp')
        .controller('searchController', ['$state', 'searchServiceAPI', function($state, searchServiceAPI){
            var vm = this;
            vm.searchQuery = ''; //TO-DO need to remove harcode
            vm.search = function(){
                var o = searchServiceAPI.search(vm.searchQuery);
                console.log(o);
                $state.go('home.result');
            }
        }]);        