import numpy as np


def  myfun(x):

    if x is 0:
        print('x is zeros')
    else:
        print('not zeros')

def minList(arr):

    res = arr[0]

    return res

def maxList(arr):
    res = arr[0]

    for elem in arr:
        if elem > res:
            res = elem



    return res



print('res:', maxList([1, 3, 5, 7, 10.1, -100]))