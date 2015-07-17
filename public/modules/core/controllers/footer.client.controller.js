'use strict';

angular.module('core').controller('FooterController', ['$scope', 'Menus',
    function ($scope, Menus) {
        $scope.isCollapsed    = false;
        $scope.menu           = Menus.getMenu('footer');
        $scope.currentYear    = new Date().getFullYear();

        $scope.toggleCollapsibleMenu = function () {
            $scope.isCollapsed = !$scope.isCollapsed;
        };
    }
]);
