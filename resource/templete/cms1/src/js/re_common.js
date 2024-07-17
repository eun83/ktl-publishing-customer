$(document).ready(function () {
    
    // web
    $('.re_gnb_wrap > .wrap_inner > .re_gnb').on('mouseover click', function() {
        $('.re_header').addClass('on');

        // return false;
    });
    $('.re_gnb_wrap > .wrap_inner > .re_gnb').mouseleave(function(){
        $('.re_header').removeClass('on');
    });


    const menuItems = document.querySelectorAll('.re_gnb_wrap > .wrap_inner > .re_gnb > li');

    menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.classList.add('on');
    });

    item.addEventListener('mouseleave', function() {
        this.classList.remove('on');
    });

    item.addEventListener('click', function() {
        this.classList.add('on');
    });
    });

});