/**
 * Be sure to rename your class!
*/
var AjaxFeed = new Class({

    //Extends: ,

	Implements: [Options, Events],

	options:{
		serverScript: "faq.php",
		clickTag: "a",
		contentTag: "div"
	},

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
		
		this.clickers = this.element.getElements(this.options.clickTag);
		this.content = this.element.getElement(this.options.contentTag);
		
		this.clickers.addEvent("click", this.clicked.bind(this));
	},
	
	clicked: function(ev){
		ev.stop();
		
		var ajdata = ev.target.get("data-ajax");
		
		var req = new Request.HTML({
			url: this.options.serverScript,
			data: {
				info: ajdata
			},
			update: this.content
		});
		req.addEvent("complete", this.loaded.bind(this));
		this.content.set("html", "loading. . .");
		req.send();
		
		return false;
	},
	
	loaded: function(dt, lt, data){
		if(data === "FAIL!")
		{
			this.content.set("html", "X");
		}
	}
});