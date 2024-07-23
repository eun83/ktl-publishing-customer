$(function(){
         $('.drop .drop-btn').attr('title','메뉴 펼치기');
         $('.drop .drop-btn').on("mouseover focusin", function (){
	         $(this).addClass('on');
	         $(this).attr('title','메뉴 닫기');
	         $(this).next('.drop-list').show('fast');
	         $(this).closest('.drop').siblings().find('.drop-list').hide('fast');

	         $(this).next('.drop-list').on("mouseleave", function (){
	            $(this).closest('.drop').children('.drop-list').hide('fast');
	         })
	         $('.drop').on("mouseleave", function (){
	            $(this).children('.drop-list').hide('fast');
	         })
	      });
         $('.drop .drop-btn').on("mouseleave", function (){
	         $(this).removeClass('on');
	         $(this).attr('title','메뉴 펼치기');
	      });


	    $(".head").click(function(){
	      if($(this).hasClass('on')){
	         $(this).removeClass('on');
	         $(this).attr('title','답변 열기');
	         $(this).next(".answ").slideToggle(200);
	      } else {
	         $(this).addClass('on');
	         $(this).attr('title','답변 닫기');
	         $(this).next(".answ").slideToggle(200);
	      }
	   });


   // 통합검색 탭 슬라이드
     $('.all-search-tab .main-tab-nav').slick({
	      slidesToShow:6,
	      slidesToScroll: 3,
	      autoplay: false,
	      dots: false,
	      arrows: false,
	      autoplaySpeed: 2000,
	      responsive: [
	        {
	        breakpoint: 1239,
	          settings: {
	          slidesToShow: 4,
	          slidesToScroll: 1,
	          }
	        },
	        {
	        breakpoint: 768,
	          settings: {
	          slidesToShow: 3,
	          slidesToScroll: 1,
	          }
	        },
	      ]
	   });

    //통합검색 탭
    $('.main-tab-nav .tab-st a').css('min-width', $('.main-tab-nav .tab-st').width());
    $('.main-tab-nav .tab-st a').on('click',function(e){
    e.preventDefault();
    var tabCon = $(this).attr('href');
    $(tabCon).attr('tabindex',0).focus();

    $(this).closest('.main-tab-nav').find('.tab-st').removeClass('on');
    $(this).parent().addClass('on');

    $(this).closest('.main-tab').find('.main-tab-con > div').removeClass('on');
    $(tabCon).addClass('on');
    // $('.main-tab .slick-slider').slick('refresh');
    });
   $(window).resize(function () {
      if ($(window).width() < 1240) {
         $('.main-tab-nav .tab-st a').css('min-width', $('.main-tab-nav .tab-st').width());
      }
   });
});

