'use strict';

require(['knockout', 'daysViewModel', 'monthsViewModel'], function(ko, days, months) {
    ko.applyBindings(new days(), document.querySelector('.days'));
    ko.applyBindings(new months(), document.querySelector('.months'));
});