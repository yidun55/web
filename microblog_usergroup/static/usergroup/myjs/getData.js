/***********************************************
定义全局变量
@data:usergroup页面显示的数据存贮

函数loadData:向data中添加数据
'***********************************************/
window.data = {};

function testLoadData(){
    $.ajax({
        url:"/ajaxLD",
        type:"GET",
        success:function(data){
            window.data = data;
        }
    });
}


/***********************************************
加载数据
'***********************************************/
function loadData(){
    var data = window.data;
    // alert(data['社会属性']);
    // var data = {"\u793e\u4f1a\u5c5e\u6027": {"\u4e13\u79d1\u5165\u5b66\u65e5\u671f": {"type": "date", "value": []}, "\u66fe\u7528\u624b\u673a\u53f7\u4e2a\u6570": {"type": "num", "value": []}, "\u7855\u58eb\u5165\u5b66\u65e5\u671f": {"type": "date", "value": []}, "\u535a\u58eb\u6bd5\u4e1a\u5b66\u6821": {"type": "checkbox", "value": ["\u53a6\u95e8\u5927\u5b66", "N"]}, "\u6bd5\u4e1a\u9662\u6821\uff08\u5168\u90e8\uff09": {"type": "checkbox", "value": ["N"]}, "\u6700\u9ad8\u5b66\u5386": {"type": "checkbox", "value": ["\u5927\u4e13", "\u4e2d\u6280", "\u672c\u79d1", "\u521d\u4e2d\u53ca\u4ee5\u4e0b", "\u9ad8\u4e2d", "\u4e2d\u4e13", "\u9ad8\u4e2d\uff0c\u4e2d\u4e13\u53ca\u4ee5\u4e0b", "\u7855\u58eb", "N", "\u535a\u58eb"]}, "\u6700\u9ad8\u5b66\u4f4d": {"type": "checkbox", "value": ["N"]}, "\u66fe\u7528\u8eab\u4efd\u8bc1\u5f20\u6570": {"type": "num", "value": []}, "\u535a\u58eb\u5165\u5b66\u65e5\u671f": {"type": "date", "value": []}, "\u672c\u79d1\u6bd5\u4e1a\u65e5\u671f": {"type": "date", "value": []}, "\u7855\u58eb\u6bd5\u4e1a\u65e5\u671f": {"type": "date", "value": []}, "\u535a\u58eb\u6bd5\u4e1a\u65e5\u671f": {"type": "date", "value": []}, "\u8054\u7cfb\u4eba\u5730\u5740\uff08\u5168\u90e8\uff09": {"type": "checkbox", "value": ["N"]}, "\u8054\u7cfb\u4eba\u5730\u5740": {"type": "checkbox", "value": ["N"]}, "\u535a\u58eb\u4e13\u4e1a": {"type": "checkbox", "value": ["\u5fc3\u7406\u5b66", "N"]}, "\u672c\u79d1\u5165\u5b66\u65e5\u671f": {"type": "date", "value": []}, "\u4e13\u79d1\u4e13\u4e1a": {"type": "checkbox", "value": ["\u4eba\u529b\u8cc7\u6e90", "\u8239\u8236\u4e0e\u6d77\u6d0b\u5de5\u7a0b", "\u57fa\u7840\u533b\u5b66", "\u4f1a\u8ba1\u5b66", "\u884c\u653f\u7ba1\u7406", "\u6295\u8d44\u5b66", "\u8ba1\u7b97\u673a", "\u6c7d\u8f66\u670d\u52a1\u5de5\u7a0b", "\u827a\u672f\u8bbe\u8ba1", "\u7ecf\u6d4e\u4fe1\u606f\u7ba1\u7406", "\u5236\u51b7\u4e0e\u4f4e\u6e29\u6280\u672f", "\u673a\u68b0\u5236\u9020\u5de5\u827a\u4e0e\u8bbe\u5907", "\u5730\u8d28\u5b66", "\u4f1a\u5c55\u7ecf\u6d4e\u4e0e\u7ba1\u7406", "\u6d89\u5916\u4f1a\u8ba1", "\u4ea4\u901a\u5de5\u7a0b", "\u56fd\u9645\u7ecf\u6d4e\u4e0e\u8d38\u6613", "\u5546\u52a1\u7ba1\u7406", "\u70f9\u996a\u4e13\u4e1a", "\u8ba1\u7b97\u673a\u5e94\u7528", "\u9762\u70b9\u5e08", "\u96d5\u5851", "\u516c\u5171\u4e8b\u4e1a\u7ba1\u7406", "\u4fe1\u606f\u79d1\u5b66\u6280\u672f", "\u5fb7\u8bed", "\u5e7f\u544a\u5b66", "\u516c\u5b89\u6280\u672f", "\u7269\u7406\u6559\u80b2", "\u82f1\u8bed", "\u8ba1\u7b97\u673a\u79d1\u5b66", "\u666f\u89c2\u5b66", "\u5546\u52a1\u82f1\u8bed", "\u673a\u68b0\u5de5\u7a0b\u53ca\u81ea\u52a8\u5316", "\u8f66\u8f86\u5de5\u7a0b", "\u73af\u5883\u79d1\u5b66", "\u5386\u53f2\u5b66", "\u822a\u7a7a\u673a\u7535\u8bbe\u5907\u7ef4\u4fee", "\u5e7f\u544a\u8bbe\u8ba1", "\u533b\u5b66\u68c0\u9a8c", "\u8ba1\u7b97\u673a\u63a7\u5236\u6280\u672f", "\u56fd\u9645\u91d1\u878d", "\u65b0\u95fb\u5b66", "\u6587\u79d8", "\u5ba1\u8ba1\u5b66", "\u53f8\u6cd5\u4fe1\u606f\u5b89\u5168", "\u5fc3\u7406\u5b66", "\u8003\u53e4\u5b66", "\u673a\u68b0\u8bbe\u8ba1\u5236\u9020\u53ca\u5176\u81ea\u52a8\u5316", "\u4fe1\u606f\u5b89\u5168", "\u6570\u63a7\u6280\u672f\u4e0e\u5e94\u7528", "\u8f6f\u4ef6\u6280\u672f", "\u7269\u6d41\u7ba1\u7406", "\u822a\u6d77\u6280\u672f", "\u70ed\u80fd\u4e0e\u52a8\u529b\u5de5\u7a0b", "\u4eba\u529b\u8d44\u6e90\u7ba1\u7406", "\u7a7a\u4e58", "\u7269\u6d41\u5de5\u7a0b", "\u7535\u8111\u6280\u672f\u4e0e\u5e94\u7528", "\u8ba1\u7b97\u673a\u7f51\u7edc", "\u5de5\u4e1a\u5de5\u7a0b", "\u5316\u5de5\u8bbe\u5907\u4e0e\u673a\u68b0", "\u5916\u8d38\u82f1\u8bed", "\u7a0e\u52a1", "\u8d38\u6613\u7ecf\u6d4e", "\u7cfb\u7edf\u79d1\u5b66\u4e0e\u5de5\u7a0b", "\u4f1a\u5c55\u7b56\u5212\u4e0e\u5b9e\u52a1", "\u8f6f\u4ef6\u5de5\u7a0b", "\u7269\u7406\u5b66", "\u6c7d\u8f66\u6280\u672f\u670d\u52a1\u4e0e\u8d38\u6613", "\u6d4b\u63a7\u6280\u672f\u4e0e\u4eea\u5668", "\u8ba1\u7b97\u673a\u8f6f\u4ef6", "\u5bfc\u6e38\u670d\u52a1\u4e0e\u9152\u5e97\u7ba1\u7406", "\u8d44\u4ea7\u8bc4\u4f30", "\u77f3\u6cb9\u5de5\u7a0b", "\u56fd\u9645\u7ecf\u6d4e\u6cd5", "\u5236\u9020\u5de5\u7a0b", "\u5bf9\u5916\u6c49\u8bed", "\u6570\u63a7\u8bbe\u5907\u5e94\u7528\u4e0e\u7ef4\u62a4", "\u670d\u88c5\u8bbe\u8ba1\u4e0e\u5de5\u7a0b", "\u4f1a\u5c55\u7b56\u5212\u4e0e\u7ba1\u7406", "\u901a\u4fe1\u5de5\u7a0b", "\u5de5\u5546\u7ba1\u7406", "\u4f20\u64ad\u5b66", "\u52a8\u7269\u533b\u5b66", "\u7f51\u7edc\u5de5\u7a0b", "\u4e2d\u836f\u5236\u836f\u6280\u672f\uff08\u70ae\u5236\u65b9\u5411\uff09", "\u6750\u6599\u79d1\u5b66\u4e0e\u5de5\u7a0b", "\u4f01\u4e1a\u7ba1\u7406", "\u7535\u6c14\u5de5\u7a0b\u53ca\u5176\u81ea\u52a8\u5316", "\u91d1\u878d\u5b66", "\u5efa\u7b51\u5de5\u7a0b", "\u6444\u5f71\uff0c\u52a8\u753b", "\u73af\u5883\u5de5\u7a0b", "\u5730\u7406\u4fe1\u606f\u79d1\u5b66\u4e0e\u6280\u672f", "\u5ba4\u5185\u88c5\u6f62\u8bbe\u8ba1", "\u6c49\u8bed\u8a00\u6587\u5b66", "\u7269\u6d41", "\u4e34\u5e8a\u533b\u5b66\u4e0e\u533b\u5b66\u6280\u672f", "\u53e3\u8154\u533b\u5b66", "\u5b66\u524d\u6559\u80b2", "\u4f9b\u70ed\u901a\u98ce\u4e0e\u7a7a\u8c03\u5de5\u7a0b", "\u7f8e\u672f\u5b66", "\u7535\u6c14\u4fe1\u606f\u5de5\u7a0b", "\u804c\u4e1a\u6280\u672f\u6559\u80b2", "\u5f71\u89c6\u5b66", "\u670d\u88c5\u8bbe\u8ba1", "\u5bfc\u6f14\uff0c\u5e7f\u64ad\u7535\u89c6\u7f16\u5bfc", "\u53f8\u6cd5\u6587\u79d8", "\u5e94\u7528\u5316\u5b66", "\u56fd\u9645\u8d38\u6613", "\u7535\u5b50\u79d1\u5b66\u4e0e\u6280\u672f", "\u7ecf\u6d4e\u6cd5", "\u4e2d\u533b\u5b66", "\u7535\u5b50\u6280\u672f", "\u9ad8\u5206\u5b50\u6750\u6599\u4e0e\u5de5\u7a0b", "\u56fd\u9645\u5546\u52a1", "\u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f", "\u8d22\u52a1\u7ba1\u7406", "\u4fe1\u606f\u7ba1\u7406\u548c\u4fe1\u606f\u7cfb\u7edf", "\u7535\u6c14\u81ea\u52a8\u5316", "\u6d4b\u7ed8\u5de5\u7a0b", "\u793e\u4f1a\u4fdd\u969c\u4e0e\u4eba\u529b\u8d44\u6e90", "\u7ecf\u6d4e\u5b66", "\u5de5\u7a0b\u9020\u4ef7\u7ba1\u7406", "\u4fe1\u606f\u7ba1\u7406", "\u73a9\u5177\u8bbe\u8ba1\u4e0e\u5236\u9020", "\u623f\u4ea7\u6d4b\u7ed8", "\u97f3\u4e50\uff0c\u4f5c\u66f2", "\u623f\u5730\u4ea7\u7ecf\u8425\u7ba1\u7406", "\u6280\u672f\u7ecf\u6d4e", "\u6cd5\u5f8b\u4e8b\u52a1", "\u5e02\u573a\u8425\u9500", "\u8d22\u653f\u5b66", "\u7269\u4e1a\u7ba1\u7406", "\u7ba1\u7406\u79d1\u5b66", "\u79fb\u52a8\u901a\u4fe1\u6280\u672f", "\u9500\u552e", "\u751f\u7269\u79d1\u5b66\uff0c\u6280\u672f", "\u5de5\u827a\u7f8e\u672f", "\u6d89\u5916\u4e8b\u7269\u7ba1\u7406", "\u4e2d\u836f\u5b66", "\u7535\u5b50\u4fe1\u606f\u79d1\u5b66\u4e0e\u6280\u672f", "\u5e7f\u64ad\u7535\u89c6\u6280\u672f", "\u6cd5\u5b66", "\u4e1a\u52a1\u4e3b\u7ba1", "\u8ba1\u7b97\u673a\u4fe1\u606f\u7ba1\u7406", "\u571f\u6728\u5de5\u7a0b", "\u4fdd\u9669", "N", "\u5546\u52a1\u7b56\u5212\u7ba1\u7406", "\u8239\u8236\u5de5\u7a0b", "\u6559\u80b2\u5b66", "\u9879\u76ee\u7ba1\u7406", "\u65c5\u6e38\u7ba1\u7406", "\u5c0f\u5b66\u6559\u80b2", "\u4fe1\u606f\u5de5\u7a0b", "\u6b66\u5668\u7c7b", "\u5236\u9020\u81ea\u52a8\u5316\u4e0e\u6d4b\u63a7\u6280\u672f", "\u5de5\u4e1a\u4e0e\u6c11\u7528\u5efa\u7b51", "\u56ed\u827a", "\u5c0f\u5b66\u6559\u80b2\u4e13\u4e1a", "\u91d1\u5c5e\u6750\u6599\u5de5\u7a0b", "\u65e5\u8bed", "\u5546\u5b66\u4e13\u4e1a", "\u5236\u836f\u5de5\u7a0b", "\u793e\u4f1a\u5b66", "\u62a4\u7406\u5b66", "\u7535\u5b50\u4fe1\u606f\u5de5\u7a0b\u6280\u672f", "\u620f\u5267\uff0c\u8868\u6f14", "\u673a\u7535\u4e00\u4f53\u5316", "\u540e\u8c03\u81f3\u6842\u6797\u7a7a\u519b\u5b66\u9662", "\u98df\u54c1\u79d1\u5b66\u4e0e\u5de5\u7a0b", "\u673a\u68b0\u7535\u5b50\u5de5\u7a0b/\u673a\u7535\u4e00\u4f53\u5316", "\u793e\u4f1a\u5de5\u4f5c", "\u5de5\u5546\u7ba1\u7406\u7c7b", "\u7535\u6c14\u5de5\u7a0b", "\u751f\u7269\u5236\u836f\u4e0e\u98df\u54c1\u5de5\u7a0b", "\u6cd5\u5f8b", "\u5de5\u5546\u4f01\u4e1a\u7ba1\u7406", "\u4ea4\u901a\u8fd0\u8f93", "\u516c\u5171\u5173\u7cfb\u5b66", "\u62a4\u7406\u4e13\u4e1a", "\u8ba1\u7b97\u673a\u6280\u672f\u53ca\u5e94\u7528", "\u751f\u6001\u5b66", "\u7ecf\u6d4e\u4e0e\u91d1\u878d", "\u7535\u5b50\u5546\u52a1", "\u751f\u5316\u5236\u836f", "\u6570\u5b66\u6559\u80b2", "\u5176\u5b83\u5916\u8bed", "\u7535\u89c6\u65b0\u95fb", "\u5efa\u7b51\u5b66", "\u5de5\u4e1a\u8bbe\u8ba1", "\u4f53\u80b2\u6559\u80b2", "\u4f1a\u8ba1\u4fe1\u606f\u7cfb\u7edf", "\u7eba\u7ec7\u5de5\u7a0b", "\u6c34\u5229\u6c34\u7535\u5de5\u7a0b", "\u516c\u5173\u6587\u79d8", "\u81ea\u52a8\u5316", "\u7535\u5b50\u4fe1\u606f\u5de5\u7a0b", "\u64ad\u97f3\uff0c\u4e3b\u6301\uff0c\u5f55\u97f3", "\u8f7b\u5316\u5de5\u7a0b", "CNC", "\u8ba1\u7b97\u673a\u7f51\u7edc\u6280\u672f", "\u836f\u5242\u5e08", "\u9152\u5e97\u7ba1\u7406", "\u6a21\u5177\u8bbe\u8ba1\u4e0e\u5236\u9020", "\u836f\u5b66", "\u4fe1\u7528\u7ba1\u7406", "\u65c5\u6e38\u7ba1\u7406\u7cfb", "\u5546\u52a1\u6587\u79d8\u4e0e\u8ba1\u7b97\u673a\u5e94\u7528", "\u56ed\u6797\u5de5\u7a0b", "\u4fe1\u606f\u4e0e\u8ba1\u7b97\u79d1\u5b66", "\u4f1a\u8ba1", "\u620f\u5267\u5f71\u89c6\u7f8e\u672f\u8bbe\u8ba1", "\u7535\u5b50", "\u7535\u89c6\u8282\u76ee\u5236\u4f5c\u4e13\u4e1a", "\u5de5\u7a0b\u7ba1\u7406", "\u7ecf\u6d4e\u7ba1\u7406", "\u8fde\u9501\u7ecf\u8425\u7ba1\u7406", "\u5173\u4e8e\u8fd9\u65b9\u9762\u7684\u90fd\u53ef\u4ee5\u3001", "\u56ed\u6797"]}, "\u4e13\u79d1\u6bd5\u4e1a\u65e5\u671f": {"type": "date", "value": []}, "\u7855\u58eb\u6bd5\u4e1a\u5b66\u6821": {"type": "checkbox", "value": ["\u4e0a\u6d77\u8d22\u7ecf\u5927\u5b66", "\u4e2d\u56fd\u793e\u4f1a\u79d1\u5b66\u9662", "\u6cb3\u5317\u5927\u5b66", "\u7535\u5b50\u79d1\u6280\u5927\u5b66", "\u56db\u5ddd\u5e08\u8303\u5927\u5b66", "LEEDS&#x20;METROPOLITAN&#x20;UNIVERSITY&#x20;", "\u5361\u8fea\u592b\u5927\u5b66", "\u4e2d\u56fd\u79d1\u5b66\u6280\u672f\u5927\u5b66", "\u4e0a\u6d77\u4ea4\u901a\u5927\u5b66\u7f51\u7edc\u7ee7\u7eed\u6559\u80b2\u5b66\u9662", "\u4e2d\u592e\u8d22\u7ecf\u5927\u5b66\uff08\u7814\u7a76\u751f\u5728\u8bfb\uff09", "\u5c71\u4e1c\u8d22\u7ecf\u5927\u5b66", "\u957f\u6c5f\u5927\u5b66", "\u5317\u4eac\u5de5\u5546\u5927\u5b66", "N", "\u6e05\u534e\u5927\u5b66", "\u91d1\u5c71\u98df\u54c1\u5de5\u4e1a\u5b66\u6821", "\u4e2d\u56fd\u79d1\u5b66\u9662\u5927\u5b66", "\u6c5f\u82cf\u5927\u5b66", "\u4e2d\u5357\u5927\u5b66", "\u4e0a\u6d77\u4ea4\u901a\u5927\u5b66", "\u71d5\u5c71\u5927\u5b66", "\u4e91\u5357\u519c\u4e1a\u5927\u5b66"]}, "\u672c\u79d1\u4e13\u4e1a": {"type": "checkbox", "value": ["\u8d22\u653f\u91d1\u878d", "\u57fa\u7840\u533b\u5b66", "\u56fd\u9645\u7ecf\u6d4e\u4e0e\u8d38\u6613", "\u884c\u653f\u7ba1\u7406", "\u6c7d\u8f66\u670d\u52a1\u5de5\u7a0b", "\u827a\u672f\u8bbe\u8ba1", "\u7ecf\u6d4e\u4fe1\u606f\u7ba1\u7406", "\u673a\u68b0\u8bbe\u8ba1\u5236\u9020\u53ca\u5176\u81ea\u52a8\u5316", "\u4f1a\u8ba1\u5b66", "\u8ba1\u7b97\u673a\u5e94\u7528", "\u516c\u5171\u4e8b\u4e1a\u7ba1\u7406", "\u4fe1\u606f\u79d1\u5b66\u6280\u672f", "\u5e7f\u544a\u5b66", "\u65e0\u6781\u975e\u91d1\u5c5e\u6750\u6599\u5de5\u7a0b", "\u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f", "\u98de\u884c\u5668\u73af\u5883\u4e0e\u751f\u547d\u4fdd\u969c\u5de5\u7a0b", "\u5546\u52a1\u82f1\u8bed", "\u673a\u68b0\u5de5\u7a0b\u53ca\u81ea\u52a8\u5316", "\u8f66\u8f86\u5de5\u7a0b", "\u79d1\u6280\u9632\u536b", "\u6d77\u5546\u6cd5", "\u56fd\u9645\u91d1\u878d", "\u65b0\u95fb\u5b66", "\u6211\u8fd8\u6709\u4fee\u4e00\u4e2a\u7b2c\u4e8c\u4e13\u4e1a\uff0c\u91d1\u878d", "\u6587\u79d8", "\u91d1\u878d", "\u6c34\u5229\u6c34\u7535\u5de5\u7a0b", "\u58f0\u4e50\u3001\u94a2\u7434\u3001\u821e\u8e48", "\u8ba1\u7b97\u673a\u5e94\u7528\u4e0e\u6570\u63a7\u52a0\u5de5\u7cfb\u7edf", "\u62db\u6295\u6807", "\u4ea4\u901a\u5de5\u7a0b", "\u9053\u8def\u4e0e\u6865\u6881", "\u5386\u53f2\u5b66", "\u7269\u6d41\u7ba1\u7406", "\u56fd\u9645\u5546\u52a1\u82f1\u8bed", "\u4eba\u529b\u8d44\u6e90\u7ba1\u7406", "\u7edf\u8ba1\u5b66", "\u70ed\u80fd\u4e0e\u52a8\u529b\u5de5\u7a0b", "\u8bbe\u8ba1", "\u7a7a\u4e58", "\u7269\u6d41\u5de5\u7a0b", "\u670d\u5175\u5f79", "\u5de5\u4e1a\u5de5\u7a0b", "\u5316\u5b66", "\u8d38\u6613\u7ecf\u6d4e", "\u5851\u6599\u6210\u578b", "\u5ba4\u5185\u88c5\u6f62\u8bbe\u8ba1", "\u8f6f\u4ef6\u5de5\u7a0b", "\u7269\u7406\u5b66", "\u7ed8\u753b", "\u6d4b\u63a7\u6280\u672f\u4e0e\u4eea\u5668", "\u516c\u5171\u4e8b\u4e1a\u7ba1\u7406\uff08\u8f85\u4fee\uff09", "\u7269\u7406\u5b66\u7c7b", "\u76ae\u5177\u5236\u4f5c", "\u56fd\u9645\u7ecf\u6d4e\u6cd5", "\u670d\u88c5\u8bbe\u8ba1\u4e0e\u5de5\u7a0b", "\u5de5\u5546\u7ba1\u7406", "\u4f20\u64ad\u5b66", "\u8ba1\u7b97\u673a\u7f51\u7edc", "\u6750\u6599\u79d1\u5b66\u4e0e\u5de5\u7a0b", "\u4f01\u4e1a\u7ba1\u7406", "\u7535\u6c14\u5de5\u7a0b\u53ca\u5176\u81ea\u52a8\u5316", "\u91d1\u878d\u5b66", "\u5efa\u7b51\u5de5\u7a0b", "\u54f2\u5b66\uff08\u542b\u4f26\u7406\u5b66\uff09", "\u6444\u5f71\uff0c\u52a8\u753b", "\u73af\u5883\u5de5\u7a0b", "\u6c49\u8bed\u8a00\u6587\u5b66", "\u751f\u7269\u5de5\u7a0b", "\u7ed9\u6392\u6c34\u79d1\u5b66\u4e0e\u5de5\u7a0b", "\u4e34\u5e8a\u533b\u5b66\u4e0e\u533b\u5b66\u6280\u672f", "\u65b0\u95fb\u4f20\u64ad", "\u5b66\u524d\u6559\u80b2", "\u7f8e\u672f\u5b66", "\u7535\u6c14\u4fe1\u606f\u5de5\u7a0b", "\u601d\u60f3\u653f\u6cbb\u6559\u80b2", "\u670d\u88c5\u8bbe\u8ba1", "\u5bfc\u6f14\uff0c\u5e7f\u64ad\u7535\u89c6\u7f16\u5bfc", "\u5e94\u7528\u5316\u5b66", "\u5e02\u573a\u8425\u9500", "\u7535\u5b50\u79d1\u5b66\u4e0e\u6280\u672f", "\u7ecf\u6d4e\u6cd5", "\u822a\u8fd0\u7ba1\u7406", "\u4e2d\u533b\u5b66", "\u56fd\u9645\u5546\u52a1", "\u82f1\u8bed", "\u8d22\u52a1\u7ba1\u7406", "\u4fe1\u606f\u7ba1\u7406\u548c\u4fe1\u606f\u7cfb\u7edf", "\u8ba1\u7b97\u673a\u79d1\u5b66", "\u7ecf\u6d4e\u5b66", "\u5de5\u7a0b\u9020\u4ef7\u7ba1\u7406", "\u901a\u4fe1\u5de5\u7a0b", "\u97f3\u4e50\uff0c\u4f5c\u66f2", "\u6a21\u5177\u8bbe\u8ba1\u4e0e\u5236\u9020", "\u623f\u5730\u4ea7\u7ecf\u8425\u7ba1\u7406", "\u6cd5\u5f8b\u4e8b\u52a1", "\u5f39\u836f\u5de5\u7a0b\u4e0e\u7206\u70b8\u6280\u672f", "\u836f\u5b66", "\u7ba1\u7406\u79d1\u5b66", "\u751f\u7269\u79d1\u5b66\uff0c\u6280\u672f", "\u653f\u6cbb\u5de5\u4f5c", "\u8ba1\u7b97\u673a\u5de5\u7a0b", "\u6559\u80b2\u6280\u672f\u5b66", "\u4e2d\u836f\u5b66", "\u7535\u5b50\u4fe1\u606f\u79d1\u5b66\u4e0e\u6280\u672f", "\u6cd5\u5b66", "\u519c\u4e1a\u8d44\u6e90\u4e0e\u73af\u5883", "\u8ba1\u7b97\u673a\u4fe1\u606f\u7ba1\u7406", "\u571f\u6728\u5de5\u7a0b", "\u8d22\u653f\u5b66", "\u533b\u5b66\u68c0\u9a8c", "\u5e7f\u64ad\u7535\u89c6\u65b0\u95fb", "\u6c7d\u8f66\u5236\u9020\u4e0e\u7ef4\u4fee", "\u690d\u7269\u4fdd\u62a4\u5b66", "\u6295\u8d44\u7ba1\u7406\u7cfb\u623f\u5730\u4ea7\u7ecf\u8425\u7ba1\u7406\u4e13\u4e1a", "\u6559\u80b2\u5b66", "\u65c5\u6e38\u7ba1\u7406", "\u4fdd\u9669", "\u4fe1\u606f\u5de5\u7a0b", "\u6295\u8d44\u7406\u8d22", "\u5de5\u4e1a\u4e0e\u6c11\u7528\u5efa\u7b51", "\u91d1\u5c5e\u6750\u6599\u5de5\u7a0b", "\u65e5\u8bed", "\u5236\u836f\u5de5\u7a0b", "\u793e\u4f1a\u5b66", "\u89c6\u89c9\u4f20\u8fbe\u5e73\u9762\u8bbe\u8ba1", "\u571f\u5730\u8d44\u6e90\u7ba1\u7406", "\u62a4\u7406\u5b66", "\u6570\u5b66\u4e0e\u5e94\u7528\u6570\u5b66", "\u620f\u5267\uff0c\u8868\u6f14", "\u5149\u4fe1\u606f\u79d1\u5b66\u4e0e\u6280\u672f", "\u5bf9\u5916\u6c49\u8bed", "\u98df\u54c1\u79d1\u5b66\u4e0e\u5de5\u7a0b", "\u673a\u68b0\u7535\u5b50\u5de5\u7a0b/\u673a\u7535\u4e00\u4f53\u5316", "\u6587\u5316\u4ea7\u4e1a\u7ba1\u7406", "\u5b89\u5168\u5de5\u7a0b", "\u4ea4\u901a\u8fd0\u8f93", "\u5730\u9762\u6b66\u5668\u673a\u52a8\u5de5\u7a0b", "\u5e02\u573a\u8425\u9500\u7ba1\u7406", "\u7ecf\u6d4e\u4e0e\u91d1\u878d", "\u7535\u5b50\u5546\u52a1", "\u77f3\u6cb9\u5de5\u7a0b", "\u5e94\u7528\u7269\u7406\u5b66", "\u5efa\u7b51\u5b66", "\u5316\u5b66\u5de5\u7a0b\u4e0e\u5de5\u827a", "\u5de5\u4e1a\u8bbe\u8ba1", "\u4f53\u80b2\u6559\u80b2", "\u56fe\u4e66\u9986\u5b66\u548c\u6863\u6848\u5b66", "\u81ea\u52a8\u5316", "\u7535\u5b50\u4fe1\u606f\u5de5\u7a0b", "\u64ad\u97f3\uff0c\u4e3b\u6301\uff0c\u5f55\u97f3", "\u8f7b\u5316\u5de5\u7a0b", "\u529b\u5b66", "N", "\u4fe1\u7528\u7ba1\u7406", "\u4fe1\u606f\u4e0e\u8ba1\u7b97\u79d1\u5b66", "e", "\u821e\u8e48", "\u8d44\u6e90\u73af\u5883\u79d1\u5b66", "\u5de5\u7a0b\u7ba1\u7406", "\u7ecf\u6d4e\u7ba1\u7406", "\u52b3\u52a8\u4e0e\u793e\u4f1a\u4fdd\u969c", "\u56fd\u9645\u8d38\u6613\uff08\u672c\uff09", "\u7f51\u7edc\u5de5\u7a0b\uff08\u7f51\u7edc\u8bbe\u8ba1\u4e0e\u7ba1\u7406\uff09", "\u56ed\u6797"]}, "\u7855\u58eb\u4e13\u4e1a": {"type": "checkbox", "value": ["\u8f6f\u4ef6\u5de5\u7a0b", "\u4f01\u4e1a\u7ba1\u7406", "\u91d1\u878d\u5b66", "\u4f1a\u8ba1\u5b66", "\u4eba\u529b\u8d44\u6e90\u7ba1\u7406", "\u8ba1\u7b97\u673a\u4fe1\u606f\u7ba1\u7406", "\u5de5\u5546\u7ba1\u7406", "\u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f", "N", "\u7535\u529b\u7cfb\u7edf\u53ca\u81ea\u52a8\u5316", "\u6c49\u8bed\u8a00\u6587\u5b66", "\u5730\u8d28\u5de5\u7a0b", "\u7ecf\u6d4e\u4e0e\u91d1\u878d", "\u690d\u7269\u4fdd\u62a4\u5b66", "\u901a\u4fe1\u5de5\u7a0b", "\u7ecf\u6d4e\u5b66"]}}};
    //var data = {'娱乐行为':{'拉卡拉彩票用户':{'value':['0','1'],"isBool":"","isBool":"",'type':'checkbox'},'拉卡拉众筹用户':{'value':['0','1'],"isBool":"",'type':'checkbox',"isBool":""}}};
    /*var data = {'社会属性':{'曾用身份证张数':{'value':[], 'type':'num'},'曾用手机号个数':{'value':[], 'type':'num'},'联系人地址':{'value':['N'],'type':'checkbox'},'联系人地址（全部）':{'value':['N'],'type':'checkbox'},'最高学历':{'value':['大专','中技','本科','初中及以下','高中','中专','高中，中专及以下','硕士','N','博士'],'type':'checkbox'},'最高学位':{'value':['N'],'type':'checkbox'},'毕业院校（全部）':{'value':['N'],'type':'checkbox'},'博士专业':{'value':['心理学','N'],'type':'checkbox'},'博士毕业学校':{'value':['厦门大学','N'],'type':'checkbox'},'博士入学日期':{'value':[], 'type':'date'},'博士毕业日期':{'value':[], 'type':'date'},'硕士专业':{'value':['软件工程','企业管理','金融学','会计学','人力资源管理','计算机信息管理','工商管理','计算机科学与技术','N','电力系统及自动化','汉语言文学','地质工程','经济与金融','植物保护学','通信工程','经济学'],'type':'checkbox'},'硕士毕业学校':{'value':['上海财经大学','中国社会科学院','河北大学','电子科技大学','四川师范大学','LEEDS&#x20;METROPOLITAN&#x20;UNIVERSITY&#x20;','卡迪夫大学','中国科学技术大学','上海交通大学网络继续教育学院','中央财经大学（研究生在读）','山东财经大学','长江大学','北京工商大学','N','清华大学','金山食品工业学校','中国科学院大学','江苏大学','中南大学','上海交通大学','燕山大学','云南农业大学'],'type':'checkbox'},'硕士入学日期':{'value':[], 'type':'date'},'硕士毕业日期':{'value':[], 'type':'date'},'本科专业':{'value':['财政金融','基础医学','国际经济与贸易','行政管理','汽车服务工程','艺术设计','经济信息管理','机械设计制造及其自动化','会计学','计算机应用','公共事业管理','信息科学技术','广告学','无极非金属材料工程','计算机科学与技术','飞行器环境与生命保障工程','商务英语','机械工程及自动化','车辆工程','科技防卫','海商法','国际金融','新闻学','我还有修一个第二专业，金融','文秘','金融','水利水电工程','声乐、钢琴、舞蹈','计算机应用与数控加工系统','招投标','交通工程','道路与桥梁','历史学','物流管理','国际商务英语','人力资源管理','统计学','热能与动力工程','设计','空乘','物流工程','服兵役','工业工程','化学','贸易经济','塑料成型','室内装潢设计','软件工程','物理学','绘画','测控技术与仪器','公共事业管理（辅修）','物理学类','皮具制作','国际经济法','服装设计与工程','工商管理','传播学','计算机网络','材料科学与工程','企业管理','电气工程及其自动化','金融学','建筑工程','哲学（含伦理学）','摄影，动画','环境工程','汉语言文学','生物工程','给排水科学与工程','临床医学与医学技术','新闻传播','学前教育','美术学','电气信息工程','思想政治教育','服装设计','导演，广播电视编导','应用化学','市场营销','电子科学与技术','经济法','航运管理','中医学','国际商务','英语','财务管理','信息管理和信息系统','计算机科学','经济学','工程造价管理','通信工程','音乐，作曲','模具设计与制造','房地产经营管理','法律事务','弹药工程与爆炸技术','药学','管理科学','生物科学，技术','政治工作','计算机工程','教育技术学','中药学','电子信息科学与技术','法学','农业资源与环境','计算机信息管理','土木工程','财政学','医学检验','广播电视新闻','汽车制造与维修','植物保护学','投资管理系房地产经营管理专业','教育学','旅游管理','保险','信息工程','投资理财','工业与民用建筑','金属材料工程','日语','制药工程','社会学','视觉传达平面设计','土地资源管理','护理学','数学与应用数学','戏剧，表演','光信息科学与技术','对外汉语','食品科学与工程','机械电子工程/机电一体化','文化产业管理','安全工程','交通运输','地面武器机动工程','市场营销管理','经济与金融','电子商务','石油工程','应用物理学','建筑学','化学工程与工艺','工业设计','体育教育','图书馆学和档案学','自动化','电子信息工程','播音，主持，录音','轻化工程','力学','N','信用管理','信息与计算科学','e','舞蹈','资源环境科学','工程管理','经济管理','劳动与社会保障','国际贸易（本）','网络工程（网络设计与管理）','园林'],'type':'checkbox'},'本科入学日期':{'value':[], 'type':'date'},'本科毕业日期':{'value':[], 'type':'date'},'专科专业':{'value':['人力資源','船舶与海洋工程','基础医学','会计学','行政管理','投资学','计算机','汽车服务工程','艺术设计','经济信息管理','制冷与低温技术','机械制造工艺与设备','地质学','会展经济与管理','涉外会计','交通工程','国际经济与贸易','商务管理','烹饪专业','计算机应用','面点师','雕塑','公共事业管理','信息科学技术','德语','广告学','公安技术','物理教育','英语','计算机科学','景观学','商务英语','机械工程及自动化','车辆工程','环境科学','历史学','航空机电设备维修','广告设计','医学检验','计算机控制技术','国际金融','新闻学','文秘','审计学','司法信息安全','心理学','考古学','机械设计制造及其自动化','信息安全','数控技术与应用','软件技术','物流管理','航海技术','热能与动力工程','人力资源管理','空乘','物流工程','电脑技术与应用','计算机网络','工业工程','化工设备与机械','外贸英语','税务','贸易经济','系统科学与工程','会展策划与实务','软件工程','物理学','汽车技术服务与贸易','测控技术与仪器','计算机软件','导游服务与酒店管理','资产评估','石油工程','国际经济法','制造工程','对外汉语','数控设备应用与维护','服装设计与工程','会展策划与管理','通信工程','工商管理','传播学','动物医学','网络工程','中药制药技术（炮制方向）','材料科学与工程','企业管理','电气工程及其自动化','金融学','建筑工程','摄影，动画','环境工程','地理信息科学与技术','室内装潢设计','汉语言文学','物流','临床医学与医学技术','口腔医学','学前教育','供热通风与空调工程','美术学','电气信息工程','职业技术教育','影视学','服装设计','导演，广播电视编导','司法文秘','应用化学','国际贸易','电子科学与技术','经济法','中医学','电子技术','高分子材料与工程','国际商务','计算机科学与技术','财务管理','信息管理和信息系统','电气自动化','测绘工程','社会保障与人力资源','经济学','工程造价管理','信息管理','玩具设计与制造','房产测绘','音乐，作曲','房地产经营管理','技术经济','法律事务','市场营销','财政学','物业管理','管理科学','移动通信技术','销售','生物科学，技术','工艺美术','涉外事物管理','中药学','电子信息科学与技术','广播电视技术','法学','业务主管','计算机信息管理','土木工程','保险','N','商务策划管理','船舶工程','教育学','项目管理','旅游管理','小学教育','信息工程','武器类','制造自动化与测控技术','工业与民用建筑','园艺','小学教育专业','金属材料工程','日语','商学专业','制药工程','社会学','护理学','电子信息工程技术','戏剧，表演','机电一体化','后调至桂林空军学院','食品科学与工程','机械电子工程/机电一体化','社会工作','工商管理类','电气工程','生物制药与食品工程','法律','工商企业管理','交通运输','公共关系学','护理专业','计算机技术及应用','生态学','经济与金融','电子商务','生化制药','数学教育','其它外语','电视新闻','建筑学','工业设计','体育教育','会计信息系统','纺织工程','水利水电工程','公关文秘','自动化','电子信息工程','播音，主持，录音','轻化工程','CNC','计算机网络技术','药剂师','酒店管理','模具设计与制造','药学','信用管理','旅游管理系','商务文秘与计算机应用','园林工程','信息与计算科学','会计','戏剧影视美术设计','电子','电视节目制作专业','工程管理','经济管理','连锁经营管理','关于这方面的都可以、','园林'],'type':'checkbox'},'专科入学日期':{'value':[], 'type':'date'},'专科毕业日期':{'value':[], 'type':'date'},"\u6700\u8fd1\u5de5\u4f5c\u5e74\u9650": {"type": "fill", "value": []}, "\u6700\u8fd1\u5de5\u4f5c\u804c\u4f4d": {"type": "fill", "value": []}, "\u5ea7\u673a\u53f7": {"type": "fill", "value": []}, "\u62c9\u5361\u62c9\u5546\u6237\u5f81\u4fe1\u8bc4\u5206": {"type": "fill", "value": []}, "\u5c45\u4f4f\u5730\uff08\u7701\u3001\u5e02\u3001\u53bf\uff09": {"type": "fill", "value": []}, "\u8054\u7cfb\u4eba\u624b\u673a\u53f7": {"type": "fill", "value": []}, "\u9ad8\u4e2d\u6bd5\u4e1a\u5b66\u6821": {"type": "fill", "value": []}, "\u66fe\u7528\u90ae\u7bb1": {"type": "fill", "value": []}, "\u5de5\u4f5c\u5355\u4f4d\u540d\u79f0\uff08\u5168\u90e8\uff09": {"type": "fill", "value": []}, "\u8054\u7cfb\u4eba\u5ea7\u673a\u53f7": {"type": "fill", "value": []}, "\u5c45\u4f4f\u5730\uff08\u7701\uff09": {"type": "fill", "value": []}, "\u8054\u7cfb\u4eba\u59d3\u540d\uff08\u5168\u90e8\uff09": {"type": "fill", "value": []}, "\u6635\u79f0": {"type": "fill", "value": []}, "\u4e3b\u8981\u6d3b\u52a8\u5730\uff08\u7701\u3001\u5e02\u3001\u53bf\uff09": {"type": "fill", "value": []}, "\u5fae\u4fe1\u53f7": {"type": "fill", "value": []}, "\u8eab\u4efd\u8bc1\u53f7": {"type": "fill", "value": []}, "\u6700\u8fd1\u5de5\u4f5c\u5355\u4f4d\u540d\u79f0": {"type": "fill", "value": []}, "\u66fe\u7ecf\u6d3b\u52a8\u5730\uff08\u5e02\uff09": {"type": "fill", "value": []}, "\u6bd5\u4e1a\u9662\u6821": {"type": "fill", "value": []}, "\u8054\u7cfb\u4eba\u5ea7\u673a\u53f7\uff08\u5168\u90e8\uff09": {"type": "fill", "value": []}, "\u672c\u79d1\u6bd5\u4e1a\u5b66\u6821": {"type": "fill", "value": []}, "\u5de5\u4f5c\u5e74\u9650\u5408\u8ba1": {"type": "fill", "value": []}, "\u62c9\u5361\u62c9\u4e2a\u4eba\u5f81\u4fe1\u7b49\u7ea7": {"type": "fill", "value": []}, "\u5c45\u4f4f\u5730\uff08\u5e02\uff09": {"type": "fill", "value": []}, "\u6700\u8fd1\u5de5\u4f5c\u85aa\u916c\uff08\u6708\uff09": {"type": "num", "value": []}, "\u90ae\u7bb1": {"type": "fill", "value": []}, "\u5de5\u4f5c\u5355\u4f4d\u6240\u5728\u90e8\u95e8\uff08\u5168\u90e8\uff09": {"type": "fill", "value": []}, "\u4e3b\u8981\u6d3b\u52a8\u5730\uff08\u53bf\uff09": {"type": "fill", "value": []}, "\u9ad8\u4e2d\u6bd5\u4e1a\u65e5\u671f": {"type": "date", "value": []}, "\u9ad8\u4e2d\u5165\u5b66\u65e5\u671f": {"type": "date", "value": []}, "\u4e13\u79d1\u6bd5\u4e1a\u9662\u6821": {"type": "fill", "value": []}, "\u4e3b\u8981\u6d3b\u52a8\u5730\uff08\u7701\uff09": {"type": "fill", "value": []}, "\u5b50\u5973\u6570\u91cf": {"type": "num", "value": []}, "\u8054\u7cfb\u4eba\u59d3\u540d": {"type": "fill", "value": []}, "\u4e13\u4e1a\uff08\u5168\u90e8\uff09": {"type": "checkbox", "value": []}, "\u5168\u90e8\u5de5\u4f5c\u85aa\u916c\uff08\u6708\uff09": {"type": "num", "value": []}, "\u5c45\u4f4f\u5730\uff08\u53bf\uff09": {"type": "fill", "value": []}, "\u66fe\u7ecf\u6d3b\u52a8\u5730\uff08\u7701\uff09": {"type": "fill", "value": []}, "\u62a4\u7167\u53f7": {"type": "fill", "value": []}, "\u4e3b\u8981\u6d3b\u52a8\u5730\uff08\u5e02\uff09": {"type": "fill", "value": []}, "\u5de5\u4f5c\u804c\u4f4d\uff08\u5168\u90e8\uff09": {"type": "fill", "value": []}, "\u5a5a\u59fb\u72b6\u51b5": {"type": "fill", "value": []}, "\u62c9\u5361\u62c9\u5546\u6237\u5f81\u4fe1\u7b49\u7ea7": {"type": "fill", "value": []}, "\u8054\u7cfb\u4eba\u624b\u673a\u53f7\uff08\u5168\u90e8\uff09": {"type": "fill", "value": []}, "\u6cd5\u4eba\u4ee3\u8868": {"type": "fill", "value": []}, "\u62c9\u5361\u62c9\u4e2a\u4eba\u5f81\u4fe1\u8bc4\u5206": {"type": "num", "value": []}, "\u624b\u673a\u53f7": {"type": "fill", "value": []}, "\u6700\u8fd1\u5de5\u4f5c\u5355\u4f4d\u6240\u5728\u90e8\u95e8": {"type": "fill", "value": []}, "\u66fe\u7528\u624b\u673a\u53f7": {"type": "fill", "value": []}, "\u66fe\u7528\u5ea7\u673a\u53f7": {"type": "fill", "value": []}, "\u6700\u9ad8\u5b66\u5386\u4e13\u4e1a": {"type": "fill", "value": []}, "\u4e2d\u6587\u59d3\u540d": {"type": "fill", "value": []}, "\u66fe\u7528\u8eab\u4efd\u8bc1\u53f7": {"type": "num", "value": []}, "\u56fd\u7c4d": {"type": "fill", "value": []}},
                "自然属性": {"\u51fa\u751f\u65e5\u671f": {"type": "date", "value": []}, "\u751f\u8096": {"type": "checkbox", "value": ["N", "\u725b", "\u864e", "\u5154", "\u9f99", "\u86c7", "\u9a6c", "\u7f8a", "\u7334", "\u9e21", "\u72d7", "\u732a", "\u9f20"]}, "\u6027\u522b": {"type": "checkbox", "value": ["\u5973", "N", "\u7537"]}, "\u5e74\u9f84\uff08\u5e74\u4ee3\uff09": {"type": "checkbox", "value": ["N", "20\u540e", "30\u540e", "40\u540e", "50\u540e", "60\u540e", "70\u540e", "80\u540e", "90\u540e", "00\u540e", "10\u540e"]}, "\u661f\u5ea7": {"type": "checkbox", "value": ["N", "\u5929\u874e", "\u9b54\u874e", "\u5de8\u87f9", "\u53cc\u9c7c", "\u767d\u7f8a", "\u91d1\u725b", "\u53cc\u5b50", "\u5929\u79e4", "\u6c34\u74f6", "\u72ee\u5b50", "\u5904\u5973", "\u5c04\u624b"]}, "\u5e74\u9f84": {"type": "num", "value": []}},                "金融资产": {"\u94f6\u884c\u5361\u5f00\u6237\u884c": {"type": "checkbox", "value": []}, "\u501f\u8bb0\u5361\u5f00\u6237\u884c\u6570": {"type": "num", "value": []}, "\u501f\u8bb0\u5361\u5361\u53f7": {"type": "checkbox", "value": []}, "\u8d37\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8d37\u8bb0\u5361\u5f00\u6237\u884c\u6570": {"type": "num", "value": []}, "\u62c9\u5361\u62c9\u7406\u8d22\u8d26\u6237": {"type": "checkbox", "value": []}, "\u62c9\u5361\u62c9\u57fa\u91d1\u8d26\u6237": {"type": "checkbox", "value": []}, "\u62c9\u5361\u62c9\u94b1\u5305": {"type": "checkbox", "value": []}, "\u62c9\u5361\u62c9\u57fa\u91d1\u8d26\u6237\u4f59\u989d": {"type": "num", "value": []}, "\u8d37\u8bb0\u5361\u5361\u53f7": {"type": "checkbox", "value": []}, "\u94f6\u884c\u5361\u5f00\u6237\u884c\u6570": {"type": "num", "value": []}, "\u62c9\u5361\u62c9\u7406\u8d22\u8d26\u6237\u5f00\u901a\u65e5\u671f": {"type": "date", "value": []}, "\u501f\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8d37\u8bb0\u5361\u5f00\u6237\u884c": {"type": "checkbox", "value": []}, "\u94f6\u884c\u5361\u5361\u53f7": {"type": "checkbox", "value": []}, "\u62c9\u5361\u62c9\u94b1\u5305\u8d26\u53f7": {"type": "fill", "value": []}, "\u62c9\u5361\u62c9\u57fa\u91d1\u8d26\u53f7": {"type": "fill", "value": []}, "\u94f6\u884c\u5361": {"type": "checkbox", "value": []}, "\u8d37\u8bb0\u5361": {"type": "checkbox", "value": []}, "\u501f\u8bb0\u5361": {"type": "checkbox", "value": []}, "\u62c9\u5361\u62c9\u57fa\u91d1\u8d26\u6237\u5f00\u901a\u65e5\u671f": {"type": "date", "value": []}, "\u62c9\u5361\u62c9\u7406\u8d22\u8d26\u53f7": {"type": "fill", "value": []}, "\u62c9\u5361\u62c9\u94b1\u5305\u5f00\u6237\u65e5\u671f": {"type": "date", "value": []}, "\u62c9\u5361\u62c9\u94b1\u5305\u4f59\u989d": {"type": "num", "value": []}, "\u94f6\u884c\u5361\u4f59\u989d": {"type": "num", "value": []}, "\u62c9\u5361\u62c9\u7406\u8d22\u8d26\u6237\u4f59\u989d": {"type": "num", "value": []}, "\u94f6\u884c\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u501f\u8bb0\u5361\u5f00\u6237\u884c": {"type": "checkbox", "value": []}},
                '有形物资':{'有效拉卡拉终端类型':{'value':['','mini','刷卡电话','NFC',
                            '收款宝','无线猫手刷','N','PC刷卡器','手机刷卡器','充电器手刷',
                            'NFC','刷卡手机'],'type':'checkbox'},
                            '所有拉卡拉终端类型':{'value':['mini','刷卡电话','NFC',
                            '收款宝','无线猫手刷','N','PC刷卡器','手机刷卡器',
                            '充电器手刷','NFC','刷卡手机'],'type':'checkbox'},
                            '运营商':{'value':['中国移动','虚拟运营商','中国电信',
                            '中国联通','N'],'type':'checkbox'},"\u62c9\u5361\u62c9\u6536\u6b3e\u5b9d": {"type": "checkbox", "value": []}, "\u7535\u4fe1\u7528\u6237": {"type": "checkbox", "value": []}, "\u6709\u6548\u62c9\u5361\u62c9\u7ec8\u7aef\u6570\u91cf": {"type": "num", "value": []}, "\u624b\u673a\u6570\u91cf": {"type": "num", "value": []}, "\u624b\u5237\u9996\u6b21\u6fc0\u6d3b\u65e5\u671f": {"type": "date", "value": []}, "IOS\u7cfb\u7edf\u7528\u6237": {"type": "checkbox", "value": []}, "\u624b\u673a\u578b\u53f7": {"type": "fill", "value": []}, "\u8001\u7ec8\u7aef\uff08mini,\u8d85\u76fe\uff0c\u5237\u5361\u7535\u8bdd\uff09": {"type": "checkbox", "value": []}, "\u6709\u6548\u62c9\u5361\u62c9\u624b\u5237\u6570\u91cf": {"type": "num", "value": []}, "\u62c9\u5361\u62c9\u79fb\u52a8\u7ec8\u7aef": {"type": "checkbox", "value": []}, "\u8054\u901a\u7528\u6237": {"type": "checkbox", "value": []}, "\u5b89\u5353\u7cfb\u7edf\u7528\u6237": {"type": "checkbox", "value": []}, "\u62c9\u5361\u62c9\u624b\u73af": {"type": "checkbox", "value": []}, "\u6240\u6709\u62c9\u5361\u62c9\u7ec8\u7aef\u6570\u91cf": {"type": "num", "value": []}, "\u6709\u6548\u62c9\u5361\u62c9\u6536\u6b3e\u5b9d\u6570\u91cf": {"type": "num", "value": []}, "\u6709\u6548\u7684\u62c9\u5361\u62c9\u624b\u73af\u6570\u91cf": {"type": "num", "value": []}, "\u6536\u6b3e\u5b9d\u9996\u6b21\u5f00\u901a\u65f6\u95f4": {"type": "date", "value": []}, "\u6709\u8fc7\u62c9\u5361\u62c9\u7ec8\u7aef": {"type": "checkbox", "value": []}, "\u624b\u73af\u9996\u6b21\u5f00\u901a\u65e5\u671f": {"type": "date", "value": []}, "\u62c9\u5361\u62c9\u624b\u5237": {"type": "checkbox", "value": []}, "\u79fb\u52a8\u7528\u6237": {"type": "checkbox", "value": []}, "\u62c9\u5361\u62c9\u7ec8\u7aef": {"type": "checkbox", "value": []}, "\u6709\u6548\u62c9\u5361\u62c9\u7ec8\u7aef\u79cd\u7c7b\u6570": {"type": "num", "value": []}, "\u624b\u673a\u64cd\u4f5c\u7cfb\u7edf": {"type": "fill", "value": []}},
                "虚拟资产": {"\u8eab\u8fb9\u5c0f\u5e97APP\u7248\u672c": {"type": "fill", "value": []}, "\u9996\u6b21\u6fc0\u6d3b\u8eab\u8fb9\u5c0f\u5e97\u5546\u6237\u7248APP\u65e5\u671f": {"type": "date", "value": []}, "\u8003\u62c9\u5f81\u4fe1APP": {"type": "checkbox", "value": []}, "\u9996\u6b21\u6fc0\u6d3b\u6536\u6b3e\u5b9dAPP\u65e5\u671f": {"type": "date", "value": []}, "\u9996\u6b21\u6fc0\u6d3b\u62c9\u5361\u62c9APP\u65e5\u671f": {"type": "date", "value": []}, "\u9996\u6b21\u6fc0\u6d3b\u8eab\u8fb9\u5c0f\u5e97APP\u65e5\u671f": {"type": "date", "value": []}, "\u62c9\u5361\u62c9\u76f8\u5173APP\u7c7b\u578b": {"type": "checkbox", "value": []}, "\u6536\u6b3e\u5b9dAPP": {"type": "checkbox", "value": []}, "\u62c9\u5361\u62c9APP\u7248\u672c": {"type": "fill", "value": []}, "\u624b\u73afAPP": {"type": "checkbox", "value": []}, "\u8003\u62c9\u5f81\u4fe1APP\u7248\u672c": {"type": "fill", "value": []}, "\u8eab\u8fb9\u5c0f\u5e97\u5546\u6237\u7248APP\u7248\u672c": {"type": "fill", "value": []}, "\u624b\u73afAPP\u7248\u672c": {"type": "fill", "value": []}, "\u62c9\u5361\u62c9\u76f8\u5173APP": {"type": "checkbox", "value": []}, "\u62c9\u5361\u62c9APP": {"type": "checkbox", "value": []}, "\u8eab\u8fb9\u5c0f\u5e97\u5546\u6237\u7248APP": {"type": "checkbox", "value": []}, "\u6536\u6b3e\u5b9dAPP\u7248\u672c": {"type": "fill", "value": []}, "\u8eab\u8fb9\u5c0f\u5e97APP": {"type": "checkbox", "value": []}, "\u9996\u6b21\u6fc0\u6d3b\u624b\u73afAPP\u65e5\u671f": {"type": "date", "value": []}, "\u9996\u6b21\u6fc0\u6d3b\u8003\u62c9\u5f81\u4fe1APP\u65e5\u671f": {"type": "date", "value": []}, "\u62c9\u5361\u62c9\u76f8\u5173APP\u6570\u91cf": {"type": "num", "value": []}},
                '异常行为':{'是否不良记录用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'违约行为(全部)':{'value':
                           ['爬虫_带联盟','用户中心','法院老赖','光大黑名单',
                           '爬虫_拍拍网','信贷逾期','爬虫_网贷'],
                           'type':'checkbox'}},
                '拉卡拉金融':{'最早一次钱包交易时间':{'value':[], 'type':'date'},'最后一次钱包交易时间':
                           {'value':[], 'type':'date'},'活期第一次申购(主动)渠道':{'value':['LKLNFCZF','LAKALASA',
                           'LAKALAEO','LAKALAAM','LAKALA','LAKALAYD','LAKALAOL','LAKALAZJ','N','LAKALADT','LAKALASD','LAKALAWX'],
                           'type':'checkbox'},'活期第一次申购(主动)方式':{'value':['刷卡支付','签约卡','零钱支付','N'],'type':'checkbox'},
                           '活期第一次赎回银行':{'value':['广州银行股份有限公司','民生银行','招商银行','平安银行（借记卡）',
                           '光大银行','交通银行','建设银行','邮储银行','中国建设银行','N','浦东发展银行','华夏银行','兴业银行','工商银行',
                           '中国工商银行','邮政储蓄银行','中国银行','平安银行','广发银行股份有限公司','中信银行','农业银行'],'type':'checkbox'},
                           '活期最后一次赎回日期':{'value':[], 'type':'date'},'活期最后一次赎回渠道':{'value':['LKLNFCZF','LAKALADT','LAKALAEO',
                           'LAKALA','LAKALAYD','LAKALAOL','LAKALALC','LAKALASA','LAKALASD','LAKALAYY','N','LAKALAWX'],'type':'checkbox'},'活期最后一次赎回方式'
                           :{'value':['钱包赎回','卡批量赎回','卡实时赎回','N'],'type':'checkbox'},'活期最后一次赎回银行':{'value':['广州银行股份有限公司',
                           '民生银行','邮政储蓄银行','工商银行','平安银行（借记卡）','光大银行','交通银行','建设银行','中国银行','N','浦东发展银行',
                           '华夏银行','兴业银行','招商银行','邮储银行','中国建设银行','中国工商银行','平安银行','广发银行股份有限公司','中信银行','农业银行'],
                           'type':'checkbox'},'定期第一次申购日期':{'value':[], 'type':'date'},'定期第一次申购渠道':{'value':['LKLNFCZF','LAKALASA',
                           'LAKALAAM','LAKALA','LAKALAYD','LAKALAEO','LAKALAOL','N','LAKALADT','LAKALAWX','LAKALAZJ','LAKALASD'],'type':'checkbox'},
                           '定期第一次申购方式':{'value':['零钱支付','刷卡支付','签约卡','N'],'type':'checkbox'},'易分期最后一次放款日期':{'value':['日期'],
                           'type':'date'},'员工贷最后一次放款日期':{'value':[], 'type':'date'},
                           '你还最后一次还款状态：1提前还款，2到期还款，3逾期还款，4至今未还清，5至今未还款':{'value':['N','1','3','2','4',
                           '5'],'type':'checkbox'},'易分期最后一次还款状态：1提前还款，2到期还款，3逾期还款，4至今未还清，5至今未还款':{'value':['N','1','3','2',
                           '4','5'],'type':'checkbox'},'替你还当期逾期天数':{'value':[], 'type':'num'},'易分期当期逾期天数':{'value':[], 'type':'num'},
                           '员工贷当期逾期天数':{'value':[], 'type':'num'},'替你还总逾期天数':{'value':[], 'type':'num'},'替你还至今审核未通过':
                           {'value':['1','N'],'type':'checkbox'},'易分期至今审核未通过':{'value':['1','N'],'type':'checkbox'},'员工贷至今审核未通过':{'value':['1','N'],
                           'type':'checkbox'},'定期最后一次申购日期':{'value':[], 'type':'date'},'定期最后一次申购渠道':{'value':['LKLNFCZF','LAKALASA','LAKALAEO',
                           'LAKALAAM','LAKALA','LAKALAYD','LAKALAOL','LAKALAZJ','N','LAKALADT','LAKALAWX',
                           'LAKALASD'],'type':'checkbox'},'定期最后一次申购方式':{'value':['刷卡支付','签约卡','零钱支付','N'],'type':'checkbox'},'定期第一次赎回银行':
                           {'value':['民生银行','中国工商银行','招商银行','平安银行（借记卡）','华夏银行','交通银行','建设银行','中国银行','N','浦东发展银行','光大银行','兴业银行','工商银行','中国建设银行','邮政储蓄银行','邮储银行','平安银行','广发银行股份有限公司','中信银行','农业银行'],'type':'checkbox'},
                           '定期最后一次赎回日期':{'value':[], 'type':'date'},'定期最后一次赎回渠道':{'value':
                           ['LAKALAWX','LAKALA','N'],'type':'checkbox'},'定期最后一次赎回方式':{'value':
                           ['1号转2号','卡批量赎回','卡实时赎回','钱包赎回','N'],'type':'checkbox'},'定期最后一次赎回银行':
                           {'value':['民生银行','平安银行（借记卡）','招商银行','光大银行','交通银行','建设银行','邮储银行','中国银行','中国建设银行','浦东发展银行','华夏银行','兴业银行','工商银行','中国工商银行','邮政储蓄银行','平安银行','N','广发银行股份有限公司','中信银行','农业银行'],'type':'checkbox'},
                           '替你还总计放款次数':{'value':[], 'type':'num'},'易分期总计放款次数':
                           {'value':[], 'type':'num'},'替你还近6个自然月放款次数':{'value':[], 'type':'num'},
                           '替你还近12个自然月放款次数':{'value':[], 'type':'num'},'易分期近6个自然月放款次数':
                           {'value':[], 'type':'num'},'易分期近12个自然月放款次数':{'value':[], 'type':'num'},'员工贷近6个自然月放款次数':
                           {'value':[], 'type':'num'},'员工贷近12个自然月放款次数':{'value':[], 'type':'num'},"3\u53f7\u6700\u540e\u4e00\u6b21\u7533\u8d2d\u91d1\u989d": {"type": "num", "value": []}, "3\u53f7\u7b2c\u4e00\u6b21\u8d4e\u56de\u91d1\u989d": {"type": "num", "value": []}, "\u94b1\u5305\u6708\u5747\u5145\u503c\u91d1\u989d": {"type": "num", "value": []}, "3\u53f7\u6700\u540e\u4e00\u6b21\u7533\u8d2d\u65f6\u95f4": {"type": "date", "value": []}, "3\u53f7\u6700\u540e\u4e00\u6b21\u8d4e\u56de\u65e5\u671f": {"type": "date", "value": []}, "\u6708\u5747\u8d26\u6237\u4f59\u989d": {"type": "num", "value": []}, "3\u53f7\u7b2c\u4e00\u6b21\u7533\u8d2d\u91d1\u989d": {"type": "num", "value": []}, "\u8fd16\u4e2a\u81ea\u7136\u6708\u94b1\u5305\u6708\u5747\u8f6c\u5165\u91d1\u989d": {"type": "num", "value": []}, "\u6613\u5206\u671f\u6700\u540e\u4e00\u6b21\u5408\u540c\u65e5\u671f": {"type": "date", "value": []}, "1\u53f7\u7b2c\u4e00\u6b21\u8d4e\u56de\u65e5\u671f": {"type": "date", "value": []}, "1\u53f7\u6700\u540e\u4e00\u6b21\u8d4e\u56de\u91d1\u989d": {"type": "num", "value": []}, "\u5f53\u524d\u94b1\u5305\u4f59\u989d": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708\u94b1\u5305\u6700\u9ad8\u4f59\u989d": {"type": "num", "value": []}, "\u94b1\u5305\u6708\u65e5\u5747\u4f59\u989d": {"type": "num", "value": []}, "3\u53f7\u5f00\u6237\u65f6\u95f4": {"type": "date", "value": []}, "3\u53f7\u6700\u540e\u4e00\u6b21\u7533\u8d2d\u671f\u9650": {"type": "num", "value": []}, "3\u53f7\u7b2c\u4e00\u6b21\u7533\u8d2d\u65f6\u95f4": {"type": "date", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u6700\u5927\u503c": {"type": "num", "value": []}, "3\u53f7\u6700\u540e\u4e00\u6b21\u8d4e\u56de\u91d1\u989d": {"type": "num", "value": []}, "\u66ff\u4f60\u8fd8\u603b\u8ba1\u7533\u8bf7\u6b21\u6570": {"type": "num", "value": []}, "\u66ff\u4f60\u8fd8\u8fd112\u4e2a\u81ea\u7136\u6708\u7533\u8bf7\u6b21\u6570": {"type": "num", "value": []}, "\u66ff\u4f60\u8fd8\u8fd112\u4e2a\u81ea\u7136\u6708\u653e\u6b3e\u91d1\u989d\uff1b": {"type": "num", "value": []}, "\u5f00\u6237\u65e5\u671f": {"type": "date", "value": []}, "\u66ff\u4f60\u8fd8\u8fd16\u4e2a\u81ea\u7136\u6708\u7533\u8bf7\u91d1\u989d": {"type": "num", "value": []}, "3\u53f7\u5f00\u6237\u8d26\u6237\u4f59\u989d": {"type": "num", "value": []}, "\u7528\u6237\u5f53\u671f\u7406\u8d22\u8d26\u6237\u4f59\u989d": {"type": "num", "value": []}, "\u66ff\u4f60\u8fd8\u603b\u8ba1\u653e\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "3\u53f7\u7b2c\u4e00\u6b21\u7533\u8d2d\u671f\u9650": {"type": "num", "value": []}, "\u66ff\u4f60\u8fd8\u8fd112\u4e2a\u81ea\u7136\u6708\u7533\u8bf7\u6b21\u5747\u91d1\u989d": {"type": "num", "value": []}, "2\u53f7\u7b2c\u4e00\u6b21\u8d4e\u56de\u91d1\u989d": {"type": "num", "value": []}, "\u6613\u5206\u671f\u6700\u540e\u4e00\u6b21\u653e\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u66ff\u4f60\u8fd8\u8fd112\u4e2a\u81ea\u7136\u6708\u653e\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u6613\u5206\u671f\u5f53\u671f\u903e\u671f\u672a\u8fd8\u91d1\u989d": {"type": "num", "value": []}, "\u6613\u5206\u671f\u5408\u540c\u6b21\u6570": {"type": "num", "value": []}, "\u66ff\u4f60\u8fd8\u6700\u540e\u4e00\u6b21\u653e\u6b3e\u65e5\u671f": {"type": "date", "value": []}, "\u66ff\u4f60\u8fd8\u6700\u540e\u4e00\u6b21\u7533\u8bf7\u65e5\u671f": {"type": "date", "value": []}, "1\u53f7\u5f00\u6237\u603b\u6536\u76ca": {"type": "num", "value": []}, "\u94b1\u5305\u5386\u53f2\u6700\u9ad8\u4f59\u989d": {"type": "num", "value": []}, "\u6613\u5206\u671f\u603b\u8ba1\u653e\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u5f53\u671f\u7406\u8d22\u8d26\u6237\u4f59\u989d\u7528\u6237\u8fd16\u4e2a\u81ea\u7136\u6708": {"type": "num", "value": []}, "3\u53f7\u7533\u8d2d\u6700\u957f\u671f\u9650": {"type": "num", "value": []}, "\u66ff\u4f60\u8fd8\u8fd16\u4e2a\u81ea\u7136\u6708\u7533\u8bf7\u6b21\u6570": {"type": "num", "value": []}, "1\u53f7\u5f00\u6237\u8d26\u6237\u4f59\u989d": {"type": "num", "value": []}, "1\u53f7\u6700\u540e\u4e00\u6b21\u7533\u8d2d\u65f6\u95f4": {"type": "date", "value": []}, "\u66ff\u4f60\u8fd8\u6700\u540e\u4e00\u6b21\u653e\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "1\u53f7\u6700\u540e\u4e00\u6b21\u7533\u8d2d\u671f\u9650": {"type": "num", "value": []}, "1\u53f7\u7533\u8d2d\u6700\u957f\u671f\u9650": {"type": "num", "value": []}, "2\u53f7\u6700\u540e\u4e00\u6b21\u7533\u8d2d\u65e5\u671f": {"type": "date", "value": []}, "\u66ff\u4f60\u8fd8\u6700\u540e\u4e00\u6b21\u5408\u540c\u65e5\u671f": {"type": "date", "value": []}, "1\u53f7\u603b\u7533\u8d2d\u6b21\u6570": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708\u94b1\u5305\u6708\u5747\u4f59\u989d": {"type": "num", "value": []}, "2\u53f7\u7b2c\u4e00\u6b21\u7533\u8d2d\u91d1\u989d": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u94b1\u5305\u6708\u5747\u4f59\u989d": {"type": "num", "value": []}, "2\u53f7\u8d26\u53f7\u4f59\u989d\u6700\u5927\u503c": {"type": "num", "value": []}, "3\u53f7\u7b2c\u4e00\u6b21\u8d4e\u56de\u65e5\u671f": {"type": "date", "value": []}, "1\u53f7\u6700\u540e\u4e00\u6b21\u8d4e\u56de\u65e5\u671f": {"type": "date", "value": []}, "\u6700\u540e\u4e00\u6b21\u7533\u8d2d\u65f6\u95f4\u8ddd\u79bb\u4e0a\u6b21\u8d4e\u56de\u65f6\u95f4\u7684\u65f6\u95f4\u5dee-\u5929": {"type": "num", "value": []}, "\u66ff\u4f60\u8fd8\u5f53\u671f\u903e\u671f\u672a\u8fd8\u91d1\u989d": {"type": "num", "value": []}, "2\u53f7\u603b\u6301\u6709\u671f\u9650": {"type": "num", "value": []}, "2\u53f7\u6700\u540e\u4e00\u6b21\u8d4e\u56de\u91d1\u989d": {"type": "num", "value": []}, "\u6613\u5206\u671f\u603b\u7533\u8bf7\u6b21\u6570": {"type": "num", "value": []}, "1\u53f7\u7b2c\u4e00\u6b21\u7533\u8d2d\u671f\u9650": {"type": "num", "value": []}, "\u66ff\u4f60\u8fd8\u5408\u540c\u6b21\u6570": {"type": "num", "value": []}, "\u8fd16\u4e2a\u81ea\u7136\u6708\u94b1\u5305\u6708\u5747\u4f59\u989d": {"type": "num", "value": []}, "\u94b1\u5305\u6708\u5747\u8f6c\u5165\u91d1\u989d": {"type": "num", "value": []}, "2\u53f7\u6240\u6709\u7533\u8d2d\u603b\u6b21\u6570": {"type": "num", "value": []}, "1\u53f7\u5f00\u6237\u65f6\u95f4": {"type": "date", "value": []}, "\u8fd16\u4e2a\u81ea\u7136\u6708\u94b1\u5305\u6708\u5747\u5145\u503c\u91d1\u989d": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708\u94b1\u5305\u6708\u5747\u5145\u503c\u91d1\u989d": {"type": "num", "value": []}, "2\u53f7\u6240\u6709\u7533\u8d2d\u603b\u91d1\u989d\u3001": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708\u94b1\u5305\u6708\u5747\u8f6c\u5165\u91d1\u989d": {"type": "num", "value": []}, "\u5f53\u671f\u7406\u8d22\u8d26\u6237\u4f59\u989d\u7528\u6237\u8fd112\u4e2a\u81ea\u7136\u6708": {"type": "num", "value": []}, "2\u53f7\u7b2c\u4e00\u6b21\u7533\u8d2d\u91d1\u989d\u65e5\u671f": {"type": "date", "value": []}, "1\u53f7\u7b2c\u4e00\u6b21\u8d4e\u56de\u91d1\u989d": {"type": "num", "value": []}, "1\u53f7\u6700\u540e\u4e00\u6b21\u7533\u8d2d\u91d1\u989d": {"type": "num", "value": []}, "1\u53f7\u7b2c\u4e00\u6b21\u7533\u8d2d\u65f6\u95f4": {"type": "date", "value": []}, "2\u53f7\u6700\u540e\u4e00\u6b21\u7533\u8d2d\u91d1\u989d\uff0c\u65e5\u671f": {"type": "date", "value": []}, "2\u53f7\u6700\u540e\u4e00\u6b21\u8d4e\u56de\u65f6\u95f4": {"type": "date", "value": []}, "3\u53f7\u5f00\u6237\u603b\u6536\u76ca": {"type": "num", "value": []}, "\u6613\u5206\u671f\u6700\u540e\u4e00\u6b21\u7533\u8bf7\u65f6\u95f4": {"type": "num", "value": []}, "\u5f53\u671f\u7406\u8d22\u8d26\u6237\u4f59\u989d\u7528\u6237\u8fd13\u4e2a\u81ea\u7136\u6708": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u653e\u6b3e\u6700\u5927\u6708\u91d1\u989d": {"type": "num", "value": []}, "2\u53f7\u603b\u6536\u76ca": {"type": "num", "value": []}},
                '行为方式':{'拉卡拉大终端用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉手刷用户':
                           {'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉手环用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},
                           '拉卡拉老终端用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉收款宝用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉POS用户':
                           {'value':['0','1'],"isBool":"",'type':'checkbox'}},
                '生活消费':{'拉卡拉公缴用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉水费用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉电费用户':
                           {'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉煤气费用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉有线电视费用户':{'value':
                           ['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉供暖费用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉物业费用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},
                           '拉卡拉交通罚款用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉通讯费用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},
                            '拉卡拉话费充值用户':{'value':[],'type':"checkbox"}, '拉卡拉电商用户':{'value':[],'type':"checkbox"}},
                "出行行为":{'拉卡拉火车票用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉飞机票用户':{'value':['0','1'],"isBool":"",'type':'checkbox'}},
                '金融理财':{'拉卡拉信用卡还款用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉转账汇款用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},
                           '拉卡拉替你还用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉易分期用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉余额查询用户':
                           {'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉理财用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉基金用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},
                           '拉卡拉借点钱用户':{'value':[], 'type':"checkbox"}},
                '拉卡拉便民':{'最近一次交易的地点':{'value':['贵州','黑龙江','安徽','宁夏回族自治区','浙江','广东','河北','山西','江西','辽宁','湖北','福建','陕西','上海','青海',
                           '吉林','西藏自治区','未知省','内蒙古自治区','N','河南','山东','湖南','天津','新疆维吾尔自治区','江苏','海南','甘肃','北京','广西壮族自治区','重庆','云南','四川'],
                           'type':'checkbox'},'交易笔数最多的地点（省）':{'value':['贵州','黑龙江','安徽','青海','宁夏回族自治区','浙江','广东','河北','山西','西藏自治区','江西','辽宁','湖北',
                           '福建','陕西','上海','吉林','未知省','内蒙古自治区','N','河南','山东','湖南','天津','新疆维吾尔自治区','江苏','海南','甘肃','北京','广西壮族自治区','重庆',
                           '云南','四川'],'type':'checkbox'},'最近一次信用卡还款终端类型':{'value':['拉卡拉POS系统','mini','超盾','拉卡拉刷卡手机','手机收款宝','云POS','公共网点',
                           '多媒体','拉卡拉销账通路分销','N','家付通受理平台','拉卡拉手机钱包','拉卡拉IC卡手刷','拉卡拉赚点钱预约还款渠道','手刷'],'type':'checkbox'},"\u8fd11\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u5355\u7b14\u6700\u5927\u91d1\u989d": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u516c\u5171\u7f34\u8d39\u7b14\u6570": {"type": "num", "value": []}, "\u6700\u8fd11\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u7b14\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4fbf\u6c11\u4ea4\u6613\u6708\u4efd": {"type": "fill", "value": []}, "\u6700\u8fd1\u4e00\u6b21\u5b8c\u6210\u516c\u5171\u7f34\u8d39\u7684\u65e5\u671f": {"type": "date", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708\u8f6c\u8d26\u6c47\u6b3e\u7b14\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u516c\u5171\u7f34\u8d39\u91d1\u989d": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u8d37\u8bb0\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u6700\u8fd124\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u91d1\u989d": {"type": "num", "value": []}, "\u8fd124\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u4f59\u989d\u67e5\u8be2\u603b\u7b14\u6570": {"type": "num", "value": []}, "\u6700\u8fd16\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u7b14\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u516c\u5171\u7f34\u8d39": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u8d37\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u6700\u8fd1\u4e00\u6b21\u6c34\u7535\u7164\u7f34\u8d39\u7684\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd124\u4e2a\u81ea\u7136\u6708\u67e5\u8be2\u94f6\u884c\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u6700\u8fd13\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u91d1\u989d": {"type": "num", "value": []}, "\u8fd16\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u7b14\u6570": {"type": "num", "value": []}, "\u6700\u8fd112\u4e2a\u81ea\u7136\u6708\u67e5\u8be2\u94f6\u884c\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708\u516c\u5171\u7f34\u8d39\u7b14\u6570": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u8d37\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u7b14\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u8f6c\u8d26\u6c47\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u7b14\u6570": {"type": "num", "value": []}, "\u8fd16\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u8d37\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u6700\u8fd16\u4e2a\u81ea\u7136\u6708\u67e5\u8be2\u94f6\u884c\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u6700\u591a\u7ec8\u7aef\u6570": {"type": "num", "value": []}, "\u6700\u8fd124\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u91d1\u989d\u6700\u5927\u503c": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u516c\u5171\u7f34\u8d39\u6b21\u6570": {"type": "num", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708\u516c\u5171\u7f34\u8d39\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd16\u4e2a\u81ea\u7136\u6708\u67e5\u8be2\u94f6\u884c\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u516c\u5171\u7f34\u8d39\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd11\u4e2a\u81ea\u7136\u6708\u67e5\u8be2\u94f6\u884c\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u6700\u8fd13\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u7b14\u6570": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u5355\u7b14\u6700\u5927\u91d1\u989d": {"type": "num", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708\u516c\u7f34\u9664\u6c34\u7535\u7164\u7f34\u8d39\u7b14\u6570": {"type": "num", "value": []}, "\u4fbf\u6c11\u6210\u529f\u4ea4\u6613\u603b\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd16\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u7b14\u6570": {"type": "num", "value": []}, "\u8fd124\u4e2a\u81ea\u7136\u6708\u8f6c\u8d26\u6c47\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd1\u4e00\u6b21\u4f7f\u7528\u624b\u5237\u5b8c\u6210\u4fbf\u6c11\u4ea4\u6613\u7684\u65e5\u671f": {"type": "date", "value": []}, "\u6700\u8fd16\u4e2a\u6708\u5355\u5361\u67e5\u8be2\u7b14\u6570\u6700\u5927\u503c": {"type": "num", "value": []}, "\u8bdd\u8d39\u5145\u503c\u603b\u7b14\u6570": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u4fbf\u6c11\u6210\u529f\u4ea4\u6613\u91d1\u989d": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u501f\u8bb0\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u8d37\u8bb0\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u7b14\u6570": {"type": "num", "value": []}, "\u6700\u8fd16\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u91d1\u989d\u6700\u5927\u503c": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u8f6c\u8d26\u6c47\u6b3e\u7b14\u6570": {"type": "num", "value": []}, "\u4fe1\u7528\u5361\u8fd8\u6b3e\u603b\u91d1\u989d": {"type": "num", "value": []}, "\u4fbf\u6c11\u6210\u529f\u4ea4\u6613\u603b\u6b21\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u6c34\u7535\u7164\u7f34\u8d39": {"type": "num", "value": []}, "\u8fd16\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u501f\u8bb0\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u6700\u8fd13\u4e2a\u6708\u5355\u5361\u67e5\u8be2\u7b14\u6570\u6700\u5927\u503c": {"type": "num", "value": []}, "\u6700\u8fd1\u4e00\u6b21\u5b8c\u6210\u8bdd\u8d39\u5145\u503c\u7684\u65e5\u671f": {"type": "date", "value": []}, "\u7b2c\u4e00\u6b21\u6c34\u7535\u7164\u7f34\u8d39\u7684\u91d1\u989d": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd112\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u7b14\u6570": {"type": "num", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708\u6c34\u7535\u7164\u7f34\u8d39\u7b14\u6570": {"type": "num", "value": []}, "\u6700\u8fd1\u4e00\u6b21\u5b8c\u6210\u516c\u5171\u7f34\u8d39\u7684\u91d1\u989d": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u7b14\u6570": {"type": "num", "value": []}, "\u6700\u8fd12\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u7b14\u6570": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u516c\u7f34\u9664\u6c34\u7535\u7164\u7f34\u8d39\u91d1\u989d": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u91d1\u989d": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u516c\u7f34\u9664\u6c34\u7535\u7164\u7f34\u8d39\u6708\u4efd": {"type": "fill", "value": []}, "\u6700\u8fd13\u4e2a\u81ea\u7136\u6708\u67e5\u8be2\u94f6\u884c\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8f6c\u8d26\u6c47\u6b3e\u603b\u7b14\u6570": {"type": "num", "value": []}, "\u6700\u540e\u4e00\u6b21\u67e5\u8be2\u65f6\u95f4": {"type": "date", "value": []}, "\u6700\u8fd1\u4e00\u6b21\u4fbf\u6c11\u6210\u529f\u4ea4\u6613\u65e5\u671f": {"type": "date", "value": []}, "\u6700\u8fd124\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u7b14\u6570": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u4fbf\u6c11\u6210\u529f\u4ea4\u6613\u7b14\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u516c\u5171\u7f34\u8d39\u6708\u4efd\u6570": {"type": "fill", "value": []}, "\u6700\u8fd1\u4e00\u6b21\u5b8c\u6210\u8bdd\u8d39\u5145\u503c\u7684\u91d1\u989d": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u516c\u7f34\u9664\u6c34\u7535\u7164\u7f34\u8d39": {"type": "num", "value": []}, "\u6700\u8fd16\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u91d1\u989d": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u516c\u7f34\u9664\u6c34\u7535\u7164\u7f34\u8d39\u7b14\u6570": {"type": "num", "value": []}, "\u9996\u6b21\u67e5\u8be2\u65f6\u95f4": {"type": "date", "value": []}, "\u6700\u8fd16\u4e2a\u81ea\u7136\u6708\u5145\u503c\u6708\u4efd\u6570": {"type": "fill", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u8d37\u8bb0\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u7b2c\u4e00\u6b21\u5b8c\u6210\u516c\u5171\u7f34\u8d39\u7684\u91d1\u989d": {"type": "num", "value": []}, "\u7b2c\u4e00\u6b21\u4fbf\u6c11\u6210\u529f\u4ea4\u6613\u65e5\u671f": {"type": "date", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u501f\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u6c34\u7535\u7164\u7f34\u8d39\u7b14\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u6c34\u7535\u7164\u7f34\u8d39\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd1\u4e00\u6b21\u4fe1\u7528\u5361\u8fd8\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u8fd124\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u8d37\u8bb0\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u6700\u8fd112\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u4f4d\u56fe": {"type": "fill", "value": []}, "\u8f6c\u8d26\u6c47\u6b3e\u603b\u91d1\u989d": {"type": "num", "value": []}, "\u501f\u8bb0\u5361\u8fd8\u6b3e\u501f\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4f7f\u7528\u624b\u5237\u8fdb\u884c\u4fbf\u6c11\u4ea4\u6613\u7684\u7b14\u6570": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u6c34\u7535\u7164\u7f34\u8d39\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd1\u4e00\u6b21\u4fe1\u7528\u5361\u8fd8\u6b3e\u65e5\u671f": {"type": "date", "value": []}, "\u4fe1\u7528\u5361\u8fd8\u6b3e\u8d37\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u5355\u7b14\u6700\u5927\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd12\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u7b14\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u8f6c\u8d26\u6c47\u6b3e\u7b14\u6570": {"type": "num", "value": []}, "\u8fd16\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u8d37\u8bb0\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u8fd16\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u501f\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8fd124\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u501f\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u6700\u8fd112\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd112\u4e2a\u81ea\u7136\u6708\u5145\u503c\u6708\u4efd\u6570": {"type": "fill", "value": []}, "\u6700\u8fd112\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u91d1\u989d\u6700\u5927\u503c": {"type": "num", "value": []}, "\u6700\u8fd112\u4e2a\u6708\u5355\u5361\u67e5\u8be2\u7b14\u6570\u6700\u5927\u503c": {"type": "num", "value": []}, "\u8fd124\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u501f\u8bb0\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u7b2c\u4e00\u6b21\u5b8c\u6210\u516c\u5171\u7f34\u8d39\u7684\u65e5\u671f": {"type": "date", "value": []}, "\u6700\u8fd11\u4e2a\u6708\u5355\u5361\u67e5\u8be2\u7b14\u6570\u6700\u5927\u503c": {"type": "num", "value": []}, "\u8fd124\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u8d37\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u8d37\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u7b2c\u4e00\u6b21\u4fe1\u7528\u5361\u8fd8\u6b3e\u65e5\u671f": {"type": "date", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708\u4fbf\u6c11\u4e1a\u52a1\u91d1\u989d": {"type": "num", "value": []}, "\u7b2c\u4e00\u6b21\u5b8c\u6210\u8f6c\u8d26\u6c47\u6b3e\u7684\u65e5\u671f": {"type": "date", "value": []}, "\u4fe1\u7528\u5361\u8fd8\u6b3e\u603b\u7b14\u6570": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u8f6c\u8d26\u6c47\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd12\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u91d1\u989d\u6700\u5927\u503c": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u516c\u5171\u7f34\u8d39\u7f34\u8d39\u6708\u4efd": {"type": "fill", "value": []}, "\u8fd16\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u8fd16\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u5355\u7b14\u6700\u5927\u91d1\u989d": {"type": "num", "value": []}, "\u8fd124\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u5355\u7b14\u6700\u5927\u91d1\u989d": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u501f\u8bb0\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u6700\u540e\u4e00\u6b21\u67e5\u8be2\u7684\u4f59\u989d": {"type": "num", "value": []}, "\u7b2c\u4e00\u6b21\u4f7f\u7528\u624b\u5237\u5b8c\u6210\u4fbf\u6c11\u4ea4\u6613\u7684\u65e5\u671f": {"type": "date", "value": []}, "\u6700\u8fd12\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd13\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u91d1\u989d\u6700\u5927\u503c": {"type": "num", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708\u6c34\u7535\u7164\u7f34\u8d39\u91d1\u989d": {"type": "num", "value": []}, "\u4fbf\u6c11\u6210\u529f\u4ea4\u6613\u603b\u4e1a\u52a1\u7c7b\u578b": {"type": "fill", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u5355\u6708\u6700\u5927\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd124\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u7b14\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u8f6c\u8d26\u6c47\u6b3e\u5165\u5361\u94f6\u884c\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u501f\u8bb0\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u6700\u8fd11\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u91d1\u989d\u6700\u5927\u503c": {"type": "num", "value": []}, "\u8fd124\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u7b14\u6570": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u501f\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708\u516c\u7f34\u9664\u6c34\u7535\u7164\u7f34\u8d39\u91d1\u989d": {"type": "num", "value": []}, "\u6700\u8fd11\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u7b14\u6570": {"type": "num", "value": []}, "\u6700\u8fd13\u4e2a\u81ea\u7136\u6708\u67e5\u8be2\u94f6\u884c\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u6700\u8fd11\u4e2a\u81ea\u7136\u6708\u67e5\u8be2\u94f6\u884c\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u6700\u8fd112\u4e2a\u81ea\u7136\u6708\u67e5\u8be2\u94f6\u884c\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u7b2c\u4e00\u6b21\u5b8c\u6210\u6c34\u7535\u7164\u7f34\u8d39\u7684\u65e5\u671f": {"type": "date", "value": []}, "\u6700\u8fd124\u4e2a\u81ea\u7136\u6708\u67e5\u8be2\u94f6\u884c\u5361\u94f6\u884c\u6570": {"type": "num", "value": []}, "\u6700\u8fd112\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u7b14\u6570": {"type": "num", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708\u4fbf\u6c11\u4e1a\u52a1\u7b14\u6570": {"type": "num", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708\u8f6c\u8d26\u6c47\u6b3e\u91d1\u989d": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u8f6c\u8d26\u6c47\u6b3e\u6708\u4efd": {"type": "fill", "value": []}, "\u6700\u8fd11\u4e2a\u81ea\u7136\u6708\u8bdd\u8d39\u5145\u503c\u91d1\u989d": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4fbf\u6c11\u4ea4\u6613\u4f7f\u7528\u624b\u5237\u6570": {"type": "num", "value": []}, "\u6700\u8fd13\u4e2a\u81ea\u7136\u6708\u4f59\u989d\u67e5\u8be2\u7b14\u6570": {"type": "num", "value": []}, "\u7b2c\u4e00\u6b21\u5b8c\u6210\u8bdd\u8d39\u5145\u503c\u7684\u65e5\u671f": {"type": "date", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u501f\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u6700\u8fd1\u4e00\u6b21\u5b8c\u6210\u8f6c\u8d26\u6c47\u6b3e\u7684\u65e5\u671f": {"type": "date", "value": []}, "\u6700\u8fd124\u4e2a\u81ea\u7136\u6708\u5145\u503c\u6708\u4efd\u6570": {"type": "fill", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u4ea4\u6613\u6708\u4efd\u6570": {"type": "fill", "value": []}, "\u8fd124\u4e2a\u81ea\u7136\u6708\u8f6c\u8d26\u6c47\u6b3e\u7b14\u6570": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708\u4fe1\u7528\u5361\u8fd8\u6b3e\u7b14\u6570": {"type": "num", "value": []}, "\u6700\u8fd1\u4e00\u6b21\u6c34\u7535\u7164\u7f34\u8d39\u7684\u65e5\u671f": {"type": "date", "value": []}},
                '娱乐行为':{'拉卡拉彩票用户':{'value':['0','1'],"isBool":"",'type':'checkbox'},'拉卡拉众筹用户':{'value':['0','1'],"isBool":"",'type':'checkbox'}},
                '行为习惯':{'用户最常交易时段':{'value':['下午','中午','晚上','凌晨','上午','深夜','早晨'],'type':'checkbox'},
                           '用户最近一次交易时段':{'value':['下午','中午','晚上','凌晨','上午','深夜','早晨'],'type':'checkbox'},
                           '用户最常交易星期':{'value':['1','3','2','5','4','6','0'],'type':'checkbox'},'用户最常交易地点（省）':{'value':['贵州','黑龙江','安徽',
                           '青海','浙江','宁夏回族自治区','广东','河北','山西','江西','辽宁','湖北','福建','陕西','上海','吉林','西藏自治区','未知省','内蒙古自治区',
                           'N','河南','甘肃','湖南','天津','新疆维吾尔自治区','江苏','海南','山东','北京','广西壮族自治区','重庆','云南','四川'],'type':'checkbox'},
                           '用户最近一次交易地点（省）':{'value':['贵州','黑龙江','安徽','青海','宁夏回族自治区','浙江','广东','河北','山西','西藏自治区','江西',
                           '辽宁','湖北','福建','陕西','上海','吉林','未知省','内蒙古自治区','N','河南','甘肃','湖南','天津','新疆维吾尔自治区',
                           '江苏','海南','山东','北京','广西壮族自治区','重庆','云南','四川'],'type':'checkbox'},
                           '用户最近一次做的业务类型':{'value':[], 'type':'checkbox'},'用户最常使用的终端类型':{'value':[], 'type':'checkbox'}},
                "拉卡拉收单": {"POS\u6536\u5355\u4ea4\u6613\u6d89\u53ca\u53d1\u5361\u884c\u603b\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708\u6709POS\u6536\u5355\u4ea4\u6613\u7684\u6708\u4efd\u6570": {"type": "fill", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708POS\u6536\u5355\u4ea4\u6613\u7b14\u6570": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708POS\u6536\u5355\u4ea4\u6613\u7b14\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708POS\u6536\u5355\u4ea4\u6613\u91d1\u989d": {"type": "num", "value": []}, "\u8fd13\u4e2a\u81ea\u7136\u6708POS\u6536\u5355\u4ea4\u6613\u91d1\u989d": {"type": "num", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708POS\u6536\u5355\u4ea4\u6613\u91d1\u989d": {"type": "num", "value": []}, "\u8fd16\u4e2a\u81ea\u7136\u6708POS\u6536\u5355\u4ea4\u6613\u91d1\u989d": {"type": "num", "value": []}, "POS\u6536\u5355\u4ea4\u6613\u94f6\u884c\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8fd112\u4e2a\u81ea\u7136\u6708POS\u6536\u5355\u4ea4\u6613\u7b14\u6570": {"type": "num", "value": []}, "POS\u6536\u5355\u4ea4\u6613\u6d89\u53ca\u53d1\u5361\u884c": {"type": "checkbox", "value": []}, "POS\u6536\u5355\u4ea4\u6613\u501f\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "POS\u6536\u5355\u4ea4\u6613\u8d37\u8bb0\u5361\u5f20\u6570": {"type": "num", "value": []}, "\u8fd19\u4e2a\u81ea\u7136\u6708POS\u6536\u5355\u4ea4\u6613\u91d1\u989d": {"type": "num", "value": []}, "POS\u6536\u5355\u4ea4\u6613\u94f6\u884c\u5361\u53f7": {"type": "checkbox", "value": []}, "\u8fd11\u4e2a\u81ea\u7136\u6708POS\u6536\u5355\u4ea4\u6613\u91d1\u989d": {"type": "num", "value": []}, "\u8fd12\u4e2a\u81ea\u7136\u6708POS\u6536\u5355\u4ea4\u6613\u7b14\u6570": {"type": "num", "value": []}, "POS\u6536\u5355\u4ea4\u6613\u603b\u7b14\u6570": {"type": "num", "value": []}, "\u8fd19\u4e2a\u81ea\u7136\u6708POS\u6536\u5355\u4ea4\u6613\u7b14\u6570": {"type": "num", "value": []}, "POS\u6536\u5355\u4ea4\u6613\u603b\u91d1\u989d": {"type": "num", "value": []}, "\u8fd16\u4e2a\u81ea\u7136\u6708POS\u6536\u5355\u4ea4\u6613\u7b14\u6570": {"type": "num", "value": []}}
              };*/
    
    return data
}


