$(document).ready(function(){
    $("p").eq(0).css("font-Style","italic");
    $("p").eq(1).css("fontWeight","bold");
    $("#Wpic").css("display","none");

    $("p").eq(0).dblclick(function(){
        $("#Wpic").css("display","block");
        });
});