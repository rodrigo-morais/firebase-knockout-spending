'use strict';

require(['knockout', 'daysViewModel'], function(ko, days) {
    ko.applyBindings(new days());
});