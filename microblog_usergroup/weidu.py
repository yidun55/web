#usr/bin/env python
#coding: utf-8

import os
def wb(path, pathOut):
    """
    从lily出的维度表uts.tag_content从提取维度信息
    @path:通过hdfs get命令拉下来的数据
    @pathOut:输出路径
    """
    with open(pathOut, "w") as f:
        for i in os.walk(path):
            if len(i[2])!=0:
                p = i[0] +"/" +i[2][0]
                with open(p, "r") as f1:
                    for line in f1:
                        tmp = line.split("\001")
                        if len(tmp) == 4:
                            f.write(line.strip()+"\n")



if __name__ == '__main__':
    parPath = os.getcwd()
    pathOut = parPath + "/data/test_tag.txt"
    path = "/home/hdfs/tag_content"
    wb(path, pathOut)