'use strict';

// Setting up route
angular.module('core')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            // Redirect to home view when route not found
            $urlRouterProvider.otherwise('/');

            // Home state routing
            $stateProvider.
                state('main', {
                    url        : '/',
                    controller : 'HomeController',
                    templateUrl: 'modules/core/views/home.client.view.html',
                    seo        : {
                        title      : '',
                        description: '',
                        keywords   : ''
                    }
                });
        }
    ])
    .run(['$rootScope', '$state',
        function ($rootScope, $state) {
            $rootScope.$state = $state;
        }
    ])
;
