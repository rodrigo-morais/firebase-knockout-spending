module.exports = function (config) {
    config.set({
        files: [
            'vendor/knockout/dist/knockout.js',
            'app/init.js',
            'app/*.js',
            'tests/*-spec.js'
        ],
        //reporters: ['spec'],
        autoWatch: true,
        frameworks: ['jasmine', 'requirejs'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-requirejs'
        ],
    });
};