/**
 * Created by Ankur on 8/14/2015.
 */
new WOW().init();
$(function(){
    $('.nav a').click(function(){
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.'+theClass).parent('li').addClass("active");
        //Animate
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });
    $('.scrollTop a').scrollTop();

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip({placement : 'bottom'});
});