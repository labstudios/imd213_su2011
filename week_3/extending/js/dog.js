var Dog = new Class({
	
	Extends: Animal,
	
	Implements: [Options, Events],
	
	options:{},
    
    says: "Bark!",

	initialize: function(element, options)
	{
		this.parent(element, options);
	},
    
    speak: function(e)
    {
        alert("My " + this.options.furColor + " dog says:");
        this.parent(e);
    }
});