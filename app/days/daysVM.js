define(['knockout', 'firebase', 'moment', 'config', 'dayViewModel'], function(ko, firebase, moment, config, day) {
    return function daysViewModel() {
        var self = this,
        	firebase_url = new config().url,
        	today = moment().format('YYYY-MM-DD'),
        	spending = new Firebase(firebase_url);

        self.days = ko.observableArray([]);
        self.today_total = ko.observable(0);

        self._addToday = function(spent){
        	var total = 0,
        		_day = new day();

        	if(spent.date === today){
		    	_day.date(spent.date);
		    	_day.item(spent.item);
		    	_day.value('$ ' +  parseFloat(spent.value).toFixed(2));

		    	total = parseFloat(self.today_total()) + parseFloat(spent.value);

		    	self.days.push(_day);
	    	}

	    	self.today_total(total.toFixed(2));
        }

    	spending.orderByChild("date").equalTo(today).on("child_added", function(snapshot){
		    var spent = snapshot.val();

		    self._addToday(spent);		    
		},
		function(errorObject){
		    console.log("The read failed: " + errorObject.code);
		});
	};
});