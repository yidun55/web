#coding: utf-8

import sys
reload(sys)
sys.setdefaultencoding("utf-8")
import json
import xlrd
import os


class yxt(object):
    """对yxt页的请求做处理"""

    def __init__(object):
        pass

    @staticmethod
    def cleanDate(result_dict):
        """
        将ES时间2016-06-24T23:22:48.0Z转换成2016-06-24 23:22:48
        """
        if result_dict.has_key("trans_date"):
            tmp = result_dict["trans_date"]
            tmp = tmp.replace("T", " ").split(".")[0].strip("Z")
            result_dict["trans_date"] = tmp

        return result_dict


    @staticmethod
    def encryption(result_dict):
        """
        将卡号加密，比如6217996020005484520，变成6217******4520
        """
        if result_dict.has_key("cardno"):
            tmp = result_dict["cardno"]
            tmp = tmp[0:4] + "******" + tmp[-4:]
            result_dict["cardno"] = tmp

        return result_dict


    @staticmethod
    def toYuan(result_dict):
        """
        将金额由分变成元
        """
        if result_dict.has_key("total_am"):
            tmp = result_dict["total_am"]
            tmp = str(float(tmp)/100)
            tmp = "0" if tmp=="0.0" else tmp
            result_dict["total_am"] = tmp
        return result_dict



class report(object):
    """对report页的请求做处理"""

    def __init__(self):
        pass


    @staticmethod
    def to_yuan(result_dict):
        """
        将一部分字段由分变成元
        """
        assert type(result_dict) == dict, "result_dict must be dict"
        if result_dict.has_key("blr_sdmjf_amt_lst") and result_dict["blr_sdmjf_amt_lst"] != None:
            tmp = str(float(result_dict["blr_sdmjf_amt_lst"])/100)
            tmp = "0" if tmp=="0.0" else tmp
            result_dict["blr_sdmjf_amt_lst"] = tmp
        return result_dict


    @staticmethod
    def os_null(result_dict):
        """
        1，将rt_mobile_os_ios_bl、rt_mobile_os_android_bl这个两个字段中
           1替换成ios, android，0替换成""
        2，将-99 -99.0 "not applied"替换成""
        """
        tmp = "ios" if result_dict["rt_mobile_os_ios_bl"] == 1 else  ""
        result_dict["rt_mobile_os_ios_bl"] = tmp
        
        tmp1 = "android" if result_dict["rt_mobile_os_android_bl"] == 1 else  ""
        result_dict["rt_mobile_os_android_bl"] = tmp1

        replace_list = [None]
        for key,value in result_dict.iteritems():
            if value in replace_list:
                result_dict[key] = ""

        return result_dict

    @staticmethod
    def blf_tnh_loan_amt_lst(result_dict):
        """
        处理 替你还当前贷款金额
        替你还当前贷款金额：case when blf_tnh_repay_status_lst is null or blf_tnh_repay_status_lst in ('至今未还款','至今未还清') then blf_tnh_loan_amt_lst else null end;
        易分期当前贷款金额：case when blf_yfq_repay_status_lst is null or blf_yfq_repay_status_lst in ('至今未还款','至今未还清') then blf_yfq_loan_amt_lst else null end;
        员工贷当前贷款金额：case when blf_ygd_repay_status_lst is null or blf_ygd_repay_status_lst in ('至今未还款','至今未还清') then blf_ygd_loan_amt_lst else null end;
        """
        nonSet = set(['', u'至今未还款', u'至今未还清'])
        print result_dict['blf_yfq_repay_status_lst'] in nonSet, "<<<<<<<<<<<<<<<<<<<<<<<"
        tmp1 = False if result_dict['blf_tnh_repay_status_lst'] in nonSet else True
        tmp2 = False if result_dict['blf_yfq_repay_status_lst'] in nonSet else True
        # tmp3 = False if result_dict['blf_ygd_repay_status_lst'] in nonSet else True
        if tmp1:
            result_dict.update({'blf_tnh_loan_amt_lst1': ""})
        else:
            result_dict.update({'blf_tnh_loan_amt_lst1': result_dict["blf_tnh_loan_amt_lst"]})
        if tmp2:
            result_dict.update({'blf_yfq_loan_amt_lst1': ""})
        else:
            result_dict.update({'blf_yfq_loan_amt_lst1': result_dict["blf_yfq_loan_amt_lst"]})
        # if tmp3:
        #     result_dict['blf_ygd_loan_amt_lst'] = ""

        return result_dict


