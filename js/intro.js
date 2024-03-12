//resource link: https://www.w3schools.com/jquery/default.asp
$(document).ready(function(){

    $("#toggle-text").hide();
    $("#empty-div").hide();
    $("#secret-text").hide();

    $("#doggo-img").click(function(){
        $("#doggo-img").hide();
        $("#toggle-text").show();
    });
    
    $("#toggle-text").click(function(){
        // $("#doggo-img").show();
        $("#toggle-text").hide();
        $("#happy-dog").show();

    });

    $("#happy-dog").click(function(){
        $("#doggo-img").show();
        $("#toggle-text").hide();
        $("#happy-dog").hide();
        
    });

    $("#toggle-text").click(function(){
        $("#secret-text").toggle();
        
    });

    $("#secret-text").click(function(){
        $(".main-img"). addClass("animate-img");

        setTimeout(function()}
            $(".main-img").removeClass
            ("animate-img");
        },2000);

});
