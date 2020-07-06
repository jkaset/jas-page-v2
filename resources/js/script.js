$(document).ready(function() {
    
    /* FOR THE STICKY NAV */

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;' 
    }); 



    /* ANIMATION ON SCROLL*/

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    


});



    /* FOR SCROLL BUTTONS 
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({scrollTop: $(.js--section-features).offset().top}, 1000);
    });

    $('.js--scroll-to-memes').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-memes').offset().top}, 1000);
    });
    
   $('.btn-full').click(function () {
    $('html, body').animate({scrollTop: $(.section-features).offset().top}, 1000);
});

$('.btn-ghost').click(function() {
    $('html, body').animate({scrollTop: $('.meme-features').offset().top}, 1000);
});*/

