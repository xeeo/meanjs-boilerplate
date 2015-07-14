'use strict';

angular.module('users').service('Acl', ['Authentication', '$state',
    function (Authentication, $state) {
        var authentication = Authentication;

        var abilities = {
            'admin': [],
            'user' : [],
            'guest': []
        };

        return {
            hasAccess: function (resource) {
                var role = (authentication.user && abilities[authentication.user.role]) ? authentication.user.role : 'guest';
                return (abilities[role].indexOf(resource) !== -1);
            },
            handleAuthenticationRedirects: function (event, toState, toParams) {
                if (angular.isDefined(toState.authenticate)) {
                    if (!Authentication.user && (toState.authenticate === true)) {
                        $state.go('signin');
                        event.preventDefault();
                    } else if (Authentication.user && (toState.authenticate === false)) {
                        $state.go('dashboard');
                        event.preventDefault();
                    }
                }
            }
        };
    }
]);
