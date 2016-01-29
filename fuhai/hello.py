#-*-coding:utf8-*-

from flask import Flask, render_template
from flask import request, jsonify
import requests
import json
from functools import wraps
from flask import make_response

app = Flask(__name__)

INDEX_NAME = "law"
document_type = "c_ppai_blacklist"
ELASTIC_SERVER = '10.5.28.11:9200'

def allow_cross_domain(fun):
    """
    允许跨域请求
    """
    @wraps(fun)
    def wrapper_fun(*args, **kwargs):
        rst = make_response(fun(*args, **kwargs))
        rst.headers['Access-Control-Allow-Origin'] = '*'
        rst.headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE'
        allow_headers = "Referer,Accept,Origin,User-Agent"
        rst.headers['Access-Control-Allow-Headers'] = allow_headers
        return rst
    return wrapper_fun


@app.route('/')
def index():
    return render_template('home.html')

@app.route('/easyui') 
def easyui():
    return  render_template('easyui.html') 

@app.route("/query")
def get_mobile_data():
    print "fjkdsaljkflakjsdlfkjalskjdflakjs"
    term = request.args['mobile']

    print term

    INDEX_NAME = "label"
    document_type = "ulb_an_m"
    r = requests.post('http://' + ELASTIC_SERVER + '/' + INDEX_NAME + '/' +document_type+'/_search?q=' + request.args['mobile']) 
    response_dict = json.loads(r.text)
    return jsonify(response_dict)
    
@app.route('/search')
def search():
    #获取请求参数
    term = request.args['term']
    
    search_result = json.loads(search_data_api())

    #处理请求参数，比如去调用数据库信息，
    #把返回的结果封装为python的对象，如list，dict，或者自己写的class

    results = ['jim', 'Sala', 'Mery']
    
    results = search_result
    #返回要展示数据的页面，并把参数一并传过去
    #render_template的第一个参数是一个html页面，后面的参数，‘=’左边是页面上的名字，右边是上面的变量
    return render_template('result.html', results=results, term=term)  





@app.route("/api/search")
def search_data_api():
    """
    API call for searching data. API call expects atleast one argument in the GET request
    called 'query', an additional argument for 'document_type' can also be specified
    :return:
    """

    r = requests.post('http://' + ELASTIC_SERVER + '/' + INDEX_NAME + '/' +document_type+'/_search?q=' + request.args['term'])
    response_dict = json.loads(r.text)
    return json.dumps(parse_search_result(response_dict))


def parse_search_result(response_dict):
    """
    Parses search results and returns the results
    :param response_dict:
    :return: Returns list of results or an empty list depending on response
    """
    if 'hits' in response_dict and response_dict['hits']['total'] > 0:
        results = response_dict['hits']['hits']
        return results
    else:
        # Return variable for setting a no result response
        return {}





if __name__ == '__main__':
    app.config['SECRET_KEY'] = 'you_will_never_guess'
    app.run(debug=True)