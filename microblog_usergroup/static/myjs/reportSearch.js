function submitForm(){
    var mobile = $.trim($('#submitform input[name="q"]').val());
    if(mobile == ''){
        alert("请输入手机号");
        return;
    }else if(mobile.length < 10){
        alert("请输入11位手机号码");  //最好加个正则判断数字
        return;
    }
    $.ajax({
        url:'/report',
        type:"POST",
        data:{'q':mobile},
        datatype:'json',
        success:function(data){
            }
    });
    
}