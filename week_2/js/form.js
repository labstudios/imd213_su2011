document.addEvent("domready", function(){
    var musicForm = new FormCheck("music_form", {
        /*submit: false,
        onValidateSuccess: function(){
            alert("Yipee! We don't care what you think.");
        }
        submitByAjax: true,
        ajaxResponseDiv: 'resp'*/
        display: {
            //errorsLocation: 2,
            //listErrorsAtTop: true
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