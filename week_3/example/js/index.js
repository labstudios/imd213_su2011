document.addEvent("domready", function(){
    var tab1 = new TabSet("tabs1");
    var tab2 = new TabSet("tabs2", {contentClass: "navcontent", linkTag:"li", activeClass: "active", animation:{duration: 2000, transition: Fx.Transitions.Bounce.easeOut}});
});