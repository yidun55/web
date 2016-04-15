#coding: utf-8

import sys
reload(sys)
sys.setdefaultencoding("utf-8")
import json
import xlrd

class report(object):
    """对report页的请求做处理"""

    def __init__(self):
        pass

    @staticmethod
    def three_edu(data_dict):
        """
        挑出用户最高的三个教育经历
        """
        assert type(data_dict) ==dict, "import data_dict==dict"
        phd = [u"博士", data_dict["as_edu_phd_major"],\
           data_dict['as_edu_phd_school'], data_dict['as_edu_phd_date_lst']]
        print phd, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
        master = [u"硕士", data_dict["as_edu_ma_major"],\
           data_dict['as_edu_ma_school'], data_dict['as_edu_ma_date_lst']]
        ba = [u"本科", data_dict["as_edu_ba_major"],\
           data_dict['as_edu_ba_school'], data_dict['as_edu_ba_date_lst']]
        vs = ["专科", data_dict["as_edu_vs_major"],\
           data_dict['as_edu_vs_school'], data_dict['as_edu_vs_date_lst']]
        hs = [u"高中", "None",\
           data_dict['as_edu_hs_school'], data_dict['as_edu_hs_date_lst']]
        No = ["None", "None", "None", "None"]
        if data_dict["as_edu_diploma_lst"] == u'博士':
            tmp = {'t_edu0':phd, 't_edu1':master, 't_edu2':ba}
            data_dict.update(tmp)
            return data_dict
        elif data_dict["as_edu_diploma_lst"] == u'硕士':
            tmp = {'t_edu0':master, 't_edu1':ba, 't_edu2':hs}
            data_dict.update(tmp)
            return data_dict
        elif data_dict["as_edu_diploma_lst"] == u'本科':
            tmp = {'t_edu0':ba, 't_edu1':hs, 't_edu2':No}
            data_dict.update(tmp)
            return data_dict
        elif data_dict["as_edu_diploma_lst"] == u'高中':
            tmp = {'t_edu0':hs, 't_edu1':No, 't_edu2':No}
            data_dict.update(tmp)
            return data_dict
        elif data_dict["as_edu_diploma_lst"] == u'中专':
            tmp = {'t_edu0':vs, 't_edu1':No, 't_edu2':No}
            data_dict.update(tmp)
            return data_dict
        elif data_dict["as_edu_diploma_lst"] == 'None':
            tmp = {'t_edu0':No, 't_edu1':No, 't_edu2':No}
            data_dict.update(tmp)
            return data_dict
        else:
            tmp = {'t_edu0':No, 't_edu1':No, 't_edu2':No}
            data_dict.update(tmp)
            return data_dict



