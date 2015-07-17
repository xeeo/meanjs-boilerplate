'use strict';

module.exports = {
    assets: {
        lib  : {
            css: [
                'public/lib/bootstrap/dist/css/bootstrap.css',
                'public/lib/bootstrap/dist/css/bootstrap-theme.css',
                'https://fonts.googleapis.com/css?family=Titillium+Web:400,600,300,300italic,700',
                'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
            ],
            js : [
                'public/lib/angular/angular.js',
                'public/lib/jquery/dist/jquery.js',
                'public/lib/underscore/underscore.js',
                'public/lib/angular-cookies/angular-cookies.js',
                'public/lib/angular-resource/angular-resource.js',
                'public/lib/angular-animate/angular-animate.js',
                'public/lib/angular-touch/angular-touch.js',
                'public/lib/angular-sanitize/angular-sanitize.js',
                'public/lib/angular-adaptive-detection/src/angular-adaptive-detection.js',
                'public/lib/angular-underscore-module/angular-underscore-module.js',
                'public/lib/angular-ui-router/release/angular-ui-router.js',
                'public/lib/html5shiv/dist/html5shiv.js',
                'public/lib/angular-ui-utils/ui-utils.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/modernizr/modernizr.js'
            ]
        },
        css  : [
            'public/css/core/sass/core.css'
        ],
        js   : [
            'public/config.js',
            'public/application.js',
            'public/modules/*/*.js',
            'public/modules/*/**/*.js'
        ]
    }
};