class userGroup(object):
    """
    处理用户探查页数据处理：
    """
    multiMatchFields = ["bn_blc_discdt_all","rf_bank_all","rf_dob_all",\
           "rf_cob_all","rt_ltrm_typ_vld","rt_ltrm_typ_all"]   #字段中用多个值比如"中国银行,工商银行,浙江工商银行"
                                         #要区分出"工商银行","浙江工商银行"
    
    otherBanks = ["定期最后一次申购银行","定期最后一次赎回银行","定期第一次申购银行",\
       "定期第一次赎回银行","活期最后一次申购(去活动)银行","活期最后一次赎回银行",\
       "活期第一次申购(主动)银行","活期第一次赎回银行","借记卡开户行","贷记卡开户行",\
       "银行卡开户行"]   #有"其他银行"的字段
    
    testFlag = {}   #处理该变量的函数是process_other_banks  {"字段英文名":"字段中文名"}
    
    testTag = {}  #处理函数process_other_banks {"字段中文名":[字段取值]}

    queryType = {} #字段的类型{"字段英文名":"type"} 如{"an_gender":"checkbox"}


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

    @classmethod
    def load_query_type(cls, path_str, english_name_int=1, type_int=3, delimiter=','):
        """
        从test_flag.txt文件加载数据，返回字段的类型{"字段英文名":"type"} 如{"an_gender":"checkbox"}
        @path_str: test_flag.txt的路径
        @english_name_int:英文名位于列数
        @type_int:字段类型位于列数
        @delimiter:文件的分割符
        """
        assert type(path_str) == str, "path_str must be string"
        assert type(english_name_int) == int, "english_name_int must be int"
        assert type(type_int) == int, "type_int must be int"
        with open(path_str, "r") as f:
            for line in f:
                t = map(lambda x:x.strip(), line.split(delimiter))
                if len(t) != 0 and t[2].find("++") == -1:   #没有++号
                    cls.queryType[t[english_name_int]] = t[type_int]
                elif len(t) != 0 and t[2].find("++") != -1:
                    cls.queryType[t[english_name_int]] = "num++"

    @classmethod
    def key_type(cls, key_str):
        """
        返回字段的类型(num, num++, checkbox, date, checkboxBool)
        @key_str:字段英文名
        """
        parPath = os.getcwd()
        pathFlag = parPath + "/data/test_flag.txt"
        if len(cls.queryType) == 0:
            userGroup.load_query_type(pathFlag)
        return cls.queryType[key_str]

    @staticmethod
    def process_request_data(input_str):
        # assert type(input_str) == str, "input must be string"
        lines = input_str.split("|")
        tList = [el.strip().split(":") for el in lines]
        eList = [tuple([x.strip(), y.strip()]) for (x,y) in tList]
        return dict(eList)
    
    @classmethod
    def process_null(cls, key_str, val_list):
        """
        处理字段类型是checkbox, checkboxBool两种类型，并包含有"NA"或"否"
        的情况。返回查询该字段null的查询语句。
        """
        assert type(key_str) == str, "key_str must be string"
        assert type(val_list)==list, "val_list must be list"
        
        misQuery = {"missing":{"field":key_str.lower()}}
        KT = userGroup.key_type(key_str)
        if (KT=="checkbox" or KT=="num++") and "not applied" in val_list and (cls.testFlag[key_str] not in cls.otherBanks \
            or "其他银行" not in val_list):
            val_list.remove("not applied")         #非常危险的操作，操作的是原对象
            return [misQuery, "checkbox"]
        elif KT=="checkboxBool" and "0" in val_list:
            q = {"or": [{"bool": {"must": [{"terms": {key_str: val_list}}]}}]}
            q['or'].append(misQuery)
            return [q, "checkboxBool"]
        elif KT=="checkboxBool":
            q = {"or": [{"bool": {"must": [{"terms": {key_str: val_list}}]}}]}
            return [q, "checkboxBool"]
        else:
            return None


    @classmethod
    def query_dsl(cls, input_dict):
        assert type(input_dict) == dict, "input must be dict"
        searchDSL = []
        shouldDSL = []
        mustNotDSL = []
        for key, value in input_dict.items():
            value = value.replace("not applied", "notapplied")
            vals = ["not applied" if i.strip()=="notapplied" else i.strip() for i in value.split(",")] #把"notapplied"替换成es中的形式
            vals = [i.strip() for i in userGroup.process_other_banks(key, vals)]  #处理有"其他银行"这种情况
            valT = [i.strip() for i in value.split(" ")]
            valO = [i.strip() for i in value.split("*")]

            if userGroup.key_type(key.lower()) == "checkboxBool":   #处理布尔类型
                q = userGroup.process_null(key.lower(), vals)
                searchDSL.append(q[0])

            elif len(vals) > 1 or (cls.testFlag[key.lower()] in cls.otherBanks):
                misQ = userGroup.process_null(key.lower(), vals)     #处理缺失值的情况
                q = userGroup.process_enum(key, vals, cls.multiMatchFields)
                if q["flag"] == "should":
                    if misQ != None:
                        q["val"]["or"].append(misQ[0])
                    shouldDSL.append(q["val"])
                elif q['flag'] == 'search':
                    if misQ != None:
                        q["val"]["or"].append(misQ[0])
                    searchDSL.append(q["val"])
                elif q['flag'] == 'must_not':
                    if misQ != None:
                        q["val"]["and"].append(misQ[0])
                    mustNotDSL.append(q['val'])

            elif len(valT) == 2 and valT.count("*")==0:    #数值或日期两值都有的
                q = userGroup.process_two_date_and_value(key, valT)
                searchDSL.append(q)

            elif len(valO) == 2:    #"数值或日期只有一个值的情况"
                q = userGroup.process_one_date_and_value(key, valO)
                searchDSL.append(q)

            else:
                req = userGroup.process_null(key.lower(), vals)
                if req == None:
                    q = {"or":[{"bool":{"must":[{"terms":{key.lower():vals}}]}}]}
                else:
                    q = req[0]
                searchDSL.append(q)

        finalDSL = userGroup.get_final_DSL(searchDSL, shouldDSL, mustNotDSL)
        fDsl = json.dumps(finalDSL)
        return fDsl
    
    @classmethod
    def process_enum(cls, key, vals_list, multiVal_list):
        """
        处理布尔条件传入参数
        @key:字段的英文名
        @vals_list:字段所有的取值
        @multiVal_list:字段会有很多值，并且由逗号分割，比如"工商银行,中国银行"
        """
        assert type(vals_list) == list, "vals_list must be list"
        assert type(multiVal_list) == list, "multiVal_list must be list"
        # print vals_list, "testing%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
        if key.lower() in multiVal_list and "其他银行" not in vals_list:   #银行等字段会有很多逗号分割的,并且不能有"其他银行"这个取值
            vals_list = [".*?[,]?"+i+"[,]?.*?" for i in vals_list]  #确保query_string能保持查询字段的顺序
            t_li = []
            t_di = {}
            for i in vals_list:
                q = {"regexp":{key.lower(): i}}
                t_li.append(q)
            t_di["or"] = t_li       #不同银行间用or操作
            return {"val":t_di, "flag":"should"}

        elif key.lower() in multiVal_list and cls.testFlag[key] in cls.otherBanks\
              and "其他银行" in vals_list: 
            q = {"and":[]}
            if "not applied" in vals_list:
                vals_list.remove("not applied")    #缺失值 
                q["and"].append({"exists":{"field":key.lower()}})
            
            vals_list = [".*?[,]?"+i+"[,]?.*?" for i in vals_list]  #确保query_string能保持查询字段的顺序  
            t_li = []
            for i in vals_list:
                tq = {"regexp":{key.lower(): i}}
                t_li.append(tq)
            q["and"].append({"bool":{"must_not":t_li}})
            return {"val":q, "flag":"must_not"}
        
        elif key.lower not in multiVal_list and cls.testFlag[key] in cls.otherBanks\
              and "其他银行" in vals_list:
            q = {"and":[]}
            if "not applied" in vals_list:
                vals_list.remove("not applied")    #缺失值 
                q["and"].append({"exists":{"field":key.lower()}})

            q["and"].append({"bool":{"must_not":[{"terms":{key.lower(): vals_list}}]}})
            return {"val": q, "flag":"must_not"}

        else:
            q = {"or":[{"bool":{"must":[{"terms":{key.lower():vals_list}}]}}]}
            # q = {"terms":{key.lower():vals_list}}
            return {"val":q, "flag":"search"}

    @classmethod
    def process_other_banks(cls, key, vals_list):
        """
        处理有其他银行的情况
        @key:已选字段的英文名(针对的是枚举类型的字段)
        @vals_list:用户选中字段的值
        """
        parPath = os.getcwd()
        pathFlag = parPath + "/data/test_flag.txt"
        if len(cls.testFlag) == 0:    #加载数据
            with open(pathFlag, "r") as f:
                for line in f:
                    t = map(lambda x:x.strip(), line.split(","))
                    cls.testFlag[t[1]] = t[2]

        pathTag = parPath + "/data/test_tag.txt"
        
        if cls.testFlag[key] in cls.otherBanks:
            if "其他银行" in vals_list:          #所选的值中有"其他银行"
                tDict = {}   #"其它银行"的补集
                with open(pathTag, "r") as f:
                    for line in f:
                        tmp = map(lambda x:x.strip(), line.split("\001"))
                        if key.decode("utf-8") == tmp[0] and tDict.has_key(tmp[0]) and tmp[2]!=u"其他银行":
                            tDict[key].append(tmp[1])
                        elif key.decode("utf-8")==tmp[0] and (tDict.has_key(tmp[0]) == False) and tmp[2]!=u"其他银行":
                            tDict[key] = [tmp[1]]
                
           
                # fDict = userGroup.tranform_checkbox_2_es(pathTag, {key: ",".join(tDict[key])})
                fDict = {key: ",".join(tDict[key])}
                tmpVal = list(set([i.strip() for i in fDict[key].split(",")]))
                vals_list = list(set([i.strip() for i in vals_list]))
                for el in vals_list:
                    if el.decode("utf-8") in tmpVal:
                        tmpVal.remove(el.decode("utf-8"))
                vals_list = tmpVal

                vals_list.append("其他银行")  #把做为一个标记
        return vals_list

    @staticmethod
    def get_final_DSL(searchDSL, shouldDSL, mustNotDSL):
        """
        将搜索条件组成es能识别的条件
        @searchDSL:
        @shouldDSL:
        """
        assert type(searchDSL) == list, "searchDSL must be list"
        assert type(shouldDSL) == list, "shouldDSL must be list"
        # if len(shouldDSL) == 0 and len(mustNotDSL)==0:     #如果没有一个字段存多个值的情况"中国银行,交通银行"
        #     finalDSL = {"query":{"filtered":{"filter":{"and":searchDSL}}}}
        #     # finalDSL = {"query":{"bool":{"must":searchDSL}}}
        # else:
        #     finalDSL = {"query":{"filtered":{}}}     
        #     if len(shouldDSL)!=0:
        #         finalDSL["query"]["filtered"].update({"filter":{"and":shouldDSL}})

        #     if len(mustNotDSL)!=0:
        #         finalDSL["query"]["filtered"].update({"query":{"bool":{"must_not":mustNotDSL}}})

        #     if (len(mustNotDSL)!=0 or len(shouldDSL) !=0) and len(searchDSL)!=0:
        #         finalDSL["query"]["filtered"].update({"query":{"bool":{"must":searchDSL}}}) 
        
        q = searchDSL + shouldDSL + mustNotDSL
        finalDSL = {"query":{"filtered":{"filter":{"and":q}}}}
        return finalDSL

    @classmethod
    def process_one_date_and_value(cls, key, input_list):
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

        
        KT = userGroup.key_type(key.lower())
        q = {"or":[]}
        if valO[0] == "":
            if isDate:
                q['or'].append({"bool":{"must":[{"range":{key.lower():{"lt":valO[1]}}}]}})
            elif float(valO[1])>=-99 and KT == "num++":   #包含null值的情况
                q['or'].append({"bool":{"must":[{"range":{key.lower():{"lte":float(valO[1])}}}]}})
                q['or'].append({"missing":{"field":key.lower()}})
                # q = {"range":{key.lower():{"lte":float(valO[1])}}}
            elif float(valO[1])>=0 and KT == "num":
                q['or'].append({"bool":{"must":[{"range":{key.lower():{"lte":float(valO[1])}}}]}})
                q['or'].append({"missing":{"field":key.lower()}})
                # q = {"range":{key.lower():{"lte":float(valO[1])}}}
            else:
                q['or'].append({"bool":{"must":[{"range":{key.lower():{"lte":float(valO[1])}}}]}})

        elif valO[1] == "":
            if isDate:
                q['or'].append({"bool":{"must":[{"range":{key.lower():{"from":valO[0], "to":localTime}}}]}})
                # q = {"range":{key.lower():{"from":valO[0], "to":localTime}}}
            elif float(valO[0]) <= -99 and KT == "num++":
                q['or'].append({"bool":{"must":[{"range":{key.lower():{"gte":float(valO[0])}}}]}})
                q['or'].append({"missing":{"field":key.lower()}})                
                # q = {"range":{key.lower():{"gte":float(valO[0])}}}
            elif float(valO[0])<=0 and KT == "num":
                q['or'].append({"bool":{"must":[{"range":{key.lower():{"gte":float(valO[0])}}}]}})
                q['or'].append({"missing":{"field":key.lower()}})                
                # q = {"range":{key.lower():{"gte":float(valO[0])}}}
            else:
                q['or'].append({"bool":{"must":[{"range":{key.lower():{"gte":float(valO[0])}}}]}})

        return q     

    @classmethod
    def process_two_date_and_value(cls, key, input_list):
        """
        #"数值或日期只有一个值的情况"，比如"2012-12-01 2013-12-01", "22 34"；
        并返回查寻语句
        """
        assert type(input_list) == list, "input must be list"
        assert type(key) == str, "key must be string"
        valT = input_list
        import time
        isDate = len([i for i in input_list if i!=""][0].split("-"))==3  #判断输入是不是日期
        localTime = time.strftime("%Y-%m-%d", time.localtime(time.time()))


        q = {"or":[]}
        KT = userGroup.key_type(key.lower())
        if isDate:
            q['or'].append({"bool":{"must":[{"range":{key.lower():{"from":valT[0], "to":valT[1]}}}]}})
            # q = {"range":{key.lower():{"from":valT[0], "to":valT[1]}}}
        elif float(valT[0])<=-99 and float(valT[1])>=-99 and KT == "num++":    #包含null值的情况
            q['or'].append({"bool":{"must":[{"range":{key.lower():{"from":float(valT[0]), "to":float(valT[1])}}}]}})
            q['or'].append({"missing":{"field":key.lower()}})
            # q = {"range":{key.lower():{"from":float(valT[0]), "to":float(valT[1])}}} 
        elif float(valT[0])<=0 and float(valT[1])>=0 and KT == "num":    #包含null值的情况
            q['or'].append({"bool":{"must":[{"range":{key.lower():{"from":float(valT[0]), "to":float(valT[1])}}}]}})
            q['or'].append({"missing":{"field":key.lower()}})
            # q = {"range":{key.lower():{"from":float(valT[0]), "to":float(valT[1])}}} 
        else:
            q['or'].append({"bool":{"must":[{"range":{key.lower():{"from":float(valT[0]), "to":float(valT[1])}}}]}})

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
        table = data.sheet_by_name(u"dyh")
        nrows = table.nrows      #获取表的行数
        control_dict = {"枚举":"checkbox", "布尔":"checkboxBool",\
                     "数值":"num", "日期":"date"}
        with open(path_out_str, "w") as f:
            for i in range(1, nrows):
                if table.cell(i,7).value == "保留":
                    tmpList = [str(table.cell(i,j).value).strip() for j in [2,4,5,6]]
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
            if t[2] == "其他银行":
                return (t[0]+t[2], t[2])
            else:
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








