
var sAddr = ["08389","서울특별시 구로구 디지털로 26길 87(구로동)","서울고객지원팀"]; //서울주소
var aAddr = ["15588","경기도 안산시 상록구 해안로 723(사동)","경기고객지원팀"]; //안산주소
var jAddr = ["52852","경상남도 진주시 충의로 10","고객지원총괄센터"]; //진주주소
var wAddr = ["26354","강원도 원주시 지정면 기업도시로 200","한국산업기술시험원"]; //원주주소

$(function(){
	//오늘 날짜를 출력
	$("#today").text(new Date().toLocaleDateString());
	//datepicker 한국어로 사용하기 위한 언어설정
	$.datepicker.setDefaults($.datepicker.regional['ko']);
	//시작일.
	$('.startDate').datepicker({
		showOn: "both",                     // 달력을 표시할 타이밍 (both: focus or button)
	    buttonImage: "/resource/templete/cms1/src/img/sub/calendar.png", // 버튼 이미지
		buttonImageOnly : false,             // 버튼 이미지만 표시할지 여부
		buttonText: "날짜선택",             // 버튼의 대체 텍스트
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		dateFormat: "yy-mm-dd",             // 날짜의 형식
		changeMonth: true,                  // 월을 이동하기 위한 선택상자 표시여부
		changeYear: true,                  // 년도 이동하기 위한 선택상자 표시여부
		//minDate: 0,                       // 선택할수있는 최소날짜, ( 0 : 오늘 이전 날짜 선택 불가)
		showButtonPanel: true,
		showMonthAfterYear: true,
		closeText: '취소',
		currentText: '오늘',
		onClose: function( selectedDate ) {
			$(".endDate").datepicker( "option", "minDate", selectedDate );
			if($(window.event.srcElement).hasClass("ui-datepicker-close")){
				$(this).val("");
			}
		}
	});

	//종료일
	$('.endDate').datepicker({
		showOn: "both",
		buttonImage: "/resource/templete/cms1/src/img/sub/calendar.png",
		buttonImageOnly : false,
		buttonText: "날짜선택",
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		dateFormat: "yy-mm-dd",
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		showMonthAfterYear: true,
		closeText: '취소',
		currentText: '오늘',
		//minDate: 0, // 오늘 이전 날짜 선택 불가
		onClose: function( selectedDate ) {
			// 종료일(toDate) datepicker가 닫힐때
			// 시작일(fromDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 종료일로 지정
			$(".startDate").datepicker( "option", "maxDate", selectedDate );
			if($(window.event.srcElement).hasClass("ui-datepicker-close")){
				$(this).val("");
			}
		}
	});

	//동물실험 달력
	$('.sdt').datepicker({
		showOn: "focus",                     // 달력을 표시할 타이밍 (both: focus or button)
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		dateFormat: "yy-mm-dd",             // 날짜의 형식
		changeMonth: true,                  // 월을 이동하기 위한 선택상자 표시여부
		changeYear: true,                  // 년도 이동하기 위한 선택상자 표시여부
		//minDate: 0,                       // 선택할수있는 최소날짜, ( 0 : 오늘 이전 날짜 선택 불가)
		showButtonPanel: true,
		showMonthAfterYear: true,
		closeText: '취소',
		currentText: '오늘',
		onClose: function( selectedDate ) {
			$(".edt").datepicker( "option", "minDate", selectedDate );
			if($(window.event.srcElement).hasClass("ui-datepicker-close")){
				$(this).val("");
			}
		}
	});

	//종료일
	$('.edt').datepicker({
		showOn: "focus",
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		dateFormat: "yy-mm-dd",
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		showMonthAfterYear: true,
		closeText: '취소',
		currentText: '오늘',
		//minDate: 0, // 오늘 이전 날짜 선택 불가
		onClose: function( selectedDate ) {
			// 종료일(toDate) datepicker가 닫힐때
			// 시작일(fromDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 종료일로 지정
			$(".sdt").datepicker( "option", "maxDate", selectedDate );
			if($(window.event.srcElement).hasClass("ui-datepicker-close")){
				$(this).val("");
			}
		}
	});

	//신청인 정보와 동일 누를시 처리
	$(".copy").click(function(){
		var $this = $(this);
		var copyGb = $this.val().split(",")[0];
		if($this.val().split(",")[1] == "S"){
			$("#"+copyGb+"Cmnm").val($("#apcnCmnm").val());
			$("#"+copyGb+"CmpnRpprNm").val($("#apcnCmpnRpprNm").val());
			$("#"+copyGb+"CmpnBrno").val($("#apcnCmpnBrno").val());
			$("#"+copyGb+"CmpnZpcd").val($("#apcnCmpnZpcd").val());
			$("#"+copyGb+"CmpnBsad").val($("#apcnCmpnBsad").val());
			$("#"+copyGb+"CmpnDtlAdrs").val($("#apcnCmpnDtlAdrs").val());
		}
		if($this.val().split(",")[0] == "exrs"){
			$("#exrsCmnm").val($("#apcnCmnm").val());
			$("#exrsCmpnRpprNm").val($("#apcnCmpnRpprNm").val());
			$("#exrsCmpnBrno").val($("#apcnCmpnBrno").val());
			$("#exrsCmpnZpcd").val($("#apcnCmpnZpcd").val());
			$("#exrsCmpnBsad").val($("#apcnCmpnBsad").val());
			$("#exrsCmpnDtlAdrs").val($("#apcnCmpnDtlAdrs").val());
		}else if($this.val().split(",")[0] == "bill"){
			$("#billCmnm").val($("#apcnCmnm").val());
			$("#billCmpnRpprNm").val($("#apcnCmpnRpprNm").val());
			$("#billCmpnBrno").val($("#apcnCmpnBrno").val());
			$("#billCmpnZpcd").val($("#apcnCmpnZpcd").val());
			$("#billCmpnBsad").val($("#apcnCmpnBsad").val());
			$("#billCmpnDtlAdrs").val($("#apcnCmpnDtlAdrs").val());
		}
		//20201211 rhee: 계량기 형식승인 화면 내 copy 기능 추가
		else if($this.val().split(",")[0] == "pcsn1"){
			if($("input:checkbox[name=copy-chk-box1]").is(":checked") ==true){
				$("#exrsRcvNm").val($("#apcnNm").val());
				$("#exrsRcvTelno").val($("#apcnPrtbTlno").val());
				$("#exrsRcvZpcd").val($("#apcnCmpnZpcd").val());
				$("#exrsRcvBsad").val($("#apcnCmpnBsad").val());
				$("#exrsRcvDtlAdrs").val($("#apcnCmpnDtlAdrs").val());
			}else{
				$("#exrsRcvNm").val("");
				$("#exrsRcvTelno").val("");
				$("#exrsRcvZpcd").val("");
				$("#exrsRcvBsad").val("");
				$("#exrsRcvDtlAdrs").val("");
			}
		}
		else if($this.val().split(",")[0] == "pcsn2"){
			if($("input:checkbox[name=copy-chk-box2]").is(":checked") ==true){
				$("#pcsnWayNm").val($("#apcnNm").val());
				$("#pcsnWayTlno").val($("#apcnPrtbTlno").val());
				$("#temp7").val($("#apcnCmpnZpcd").val());
				$("#temp8").val($("#apcnCmpnBsad").val());
				$("#temp9").val($("#apcnCmpnDtlAdrs").val());
			}
			else{
				$("#pcsnWayNm").val("");
				$("#pcsnWayTlno").val("");
				$("#temp7").val("");
				$("#temp8").val("");
				$("#temp9").val("");
			}
		}

		//20210317 rhee: 일반/교정 신청 시 성적서발급방법 copy 기능 추가
		else if($this.val().split(",")[0] == "exrsRcvCopy"){
			if($("#rdo_31").is(":checked") ==true){
				$("#exrsRcvNm").val($("#apcnNm").val());
				$("#exrsRcvTelno").val($("#apcnPrtbTlno").val());
				$("#exrsRcvZpcd").val($("#apcnCmpnZpcd").val());
				$("#exrsRcvBsad").val($("#apcnCmpnBsad").val());
				$("#exrsRcvDtlAdrs").val($("#apcnCmpnDtlAdrs").val());
			}else{
				$("#exrsRcvNm").val("");
				$("#exrsRcvTelno").val("");
				$("#exrsRcvZpcd").val("");
				$("#exrsRcvBsad").val("");
				$("#exrsRcvDtlAdrs").val("");
			}
		}

		//20210317 rhee: 일반/교정 신청 시 시료처리 방법 copy 기능 추가
		else if($this.val().split(",")[0] == "pcsnWayCopy"){
			if($("#rdo_33").is(":checked") ==true){
				$("#pcsnWayNm").val($("#apcnNm").val());
				$("#pcsnWayTlno").val($("#apcnPrtbTlno").val());
				$("#temp7").val($("#apcnCmpnZpcd").val());
				$("#temp8").val($("#apcnCmpnBsad").val());
				$("#temp9").val($("#apcnCmpnDtlAdrs").val());
			}else{
				$("#pcsnWayNm").val("");
				$("#pcsnWayTlno").val("");
				$("#temp7").val("");
				$("#temp8").val("");
				$("#temp9").val("");
			}
		}

		// 환경 수질/먹는물 정도검사 - 현장정보
		else if($this.val().split(",")[0] == "waterWorkCopy"){
			if($this.val().split(",")[1] == "S"){
				$("#workPlacenm").val($("#apcnCmnm").val());
				$("#workPlaceZpcd").val($("#apcnCmpnZpcd").val());
				$("#workPlaceBsad").val($("#apcnCmpnBsad").val());
				$("#workPlaceDtlAdrs").val($("#apcnCmpnDtlAdrs").val());
			}else{
				$("#workPlacenm").val("");
				$("#workPlaceZpcd").val("");
				$("#workPlaceBsad").val("");
				$("#workPlaceDtlAdrs").val("");
			}
		}
		//환경 수질/먹는물 정도검사 - 성적서 기재정보
		else if($this.val().split(",")[0] == "waterExrsCopy"){
			if($this.val().split(",")[1] == "S"){
				$("#exrsCmnm").val($("#apcnCmnm").val());
				$("#exrsCmpnRpprNm").val($("#apcnCmpnRpprNm").val());
				$("#exrsCmpnBrno").val($("#apcnCmpnBrno").val());
				$("#exrsRcvTelno").val($("#apcnTlno").val());
				$("#exrsCmpnZpcd").val($("#apcnCmpnZpcd").val());
				$("#exrsCmpnBsad").val($("#apcnCmpnBsad").val());
				$("#exrsCmpnDtlAdrs").val($("#apcnCmpnDtlAdrs").val());
			}else{
				$("#exrsCmnm").val("");
				$("#exrsCmpnRpprNm").val("");
				$("#exrsCmpnBrno").val("");
				$("#exrsRcvTelno").val("");
				$("#exrsCmpnZpcd").val("");
				$("#exrsCmpnBsad").val("");
				$("#exrsCmpnDtlAdrs").val("");
			}
		}
		//환경 수질/먹는물 정도검사 - 계산서 발급
		else if($this.val().split(",")[0] == "waterBill"){
			if($this.val().split(",")[1] == "S"){
				$("#billCmnm").val($("#apcnCmnm").val());
				$("#billCmpnRpprNm").val($("#apcnCmpnRpprNm").val());
				$("#billCmpnBrno").val($("#apcnCmpnBrno").val());
				$("#elcrTxblEmlAdrs").val($("#apcnEmlAdrs").val());
				$("#billTlno").val($("#apcnTlno").val());
				$("#billCmpnZpcd").val($("#apcnCmpnZpcd").val());
				$("#billCmpnBsad").val($("#apcnCmpnBsad").val());
				$("#billCmpnDtlAdrs").val($("#apcnCmpnDtlAdrs").val());
			}else{
				$("#billCmnm").val("");
				$("#billCmpnRpprNm").val("");
				$("#billCmpnBrno").val("");
				$("#elcrTxblEmlAdrs").val("");
				$("#billTlno").val("");
				$("#billCmpnZpcd").val("");
				$("#billCmpnBsad").val("");
				$("#billCmpnDtlAdrs").val("");
			}
		}


	});

	//시료접수 방법 선택 시
	$("input[name='smplGbn']").change(function(){
		//방문접수일때
		if($(this).val() == "1"){
			$(".address-form.med").parent("td").hide();
			$(".address-form.med").parents("tr").hide();
			$("#med_rdo_city_check").hide();
			$(".address-form.med").parents("tr").prev().find("th").attr("rowspan","1");
			$("#smplZpcd, #smplBsad, #smplDtlAdrs").val("");
		}
		//택배발송일때
		else{
			//$("input[name='med_rdo_city']").prop("checked", false);
			$("#med_rdo_city_check").show();
			$("input[name='med_rdo_city']").prop("checked", false);
			$("input[name='med_rdo_city']").parent(".radio_wrap").show();
			$(".address-form.med").parent("td").show();
			$(".address-form.med").parents("tr").show();
			$(".address-form.med").parents("tr").prev().find("th").attr("rowspan","2");
		}
	});

	$("input[name='med_rdo_city']").change(function(){
		var $this = $(this);
		if($this.val() == "S"){
			$("#smplZpcd").val(sAddr[0]);
			$("#smplBsad").val(sAddr[1]);
			$("#smplDtlAdrs").val(sAddr[2]);
		}else if($this.val() == "A"){
			$("#smplZpcd").val(aAddr[0]);
			$("#smplBsad").val(aAddr[1]);
			$("#smplDtlAdrs").val(aAddr[2]);
		}else if($this.val() == "J"){
			$("#smplZpcd").val(jAddr[0]);
			$("#smplBsad").val(jAddr[1]);
			$("#smplDtlAdrs").val(jAddr[2]);
		}else if($this.val() == "W"){
			$("#smplZpcd").val(wAddr[0]);
			$("#smplBsad").val(wAddr[1]);
			$("#smplDtlAdrs").val(wAddr[2]);
		}else if($this.val() == "E"){
			$("#smplZpcd").val("");
			$("#smplBsad").val("");
			$("#smplDtlAdrs").val("");
		}
	});

	//일반/교정분야 formType 값 가져오기
	var formType = $("#formType").val();

	//성적서 발급 방법 선택 시
	$("input[type='radio'][name='exrsRcvCd']").change(function(){
		//일반, 교정분야, 환경분야(수질/먹는물) 신청일 경우
		if(formType==="normal" || formType==="correction"){
			exrRcvWay_NC(this);
		}else{
			exrRcvWay(this);
		}
	});

	//시료처리 방법 선택 시
	$("input[type='radio'][name='pcsnWayCd']").change(function(){
		if(formType==="normal" || formType==="correction"){
			pcsnRcvWay_NC(this);
		}else{
			pcsnRcvWay(this);
		}
	});

	if(formType==="normal" || formType==="correction" ){
		pcsnRcvWay_NC($("input[name=pcsnWayCd]:checked"));
		exrRcvWay_NC($("input[name=exrsRcvCd]:checked"));
		smplGbn_NC($("input[name=smplGbn]:checked"))
	}else{
		pcsnRcvWay($("input[name=pcsnWayCd]:checked"));
		exrRcvWay($("input[name=exrsRcvCd]:checked"));
	}

});


