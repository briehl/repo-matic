module.exports = function(config) {
    config.set({

    basePath: '../',
    frameworks: ['jasmine'],
    autoWatch: false,
    browsers: ['Chrome', 'PhantomJS'],
    files: [
        // angular libs
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-aria/angular-aria.js',
        'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-messages/angular-messages.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-touch/angular-touch.js',
        'bower_components/angular-mocks/angular-mocks.js',

        // app code
        'app/scripts/app.js',
        'app/scripts/controllers/*.js',

        // include unit tests
        'test/spec/controllers/*.js',
    ],

    plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        'karma-coverage',
    ],

    reporters: [
        'coverage',
    ],

    preprocessors: {
        '**/lib/*js': 'coverage',
    },

    coverageReporter: {
        type: 'lcov',
        dir: 'coverage/'
    },

    });
};