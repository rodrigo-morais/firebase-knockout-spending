define(['knockout', 'firebase', 'moment', 'config', 'monthViewModel'], function(ko, firebase, moment, config, month) {
    return function monthsViewModel() {
        var self = this,
        	firebase_url = new config().url,
        	spending = new Firebase(firebase_url),
        	last_year = 0,
        	last_month = 0,
        	count = 0;

        self.months = ko.observableArray([]);

		
		spending.orderByChild("date").on("child_added", function(snapshot){
		    var spent = snapshot.val(),
		    	year = new Date(spent.date).getFullYear(),
		    	n_month = new Date(spent.date).getMonth() + 1,
		    	total = 0,
		    	_month = new month(),
		    	last = self.months().length > 0 ? self.months()[self.months().length - 1] : undefined;

			
			if(last && (last_month === n_month && last_year === year)){
				last.total(last.total() + parseFloat(spent.value));
				
				count = count + 1;

				last.average(last.total() / count);
			}
			else{
				_month.month(moment(new Date(spent.date)).format('MMMM'));
				_month.year(year);
				_month.total(parseFloat(spent.value));
				_month.average(parseFloat(spent.value));

				self.months.push(_month);

				count = 1;
			}

			last_month = n_month;
			last_year = year;
		},
		function(errorObject){
		    console.log("The read failed: " + errorObject.code);
		});
	};
});