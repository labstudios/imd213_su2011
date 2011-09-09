document.addEvent("domready", function(){
	$$(".slider").each(function(el){
		new CoolSlider(el);
	});
});