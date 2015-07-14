'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', 'Acl',
    function ($scope, Authentication, Menus) {
        $scope.authentication = Authentication;
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
