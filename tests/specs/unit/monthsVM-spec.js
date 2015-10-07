define(['monthViewModel', 'monthsViewModel'], function(monthViewModel, monthsViewModel) {
	describe("Add month to array of months", function() {
	  var months;

	  beforeAll(function(){
	  	var month_september_2015 = new monthViewModel(),
	  		month_october_2015 = new monthViewModel();

  		months = new monthsViewModel();

  		month_september_2015.month('September');
  		month_september_2015.year(2015);
  		month_september_2015.total(100);
  		month_september_2015.average(100);
  		month_september_2015.spending(1);
  		
  		months.months.push(month_september_2015);
  		
  		month_october_2015.month('October');
  		month_october_2015.year(2015);
  		month_october_2015.total(100);
  		month_october_2015.average(100);
  		month_october_2015.spending(1);

  		months.months.push(month_october_2015);
	  });

	  it("should return three months after add a new month in an array with two months", function() {
	    var spent = {
	    	date: '2015-11-02',
	    	value: 100
	    };

	    months._add_month(spent);

	    expect(3).toBe(months.months().length);
	  });

	  it("should return total as 150 to November of 2015 after add more one spent to months array", function() {
	    var spent = {
	    	date: '2015-11-02',
	    	value: 50
	    };

	    months._add_month(spent);

	    var month = months.months().filter(function(_month){
	    	return _month.year() === 2015 && _month.month() === 'November';
	    });

	    month = month.length > 0 ? month[0] : undefined;

	    expect(150).toBe(month.total());
	  });

	  it("should return average as 75 to October of 2015 after add more one spent to months array", function() {
	    var spent = {
	    	date: '2015-10-01',
	    	value: 50
	    };

	    months._add_month(spent);

	    var month = months.months().filter(function(_month){
	    	return _month.year() === 2015 && _month.month() === 'October';
	    });

	    month = month.length > 0 ? month[0] : undefined;

	    expect(75).toBe(month.average());
	  });
	});
});