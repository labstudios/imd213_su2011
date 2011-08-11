var Writer = new Class({
	
	//Extends: ,
	
	Implements: [Options, Events],
	
	options:{
		out: "Hello world"
	},

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
		
		this.textBox = this.element.getElement("input[type*='text']");
		this.goBtn = this.element.getElement("input[type*='button']");
		
		//this.textBox.set("value", this.options.out);
	}
	
	
});