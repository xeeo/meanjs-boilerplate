'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName)
    .config(['$locationProvider',
        function ($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ])
    .run(['$rootScope', '$state',
       function ($rootScope, $state) {
           $rootScope.state = $state;
           $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
               $rootScope.bodyClasses = {};
               var className = toState.name;
               className     = className.replace(/\s/g, '-');

               $rootScope.bodyClasses[className] = true;
           });
       }
   ]);

//Then define the init function for starting up the application
angular.element(document).ready(function () {
    //Fixing facebook bug with redirect
    if (window.location.hash === '#_=_') window.location.hash = '#!';

    //Then init the app
    angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
