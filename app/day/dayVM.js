define(['knockout'], function(ko) {
    return function dayViewModel() {
        var self = this;

        self.date = ko.observable();
        self.item = ko.observable();
        self.value = ko.observable();
    };
});