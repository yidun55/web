

$(document).ready(function(){

	$('#change_1 .a_bigImg img').soChange();
	
	$("#button").hover(function(){
		$(this).css("background","url(static/images/t_middle_top_form_buttonHover.jpg) no-repeat");
	},function(){
		$(this).css("background","url(static/images/t_middle_top_form_button.jpg) no-repeat");	
	});

    $("#returnButton").hover(function(){
        $(this).css("background","url(static/images/t_goback_buttonHover.jpg) no-repeat");
    },function(){
        $(this).css("background","url(static/images/t_goback_button.jpg) no-repeat");
    });
	
	$(".more").hover(function(){
		$(this).css("background","url(static/img/t_middle_top_more_buttonHover.jpg) no-repeat");
	},function(){
		$(this).css("background","url(static/img/t_middle_top_more_button.jpg) no-repeat");	
	});



    /*$('a[class="View"]').click(function(){

        parent.showDetail($(this).attr('id'),-400);

    });*/

    //关闭结果详细信模块
    $("#CloseResultView").click(function() {

//        contentFrame.refresh();
        $("#ResultView").fadeOut(500);
    });
    
  //关闭结果详细信模块
//    $("#CloseCaptchaView").click(function() {
//        $("#captchaView").fadeOut(500);
//    });
	
	$("#pName").val('');
	$("#pCardNum").val('');
	
	refreshCaptcha_long();
	
});

/**
 * 查询按钮事件
 */
function submitForm(){
	var mobile = $.trim($('#submitform input[name="q"]').val());
	if(mobile == ''){
		alert("请输入手机号");
		return;
	}else if(pname.length < 10){
        alert("请输入11位手机号码");  //最好加个正则判断数字
        return;
    }

    $.ajax({
        url:'/query?mobile='+mobile,
        datatype:'json',
        success:function(data){
            if(data.pk_mobile==null || data.mobile_num == null){
                alert("无返回数据");
                return;
            }
            $('#phonenum').text(data.pk_mobile);
            $('#gender').text(data.an_gender);
            $('#age').text(data.an_age);
            $('#nature').text(data.an_zodiac);
        }
    });
	
	$('#submitform').submit();
	
}

function getcookie(objname){//获取指定名称的cookie的值
	var arrstr = document.cookie.split("; ");
	for(var i = 0;i < arrstr.length;i ++){
		var temp = arrstr[i].split("=");
		if(temp[0] == objname) return unescape(temp[1]);
	}
}

function submit(){
	var url = getRootPath();
    var code=$("#j_captcha").attr("value");
    code = "j_captcha=" + code;
    $.ajax({
        async: false,
        type:"POST",
        url: url+"/login.do",
        data:code,
        success:function(data){
            $(data).find("result").each(function(){
                var values = $(this).attr("value");
                if (values == "success"){
                    $('#searchForm').submit();
                }else{
                    alert("验证码输入错误，请重新输入");
                    $("#j_captcha").attr("value","");
                    refreshCaptcha();
                }
            });
        }
    });
}

function getRootPath(){
	var strFullPath=window.document.location.href;
	var strPath=window.document.location.pathname;
	var pos=strFullPath.indexOf(strPath);
	var prePath=strFullPath.substring(0,pos);
	var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1);
	return (prePath+postPath);
}

//定时刷新验证码
function refreshCaptcha_long(){
	$('#captchaImg').attr('src','image.jsp?date=' + new Date());
	setTimeout(refreshCaptcha_long,1000*30);
}

//刷新查询验证码
function refreshCaptcha() {
//	document.cookie = "dis_lastSearchTime="+new Date().getTime();
	$('#captchaImg').attr('src','image.jsp?date=' + new Date());
}

function detail(obj){
    parent.showDetail($(obj).attr('id'),-400);
}


/**
 * 显示返回按钮
 */
function showReturnButton(){
	$('#returnButton').show();
}

/**
 * 隐藏返回按钮
 */
function hideReturnButton(){
	$('#returnButton').hide();
}

/**
 * 返回首页
 */
function returnIndex(){
	hideReturnButton();
	$('#contentFrame').attr('src','explain.html');
	$("#pName").val('');
	$("#pCardNum").val('');
}


/**
 * 查看详细信息
 */
function showDetail(id , position){
	$.ajax({
		url:'findDetai?id='+id+'&pCode='+$("#pCode").val(),
		datatype:'json',
		success:function(data){
			if(data.id=='undefind' || data.id == "" || data.id==null){
				refreshCaptcha();
				alert("验证码已过期，请重新查询");
				return;
			}
			$('#inameDetail').text(data.iname);
			$('#cardNumDetail').text(data.cardNum);
			$('#courtNameDetail').text(data.courtName);
			$('#areaNameDetail').text(data.areaName);
            $('#gistIdDetail').text(data.gistId);
            $('#regDateDetail').text(data.regDate);
            $('#caseCodeDetail').text(data.caseCode);
            $('#gistUnitDetail').text(data.gistUnit);
            $('#dutyDetail').text(data.duty);
            $('#performanceDetail').text(data.performance);
            $('#disruptTypeNameDetail').text(data.disruptTypeName);
            $('#publishDateDetail').text(data.publishDate);
//            $('#focusNumberDetail').text(data.focusNumber);

            if(data.partyTypeName == '580'){
                $('#sexDetail').text(data.sexy);
                $('#ageDetail').text(data.age);
                $('#partyDetail').find('tr[type="person"]').show();
                $('#partyDetail').find('tr[type="unit"]').hide();
            }
            else if(data.partyTypeName == '581'){

                $('#businessEntityDetail').text(data.businessEntity);
                $('#partyDetail').find('tr[type="person"]').hide();
                $('#partyDetail').find('tr[type="unit"]').show();
            }

            if('部分未履行' == data.performance){
                $('#performedPartDetail').text(data.performedPart);
                $('#unperformPartDetail').text(data.unperformPart);
                $('#performedInfo').show();
            }else{
                $('#performedInfo').hide();
            }


			$("#ResultView").fadeIn(500);
			$("#ResultView").css("left", "200px");
            $("#ResultView").css("top", position+"px");
		}
	});

//    showDetailVisit(id);

}

function findCode(){
	return $("#pCode").val();
}