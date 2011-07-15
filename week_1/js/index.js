window.addEvent("domready", function(){
	var nav = document.id("nav");
	var content = document.id("content");
	var atags = nav.getElements("a");
	var divs = content.getElements("div");
	
	divs.dissolve();
	
	atags.addEvent("click", function(e){
		e.stop();
		var desired = document.id(e.target).getProperty("data-content");
		divs.dissolve();
		content.getElement("." + desired).reveal();
		return false;
	});
});