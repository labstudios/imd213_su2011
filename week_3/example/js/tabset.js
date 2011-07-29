var TabSet = new Class({

	//Extends: ,

	Implements: [Options, Events],

	options:{
	   navClass: "nav",
       contentClass: "content",
       linkTag: "a",
       contentTag: "div",
       animation: {duration:1000},
       activeClass: "current"
	},

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
        
        this.nav = this.element.getElement("." + this.options.navClass);
        this.content = this.element.getElement("." + this.options.contentClass);
        
        this.tabs = this.nav.getElements(this.options.linkTag);
        this.contentPieces = this.content.getChildren(this.options.contentTag);
        
        this.contentPieces.dissolve({duration:0});
        this.contentPieces[0].reveal(this.options.animation);
        this.tabs[0].addClass(this.options.activeClass);
        
        this.tabs.addEvent("click", this.navClicked.bind(this));
	},
    
    navClicked: function(e){
        e.stop();
        
        var desired = document.id(e.target).getProperty("data-content");
        this.contentPieces.dissolve(this.options.animation);
        this.content.getElement("." + desired).reveal(this.options.animation);
        
        this.tabs.removeClass(this.options.activeClass);
        document.id(e.target).addClass(this.options.activeClass);
        return false;
    }
    
});