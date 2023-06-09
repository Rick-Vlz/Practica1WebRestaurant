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
    $("#list").change(function(){
        var selection = $("#list").val();
        if (selection == ""){
            $(".Pselect").attr("src", "")
        } 
        else if (selection == "c1"){
            $(".Pselect").attr("src", "assets/img/img4.jpg")
        }
        else if (selection == "c2"){
            $(".Pselect").attr("src", "assets/img/img5.jpg")
        }
        else{
            $(".Pselect").attr("src", "assets/img/img6.jpg")
        }
    });
});