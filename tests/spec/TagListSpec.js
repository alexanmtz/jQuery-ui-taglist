describe("taglist", function() {

  beforeEach(function() {
    setFixtures(sandbox({
		id: 'taglist-container'
	}));
	$('<input />',{
		name: 'tags',
		id: 'tags'
	}).appendTo('#taglist-container');
	
  });

  describe("simple taglist", function(){
	it("should exist the jQuery ui instance", function() {
    	expect($.ui.taglist).toBeTruthy();
  	});
  
  	it("should append add button when plugin its called",function(){
		$('#tags').taglist();
		expect($('#taglist-container')).toContain('a.jquery-ui-taglist-button');
	});
		  	
  });

  
});