/* 행추가
 * 1. tbody 에서 tr 을 가져온후 하단에 추가해준후 안의 내용만 지워버린다
 * -> dom 객체를 clone() 후 안의 내용을 지우고 추가해준다 (같은 객체는 append 가 안됨)
 */
function fn_colAdd(id){
	$tr = $("#"+id).children("tr").first().clone();
	$tr.find("input").val("");
	$tr.appendTo('#'+id);

	chkbxArrange(id);
}

/*
 * 행삭제
 * 1. 선택된 체크 박스의 tr 객체를 remove
 * 2. 객체가 1개 이하가 되어서는 안된다. alert
 * 3. 객체 미선택시 alert
 * -> label 의 id 중복 문제로 chkbxArrange 함수 추가
 */
function fn_colDel(id){
	selTr = $("#"+id).find("input[type='checkbox']:checked").length;
	if(selTr < 1){ alert("삭제할 항목을 선택해 주십시오."); return;}

	totTr = $("#"+id).find("input[type='checkbox']").length;
	if(selTr == totTr){ alert("최소한 1개 이상의 항목이 필요합니다."); return;}

	$chkedTr = $("#"+id).find("input[type='checkbox']:checked").closest("tr");
	$chkedTr.remove();

	chkbxArrange(id);
}

function searchAddr(formGb){

	var width = 500; //팝업의 너비
    var height = 600; //팝업의 높이
    new daum.Postcode({
        oncomplete: function(data) {
        	//시험후 처리
        	if(formGb == "temp"){
        		$("#temp7").val(data.zonecode);
        		$("#temp8").val(data.roadAddress);
        		$("#temp9").focus();
        	}else{
        		$("#"+formGb+"Zpcd").val(data.zonecode);
        		$("#"+formGb+"Bsad").val(data.roadAddress);
        		$("#"+formGb+"DtlAdrs").focus();
        	}
        },
        theme: {
           outlineColor: "#80220c"  //테두리색깔
        }
    }).open();
}

