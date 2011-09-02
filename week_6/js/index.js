document.addEvent("domready", function(){
    //this is a cool solution, but a little confusing
    $$(".pane").each(function(el){
        new WindowPane(el);
    });
    /*var win1 = new WindowPane("window1");
    var win2 = new WindowPane("window2");
    var win3 = new WindowPane("window3");*/
});