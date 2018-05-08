#!/usr/bin/python
import json
from matplotlib import pyplot as plt


with open("percResult.json",'r') as f:
       jsonData = json.load(f)


print('Finished reading jsonData:')

# plt.bar(range(len(jsonData)), jsonData)  
plt.hist(jsonData, 30, normed=1, facecolor='g')
x = [i for i in range(len(jsonData))]
# plt.scatter(x, jsonData)
# plt.plot(x, jsonData, '+')

plt.show()