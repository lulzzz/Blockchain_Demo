'use strict';

angular.module('bverifyApp')

//Directive for rendering header section
.directive('appHeader', function() {
    return {
        restrict: 'E',
        templateUrl: '../views/header.tpl.html',
        scope: {
            isLoggedIn: '@',
            user: '='
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

//Directive for rendering module section
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
})

//Directive for displaying/hiding loading on http request/response
.directive("appLoader",['$rootScope', function ($rootScope) {
    return {
        restrict: 'E',
        templateUrl: '../views/loader.tpl.html',
        link : function ($scope, element, attrs) {
            $rootScope.$on("loaderShow", function () {
                return element.removeClass('displayNone');
            });
            return $rootScope.$on("loaderHide", function () {
                return element.addClass('displayNone');
            });
        }
    }
}])

//Directive for Side Menu Section
.directive('sideMenu', function() {
    return {
        restrict: 'E',
        templateUrl: '../views/sideMenu.tpl.html',
        link: function(scope, element, attrs) {
			var a=true;
			scope.openNav = function(){
				if(a==true){
					document.getElementById("mySidenav").style.width = "250px";
					a=false;
				}
				else{
					document.getElementById("mySidenav").style.width = "20px";
					a=true;
				}
			}
        }
    }
});