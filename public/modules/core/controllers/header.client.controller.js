'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Menus',
    function ($scope, Menus) {
        $scope.isCollapsed    = false;
        $scope.menu           = Menus.getMenu('header');

        $scope.toggleCollapsibleMenu = function () {
            $scope.isCollapsed = !$scope.isCollapsed;
        };

        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function () {
            $scope.isCollapsed = false;
        });
    }

]);
