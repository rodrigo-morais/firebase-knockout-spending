define(['knockout', 'firebase', 'moment', 'config', 'monthViewModel'], function(ko, firebase, moment, config, month) {
    return function daysViewModel() {
        var self = this,
        	firebase_url = new config().url,
        	spending = new Firebase(firebase_url);

        self.months = ko.observableArray([]);

		spending.orderByChild("date").on("value", function(snapshot){
		    var spending = snapshot.val();
		},
		(errorObject) => {
		    console.log("The read failed: " + errorObject.code);
		});
	};
});