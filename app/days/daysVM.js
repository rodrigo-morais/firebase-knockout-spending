define(['knockout', 'firebase', 'moment', '../config', '../day/dayVM'], function(ko, firebase, moment, config, day) {
    return function daysViewModel() {
        var self = this,
        	firebase_url = new config().url,
        	today = moment().format('YYYY-MM-DD');

        self.days = ko.observableArray([]);
        
    	var spending = new Firebase(firebase_url);

    	spending.orderByChild("date").equalTo(today).on("child_added", function(snapshot){
		    var spent = snapshot.val();

		    console.log(spent);
		    console.log(spent.value);
		    
		},
		function(errorObject){
		    console.log("The read failed: " + errorObject.code);
		});

		spending.orderByChild("date").on("value", (snapshot) => {
		    var spendings = snapshot.val();

		    console.log(spendings);
		},
		(errorObject) => {
		    console.log("The read failed: " + errorObject.code);
		});
	};
});