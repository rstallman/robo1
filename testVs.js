
function maxArr(arr) {

    res = arr[0];

    for(i = 0; i < arr.length; i++) {

        if (arr[i] > res) res = arr[i];
    }

    return res;

}

function fib(n) {

    if (n <= 1) 
        return n;
    else
        return fib(n-1) + fib(n-2); 

        
}

console.log('res', maxArr([1, 3, 50, 7]));
console.log('fib(20):', fib(20));