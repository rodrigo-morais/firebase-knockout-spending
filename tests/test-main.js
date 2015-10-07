var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start,
  "paths": {
        'jquery': '/base/vendor/jquery/dist/jquery.min',
        'knockout': '/base/vendor/knockout/dist/knockout',
        'moment': '/base/vendor/moment/moment',
        'malihu': '/base/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar',
        'firebase': '/base/vendor/firebase/firebase',
        'config': '/base/app/config',
        'dayViewModel': '/base/app/day/dayVM',
        'daysViewModel': '/base/app/days/daysVM',
        'monthViewModel': '/base/app/month/monthVM',
        'monthsViewModel': '/base/app/months/monthsVM'
    },
    "shim": {
        'knockout': {
            exports: "knockout",
            deps: ["jquery"]
        }
    }
});
