define(['knockout'], function(ko) {
    return function monthViewModel() {
        var self = this;

        self.month = ko.observable();
        self.month_date = ko.observable();
        self.year = ko.observable();
        self.total = ko.observable();
        self.average = ko.observable();
        self.spending = ko.observable();

        self.date = ko.pureComputed(function(){
	        return self.month() + '/' + self.year();
	    });
    };
});