$(window).on("load", start);

function start(){

    $('#slideshow').slick({
        //setting-name: setting-value
        prevArrow:  $("#index_slides_left"),
        nextArrow: $("#index_slides_right"),
        autoplay: true,
        fade: true
    });

    //$("body").css("background-color", "pink");//
    ScrollReveal().reveal('.reveal1');
    ScrollReveal().reveal('.reveal2', { delay: 500 });
    ScrollReveal().reveal('.reveal3', { delay: 1000 });

}