function submitForm(){
    var input = $("div[name^='req_']");
    var data = [];
    for(i=0; i<input.length; i++){
        if(input[i].style.display!="none"){
            // alert(input[i].textContent);
            data.push(input[i].textContent);
        }
    }
    var inputData = data.join("|");
    // alert(inputData);
    $.ajax({
        url:"/ajaxUG",
        type:"POST",
        data:{"input":inputData},
        datatype:"json",
        success:function(data){
            $('#num').text(data['num']);
        }
    });
}

function submit1(paraData){
    if(paraData.length==0){
        alert("请选中筛选条件");
    }else{
        $.ajax({
            url:"/ajaxUG",
            type:"POST",
            data:paraData,
            datatype:"json",
            success:function(data) {
                $("#num").text(data['num']);
            }
        });
    }
}


/***********************************************
获取时间
'***********************************************/
function pickDate(dp, point){
    // alert(dp.cal.getNewDateStr())
    var name = point.name.split("_")[1];
    var isBegain = point.name.split("_")[0]
    var str = "_";
    if(isBegain=='begin'){
        if(document.getElementById(name)!=null){  //如果页面上已存在该元素
            var strArr = document.getElementById(name).innerHTML.split(" ");
            strArr[2] = dp.cal.getNewDateStr();
            document.getElementById(name).innerHTML = strArr.join(" ");
            str = strArr.join(" ");
            compareDT(name);

        }
        else{
        var myDiv = document.createElement("div");
        myDiv.style = "float:left; width:90%; border:2px solid #ffffFF;margin-left: 16px;margin-top: 16px;display:inline;"
        myDiv.setAttribute('name', 'req_' + name);
        myDiv.id = name;
        myDiv.setAttribute("onclick", 'removeSelected(this)');  //绑定删除函数
        myDiv.innerHTML=name+" : "+dp.cal.getNewDateStr()+' *';
        str = dp.cal.getNewDateStr()+' *';
        var Tdiv = document.getElementById('leftBox');
        Tdiv.appendChild(myDiv);
        }
    }
    if(isBegain=='end'){
        if(document.getElementById(name)!=null){  //如果页面上已存在该元素
            var strArr = document.getElementById(name).innerHTML.split(" ");
            strArr[3] = dp.cal.getNewDateStr();
            document.getElementById(name).innerHTML = strArr.join(" ");
            str = strArr.join(" ");
            compareDT(name);
        }
        else{
            var myDiv = document.createElement("div");
            myDiv.style = "float:left; width:90%; border:2px solid #ffffFF;margin-left: 16px;margin-top: 16px;display:inline;"
            myDiv.setAttribute('name', 'req_' + name);
            myDiv.id = name;
            myDiv.setAttribute("onclick", 'removeSelected(this)');  //绑定删除函数
            myDiv.innerHTML=name+" : * "+dp.cal.getNewDateStr();
            str = "* "+dp.cal.getNewDateStr();
            var Tdiv = document.getElementById('leftBox');
            Tdiv.appendChild(myDiv);
        }
    }
    addParam(name, str); //传入参数
}


