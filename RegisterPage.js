$(document).ready(function(){
    $('.field_name').click(function(){
        var field_name;
        if($(this).hasClass() != "field_name") //input field clicked
        {
            field_name = $(this).siblings('.field_name');
        }
        else
        {
            field_name = $(this);
        }

        $(this).velocity({
            fontSize: "10px",
            top: "30px"

        });

    });
});
