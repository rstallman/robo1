
function maxArr(arr, compFunc) {

    var res = arr[0];

    for(var i = 0; i < arr.length; i++) {
        if (compFunc(arr[i], res) > 0) {res = arr[i]; }
    }
    return res;
}


function fib(n) {

    if (n <= 1) 
        return n;
    else
        return fib(n-1) + fib(n-2); 

}

function selectionSort(arr, start, stop, compFunc = ((a, b) => a - b)) {

    for (var i = start; i <= stop; i++) {
        // find index of minimum element starting from j
        var minInd = i;
        for (var j = i; j <= stop; j++) {
            if (compFunc(arr[j], arr[minInd]) < 0) { minInd = j; }
        }
        // exch of (arr, i, index_of_min_elem);
        [arr[i], arr[minInd]] = [arr[minInd], arr[i]];  // ES6

    }
}

function sort(arr, compFunc) {
    selectionSort(arr, 0, arr.length - 1, compFunc);
}


var arr = [100, 3, 5, -7, 2, 4, -6, 8, -10, 20];

console.log('res', maxArr(arr, (a, b) => b - a));  // ES6
console.log('fib(20):', fib(20));
sort(arr, (x, y) => y - x);
console.log('arr:', arr);
console.log('xx');

class Complex {

    constructor(real, img) {
        this.real = real;
        this.img  = img;
    }

    plus(other) {
        return new Complex(this.real + other.real, this.img + other.img);
    }


    minus(other) {
        return new Complex(this.real - other.real, this.img - other.img);
    }


    equals(other) {
        if(this === other) return true;

        if(this.real === other.real && this.img === other.img) return true;

        return false;
    }


    compareTo(other) {
        var magThis  = this.real * this.real + this.img * this.img;
        var magOther = other.real * other.real + other.img * other.img;
        return magThis - magOther;
    }

    toString() {
        return this.real + ' + ' + this.img + 'i';
    }
}


var cpx1 =  new Complex(1, 1);
var cpx2 =  new Complex(1, -1);
console.log('cpx1.plus(cpx2): ' + cpx1.plus(cpx2));


let days = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
days.forEach(e=>console.log(e));


(function() {
    console.log('a anonymous function');
    let x = 6*10;
    console.log('x:', x);
})();

/**
 * calculate pi by means of Monte Carlo
 * randomly generate a point (x, y) to see if it is in a quater of  circle
 * @param {Number} numTrials , number of trials to calculate pi
 */
function calcPi(numTrials = 100000) {
    var inCircle = 0;   
    for(var i = 0; i < numTrials; i++) {
        var x = Math.random();
        var y = Math.random();
        if (x*x + y*y <= 1.0) {
            inCircle++;
        }
    }
    return 4.0 * inCircle / numTrials;
}


function piMonteCarlo(numTrials = 1000){
    var res = [];
    for(var i = 0; i < numTrials; i++) {
        res.push(calcPi());
    }
    return res;
}


var mean = function(arr) {
    var sum = 0.0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

var variance = function(arr) {
    var mu = mean(arr);
    var sum = 0.0;
    for(var i = 0; i < arr.length; i++) {
        var delta = arr[i] - mu;
        sum += delta * delta;
    }
    return sum / (arr.length * arr.length);
};


var res = piMonteCarlo();
var piMean = mean(res);
var piVar  = variance(res);

// var fs = require('fs');
// var t = JSON.stringify(res);
// fs.writeFileSync('percResult.json',t);

console.log('piMean: ', piMean);
console.log('piVar: ', piVar);