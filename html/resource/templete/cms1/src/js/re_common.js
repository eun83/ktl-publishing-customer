function isMediaScreenMaxWidth(width) {
    return window.matchMedia("(max-width: "+width+"px)").matches;
}

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
    
    $('.delete_term').on('click', function(e){
        e.preventDefault();

        const $me = $(this);
        const emptyTarget = $me.attr('empty_target');
        if(emptyTarget && emptyTarget != ''){
            $(emptyTarget).val('').focus(); 
        }
    });

    $('#top-close-btn').on('click', function(e) {
        e.preventDefault();
        $('.total_search').removeClass('on');
    });
    
    // gnb 목록 버튼
    $('.btn_allmenu_open').on('click', function() {
        if(isMediaScreenMaxWidth(1240)){
            const $me = $(this);
            if($me.hasClass('actived')){
                $me.removeClass('actived')
            } else {
                $me.addClass('actived')
            }
        } 
        $('.re_header > .re_allmenu').toggleClass('on');
    });
    $('.btn_allmenu_close').on('click',()=>{
        $('.re_header > .re_allmenu').removeClass('on');
    })

    $('.re_allmenu .re_gnb').find('ul > li > a').filter(function() {
        return $(this).siblings('ul').length > 0;
    }).each(function(i){
        const $me = $(this);
        //console.debug('['+(i)+']'+$me.text());
        $me.closest('li').addClass('expand');
    });

    // 메뉴 전환 및 자식 메뉴
    $('.re_allmenu .re_gnb li a').on('click', function(e){
        const $me = $(this);
        const href = $me.attr('href');
        if(href != '' && href != '#'){
            return false;
        }

        if($me.siblings('.re_gnb_depth01').length > 0){
            const $parent = $me.parent();
            if(!$parent.hasClass('on')){
                $me.closest('ul').find('li.on').removeClass('on');
                const subMenu = $me.siblings('ul');
                subMenu.hide();
                $parent.addClass('on');
                subMenu.fadeIn();
            }
        } else if($me.siblings('.re_gnb_depth02, .re_gnb_depth03').length > 0){
            const $parent = $me.parent();
            if($parent.hasClass('on')){
                $me.siblings('ul').slideUp(function(){
                    $parent.removeClass('on');
                });
            } else {
                $me.closest('ul').find('li.on').removeClass('on').find('ul').slideUp();
                $me.siblings('ul').slideDown();
                $parent.addClass('on');
            }
        } else {
            console.warn('href is empty. target.text=' + $me.text());
        }
        return false;
    });

});