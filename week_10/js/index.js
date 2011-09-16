// JavaScript Document

function keyHit(data)
{
	var currentSize = this.getStyle("font-size").toFloat();
	switch(data.key)
	{
		case "up":
			this.setStyle("font-size", (currentSize + 0.1).toString() + "em");
		break;
		case "down":
			this.setStyle("font-size", (currentSize - 0.1).toString() + "em");
		break;
		case "left":
			this.setStyle("font-size", "1em");
		break;
		default:
		
		break;
	}
}

function typedIn()
{
	var maxChars = 200;
	var output = document.id("available");
	var numChars = this.get("value").length;
	
	
	if(numChars >= maxChars)
	{
		this.set("value", this.get("value").substr(0, maxChars));
		numChars = this.get("value").length;
	}
	output.set("html", numChars.toString() + " of " + maxChars);
}

document.addEvent("domready", function(){
	var main = document.id("main");
	var textarea = document.id("max_length");
	document.addEvent("keydown", keyHit.bind(main));
	textarea.addEvent("keyup", function(){
		//console.log("pressed");
	});
	textarea.addEvent("keyup", typedIn.bind(textarea));
	//textarea.addEvent("change", typedIn.bind(textarea));
});