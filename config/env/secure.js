'use strict';

module.exports = {
    port  : 443,
    assets: {
        lib: {
            css: [
                'public/lib/bootstrap/dist/css/bootstrap.min.css',
                'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
                'https://fonts.googleapis.com/css?family=Titillium+Web:400,600,300,300italic,700',
                'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
            ],
            js : [
                'public/lib/angular/angular.min.js',
                'public/lib/jquery/dist/jquery.min.js',
                'public/lib/underscore/underscore-min.js',
                'public/lib/angular-cookies/angular-cookies.min.js',
                'public/lib/angular-resource/angular-resource.min.js',
                'public/lib/angular-animate/angular-animate.min.js',
                'public/lib/angular-touch/angular-touch.min.js',
                'public/lib/angular-sanitize/angular-sanitize.min.js',
                'public/lib/angular-underscore-module/angular-underscore-module.js',
                'public/lib/angular-adaptive-detection/angular-adaptive-detection.min.js',
                'public/lib/angular-ui-router/release/angular-ui-router.min.js',
                'public/lib/html5shiv/dist/html5shiv.js',
                'public/lib/angular-ui-utils/ui-utils.min.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'public/lib/modernizr/modernizr.js'
            ]
        },
        css: 'public/dist/application.min.css',
        js : 'public/dist/application.min.js'
    }
};
