$(document).ready( function(){

    var activeCon = "#intro";
    
    

    setTimeout(function(){
        $("#introductionP").append("<p>Naoki Urasawa is easily one of the most talented <a href='https://en.wikipedia.org/wiki/Mangaka'>manga artists</a> in the industry having made countless influential and critically acclaimed manga throughout his career. I made this page to share my thoughts on his work. If you're new to manga then Urasawa is a great place to start. Here are some of his manga that I strongly recommend reading: </p>");
        $("p").velocity("transition.flipYIn");
    }, 1500);

    $("#introThumb").click(function(){
        
        $("#intro").fadeIn();
        activeCon = "#intro";
        $("p").velocity("transition.flipYIn");
    });

    $("#introLink").click(function(){
        
        $(activeCon).css("display", "none");
        $("#intro").fadeIn();
        activeCon = "#intro";
        $("p").velocity("transition.flipYIn");
    });

    $("#monsterThumb").click(function(){
        
        $(activeCon).fadeOut(1500);
        $("#monster").fadeIn(1000);
        activeCon = "#monster";
        $("p").velocity("transition.flipYIn");
    });

    $("#monsterLink").click(function(){
        
        $(activeCon).fadeOut(1500);
        $("#monster").fadeIn(1000);
        activeCon = "#monster";
        $("p").velocity("transition.flipYIn");
    });

    $("#plutoThumb").click(function(){
        
        $(activeCon).fadeOut(1000);
        $("#pluto").fadeIn(1000);
        activeCon = "#pluto";
        $("p").velocity("transition.flipYIn");
    });

    $("#plutoLink").click(function(){
        
        $(activeCon).fadeOut(1500);
        $("#pluto").fadeIn(1000);
        activeCon = "#pluto";
        $("p").velocity("transition.flipYIn");
    });

    $("#manbenThumb").click(function(){
        
        $(activeCon).fadeOut(1500);
        $("#manben").fadeIn(1000);
        activeCon = "#manben";
        $("p").velocity("transition.flipYIn");
    });

    $("#manbenLink").click(function(){
        
        $(activeCon).fadeOut(1500);
        $("#manben").fadeIn(1000);
        activeCon = "#manben";
        $("p").velocity("transition.flipYIn");
    });

    $("#centuryThumb").click(function(){
        
        $(activeCon).fadeOut(1500);
        $("#century").fadeIn(1000);
        activeCon = "#century";
        $("p").velocity("transition.flipYIn");
    });

    $("#centuryLink").click(function(){
        
        $(activeCon).fadeOut(1500);
        $("#century").fadeIn(1000);
        activeCon = "#century";
        $("p").velocity("transition.flipYIn");
    });

});
