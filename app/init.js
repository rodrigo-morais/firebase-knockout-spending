requirejs.config({
    "baseUrl": "/app",
    "urlArgs": "v=1.0",
    "paths": {
        'jquery': '../vendor/jquery/dist/jquery.min',
        'knockout': '../vendor/knockout/dist/knockout',
        'bootstrap': '../vendor/bootstrap/dist/js/bootstrap.min',
        'firebase': '../vendor/firebase/firebase',
        'moment': '../vendor/moment/moment',
        'malihu': '../vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar',
        'config': 'config',
        'dayViewModel': 'day/dayVM',
        'daysViewModel': 'days/daysVM',
        'monthViewModel': 'month/monthVM',
        'monthsViewModel': 'months/monthsVM',
        'spentViewModel': 'spent/spentVM'
    },
    "shim": {
        'knockout': {
            exports: "knockout",
            deps: ["jquery"]
        },
        'malihu': {
        	exports: 'malihu',
        	deps: ['jquery']
        },
        'firebase': {
            exports: "firebase"
        },
        'moment': {
        	exports: 'moment'
        }
    },
    deps: ["app"]
});