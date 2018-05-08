"use strict";
function sayHello(person) {
    return 'Hello ' + person;
}
var MyComplex = /** @class */ (function () {
    function MyComplex(real, img) {
        this.real = real;
        this.img = img;
    }
    MyComplex.prototype.plus = function (other) {
        return new MyComplex(this.real + other.real, this.img + other.img);
    };
    MyComplex.prototype.minus = function (other) {
        return new MyComplex(this.real - other.real, this.img - other.img);
    };
    MyComplex.prototype.equals = function (other) {
        if (this === other)
            return true;
        if (this.real === other.real && this.img === other.img)
            return true;
        return false;
    };
    MyComplex.prototype.compareTo = function (other) {
        var magThis = this.real * this.real + this.img * this.img;
        var magOther = other.real * other.real + other.img * other.img;
        return magThis - magOther;
    };
    MyComplex.prototype.toString = function () {
        return this.real + ' + ' + this.img + 'i';
    };
    return MyComplex;
}());
var xx = [1, 3, 5, 7];
var user = 'BBC';
console.log(sayHello(user));
var cpx3 = new MyComplex(1, 1);
var cpx4 = new MyComplex(2, 3);
console.log('cpx3:' + cpx3);
console.log('cpx3+cpx4:', cpx3.plus(cpx4));
