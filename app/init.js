requirejs.config({
    "baseUrl": "/app",
    "urlArgs": "v=1.0",
    "paths": {
        'jquery': '../vendor/jquery/dist/jquery.min',
        'knockout': '../vendor/knockout/dist/knockout',
        'bootstrap': '../vendor/bootstrap/dist/js/bootstrap.min',
        'firebase': '../vendor/firebase/firebase'
    },
    "shim": {
        'knockout': {
            exports: "knockout",
            deps: ["jquery"]
        },
        'firebase': {
            exports: "firebase"
        }
    },
    deps: ["app"]
});