function fn_colCopy(id){
	$chkedTr = $("#"+id).find("input[type='checkbox']:checked").closest("tr").clone();
	$chkedTr.appendTo('#'+id);

	chkbxArrange(id);
}

function chkbxArrange(id){
	$("#"+id).children("tr").each(function(index){
		$(this).find("input[type='checkbox']").attr("id", "chk-box"+index);
		$(this).find("label").attr("for", "chk-box"+index);
		$(this).children("td").each(function(i){
			if(i == 0){
				$(this).find("span").text((Number(index)+1)+"행 선택");
			}else{
				$(this).find("input[type='text']").attr("title","신청 항목 "+$(this).parents("table").find("thead").find("th:eq("+$(this).index()+")").text()+" "+ (Number(index)+1)+"행");
			}
		});
	})
}

/*주소입력 시 직접입력 checkbox  클릭시 입력폼 변경처리*/
function fn_addrChkClick(t, e){
	var eArr = e.split(",");
	if($(t).is(":checked")){
		$(eArr).each(function(i){
			$("#"+eArr[i]).attr("readonly", false);
		});

		//전자의료기기> 상담시험 form에서 제조원, 제조의뢰원의 우편번호 필수값 해제
		if($(t).attr("id") =="mnfcZpcdChk"){
			$("#mnfcZpcd").removeClass("required");
		}
		if($(t).attr("id") =="mnfcReqsZpcdChk"){
			$("#mnfcReqsZpcd").removeClass("required");
		}

	}else{
		$(eArr).each(function(i){
			$("#"+eArr[i]).attr("readonly", true);
			$("#"+eArr[i]).addClass("required");
		});
	}
}

