// nav scroll color change 

$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 80) {
            $(".sticky-top a").css("color", "white");
            $(".sticky-top").css('background-color', 'black');


        } else {
            $(".sticky-top").css('background-color', 'transparent');
        }
    });
});
