#-*-coding:utf8-*-

from flask import Flask, render_template
from flask import request
import requests
import json

app = Flask(__name__)

INDEX_NAME = "law"
document_type = "c_ppai_blacklist"
ELASTIC_SERVER = '10.5.28.11:9200'

@app.route('/')
def index():
    return render_template('index.html')    
    
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