/***********************************************
获取值
'***********************************************/
function pickValue(point){
    // alert(dp.cal.getNewDateStr())
    var name = point.name.split("_")[1];
    var isBegain = point.name.split("_")[0]
    var str = "_";
    if(isBegain=='begin'){
        if(document.getElementById(name)!=null){  //如果页面上已存在该元素
            var strArr = document.getElementById(name).innerHTML.split(" ");
            if(point.value==""){
              strArr[2] = "*";
            }else{
              strArr[2] = isNum(point.value);
            }
            document.getElementById(name).innerHTML = strArr.join(" ");
            if(isRemove(name)){   //如果全部取消
              addParam(name, "");   //往参数接受对象中加数据
            }else{
              addParam(name, strArr.join(" "));
            }
            removeFiled(name);  //在leftbox中去除已经取消的字段名
            compareDT(name);

        }
        else{
        var myDiv = document.createElement("div");
        myDiv.style = "float:left; width:90%; border:2px solid #ffffFF;margin-left: 16px;margin-top: 16px;display:inline;"
        myDiv.setAttribute('name', 'req_' + name);
        myDiv.id = name;
        myDiv.setAttribute("onclick", 'removeSelected(this)');  //绑定删除函数
        myDiv.innerHTML=name+" : "+isNum(point.value)+' *';
        addParam(name, point.value+' *');  //往参数接受对象中加数据
        var Tdiv = document.getElementById('leftBox');
        Tdiv.appendChild(myDiv);
        }
    }
    if(isBegain=='end'){
        if(document.getElementById(name)!=null){  //如果页面上已存在该元素
            var strArr = document.getElementById(name).innerHTML.split(" ");
            if(point.value==""){
              strArr[3] = "*";
            }else{
              strArr[3] = isNum(point.value);              
            }
            document.getElementById(name).innerHTML = strArr.join(" ");
            if(isRemove(name)){   //如果全部取消
              addParam(name, "");
            }else{
              addParam(name, strArr.join(" "));
            }
            removeFiled(name);  //在leftbox中去除已经取消的字段名            
            compareDT(name);
        }
        else{
            var myDiv = document.createElement("div");
            myDiv.style = "float:left; width:90%; border:2px solid #ffffFF;margin-left: 16px;margin-top: 16px;display:inline;"
            myDiv.setAttribute('name', 'req_' + name);
            myDiv.id = name;
            myDiv.setAttribute("onclick", 'removeSelected(this)');  //绑定删除函数
            myDiv.innerHTML=name+" : * "+isNum(point.value);
            addParam(name, "* "+ point.value);  //往参数接受对象中加数据
            var Tdiv = document.getElementById('leftBox');
            Tdiv.appendChild(myDiv);
        }
    }
}




