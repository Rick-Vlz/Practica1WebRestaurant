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
            $(".Pselect").css("border", "none");
        } 
        else if (selection == "c1"){
            $(".Pselect").attr("src", "assets/img/img4.jpg");
            $(".Pselect").css("border", "5px solid black");
        }
        else if (selection == "c2"){
            $(".Pselect").attr("src", "assets/img/img5.jpg");
            $(".Pselect").css("border", "5px solid black");
        }
        else{
            $(".Pselect").attr("src", "assets/img/img6.jpg");
            $(".Pselect").css("border", "5px solid black");
        }
    });

    $("#b1").mouseover(function(){
        $("#p1").html("Estrudeln con un gran sabor, y un estilo elgante.");
    });
    $("#b1").mouseout(function(){
        $("#p1").html("");
    });

    $("#b2").click(function(){
        $("#b2").removeClass("responsive-img");
        $("#b2").css({
            with: "370px",
            height: "500px"
        });
        $("#b2").css({
           "opacity": "0.5" 
        });
        $("#p2").html("Estrudeln con un gran sabor, y un estilo elgante.");
    });
    $("#b2").dblclick(function(){
        $("#b2").addClass("responsive-img");
        $("#b2").css({
            with: "100%",
            height: "100%"
        });
        $("#b2").css({
            "opacity": "1" 
         });
        $("#p2").html("");
    });

    $("#BT1").click(function(){
        $('body').css('background-color', 'Black');
        $('body').css('color', 'White');
        
    });
    $("#BT2").dblclick(function(){
    $('body').css({'font-family':'Helvetica'});
    
    });

    $("#BuenFin").click(function(){
        $("a").text("Navidad")
        $("a").attr("href", "https://www.pinterest.com.mx/organizahogar/tendencias-navidad-2018/")
    });
    $("#BuenFin").dblclick(function(){
        $("a").text("El Buen Fin")
        $("a").attr("href", "https://www.elbuenfin.org/")
    });
});