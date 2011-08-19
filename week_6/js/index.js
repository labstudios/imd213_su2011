document.addEvent("domready", function(){
    $$(".pane").each(function(el){
        new WindowPane(el);
    });
});