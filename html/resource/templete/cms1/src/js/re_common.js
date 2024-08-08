$(document).ready(function () {
    
    // web
    $('.re_gnb_wrap > .wrap_inner > .re_gnb > li').on('mouseover click', function() {
        $('.re_gnb_wrap').addClass('on');

        // return false;
    });
    $('.re_gnb_wrap > .wrap_inner > .re_gnb > li').mouseleave(function(){
        $('.re_gnb_wrap').removeClass('on');
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

    // search test 
    $('.btn_top_search_open').on('click', function() {
        $('.total_search').addClass('on');
    });

    $('#top-close-btn').on('click' ,function(e) { //클릭으로 하니 자꾸 에러페이지 뜸
        e.preventDefault();
        $('.total_search').removeClass('on');
    });
    // 전체메뉴 테스트
    $('.btn_allmenu_open').on('click', function() {
        $('.re_header > .re_allmenu').toggleClass('on');

    });
    $('.btn_allmenu_close').on('click',()=>{
        $('.re_header > .re_allmenu').removeClass('on');
    })


});