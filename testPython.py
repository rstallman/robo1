import numpy as np
from matplotlib import pyplot as plt
import random

def maxList(arr):
    res = arr[0]

    for elem in arr:
        if elem > res:
            res = elem

    return res

print('res:', maxList([1, 3, 5, 7, 10.1, -100]))

def calcPi(numTrials = 10000):
    inCircle = 0 
    for _ in range(numTrials): 
        x = random.random()
        y = random.random()
        if x*x + y*y <= 1.0: 
            inCircle += 1
          
    return 4.0 * inCircle / numTrials

def piMonteCarlo(numTrials=1000):
    res =[]
    for _ in range(numTrials):
        res.append(calcPi())
    return res


res = piMonteCarlo()
print('res:', res)
