'use strict';

// Setting up route
angular.module('cms')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            //$locationProvider.html5Mode(true).hashPrefix('!');

            // Redirect to home view when route not found
            $urlRouterProvider.otherwise('/');

            // Home state routing
            $stateProvider.
                state('home', {
                    url        : '/',
                    controller : 'HomeController',
                    templateUrl: 'modules/cms/views/home.client.view.html',
                    seo        : {
                        title      : '',
                        description: '',
                        keywords   : ''
                    }
                });
        }
    ])
;
