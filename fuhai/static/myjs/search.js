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
        url:'http://127.0.0.1:5000/query',
        data:{'mobile':'13737177252'},
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
    
}


// function submitForm(){
    
    
//     $.messager.progress({
//         text:"正在查询，请耐心等待........"
        
//     });
    
    
//     $("#submitform").form({
        
//         url:"http://10.1.60.132:9200/label/xf/_search",
        
//         success:function(result){
            
//             $.messager.progress('close');
//             jdata = JSON.parse(result);
            
//             jd = jdata.hits.hits[0]._source
            
//             $("#phonenum").html(jd.pk_mobile);
            
//             $("#userid").html(jd.pk_userid);
            
//             $("#name").html(jd.as_name_cn);
            
//             $("#icard").html(jd.as_idc);
//             $("#gender").html(jd.an_gender);
            
//             $("#age").html(jd.an_age_decade);
            
//             $("#star").html(jd.an_constel);
            
//             $("#nature").html(jd.an_zodiac);
            
//             $("#bp").html(jd.as_area_hukoiu_city);
            
//             $("#lp").html(jd.as_area_live_city);
            
//             $("#yp").html(jd.as_area_alive_city_all);
            
//             $("#score").html(jd.as_blc_pcdt_score);
            
//             $("#rank").html(jd.as_blc_pcdt_grade);
            
//             $("#bank").html(jd.rf_bkc_bl);
            
//             $("#ternal").html(jd.rt_ltrm_bl_vld);
            
//             $("#app").html(jd.ri_lapp_bl);
            
//             $("#time").html(jd.bh_blp_pt_cmax);
            
//             $("#week").html();
            
//         }
        
        
//     });
    
    
    
// }