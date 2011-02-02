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

	it("should create a container and a empty ul list", function() {
    	$('#tags').taglist();
		expect($('#taglist-container')).toContain('.jquery-ui-taglist-container');
		expect($('#taglist-container')).toContain('ul.jquery-ui-taglist-tags');
  	});
	
  	it("should append add button when plugin its called",function(){
		$('#tags').taglist();
		expect($('#taglist-container')).toContain('a.jquery-ui-taglist-button');
	});
  	
	it("should appended button use button plugin",function(){
		$('#tags').taglist();
		expect($('.jquery-ui-taglist-button')).toHaveClass('ui-button');
	});

		  	
  });

  
});