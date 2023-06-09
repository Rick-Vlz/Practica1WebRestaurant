$(document).ready(function(){
    $(document).ready(function(){
        $('select').formSelect();
    });
    $("p").eq(0).css("font-Style","italic");
    $("p").eq(1).css("fontWeight","bold");

    $("p").eq(0).dblclick(function(){
        $("#Wpic").removeClass("hide");
    });
    $("p").eq(0).click(function(){
        $("#Wpic").addClass("hide");
    });
});