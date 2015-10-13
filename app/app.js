'use strict';

require(['knockout', 'malihu', 'daysViewModel', 'monthsViewModel', 'spentViewModel'], function(ko, malihu, days, months, spent) {
    ko.applyBindings(new days(), document.querySelector('.days'));
    ko.applyBindings(new months(), document.querySelector('.months'));
    ko.applyBindings(new spent(), document.querySelector('#spending'));

    $('document').ready(function(){
	    $('#daily').mCustomScrollbar();
	    $('#monthly').mCustomScrollbar();
	});
});