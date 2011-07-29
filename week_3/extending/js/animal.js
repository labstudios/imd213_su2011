var Animal = new Class({
	
	Implements: [Options, Events],
	
	options:{
	   furColor: "white"
	},
    
    says: "I have no form.",
    afterEating: "Yum",
    

	initialize: function(element, options)
	{
		this.element = $(element);
		this.setOptions(options);
        
        this.element.addEvent("click", this.speak.bind(this));
	},
    
    speak: function(e)
    {
        console.log(e.target);
        alert(this.says);
    }
});