define(['knockout', 'firebase', 'moment', '../config', '../day/dayVM'], function(ko, firebase, moment, config, day) {
    return function daysViewModel() {
        var self = this,
        	firebase_url = new config().url,
        	today = moment().format('YYYY-MM-DD');

        self.days = ko.observableArray([]);
        self.today_total = ko.observable();
        
    	var spending = new Firebase(firebase_url);

    	spending.orderByChild("date").equalTo(today).on("child_added", function(snapshot){
		    var spent = snapshot.val();

		    console.log(spent);
		    console.log(spent.value);
		    
		},
		function(errorObject){
		    console.log("The read failed: " + errorObject.code);
		});

		spending.orderByChild("date").on("value", function(snapshot){
		    var spending = snapshot.val().spending,
	    		total = 0;

		    for(var key in spending){
		    	var spent = spending[key],
		    		_day = new day();

		    	if(spent.date === today){
			    	_day.date(spent.date);
			    	_day.item(spent.item);
			    	_day.value('$ ' +  parseFloat(spent.value).toFixed(2));

			    	total = total + parseFloat(spent.value);

			    	self.days.push(_day);
		    	}

		    	self.today_total(total.toFixed(2));
		    }
		},
		(errorObject) => {
		    console.log("The read failed: " + errorObject.code);
		});
	};
});