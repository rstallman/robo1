import numpy as np
from matplotlib import pyplot as plt


def maxList(arr):
    res = arr[0]

    for elem in arr:
        if elem > res:
            res = elem

    return res




print('res:', maxList([1, 3, 5, 7, 10.1, -100]))