/***********************************************
'函数名：insertAfter()
'作  用：将一个新元素插入另一个元素后面
'参  数：newElement - 新元素; targetElement - 目标元素
'返回值：
'eg   : insertAfter(p1,p0)
'***********************************************/

function insertAfter(newElement,targetElement)
{
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement)
    {
        parent.insertBefore(newElement);
    }
    else
    {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}



/***********************************************
input框为checkbox类型的onclick函数
'***********************************************/
function checkBox(a){
    var name = a.name.replace("box_","");
    // var isExist = $("#"+name).length;   //id中如果用括号则不能识别
    var isExist = $("div[name='req_"+name+"']").length
    var str="-";    //用于左边框已选条件的显示
    var valStr = "-";    //用于向后台传递参数
    $("input[name='" + a.name + "']:checked").each(function(){
        str += "," + $(this).text().replace(" ", ""); 
    });
    str = str.replace("-,","");
    $("input[name='" + a.name + "']:checked").each(function(){
        valStr += "," + $(this).attr('value');
    });
    valStr = valStr.replace("-,","");

    if(!isExist){   //如果leftbox中没有该条件
        // $("div[id='" + name + "']").remove();
        var myDiv = document.createElement("div");
        myDiv.style = "float:left; width:90%; border:2px solid #ffffFF;margin-left: 16px;margin-top: 16px;display:inline;"
        myDiv.id = name;
        myDiv.setAttribute('name', 'req_' + name);
        myDiv.setAttribute("onclick", 'removeSelected(this)');
        myDiv.innerHTML = name + " : " + str;
        var Tdiv = document.getElementById('leftBox');
        Tdiv.appendChild(myDiv);
        addParam(name, valStr);   //向参数接受对象中传入参数
    }else if(str == '-'){
        $("#"+name).remove();
        addParam(name, "");     //如果全部取消选中，则传入""
    }
    else{
        // $("#"+name).html(name + " : " + str.replace("-,",""));
        $("div[name='req_"+name+"']").html(name + " : " + str.replace("-,",""));
        addParam(name, valStr);   //向参数接受对象中传入参数
    }
}


