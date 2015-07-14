'use strict';

angular.module('core').directive('clearFieldError', [
	function() {
		return {
			require: 'ngModel',
			link: function postLink(scope, element, attrs, ctrl) {
				element.bind('change', function() {
					ctrl.$setValidity('fieldError', true);
				});
			}
		};
	}
]);
