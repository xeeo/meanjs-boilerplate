'use strict';

angular.module('core').directive('visuallyAppendTarget', [
    '$rootScope',
    function($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var $window = jQuery(window);

                var updateSize = function () {
                    var $target = jQuery(attrs.visuallyAppendTarget),
                        offset = $target.height();

                    elem.css({
                        'margin-bottom': (-1) * offset + 'px',
                        'padding-bottom': offset + 'px'
                    });
                };

                $window.on('resize', updateSize);
                $rootScope.$on('$includeContentLoaded', updateSize);
            }
        };
    }
]);
