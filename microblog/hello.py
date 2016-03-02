#coding: utf-8

import sys
reload(sys)
sys.setdefaultencoding("utf-8")


from flask import jsonify
from flask import request
from flask import Flask, render_template

from tools import report

#建立elasticsearch连接
from elasticsearch import Elasticsearch
es = Elasticsearch(["10.1.60.132", "10.1.60.133"])



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
        se = es.search(index="label", body={"query":{"match":{"_id":{"query":search_index,"type":"phrase"}}}})
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
        se = es.search(index="label", body={"query":{"match":{"_id":{"query":search_index,"type":"phrase"}}}})
        all_el = {}
        for hit in se['hits']['hits']:
            all_el.update(hit['_source'])
        result = all_el
        result = report.three_edu(result)   #挑三个最高的教育经历
        return render_template('report1.html', results=result)
    return '<h3>Bad username or password.</h3>'

@app.route('/report1', methods=['GET'])
def user_report1():
    return render_template('report1.html')





if __name__ == '__main__':
    app.run(debug=True)