/*성적서 수령방법 변경 시 테이블 변경처리*/
function exrRcvWay(selVal){
	var $this = $(selVal);
	var $that = null;
	var no = 0;
	if($("input[name='exrsRcvCd']").index(selVal) == 1){
		$(".test:not(.test:first)").show();
	}else{
		$(".test:not(.test:first)").hide();
	}
	$(".test2").each(function(){
		$that = $(selVal);
		if($that.css("display") != "none"){
			no++;
		}
	});

	$this.parents("tr").children("th:eq(0)").attr("rowspan", no);
}


/*시료처리 수령 방법 변경 시 테이블 변경처리*/
function pcsnRcvWay(selVal){
	var $this = $(selVal);
	var $that = null;
	var no = 0;
	if($("input[name='pcsnWayCd']").index(selVal) == 1){
		$(".test3").show();
		$this.parents("tr").find("th:first").attr("rowspan",3);
		$(".test2:last").show();
	}else{
		$(".test3").hide();
		$this.parents("tr").find("th:first").attr("rowspan",2);
		$(".test2:last").hide();
	}
	$(".test2").each(function(){
		$that = $(selVal);
		if($that.css("display") != "none"){
			no++;
		}
	});
	$("input[name='exrsRcvCd']").parents("tr").children("th:eq(0)").attr("rowspan", no);
}


