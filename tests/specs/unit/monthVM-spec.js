define(['monthViewModel'], function(monthViewModel) {
	describe("Month", function() {
	  it("should return month and year together in date attribute", function() {
	    var month = new monthViewModel();

	    month.month('November');
	    month.year(2015);

	    expect(month.date()).toBe('November/2015');
	  });
	});
});