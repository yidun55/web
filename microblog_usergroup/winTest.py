#coding: utf-8

import sys
reload(sys)
sys.setdefaultencoding("utf-8")


from flask import jsonify
from flask import request
from flask import Flask, render_template

from tools import report,userGroup


app = Flask(__name__)
app.config.from_object(__name__)
app.config.from_envvar('FLASKR_SETTINGS', silent=True)

@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('welcome.html')

@app.route('/signin', methods=['GET'])
def signin_form():
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
        return jsonify(all_el)
    return '<h3>Bad username or password.</h3>'

@app.route('/usergroup', methods=['GET'])
def show_user():
    return render_template('usergroup.html')

@app.route("/ajaxUG", methods=["POST"])
def ajaxGetUG():
    #ajax从后台取数据
    if request.form["input"] != "":
        rawInput = request.form["input"]
        processedData = userGroup.process_request_data(rawInput)
        examData = userGroup.load_data()
        try:
            finalData = dict([tuple([examData[key.encode("utf-8")], value]) for key, value in processedData.items()])
        except Exception,e:
            print key,e
        qDsl = userGroup.query_dsl(finalData)

    return jsonify({"num":8888888888888})

@app.route('/channel_record', methods=['POST'])
def post_data():
        return jsonify({"total":"2"})

@app.route('/tree', methods=['GET'])
def tree():
    return render_template('tree.html')

@app.route('/report', methods=['GET'])
def user_report():
    return render_template('report.html')

@app.route('/report', methods=['POST'])
def user_report2():
    return '<h3>Bad username or password.</h3>'

@app.route('/report1', methods=['GET'])
def user_report1():
    return render_template('report1.html')





if __name__ == '__main__':
    app.run(debug=True)