$(function(){
	//전체메뉴
	$(".all_menu .open_all_menu").click(function(){
		$(".all_menu_wrap").stop().fadeIn();
		$(".main .fp-pause").hide();
		$(".main .fp-play").show();
		//clearInterval(auto_slide_main);
	});
	$(".all_menu .close_all_menu").click(function(){
		$(".all_menu_wrap").stop().fadeOut();
		$(".main .fp-play").hide();
		$(".main .fp-pause").show();
		//auto_slide_main = setInterval(auto_main, 6000);
	});

	$(".all__menu3_open").off().on("click",function(e){
		e.preventDefault();
		if($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).next().slideUp();
		} else {
			$(".all__menu3_open").removeClass('on');
			$(".all__menu3_open").next().slideUp();
			$(this).addClass('on');
			$(this).next().slideDown();
		}
	});
	$(".all__menu4_open").off().on("click",function(e){
		e.preventDefault();
		if($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).next().slideUp();
		} else {
			$(".all__menu4_open").removeClass('on');
			$(".all__menu4_open").next().slideUp();
			$(this).addClass('on');
			$(this).next().slideDown();
		}
	});


	//반응형 전체메뉴
	if ($(window).width() < 1240) {
		gnbMobile();
	} else {
		gnbWeb();
	}
	$(window).resize(function () {
		if ($(window).width() < 1240) {
			gnbMobile();
		} else {
			gnbWeb();
		}
	});

	$(".gnb_depth1_item").on("mouseover focusin", function () {
		$(".gnb_depth1_item").removeClass("active");
		$("body").removeClass("fixed");
		$(".gnb_depth1_item .gnb_depth2").not($
				(this).children(".gnb_depth2")).hide();


		$(".header_inner_gnb").addClass("active");
		$("body").addClass("fixed");
		$(this).addClass("active");
		$(this).children(".gnb_depth2").show();
	});
	$(".gnb_wrap").on("mouseleave", function () {
		$(".header_inner_gnb").removeClass("active");
		$(".gnb_depth1_item").removeClass("active");
		$("body").removeClass("fixed");
		$(".gnb_depth1_item .gnb_depth2").hide();
	});



	$('html').click(function (e) {
		if (!$(e.target).hasClass("btn_site")) {
			$(".slt_list").stop().fadeOut();
			$(".btn_site").removeClass("active");
			$(".slt_list").stop().fadeOut();
			$(".btn_site").removeClass("active");
		}
	});

    //상단 검색
    $(".all_menu .btn-search").click(function(){
    	 $(this).toggleClass('on');
	    if($(this).hasClass('on')) {
	     	 $(this).attr('title','검색 닫기');
	       }
	       else {
	     	  $(this).attr('title','검색 펼치기');
	       }
        if($(".search-form_wrap").css("display") === "block"){
            $(".search-form_wrap").stop().fadeOut();
        }else{
            $(".search-form_wrap").stop().fadeIn();
        }
    });

});

function gnbWeb() {
	$(".all_depth2").show();
}

function gnbMobile() {
	$(".all_depth2").hide();
	$(".all_depth1_item .depth1").click(function () {
		if ($(this).next(".all_depth2").css("display") === "block") {
			return false;
		}
		$(".all_depth2").slideUp();
		$(this).next(".all_depth2").slideDown();
	});
	$(".all_wrap .depth1").off().on("click",function(e){
		e.preventDefault();
		if($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).next().slideUp();
		} else {
			$(".all_wrap .depth1").removeClass('on');
			$(".all_wrap .depth1").next().slideUp();
			$(this).addClass('on');
			$(this).next().slideDown();
		}
	});
}