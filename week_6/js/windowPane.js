/**
 * Makes an area show and hide when another area is clicked.
 * @require mootools core
 * @require fx.reveal
*/
var WindowPane = new Class({
    
	
	Implements: [Options, Events],
	
	options:{
        titleClass: "clickspot",
        contentClass: "content"
    },

	initialize: function(element, options)
	{
        //initial setup
		this.element = document.id(element);
		this.setOptions(options);
        
        //get a handle on the elements I am using
        this.clicker = this.element.getElement("." + this.options.titleClass);
        this.content = this.element.getElement("." + this.options.contentClass);
        
        //add a click event to my header
        this.clicker.addEvent("click", this.toggle.bind(this));
        //This creates an Fx.Reveal object so we can just call toggle in the click
        this.fx = new Fx.Reveal(this.content, {duration: 1500, mode:'both'});
	},
    
    toggle: function(){
        this.fx.toggle();
    }
});