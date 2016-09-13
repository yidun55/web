#coding: utf-8

import os
import sys
reload(sys)
sys.setdefaultencoding("utf-8")


from flask import jsonify
from flask import request
from flask import Flask, render_template

from tools import report,userGroup, yxt

#建立elasticsearch连接
from elasticsearch import Elasticsearch
es = Elasticsearch(["10.1.80.74", "10.1.80.75"])
myindex = "label"


app = Flask(__name__)
app.config.from_object(__name__)
app.config.from_envvar('FLASKR_SETTINGS', silent=True)

@app.route('/', methods=['GET', 'POST'])
def home():
    # return '<h1>Home</h1>'
    # return render_template('home.html')
    return render_template('welcome.html')

@app.route('/signin', methods=['GET'])
def signin_form():
    # return '''<form action="/signin" method="post">
    #    <p><input name="q"></p>
    #    <p><button type="submit">Sign In</button></p>
    #    </form>'''
    return render_template('easyui.html')

@app.route('/signin', methods=['POST'])
def signin():
    # 需要从request对象读取表单内容：
    if request.form['q']!='':
        search_index = request.form['q']
        se = es.search(index=myindex, body={"query":{"match":{"_id":{"query":search_index,"type":"phrase"}}}})
        all_el = {}
        for hit in se['hits']['hits']:
            all_el.update(hit['_source'])
        # result = jsonify(all_el)
        # return render_template('phone.html', results=result)
        return jsonify(all_el)
    return '<h3>Bad username or password.</h3>'

@app.route('/usergroup', methods=['GET'])
def show_user():
    return render_template('usergroup.html')

@app.route("/ajaxUG", methods=["POST"])
def ajaxGetUG():
    #ajax从后台取数据
    # if request.form["input"] != "":
    if len(request.form) != 0:
        # rawInput = request.form["input"]
        # processedData = userGroup.process_request_data(rawInput)

        parPath = os.getcwd()
        pathFlag = parPath + "/data/test_flag.txt"
        processedData = request.form
        examData = userGroup.load_data(pathFlag)   
        try:
            final = dict([tuple([examData[key.encode("utf-8").strip()], value.strip()]) for key, value in processedData.items()])
        except Exception,e:
            print [key],"*********************************8",[e]

        parPath = os.getcwd()
        pathTag = parPath + "/data/test_tag.txt"
        finalData = userGroup.tranform_checkbox_2_es(pathTag, final)
        # print finalData, "<<<<<<<<<<<<<<<<<<<"

        qDsl = userGroup.query_dsl(finalData)
        parPath = os.getcwd()
        pathQdsl = parPath + "/data/qdsl.txt"
        f = open(pathQdsl, "w")
        f.write(qDsl)
        f.close()

        qDsl = userGroup.query_dsl(finalData)
        se = es.search(index=myindex, doc_type="ulb_collect_all", body=qDsl)
        parPath = os.getcwd()
        pathQdsl = parPath + "/data/qdsl.txt"
        f = open(pathQdsl, "w")
        f.write(qDsl)
        f.close()
        total = se['hits']['total']
    return jsonify({"num":total})


@app.route("/ajaxLD", methods=["GET"])
def ajaxLoadData():
    """
    从配置文件中读取数据处理成usergroup页所需的数据类型
    """
    parPath = os.getcwd()
    pathTag = parPath + "/data/test_tag.txt"
    pathFlag = parPath + "/data/test_flag.txt"
    pathRaw = parPath + u"/data/标签系统查错_lily第二版.xlsx"
    userGroup.process_raw_tag_lily(pathRaw, pathFlag)    #最好设置成隔一段时间更新一次
    keyValue = userGroup.process_tag_load_data(pathTag)   #返回{key, [value1, value2]}
    dataOnPage = userGroup.process_flag_load_data(pathFlag, keyValue)  #返回usergroup显示的数据
    return jsonify(dataOnPage)


@app.route('/channel_record', methods=['POST'])
def post_data():
    keywords = request.form['keyword']
    if request.form['type'] == '' and not request.form.has_key("areas"):
        w_key = keywords  + "*"
        se = es.search(index="label", doc_type="ulb_as_m", body={"query":{"wildcard": {"pk_mobile": w_key}}})
        total = se['hits']['total']
        return jsonify({"total":total})
    if request.form['type'] != "" and not request.form.has_key("areas"):
        w_key = keywords  + "*"
        print w_key, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
        query_body = """{
                "query":
                    {
                        "bool" : {
                             "must" : [
                            { "term" : {"_id":"%s"} },
                            { "term" : {"an_gender":"%s"} }             
                            ]
                      }
                    }
            }"""
        if request.form['type'] == "1":
            gender = "男"
            query_body = query_body%(w_key, gender)
        else:
            gender = "女"
            query_body = query_body%(w_key, gender)

        se = es.search(index='label', doc_type='ulb_an_m', body=eval(query_body))
        total = se['hits']['total']
        return jsonify({"total":total})

@app.route('/tree', methods=['GET'])
def tree():
    return render_template('tree.html')

@app.route('/report', methods=['GET'])
def user_report():
    return render_template('report.html')

@app.route('/report', methods=['POST'])
def user_report2():
    # 需要从request对象读取表单内容：
    if request.form['q']!='':
        search_index = request.form['q']
        se = es.search(index=myindex, body={"query":{"match":{"_id":{"query":search_index,"type":"phrase"}}}})
        all_el = {}
        for hit in se['hits']['hits']:
            all_el.update(hit['_source'])
        result = all_el
        result = report.os_null(result)   #替换操作系统和空值
        result = report.blf_tnh_loan_amt_lst(result)  #处理 替你还当前贷款金额
        result = report.to_yuan(result)  #分转换成元
        return render_template('report1.html', results=result)
    return '<h3>Bad username or password.</h3>'

@app.route('/report1', methods=['GET'])
def user_report1():
    return render_template('report1.html')

#临时需求,两个type同时查询并按时间排序
@app.route("/yxt", methods=['GET'])
def yxt1():
    return render_template('yxt_tmp.html')


@app.route("/yxt", methods=['POST'])
def yxt2():
    if request.form['q']!='':
        search_index = request.form['q']
        se = es.search(index="yxt*", body={"from":0,"size":10000,"query":{"bool":{"must":[{ "term" : {"mobile_num":search_index}}]}},\
              "sort":{"trans_date":{"order":"desc"}}})
        all_el = []
        if se['hits']['total'] != 0:
            for hit in se['hits']['hits']:
                tmp = hit['_source']
                tmp = yxt.cleanDate(tmp)
                tmp = yxt.encryption(tmp)
                tmp = yxt.toYuan(tmp)
                all_el.append(tmp)
            result = all_el
        else:
            result = {"error":"dfs"}
        return render_template('yxt_tmp1.html', results=result) 
    return render_template('yxt_tmp1.html', results={"error":"dfslk"})


if __name__ == '__main__':
    app.run(host="10.1.80.172", port=5000, debug=True, threaded=True)
