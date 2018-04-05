
function maxArr(arr, compFunc) {

    res = arr[0];

    for(i = 0; i < arr.length; i++) {

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

console.log('res', maxArr([1, 3, 50, 7], (a, b) => b - a));
console.log('fib(20):', fib(20));