'use strict';

class BST {

    constructor(cmpFunc = (e1, e2) => {if(e1 > e2) return 1; else if(e1 < e2) return -1; else return 0;}) {
        this.root = null;
        this.cmpFunc = cmpFunc;
    }

    insert(key, value=null) {
        this.root = this.insertAt(this.root, key, value);
    }

    insertAt(node, key, value) {
        // let newNode = new BSTNode(key, value);
        if (node === null) {
            return { 
                key: key,
                value: value,
                left: null,
                right: null
            };
        }
        let cmp = this.cmpFunc(key, node.key);
        if      (cmp < 0) node.left  =  this.insertAt(node.left, key, value);
        else if (cmp > 0) node.right =  this.insertAt(node.right, key, value);
        else    node.value = value;

        return node;
    }


    search(key) {
        return this.searchAt(this.root, key);
    }

    searchAt(node, key) {
        if (key === null) throw 'calls search() with a null key';
        if (node === null) return null;
        let cmp = this.cmpFunc(key, node.key);
        if      (cmp < 0) return this.searchAt(node.left, key);
        else if (cmp > 0) return this.searchAt(node.right, key);
        else              return node.value;
    }

    // inorder travesal of the tree
    print() {
        this.printAt(this.root);
    }

    printAt(node) {
        if(node === null) return;
        this.printAt(node.left);
        console.log(node.key + '=>' + node.value);
        this.printAt(node.right);
    } 

    getHeight() {
        return this.getHeightAt(this.root);
    }

    getHeightAt(node) {
        if (node === null) return -1;
        var leftHeight  = this.getHeightAt(node.left);
        var rightHeight = this.getHeightAt(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    size() {
        return this.sizeAt(this.root);
    }

    sizeAt(node) {
        if (node === null) return 0;
        var leftSize   = this.sizeAt(node.left);
        var rightSize  = this.sizeAt(node.right);
        return leftSize + rightSize + 1;
    }

}

let bst = new BST();

// bst.insert(10, 'vall'); bst.insert(9, 'valb'); bst.insert(11, 'efg');
// bst.insert(5, 'bbc'); bst.insert(20, 'twenty'); bst.insert(1);
// bst.print();

// console.log('bst.search(20): '+ bst.search(20));

function testBST() {
    var fs = require('fs'),
        readline = require('readline');

    var rd = readline.createInterface({
        input: fs.createReadStream('JaneEyre.txt'),
        output: process.stdout,
        terminal: false
    });


    rd.on('line', function(line) {
        line = line.trim();   // remove trailing \n
        line = line.replace(/[.,/#!$%^&*;:{}=\-_`~()'"]/g,' ');
        line = line.replace(/\s{2,}/g,' ');
        var words = line.split(' ');

        for(var word of words) {
            var count = bst.search(word);
            if(count === null) {
                bst.insert(word, 1);
            }
            else {
                count = count + 1;
                bst.insert(word, count);
            }
        }

    });

    rd.on('close', function() {
        console.log('bst Height: ', bst.getHeight());
        bst.print();
        console.log('bst size: ', bst.size());
    });

}

testBST();
