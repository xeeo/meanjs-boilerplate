'use strict';

module.exports = {
    app              : {
        title      : 'Mean Boilerplate',
        description: 'A boilerplate for Mean Apps',
        keywords   : 'MEANJS Mean Boilerplate'
    },
    nodeTime         : process.env.NODETIME_ACCOUNT_KEY || '',
    prerenderToken   : process.env.PRERENDER_TOKEN || '',
    baseUrl          : process.env.BASE_URL || '',
    port             : process.env.PORT || 3000,
    db               : process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean-app',
    mailer           : {
        to     : process.env.MAILER_TO || 'MAILER_TO',
        from   : process.env.MAILER_FROM || 'MAILER_FROM',
        options: {
            service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
            auth   : {
                apiKey: process.env.MANDRILL_APIKEY || 'MANDRILL_APIKEY'
            }
        }
    },
    templateEngine   : 'swig',
    sessionSecret    : 'MEAN',
    sessionCollection: 'sessions',
    s3               : {
        AWSSecretKeyId    : process.env.AWS_SECRET_KEY_ID || '',
        AWSSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
        bucket            : process.env.S3_BUCKET || ''
    },
    facebook         : {
        clientID    : process.env.FACEBOOK_ID || 'APP_ID',
        clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
        callbackURL : (process.env.BASE_URL || 'http://localhost') + '/auth/facebook/callback'
    },
    twitter          : {
        clientID    : process.env.TWITTER_KEY || 'CONSUMER_KEY',
        clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
        callbackURL : (process.env.BASE_URL || 'http://localhost') + '/auth/twitter/callback'
    },
    google           : {
        clientID    : process.env.GOOGLE_ID || 'APP_ID',
        clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
        callbackURL : (process.env.BASE_URL || 'http://localhost') + '/auth/google/callback'
    },
    linkedin         : {
        clientID    : process.env.LINKEDIN_ID || 'APP_ID',
        clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
        callbackURL : (process.env.BASE_URL || 'http://localhost') + '/auth/linkedin/callback'
    },
    github           : {
        clientID    : process.env.GITHUB_ID || 'APP_ID',
        clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
        callbackURL : (process.env.BASE_URL || 'http://localhost') + '/auth/github/callback'
    }
};
