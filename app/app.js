'use strict';

require(['knockout', 'malihu', 'daysViewModel', 'monthsViewModel'], function(ko, malihu, days, months) {
    ko.applyBindings(new days(), document.querySelector('.days'));
    ko.applyBindings(new months(), document.querySelector('.months'));

    $('document').ready(function(){
	    $('#daily').mCustomScrollbar();
	    $('#monthly').mCustomScrollbar();
	});
});