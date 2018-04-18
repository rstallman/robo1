
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

function selectionSort(arr, start, stop) {

	for (var i = start; i <= stop; i++) {
		// find index of minimum element starting from j
		var minInd = i;
		for (var j = i; j <= stop; j++) {
			if (arr[j] < arr[minInd]) { minInd = j; }
		}
        // exch of (arr, i, index_of_min_elem);
        [arr[i], arr[minInd]] = [arr[minInd], arr[i]];  // ES6

	}
}



var arr = [1, 3, 5, 7, 2, 4, 6, 8]

console.log('res', maxArr(arr, (a, b) => b - a));  // ES6
console.log('fib(20):', fib(20));
selectionSort(arr, 0, 7);
console.log('arr:', arr);
