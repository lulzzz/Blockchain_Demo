/*
**  controller for tracking shipment details and displaying result
*/

"use strict";

angular.module('bverifyApp')
        // searchController for tracking shipment details
        .controller('searchController', ['$state', function($state){
            var vm = this;
            vm.searchQuery = ''; //TO-DO need to remove harcode
            vm.search = function(){
                $state.go('home.result', {id : vm.searchQuery});
            }
}]) 
        // searchResultController for rendering shipment details
        .controller('searchResultController', ['searchServiceAPI', '$state', '$stateParams',
                     function(searchServiceAPI, $state, $stateParams){
            var vm = this;
            (function(vm, $stateParams){
                vm.product = searchServiceAPI.search($stateParams.id); 
                console.log(vm.product);
            })(vm, $stateParams);
}]);        