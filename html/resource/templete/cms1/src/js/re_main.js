$(document).ready(function () {
    
    
//css 테스트 하느라 넣어둔거
    // const menuItems = document.querySelectorAll('.visual_slider > .visual_content');

    // menuItems.forEach(item => {
    //     item.addEventListener('mouseenter', function() {
    //         this.classList.add('on');
    //     });

    //     item.addEventListener('mouseleave', function() {
    //         this.classList.remove('on');
    //     });

    //     item.addEventListener('click', function() {
    //         this.classList.add('on');
    //     });
    // });

    // 비주얼 슬라이더
    $('#slider_visual').on('init', function(_event, slick){
        slick.options.appendArrows.find('.stop').click(function(){
          let $me = $(this);
          if($me.hasClass('stop')){
              $me.removeClass('stop').addClass('play');
              slick.$slider.slick('slickPause'); // 슬라이더 중지
          } else {
              $me.removeClass('play').addClass('stop');
              slick.$slider.slick('slickPlay'); // 슬라이더 시작
          }
          return false;
        });
    
        // 마지막 슬라이더에 .slick-active-last 추가하기 (초기값)
        if(slick.slideCount > 0 && slick.options.slidesToShow > 0){
          slick.$slider.find('.slick-active').eq(slick.options.slidesToShow-1).addClass('slick-active-last');
        }
    }).slick({
        slide: 'div',		            // 슬라이드 되어야 할 태그 ex) div, li 
        infinite: false, 	          // 무한 반복 옵션	 
        slidesToShow: 1,		        // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1,		      // 스크롤 한번에 움직일 컨텐츠 개수
        variableWidth: true,
        speed: 500,	              // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        dots: false, 		            // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: true,			      // 자동 스크롤 사용 여부
        autoplaySpeed: 2500, 		  // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: true,		    // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false,		        // 세로 방향 슬라이드 옵션
        draggable: true, 	        // 드래그 가능 여부 
        //dotsClass: "slick-dots", 	// 아래 나오는 페이지네이션(점) css class 지정
        arrows: true, 		        // 옆으로 이동하는 화살표 표시 여부
        appendArrows: $('#slider_visual').siblings('.slider_dots'),
        prevArrow: "<button class='prev'><span class='hide'>이전</span></button>",
        nextArrow: "<button class='next'><span class='hide'>다음</span></button>",
        responsive: [               // 반응형 웹 구현 옵션
            {
                breakpoint: 1280,        // 화면 사이즈
                settings: {
                    slidesToShow: 1,        // 위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    variableWidth: false,
                    infinite: true, 
                }
            }
        ]
    });

    // 이슈 슬라이더
    $('#slider-issue').on('init', function(_event, slick){
        slick.options.appendArrows.find('.stop').click(function(){
          let $me = $(this);
          if($me.hasClass('stop')){
              $me.removeClass('stop').addClass('play');
              slick.$slider.slick('slickPause'); // 슬라이더 중지
          } else {
              $me.removeClass('play').addClass('stop');
              slick.$slider.slick('slickPlay'); // 슬라이더 시작
          }
          return false;
        });
    
        // 마지막 슬라이더에 .slick-active-last 추가하기 (초기값)
        if(slick.slideCount > 0 && slick.options.slidesToShow > 0){
          slick.$slider.find('.slick-active').eq(slick.options.slidesToShow-1).addClass('slick-active-last');
        }
    }).slick({
        slide: 'div',
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true,
        arrows: true,
        appendArrows: $('#slider-issue').siblings('.issue_controller'),
        prevArrow: "<button class='prev'><span class='hide'>이전</span></button>",
        nextArrow: "<button class='next'><span class='hide'>다음</span></button>",
        responsive: [{
                breakpoint: 1239,
                settings: {
                    arrows: false,
            }
        }]
    });

    // 알림창 슬라이더
    $('#slider-banner').on('init', function(_event, slick){
        slick.options.appendArrows.find('.stop').click(function(){
          let $me = $(this);
          if($me.hasClass('stop')){
              $me.removeClass('stop').addClass('play');
              slick.$slider.slick('slickPause'); // 슬라이더 중지
          } else {
              $me.removeClass('play').addClass('stop');
              slick.$slider.slick('slickPlay'); // 슬라이더 시작
          }
          return false;
        });
    }).slick({
        slide: 'div',		            // 슬라이드 되어야 할 태그 ex) div, li 
        infinite: true, 	          // 무한 반복 옵션	 
        slidesToShow: 1,		        // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1,		      // 스크롤 한번에 움직일 컨텐츠 개수
        centerMode: true,
        centerPadding: '0px',
        speed: 500,	              // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, 		        // 옆으로 이동하는 화살표 표시 여부
        appendArrows: $('#slider-banner').siblings('.slider_dots'),
        prevArrow: '<button class="prev "><span class="hide">이전</span></button>',
        nextArrow: '<button class="next "><span class="hide">다음</span></button>',
        dots: false, 		            // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: true,			      // 자동 스크롤 사용 여부
        autoplaySpeed: 2500, 		  // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: true,		    // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false,		        // 세로 방향 슬라이드 옵션
        draggable: true, 	        // 드래그 가능 여부 
        //dotsClass: "slick-dots", 	// 아래 나오는 페이지네이션(점) css class 지정
        //appendDots: document.getElementById('slider_aca_dots'), // dot 버튼 생길 위치
        responsive: [               // 반응형 웹 구현 옵션
            {
                breakpoint: 960,        // 화면 사이즈
                settings: {
                    slidesToShow: 1        // 위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                }
            },
            {
                breakpoint: 768,        // 화면 사이즈
                settings: {
                    slidesToShow: 1        // 위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                }
            }
        ]
    });

    // 파트너스 슬라이더
    $('#slider-partners').slick({
        slide: 'div',		            // 슬라이드 되어야 할 태그 ex) div, li 
        infinite: true, 	          // 무한 반복 옵션	 
        slidesToShow: 3,		        // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1,		      // 스크롤 한번에 움직일 컨텐츠 개수
        centerMode: true,
        centerPadding: '0px',
        variableWidth: true,
        speed: 500,	              // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, 		        // 옆으로 이동하는 화살표 표시 여부
        dots: false, 		            // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: true,			      // 자동 스크롤 사용 여부
        autoplaySpeed: 2500, 		  // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: true,		    // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false,		        // 세로 방향 슬라이드 옵션
        draggable: true, 	        // 드래그 가능 여부 
        //dotsClass: "slick-dots", 	// 아래 나오는 페이지네이션(점) css class 지정
        //appendDots: document.getElementById('slider_aca_dots'), // dot 버튼 생길 위치
        responsive: [               // 반응형 웹 구현 옵션
            {
                breakpoint: 960,        // 화면 사이즈
                settings: {
                    slidesToShow: 1        // 위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                }
            },
            {
                breakpoint: 768,        // 화면 사이즈
                settings: {
                    slidesToShow: 1        // 위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                }
            }
        ]
    });


});