//일반, 교정분야 성적서 발급방법 선택 시 테이블 변경처리
function exrRcvWay_NC(selVal){
	var val = $("input[name='exrsRcvCd']:checked").val();
	var val2 =$("input:radio[name='exrsLnggDsncCd']:checked").val();
	var $this = $(selVal);
	//우편발송
	if(val == "02"){
		if(val2 == "02"){
			$("#parentTh").attr("rowspan", "11");
		}else{
			$("#parentTh").attr("rowspan", "9");
		}
		$("#exrsRcvArea1").show();
		$("#exrsRcvArea2").show();
		$this.parents("tr").children("th:eq(0)").attr("rowspan", "3");
		$this.parents("tr").children("td:eq(1)").children("div").show();
		$(".exrsRcvForm").addClass("required");
	}
	//방문수령, 온라인발급
	else{
		if(val2 == "02"){
			$("#parentTh").attr("rowspan", "9");
		}else{
			$("#parentTh").attr("rowspan", "7");
		}
		$("#exrsRcvArea1").hide();
		$("#exrsRcvArea2").hide();
		$this.parents("tr").children("th:eq(0)").attr("rowspan", "1");
		$this.parents("tr").children("td:eq(1)").children("div").hide();
		$(".exrsRcvForm").removeClass("required");
		$("#exrsRcvNm, #exrsRcvTelno, #exrsRcvZpcd, #exrsRcvBsad, #exrsRcvDtlAdrs").val("");
	}
}

