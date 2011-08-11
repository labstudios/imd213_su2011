var Animator = new Class({
	
	//Extends: ,
	
	Implements: [Options, Events],
	
	options:{
		width: 50,
		height: 50,
		image: "images/bird.png",
		imageHeight: 250,
		xspeed: 5
	},

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
		
		this.element.setStyles({
			width: this.options.width,
			height: this.options.height,
			position: "fixed",
			background: "url(" + this.options.image + ") no-repeat",
			"background-position-y": 0,
			"left" : "0px"
		});
		
		this.animate.periodical(100, this);
	},
	
	animate: function(){
		var nextPosition = this.element.getStyle("background-position-y").toInt() - this.options.height;
		var nextLeft = this.element.getStyle("left").toInt() + this.options.xspeed;
		if(Math.abs(nextPosition) > this.options.imageHeight - this.options.height)
		{
			nextPosition = 0;
		}
		
		this.element.setStyle("background-position-y", nextPosition.toString() + "px");
		this.element.setStyle("left", nextLeft.toString() + "px");
		
		if(nextLeft.toInt() > window.innerWidth + this.options.width)
		{
			this.element.setStyle("left", (- this.options.width).toString() + "px");
		}
	}
});