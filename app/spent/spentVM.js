define(['knockout', 'firebase', 'config'], function(ko, firebase, config) {
    return function spentViewModel() {
        var self = this,
        	firebase_url = new config().url,
        	spending = new Firebase(firebase_url);

        self.date = ko.observable();
        self.item = ko.observable();
        self.value = ko.observable();

        self.add = function(_form) {
        	var form = $('#spending');

    		spending.push({
        		date: _form['dateSpending'].value,
        		item: _form['item'].value,
        		value: _form['value'].value
        	});
	        
	        _form.reset();
	    };
    };
});