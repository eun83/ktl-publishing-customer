var emailBtnId;

$(function(){
    //모달창 (이메일 제외)
    $(".btn-modal-pop").not(".btn-email").on("click", function(){
       var btn_id = $(this).attr('id');

       openPopById(btn_id);
    });

    //이메일 버튼 클릭시 captcha 구현
    $(".btn-email.btn-modal-pop").on("click", function(){
        emailBtnId = $(this).attr('id');
        $("#emailAnswer").val("");
        captchaReload();
        openPopById("captcha");
        $("#captchaName").val($(this).parents("tr").find("td").eq(2).text());
        $("#captchaTel").val($(this).parents("tr").find("td").eq(3).text());
     });

    //탭
    $('.main-tab-nav li a').css('min-width', $('.main-tab-nav li').width());
    $('.main-tab-nav li a').on('click',function(e){
      e.preventDefault();
      var tabCon = $(this).attr('href');
      $(tabCon).attr('tabindex',0).focus();
      $(this).parent().siblings().removeClass('on');
      $(this).parent().addClass('on');
      $(this).closest('.main-tab').find('.main-tab-con > div').removeClass('on');
      $(tabCon).addClass('on');
    //   $('.main-tab .slick-slider').slick('refresh');
      if($(this).hasClass('on')) {
     	 $(this).attr('title','검색 닫기');
       }
       else {
     	  $(this).attr('title','검색 펼치기');
       }

    });
	$(window).resize(function () {
		if ($(window).width() < 1240) {
			$('.main-tab-nav li a').css('min-width', $('.main-tab-nav li').width());
		}
	});

    //relation site
    $('.relate-site button').on('click',function(){
        var relateSite = $(this).closest('.relate-site');
        if(!relateSite.hasClass('on')){
        	$(this).attr('title','메뉴 닫기');
            relateSite.addClass('on');
            relateSite.find('ul').slideDown();
        } else {
            relateSite.removeClass('on');
            $(this).attr('title','메뉴 펼치기');
            relateSite.find('ul').slideUp();
        }
    });

    $("input[type=file]").on('change', function(event){
    	var fileName = $(this).val();

    	if(fileName.indexOf("\\") != -1){
    		fileName = fileName.split("\\").pop();
    	}

    	var ext =  fileName.split(".").pop().toLowerCase();
		if($.inArray(ext,["bmp","gif","jpg","jpeg","png","psd","txt","rtf","hwp","asv","pdf","doc","docx","ppt","pptx","xls","xlsx","zip","7z","egg","alz","rar","tar"]) == -1){
			alert("해당파일은 업로드가 불가능 합니다.");
			$(this).val("");
			return false;
		}
    });
});

//ID 로 팝업 열기
function openPopById(btn_id){
    $('.'+btn_id).attr("tabindex", "0").show().focus();
    $('.'+btn_id).before('<div class="pop-bg"></div>');
    $('.'+btn_id).fadeIn();
    //$("body").css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});
   //$('.layerpopup').css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
   $(".btn-pop-close, .modal_close").click(function(){
      $('.'+btn_id).removeAttr("tabindex").hide();
      $('.pop-bg').remove();
      $(".btn-modal-pop#"+btn_id).focus();
     // $("body").css({overflow:'scroll'}).unbind('touchmove');
     //e.preventDefault();
   });
   $(".btn-pop-close").focus(function(){
      $('.'+btn_id).append("<a href='javascript:void(0);' class='linkAppend'>팝업닫기</a>");
      $(".linkAppend").focus(   function(){
         $('.'+btn_id).attr("tabindex", "0").focus();
         $(".linkAppend").remove();
      });
    //$("body").css({overflow:'scroll'}).unbind('touchmove');
    //e.preventDefault();
   });
}

function MS_bindDownload(el) {
	var agent = navigator.userAgent.toLowerCase();

	if(navigator.appName=='Netscape' && agent.indexOf('trident') != -1) {//if((navigator.appName=='Netscape' && agent.indexOf('trident') != -1)||(agent.indexOf("msie") != -1 )) {
		if(el === undefined || el.href === '') {
	        throw Error('error');
	    }
	    var filename = el.getAttribute('download');
	    if(filename === null) {
	        throw Error('error');
	    }
	    if(filename === '') {
	        var tmp = el.href.split('/');
	        filename = tmp[tmp.length - 1];
	    }
	    el.addEventListener('click', function(e){
	        e.preventDefault();
	        var xhr = new XMLHttpRequest();
	        xhr.onloadstart = function() {
	            xhr.responseType = 'blob';
	        };
	        xhr.onload = function() {
	        	navigator.msSaveOrOpenBlob(xhr.response, filename);
	        };
	        xhr.open("GET", el.href, true);
	        xhr.send();
	    });
	}
}

//이메일무단수집거부
function emailPopupOpen(){
	$("#emailPopup").show();
}

function emailPopupClose(){
	$("#emailPopup").hide();
}


//captcha 팝업에서 이미지 새로고침 함수
//원리: captcha 이미지 태그에서 src를 삭제하였다가 다시 추가하면 새로고침된 이미지가 표시됨.
function captchaReload(){
	$("#captchaImg").removeAttr("src");
	$("#captchaImg").attr("src", "/captchaImg?param="+Math.random()*1000);
	$("#emailAnswer").val("");
}

//20210422 itgood : success 함수 내 처리 로직 수정
function captchaConfirm(){
	$.ajax({
        url: "/web/module/simpleCaptcha.ajax"
        , data: {answer: $("#emailAnswer").val(), name: $("#captchaName").val(), tel: $("#captchaTel").val()}
        , dataType: "json"
        , async: false
        , cache: false
        , success: function (data) {
        	//1) captcha 문자를 잘못 입력하였을 경우
        	if(data.msg == "fail"){
        		alert("이메일 확인을 위한 문자를 잘못 입력하셨습니다.");
        		captchaReload();
        		return false;
        	}
        	//2) 담당자 이메일 정보가 없을 경우
        	else if(data.msg == "null"){
        		alert("이메일정보를 확인할 수 없습니다. 관리자에게 문의해 주세요.");
        		captchaReload();
        		return false;
        	}
        	//3) 정상처리되었을 경우
        	else{
        		$(".btn-pop-close, .modal_close").click();
        		openPopById(emailBtnId);
        		$("."+emailBtnId).find("strong").text(data.manageremail);
        	}
        }
        , error: function (request, status, error) {
            console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        }
    });
}

//$(function(){
//	var atags = document.querySelectorAll('.down-event');
//	for(var i = 0; i <atags.length; i++) {
//		var element = atags[i];
//		MS_bindDownload(element);
//	}
//});