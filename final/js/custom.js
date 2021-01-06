

$(document).ready( function(){

    //document.body.scrollHeight or document.documentElement.scrollHeight
    var myH = document.documentElement.scrollHeight

    setTimeout(function(){
        $('html').fadeIn(1000);
    }, 500);

    setTimeout(function(){
        $('p').fadeIn(1500);
        $('h1').fadeIn(1500);
        $('#profile').fadeIn(2000);
    }, 1500);

    setTimeout(function(){
        $('#navlist').fadeIn(1500);
        $('footer').fadeIn(2000);
    }, 2000);

    
    
});
