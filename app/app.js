'use strict';

require(['knockout', 'days/daysVM'], function(ko, days) {
    ko.applyBindings(new days());
});