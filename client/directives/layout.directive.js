'use strict';

angular.module('bverifyApp')

//Directive for rendering header section
.directive('appHeader', function() {
    return {
        restrict: 'E',
        templateUrl: '../views/header.tpl.html',
        scope: {
            isLoggedIn: '@',
            user: '@'
        },
        link: function(scope, element, attrs) {
             scope.appName = "B-VERIFY";
             scope.appDesc = "Retail Blockchain Application";
        }
    }
})

//Directive for rendering footer section
.directive('appFooter', function() {
    return {
        restrict: 'E',
        templateUrl: '../views/footer.tpl.html',
        link: function(scope, element, attrs) {

        }
    }
})

//Directive for rendering Legend section
.directive('appLegend', function() {
    return {
        restrict: 'E',
        template: '<legend class="legendHead">{{:: header}}</legend>',
        scope: {
            header: '@'
        },
        link: function(scope, element, attrs) {

        }
    }
});