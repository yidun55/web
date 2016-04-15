/***********************************************
定义全局变量
@parameter:用于接收参数全局变量

函数addParam:向parameter中添加参数
@name:字段的中文名
@val:字段的值
'***********************************************/
window.parameter = {};

function addParam(name, val){
    var tmpVal = val.split(":");        //有传入的数据是"字段中文名 : 字段值"，只需要字段值
    if(val.length!=0){
        var tmp = "";
        if(tmpVal.length==1){
            tmp = val;
        }else if(tmpVal.length==2){
            tmp = tmpVal[1];
        }else{
            alert("addParam函数处出错");
        }
        window.parameter[name] = tmp;
    }
    else if(name in window.parameter && val.length==0){  
        delete(window.parameter[name]);     
    }
    // alert(window.parameter[name]);
}




/***********************************************
动态生成元素
'***********************************************/
function show(para, data) {
    var firstL = data[para];
    // for(var key in data)
    if(para in data && document.getElementById(para)==undefined){
        var key = para;
        var myDiv = document.createElement("div");
        myDiv.style = "float:left; width:100%; border:2px solid #ffffFF;margin-top:16px;display:none;height:1000px;overflow-y:scroll";
        myDiv.id = key;
        myDiv.setAttribute("name", "mid");
        var myUl = document.createElement("ul");
        for(var key1 in data[key]){
            var flag = data[key][key1]['type'];
            var values = data[key][key1]['value'];
            var myLi = document.createElement('li');
            var mySpan1 = document.createElement('span');
            mySpan1.innerHTML = key1 + ": ";
            myLi.appendChild(mySpan1);
            if(flag=='checkbox'){      
                //checkbox分两种：1,布尔型的要把"0,1"替换成"是,否"
                //                2,非布尔型的不需要替换
                for(var val in values){
                    var myInput = document.createElement('input');
                    myInput.type = flag;
                    myInput.name = "box_" + key1;
                    myInput.setAttribute("onclick", 'checkBox(this)');
                    myInput.value = values[val];
                    var inSpan = document.createElement('span');
                    if("isBool" in data[key][key1]){   //该元素是布尔型
                        var cTmp = "";
                        if(values[val]=="1") cTmp="是"; else cTmp="否";
                        myInput.innerHTML = "  " + cTmp;
                        inSpan.innerHTML = "  " + cTmp + " ";
                    }else{
                        myInput.innerHTML = "  " + values[val];
                        inSpan.innerHTML = "  " + values[val] + " ";
                    }
                    myLi.appendChild(myInput);
                    myLi.appendChild(inSpan);
                }
                myUl.appendChild(myLi);
            }else if(flag=='date'){
                // alert("working");
                var mySpan3 = document.createElement('span');
                mySpan3.innerHTML = "从";
                myLi.appendChild(mySpan3);

                var myInput1 = document.createElement('input');
                myInput1.readonly = "";
                myInput1.setAttribute("onclick","WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',lang:'zh-cn',onpicking:function(dp){pickDate(dp, this);}, onclearing:function(){clearDate(this);}})");
                myInput1.value = "";
                myInput1.name = "begin_" + key1;
                myInput1.type = "text";
                myLi.appendChild(myInput1);

                var mySpan2 = document.createElement('span');
                mySpan2.innerHTML = " 到 ";
                myLi.appendChild(mySpan2);

                var myInput2 = document.createElement('input');
                myInput2.readonly = "";
                myInput2.value = "";
                myInput2.name = "end_" + key1;
                myInput2.type = "text";
                myInput2.setAttribute("onclick","WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd',lang:'zh-cn',onpicking:function(dp){pickDate(dp, this);}, onclearing:function(){clearDate(this);}})");
                myLi.appendChild(myInput2);
                myUl.appendChild(myLi);
            }else if(flag=='num'){
                // alert("working");
                var mySpan3 = document.createElement('span');
                mySpan3.innerHTML = "从";
                myLi.appendChild(mySpan3);

                var myInput1 = document.createElement('input');
                myInput1.readonly = "";
                myInput1.setAttribute("onChange","pickValue(this)");
                myInput1.value = "";
                myInput1.name = "begin_" + key1;
                myInput1.type = "text";
                myLi.appendChild(myInput1);

                var mySpan2 = document.createElement('span');
                mySpan2.innerHTML = " 到 ";
                myLi.appendChild(mySpan2);

                var myInput2 = document.createElement('input');
                myInput2.readonly = "";
                myInput2.value = "";
                myInput2.name = "end_" + key1;
                myInput2.type = "text";
                myInput2.setAttribute("onChange","pickValue(this)");
                myLi.appendChild(myInput2);
                myUl.appendChild(myLi);
            }
        }

        myDiv.appendChild(myUl);
        var Tdiv = document.getElementById('main');
        var isMyDiv = document.getElementById(key);   //如果存在该节点则删除
        if(isMyDiv){
            isMyDiv.remove();
        }
        insertAfter(myDiv, Tdiv);
    }

    $("div[name='mid']").hide();
    $("div[name^='nav_bg']").hide();
    $("div[id='" + para + "']").show();
}



/***********************************************
点击右侧已选中的条件，则触发该函数，该函数会
1，从右边已先条件框中去除该条件
2，从参数接收对象window.parameter删除该字段
'***********************************************/
function removeSelected(selDiv){
    var name = selDiv.id;
    addParam(name, "");  //把name从参数收集对象中删除
    selDiv.remove();
    $("input[name$='" + name + "']:checked").each(function(){
        $(this).attr("checked", false);       //去除checkbox的选中项
    });
    $("input[name$='" + name + "']").each(function(){
        var tType = $(this).attr("type");
        if(tType=='text'){
            $(this).attr("value", "");
        }
    });
}