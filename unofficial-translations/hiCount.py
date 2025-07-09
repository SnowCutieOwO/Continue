# -*- coding: utf-8 -*-
import re
import os
import glob
import pandas

config = {
    "ignoredFiles": [
        '_404.md',
        '_navbar.md',
        '_sidebar.md',
        '.nojekyll'
    ],
    "debug": False
}

def is_chinese(char):
    if '\u4e00' <= char <= '\u9fff':
        return True
    else:
        return False

def hiCount(s,debug=False):
    count,lCount,elCount,nlCount = 0,0,0,0
    ignore_ = ["，","、","“","”","（","）","？","！","。","—","：","《","》","【","】","；"]
    for i in s:
        if is_chinese(i) and i not in ignore_:
            count += 1
        elif i in ignore_:
            lCount += 1
        elif 'a' < i < 'z' or 'A' < i < 'Z':
            elCount += 1
        elif '0' < i < '9':
            nlCount += 1
    if debug:
        print("字数",count,"中文字符数",lCount,"英文字母数",elCount,"数字字符数",nlCount)
    return (count,lCount,elCount,nlCount)

def openRead(name,debug=False):
    # print(os.getcwd())
    file = open(name,'r',encoding="UTF-8")
    b = file.read()
    if debug:
        print(b)
    return b

def foundFiles(name,debug=False,format='md'):
    c = name + "\*" + "." + format
    dirs = glob.glob(c)
    if dirs == []:
        return (False,None)
    for files in dirs:
        if debug:
            print(files)
    else:
        return (True,dirs)

def processResult(fileName,counts,isIgnored):
    result = []
    for i in range(len(fileName)):
        result.append({"文件名称":fileName[i],"中文字符数":counts[i][0],"汉字数":counts[i][0]-counts[i][1],"中文标点数":counts[i][1],"英文字母":counts[i][2],"数字字符":counts[i][3],"是否计数":isIgnored[i]})
    return result

def __main__():
    count = [0,0,0,0]
    debug = False
    # {
    #     "文件名称": 'xxx'
    #     "汉字数"：num
    #     "中文字符数": num
    #     "英文字母数": num
    #     "数字字符数": num
    #     "是否计数": bool
    # }
    pluginName = ''
    while pluginName == '':
        pluginName = input('请输入要计数的非官方翻译插件名称: ')
        a = foundFiles(pluginName, format = 'yml')
        if not a[0]:
            print("对应插件文件夹不存在，请检查名称后重试！")
            continue
        else:
            break
    fileList = []
    countList = []
    ignoredList = []
    if a[0]:
        # 二号思路：
        # 打开文件后过筛再计数
        for wj in a[1]:
            # 遍历并打开文件            
            # 文件加入记录列表
            rawFile = wj[wj.find("\\")+1:]
            fileList.append(rawFile)
            if config['debug']:
               print(rawFile,end=" ")
            if rawFile in config['ignoredFiles']:
                if debug:
                    print("处于忽略列表中，跳过计数")
                ignoredList.append(False)
                countList.append((0,0,0,0))
                continue
            else:
                ignoredList.append(True)
                countFiles = openRead(wj)
                product = hiCount(countFiles)
                countList.append(product)
                count[0] += product[0]
                count[1] += product[1]
                count[2] += product[2]
                count[3] += product[3]
        else:
            finalResult = processResult(fileList, countList, ignoredList)
            finalResult = pandas.DataFrame(finalResult)
            # print(finalResult)
            print('共',count[0],'字,','其中汉字',count[0]-count[1],'字,','中文标点符号',count[1],'字,','英文字母',count[2],'字,','数字符号',count[3],'字')


__main__()
        