/***********************************************
当清空日期时触发该事件
'***********************************************/
function clearDate(point){
    // alert(dp.cal.getNewDateStr())
    var name = point.name.split("_")[1];
    var isBegain = point.name.split("_")[0]
    var str = "_";
    if(isBegain=='begin'){
        if(document.getElementById(name)!=null){  //如果页面上已存在该元素
            var strArr = document.getElementById(name).innerHTML.split(" ");
            strArr[2] = "*";
            document.getElementById(name).innerHTML = strArr.join(" ");
            if(isRemove(name)){   //如果全部取消
              addParam(name, "");
            }else{
              addParam(name, strArr.join(" "));
            }
            removeFiled(name);   //在leftbox中去除取消的字段
        }
    }
    if(isBegain=='end'){
        if(document.getElementById(name)!=null){  //如果页面上已存在该元素
            var strArr = document.getElementById(name).innerHTML.split(" ");
            strArr[3] = "*";
            document.getElementById(name).innerHTML = strArr.join(" ");
            if(isRemove(name)){   //如果全部取消
              addParam(name, "");
            }else{
              addParam(name, strArr.join(" "));
            }
            removeFiled(name);
        }
    }
}


/***********************************************
在leftbox中去除已经全部取消的字段
'***********************************************/
function removeFiled(nameId){
    var te = document.getElementById(nameId).innerHTML.split(" ");
    if(te[2]=="*"&&te[3]=="*"){
        document.getElementById(nameId).remove();
    }
}

/***********************************************
判断在leftbox中去除已经全部取消的字段
'***********************************************/
function isRemove(nameId){
    var te = document.getElementById(nameId).innerHTML.split(" ");
    if(te[2]=="*"&&te[3]=="*"){
        return true;
    }
}

/***********************************************
判断日期和数字的大小：输入框前一个日期或数字
要小于等于后一个。
'***********************************************/
function compareDT(nameId){
    var te = document.getElementById(nameId).innerHTML.split(" ");
    if(te[2]!="*"&&te[3]!="*"){
        if(te[2].split("-").length>1){  //日期
            var d1 = te[2].split("-");
            var d2 = te[3].split("-");
            var date_start = new Date(d1[0], d1[1], d1[2]);
            var date_end = new Date(d2[0], d2[1], d2[2]);
            if(date_start>date_end){
                alert("开始日期必须小于结束日期");
            }
        }else{    //数值
            if(parseInt(te[2])>parseInt(te[3])){
                alert("开始值要小于结束值");
            }
        }
    }
}


/***********************************************
判断输入框的内容是不是数字
'***********************************************/
function isNum(input){
    if(!isNaN(input)){
        return input;
    }else{
        alert("输入值必须是数字");
    }
}