class userGroup(object):
    """
    处理用户探查页数据处理：
    """

    @classmethod
    def load_data(cls, path_str, chinese_name_int=2, english_name_int=1, \
          delimiter=","):
        """
        从test_flag.txt文件加载数据,返回由字段中文名和英文名组成键值对，
        如{"中文名":"英文名"}
        @path_str:文件名
        @chinese_name_int:中文名位于列数
        @english_name_int:英文名位于列数
        @delimiter:文件的分割符
        """
        assert type(path_str) == str, "path_str must be string"
        assert type(chinese_name_int) == int, "chinese_name_int must be int"
        assert type(english_name_int) == int, "english_name_int must be int"
        dList = []
        with open(path_str, "r") as f:
            for line in f:
                t = map(lambda x:x.strip(), line.split(delimiter))
                if len(t) != 0:
                    dList.append((t[chinese_name_int], t[english_name_int]))
        return dict(dList)

    @staticmethod
    def process_request_data(input_str):
        # assert type(input_str) == str, "input must be string"
        lines = input_str.split("|")
        tList = [el.strip().split(":") for el in lines]
        eList = [tuple([x.strip(), y.strip()]) for (x,y) in tList]
        return dict(eList)

    @staticmethod
    def query_dsl(input_dict):
        assert type(input_dict) == dict, "input must be dict"
        searchDSL = []
        for key, value in input_dict.items():
            value = value.replace("not applied", "notapplied")
            vals = ["not applied" if i.strip()=="notapplied" else i.strip() for i in value.split(",")] #把"notapplied"替换成es中的形式
            valT = [i.strip() for i in value.split(" ")]
            valO = [i.strip() for i in value.split("*")]
            if len(vals) > 1:
                vals = ["\""+i+"\"" for i in vals]  #确保query_string能保持查询字段的顺序
                q = {"query_string":{"default_field":key.lower(), "query": \
                   " OR ".join(vals)}}
                searchDSL.append(q)

            elif len(valT) == 2 and valT.count("*")==0:    #数值或日期两值都有的
                q = userGroup.process_two_date_and_value(key, valT)
                searchDSL.append(q)

            elif len(valO) == 2:    #"数值或日期只有一个值的情况"
                q = userGroup.process_one_date_and_value(key, valO)
                searchDSL.append(q)

            else:
                if value.strip() == "notapplied":
                    value = "not applied"
                value = "\"" + value + "\""  #确保query_string能保持查询字段的顺序
                q = {"query_string":{"default_field":key.lower(), "query": value}}
                searchDSL.append(q)

        finalDSL = {"query":{"bool":{"must":searchDSL}}}
        fDsl = json.dumps(finalDSL)
        return fDsl


    @staticmethod
    def process_one_date_and_value(key, input_list):
        """
        #"数值或日期只有一个值的情况"，比如"2012-12-01 *", "* 34"；
        并返回查寻语句
        """
        assert type(input_list) == list, "input must be list"
        assert type(key) == str, "key must be string"
        valO = input_list
        import time
        isDate = len([i for i in input_list if i!=""][0].split("-"))==3  #判断输入是不是日期
        localTime = time.strftime("%Y-%m-%d", time.localtime(time.time()))
        if valO[0] == "":
            if isDate:
                q = {"range":{key.lower():{"lt":valO[1]}}}
            else:
                q = {"range":{key.lower():{"lte":float(valO[1])}}}
        elif valO[1] == "":
            if isDate:
                q = {"range":{key.lower():{"from":valO[0], "to":localTime}}}
            else:
                q = {"range":{key.lower():{"gte":float(valO[0])}}}  
        return q     

    @staticmethod
    def process_two_date_and_value(key, input_list):
        """
        #"数值或日期只有一个值的情况"，比如"2012-12-01 2013-12-01", "22 34"；
        并返回查寻语句
        """
        assert type(input_list) == list, "input must be list"
        assert type(key) == str, "key must be string"
        valT = input_list
        import time
        isDate = len([i for i in input_list if i!=""][0].split("-"))!=1  #判断输入是不是日期
        localTime = time.strftime("%Y-%m-%d", time.localtime(time.time()))
        if isDate:
            q = {"range":{key.lower():{"from":valT[0], "to":valT[1]}}}
        else:
            q = {"range":{key.lower():{"from":float(valT[0]), "to":float(valT[1])}}}  
        return q

    @staticmethod
    def process_tag_load_data(path_str, delimiter="\001", keyIndex_int=0,\
        valueIndex_int=2):
        """
        将Lily给的配置文件处理成{"字段英文名":["字段可能的取值"]}
        @path_str:配置文件所在路径
        @delimiter:分割符
        @keyInex_int:字段英文名的位于第几列（从0开始计数）
        @valueIndex_int:字段可能取值位于第几列（计数同上）
        """
        assert type(path_str) ==  str, "path_str must be string"
        outDict = {}
        with open(path_str, "r") as f:
            for line in f:
                tmp = [i.strip() for i in line.split(delimiter)]
                if outDict.has_key(tmp[keyIndex_int]):
                    outDict[tmp[keyIndex_int]].append(tmp[valueIndex_int])
                else:
                    outDict[tmp[keyIndex_int]] = [tmp[valueIndex_int]]
        return outDict


    @staticmethod
    def process_flag_load_data(path_str, control_dict, delimiter=","):
        """
        将数据处理成usergroup页面展示的形式,如{'社会属性':{'曾用身份证张数':
        {'value':[], 'type':'checkbox'}}}
        @path_str:文件路径
        @control_dict:由函数process_tag_load_data生成的数据
        @delimiter:分割符
        """
        import codecs
        assert type(path_str) == str, "path_str must be string"
        assert type(control_dict) == dict, "control_dict must be dict"
        outDict = {}
        with codecs.open(path_str, "r", "utf-8") as f:
            for line in f:
                tmp = [i.strip() for i in line.split(delimiter)]
                key3 = tmp[3]  #标签库叶子节点的类型['num', 'date', 'checkbox']
                key2 = tmp[2]  #标签库叶子节点的中文名
                tmpDict = {}
                if key3 == "num":
                    tmpDict = {key2:{'value':[], 'type':'num'}}
                elif key3 == 'date':
                    tmpDict = {key2:{'value':[], 'type':'date'}}
                elif key3 == 'checkbox':
                    val = control_dict[tmp[1]]
                    tmpDict = {key2:{'value':val, 'type':'checkbox'}}
                elif key3 == 'checkboxBool':
                    tmpDict = {key2:{'value':[1, 0], 'type':'checkbox', "isBool":""}}
                else:
                    tmpDict = {key2:{'value':[], 'type':'checkbox'}}  #出错的也显示在页面上，便于查找
                
                key0 = tmp[0]   #标签库叶子节点的父节点
                if outDict.has_key(key0):
                    outDict[key0].update(tmpDict)
                else:
                    outDict[key0] = tmpDict
        return outDict


    @staticmethod
    def process_raw_tag_lily(path_in_str, path_out_str):
        """
        处理lily给的配置表(.xlsx文件)，最后生成""社会属性,BH_BLP_TYPE_LST,用户最近一次做的业务类型,checkbox""
        数据的txt文件。
        @path_in_str:
        @path_out_str:
        """
        # assert type(path_in_str) == str, "path_in_str must be string" #传入的值是unicode
        assert type(path_out_str) == str, "path_out_str must be string"
        data = xlrd.open_workbook(path_in_str)
        table = data.sheet_by_name(u"Sheet4")
        nrows = table.nrows      #获取表的行数
        control_dict = {"枚举":"checkbox", "布尔":"checkboxBool",\
                     "数值":"num", "日期":"date"}
        with open(path_out_str, "w") as f:
            for i in range(1, nrows):
                if table.cell(i,7).value == "保留":
                    tmpList = [str(table.cell(i,j).value).strip() for j in [1,3,4,5]]
                    try:
                        tmpList[3] = control_dict[tmpList[3]]  #将标记替换成英文
                        tmpIn = ",".join(tmpList)
                        f.write(tmpIn+"\n")
                    except Exception, e:
                        print e, "error in process_raw_tag_lily"


    @staticmethod
    def tranform_checkbox_2_es(path_str, para_dict):
        """
        将页面上checkbox显示的值映射成后台elastic search中存的值,比如页面上显示为"NA",
        而后台实际存的是"not applied"。
        @path_str:映射表文件，第一行如"字段英文名\001es中的值\001页面上显示的值\001排序方式"
        @para_dict:后台已经接受到usergroup页的数据,如{"英文字段名":"字段值"}
        """
        def r_tuple(x):
            t = map(lambda i:i.strip(), x.split("\001"))
            return (t[0]+t[2], t[1])
        control_dict = {}
        with open(path_str, "r") as f:
            control_list = map(lambda x:r_tuple(x), f)
            control_dict = dict(control_list)
        for key, value in para_dict.iteritems():
            tList = [key.lower()+i.strip() for i in value.split(",")]
            fStr = []
            for el in tList:
                sKey = el.encode("utf-8")
                if control_dict.has_key(sKey):
                    fStr.append(control_dict[sKey])
            if len(fStr) != 0:
                para_dict[key] = ",".join(fStr)
        return para_dict







