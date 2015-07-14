'use strict';

angular.module('core').directive('blockSpace', [
    function () {
        return {
            restrict: 'A',
            link    : function postLink(scope, element, attrs, ctrl) {
                element.bind('keydown keypress', function (event) {
                    if (event.which === 32) {
                        event.preventDefault();
                    }
                });
            }
        };
    }
]);