//일반, 교정 분야 시료처리 방법 선택 시 테이블 변경 처리
function pcsnRcvWay_NC(selVal){
	var val = $("input[name='pcsnWayCd']:checked").val();
	var $this = $(selVal);
	//택배회수
	if(val == "02"){
		$("#pcsnWayArea1").show();
		$("#pcsnWayArea2").show();
		$("#pcsnWayParents").attr("rowspan", "3");
		$this.parents("tr").children("th:eq(0)").attr("rowspan", "3");
		$this.parents("tr").children("td:eq(1)").children("div").show();
		$(".pcsnWayForm").addClass("required");
	}
	//방문회수, KTL폐기
	else{
		$("#pcsnWayArea1").hide();
		$("#pcsnWayArea2").hide();
		$this.parents("tr").children("th:eq(0)").attr("rowspan", "2");
		$("#pcsnWayParents").attr("rowspan", "1");
		$this.parents("tr").children("td:eq(1)").children("div").hide();
		$(".pcsnWayForm").removeClass("required");
		$("#pcsnWayNm, #pcsnWayTlno, #temp7, #temp8, #temp9").val("");
	}
}

//시료접수 방법 선택 시 테이블 변경 처리
function smplGbn_NC(selVal){
	var val = $("input[name='smplGbn']:checked").val();
	//택배발송
	if(val == "2"){
		$("#med_rdo_city_check").show();
		$("input[name='med_rdo_city']").prop("checked", false);
		$("input[name='med_rdo_city']").parent(".radio_wrap").show();
		$(".address-form.med").parent("td").show();
		$(".address-form.med").parents("tr").show();
		$(".address-form.med").parents("tr").prev().find("th").attr("rowspan","2");
	}
	//방문접수
	else{
		$(".address-form.med").parent("td").hide();
		$(".address-form.med").parents("tr").hide();
		$("#med_rdo_city_check").hide();
		$(".address-form.med").parents("tr").prev().find("th").attr("rowspan","1");
		$("#smplZpcd, #smplBsad, #smplDtlAdrs").val("");
	}
}


function replaceAll(str, text1, text2){
	str = str.split(text1).join(text2);

	return str;
}

function numberComma(no){
	if(no == 0) return 0;
	var reg = /(^[+-]?\d+)(\d{3})/;
	var n = (no + "");

	while(reg.test(n)) n = n.replace(reg, "$1"+ "," + "$2");

	return n;
}