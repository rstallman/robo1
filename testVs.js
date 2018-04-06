'use strict'

function maxArr(arr, compFunc) {

    var res = arr[0];

    for(var i = 0; i < arr.length; i++) {

        if (compFunc(arr[i], res) > 0) res = arr[i];
    
    }

    return res;

}



function fib(n) {

    if (n <= 1) 
        return n;
    else
        return fib(n-1) + fib(n-2); 
 
}

var arr = [1, 3, 5, 7, 2, 4, 6, 8]

console.log('res', maxArr(arr, (a, b) => b - a));
console.log('fib(20):', fib(20));


var parameters = {
    target: '#myFunction',
    data: [{
      fn: 'sin(x)', 
      color: 'blue'
   },
    {
        fn: 'exp(-0.1*x)*sin(x)',
        color: 'green'
    },       
    ],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 10*Math.PI]}
  };
  
  // functionPlot(parameters);
  
  