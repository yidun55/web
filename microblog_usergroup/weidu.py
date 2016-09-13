#usr/bin/env python
#coding: utf-8

import os
def wb(path, pathOut,allCB):
    """
    从lily出的维度表uts.tag_content从提取维度信息
    @path:通过hdfs get命令拉下来的数据
    @pathOut:输出路径
    """
    appendSet = set()
    with open(pathOut, "w") as f:
        for i in os.walk(path):
            if len(i[2])!=0:
                p = i[0] +"/" +i[2][0]
                with open(p, "r") as f1:
                    for line in f1:
                        tmp = line.split("\001")
                        if len(tmp) == 4:
                            f.write(line.strip()+"\n")
                        if tmp[0] in allCB:
                            appendSet.add(tmp[0])
        for key in appendSet:
            t = [key, "not applied", "NA", "1"]
            writeIn = "\001".join(t)
            f.write(writeIn+"\n")



def get_check_box(path):
    """
    从path_flag.txt中将checkbox类型的英文字段名取出返回一个set
    """
    reSet = set()
    with open(path, "r") as f:
        for i in f:
            tmp = i.strip().split(",")
            if len(tmp)==4 and tmp[3]=='checkbox':
                reSet.add(tmp[1])
    return reSet



if __name__ == '__main__':
    parPath = os.getcwd()
    pathOut = parPath + "/data/test_tag.txt"
    path = "/home/hdfs/tag_content"
    pathFlag = parPath + "/data/test_flag.txt"

    checkboxSet = get_check_box(pathFlag) 

    wb(path, pathOut, checkboxSet)
