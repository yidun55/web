#coding: utf-8


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

