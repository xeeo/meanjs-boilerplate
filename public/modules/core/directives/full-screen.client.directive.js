'use strict';

angular.module('core').directive('fullScreen', [
    function() {
        return {
            restrict: 'A',
            link: function (scope, elem) {
                var $window = jQuery(window);

                var updateSize = function () {
                    elem.css({
                        width: $window.width() + 'px',
                        height: $window.height() + 'px'
                    });
                };

                $window.on('resize', updateSize);
                updateSize();
            }
        };
    }
]);
