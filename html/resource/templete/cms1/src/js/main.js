$(function(){
  // slick
  function partnerSlide(item) {
    var slideWrap = $(item).closest('.slide');
    var stopBtn = slideWrap.find('.slick-stop');
    var playBtn = slideWrap.find('.slick-play');
  }

  $(".slick-stop").click(function(){
    $(this).parents().children(".slick-slider").slick('slickPause');
    $(this).hide();
    $(this).next(".slick-play").show();
  });
  $(".slick-play").click(function(){
    $(this).parents().children(".slick-slider").slick('slickPlay');
    $(this).hide();
    $(this).prev(".slick-stop").show();
  });

  $('.popup_box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots:true,
    arrows : true,
    autoplaySpeed: 2000,
    responsive: [
      {
      breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
      },
      {
      breakpoint: 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
      },
      {
      breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
      }
  ]
  });
  partnerSlide('.biz-partner');

  var width = ($('body').width() - 670)/2;
  $('.mainslider').slick({
    infinite: true,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots: true,
    autoplaySpeed:2500,
    centerMode: true,
    centerPadding: width+'px',
    variableWidth:true,
    responsive: [
      {
      breakpoint: 1239,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth:false,
        arrows: false,
        }
      }
  ]
  });

  $('.cont_box').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  autoplaySpeed: 2000,
  responsive: [
    {
    breakpoint: 1300,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 1
      }
    },
    {
    breakpoint: 1024,
      settings: {
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1
      }
    },
    {
    breakpoint: 768,
      settings: {
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1
      }
    },
    {
    breakpoint: 660,
      settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1
      }
    }
  ]
  });

  $('.quick_list').slick({
  slidesToShow:8,
  slidesToScroll: 1,
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
    {
    breakpoint: 480,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      }
    }
  ]
  });

  var slideCount = 6;
  var childrenCnt = $('.company_list').children().length;
  if(childrenCnt <= slideCount){
    slideCount = childrenCnt - 1;
  }
  $('.company_list').slick({
    slidesToShow: slideCount,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
    {
    breakpoint: 1239,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      }
    },
    {
    breakpoint: 600,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1
      }
    },
    {
    breakpoint: 480,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }
  ]
  });
  
  //main_tab
  $('.issue_slide').slick({
    dots: false,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    responsive: [
    {
    breakpoint: 1239,
      settings: {
      arrows: false,
      }
    }
  ]
  });
  /*$('.main_qna_board').slick({
    dots: false,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
  });*/
});