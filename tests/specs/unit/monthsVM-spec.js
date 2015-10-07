define(['monthViewModel', 'monthsViewModel'], function(monthViewModel, monthsViewModel) {
	describe("Add month to array of months", function() {
	  var months = new monthsViewModel();

	  beforeEach(function(){
	  	var month_september_2015 = new monthViewModel({month: 'September', year: 2015, total: 100, average: 100}),
	  		month_october_2015 = new monthViewModel({month: 'October', year: 2015, total: 100, average: 100});

  		months.months.push(month_september_2015);
  		months.months.push(month_october_2015);
	  });

	  it("should return three months after add a new month in an array with two months", function() {
	    var spent = {
	    	date: '2015-11-01',
	    	value: 100
	    };

	    months._add_month(spent);

	    expect(3).toBe(months.months().length);
	  });
	});
});