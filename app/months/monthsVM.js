define(['knockout', 'firebase', 'moment', 'config', 'monthViewModel'], function(ko, firebase, moment, config, month) {
    return function monthsViewModel() {
        var self = this,
        	firebase_url = new config().url,
        	spending = new Firebase(firebase_url);

        self.months = ko.observableArray([]);
        self.total = ko.computed(function(){
        	return self.months().reduce(function(previous, _month){
        		return previous + _month.total();
        	}, 0).toFixed(2);
        });

        self._add_month = function(spent){
        	var date = new Date(spent.date),
        		year,
	    		n_month,
	    		total = 0,
	    		_month = new month(),
	    		month_name,
	    		last;

	    	date.setDate(date.getDate() + 1);
    		year = date.getFullYear();
    		n_month = date.getMonth();
    		month_name = moment(date).format('MMMM');
	    	last = self.months().filter(function(__month){return __month.month() === month_name && __month.year() === year });

	    	last = last.length > 0 ? last[0] : undefined;

    		if(last){
				last.total(last.total() + parseFloat(spent.value));
				last.spending(last.spending() + 1);

				last.average(last.total() / last.spending());			
			}
			else{
				_month.month_date(new Date(year, n_month, 1));
				_month.month(month_name);
				_month.year(year);
				_month.total(parseFloat(spent.value));
				_month.average(parseFloat(spent.value));
				_month.spending(1);

				self.months.push(_month);
			}
        };

		
		spending.orderByChild("date").on("child_added", function(snapshot){
		    var spent = snapshot.val(),
		    	_months = [];

			self._add_month(spent);

			_months = self.months().sort(function(prev, next){
				return next.month_date() - prev.month_date();
			});

			self.months(_months);
		},
		function(errorObject){
		    console.log("The read failed: " + errorObject.code);
		});
	};
});