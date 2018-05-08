
function sayHello(person:String) {
    return 'Hello ' + person;
}


class MyComplex {
    real:number;
    img:number;

    constructor(real:number, img:number) {
        this.real = real;
        this.img  = img;
    }

    plus(other:MyComplex) {
        return new MyComplex(this.real + other.real, this.img + other.img);
    }


    minus(other:MyComplex) {
        return new MyComplex(this.real - other.real, this.img - other.img);
    }


    equals(other:MyComplex) {
        if(this === other) return true;

        if(this.real === other.real && this.img === other.img) return true;

        return false;
    }


    compareTo(other:MyComplex) {
        var magThis  = this.real * this.real + this.img * this.img;
        var magOther = other.real * other.real + other.img * other.img;
        return magThis - magOther;
    }

    toString() {
        return this.real + ' + ' + this.img + 'i';
    }
}

let xx =[1, 3, 5, 7];



let user = 'BBC';
console.log(sayHello(user))
let cpx3 = new MyComplex(1, 1);
let cpx4 = new MyComplex(2, 3);
console.log('cpx3:'+ cpx3);
console.log('cpx3+cpx4:', cpx3.plus(cpx4))
