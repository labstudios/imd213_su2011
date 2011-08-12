document.addEvent("domready", function(){
    var musicForm = new FormCheck("music_form", {
        submitByAjax: true,
        ajaxResponseDiv: 'resp',
		onAjaxSuccess: function(data){
			document.id("music_form").setStyle('display', 'none');
		}
    });
    
    var checkBox = new Element('input', {
        id: "awesome",
        type: "checkbox",
        name: "awesome",
        value: "true",
        'class': "validate['required']"
    });
    var label = new Element('label',{
        for: "awesome",
        html: "I am awesome"
    });
    
    document.id("chocolate").addEvent("click",function(){
       checkBox.inject("music_form");
        label.inject("music_form");
        musicForm.register(checkBox); 
    });
    
});