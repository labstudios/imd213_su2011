var CoolSlider = new Class({
	
	Implements: [Options, Events],
	
	options:{
		width: 300,
		height: 35
	},
	
	location: 0,
	animating: false,

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
		this.itemsCont = this.element.getElement('ul');
		
		this.items = this.itemsCont.getChildren('li');
		this.left = this.element.getElement('.controls .left');
		this.right = this.element.getElement('.controls .right');
		
		this.containerCont = new Element('div');
		
		this.containerCont.replaces(this.itemsCont);
		this.itemsCont.inject(this.containerCont);
		
		this.itemsCont.setStyles({
			width: (this.options.width * this.items.length) + "px",
			position: 'relative',
			left: '0px'
		});
		
		this.items.setStyles({
			width: this.options.width + "px",
			'list-style-type': 'none',
			float: 'left',
			
		});
		
		this.containerCont.setStyles({
			width: this.options.width + "px",
			height: this.options.height + "px",
			overflow: 'hidden'
		});
		
		this.left.addEvent('click', this.moveLeft.bind(this));
		this.right.addEvent('click', this.moveRight.bind(this));
		
		this.myFx = new Fx.Tween(this.itemsCont, {
		    duration: 500,
		    link: 'cancel',
		    property: 'left'
		});
		
		this.myFx.addEvent('complete', this.doneSliding.bind(this));
	},
	
	moveLeft: function(ev){
		ev.stop();
		if(this.location < this.items.length - 1 && !this.animating)
		{
			this.animating = true;
			this.location++;
			this.myFx.start((this.itemsCont.getStyle('left').toInt() - this.options.width) + 'px');
		}
		
		return false;
	},
	
	moveRight: function(ev){
		ev.stop();
		if(this.location > 0 && !this.animating)
		{
			this.animating = true;
			this.location--;
			this.myFx.start((this.itemsCont.getStyle('left').toInt() + this.options.width) + 'px');
		}
		
		return false;
	},
	
	doneSliding: function(){
		this.animating = false;
	}
});