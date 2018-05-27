/** A single node in an AVL tree */
var AVLnode = /** @class */ (function () {
    function AVLnode(key, value, parent) {
        if (parent === void 0) { parent = null; }
        this.key = key;
        this.value =value;
        this.parent = parent;
        this.balance = 0;
        this.left = null;
        this.right = null;
        this.nodeHeight = 0;
    }
    return AVLnode;
}());
/** The balanced AVL tree */
var AVLtree = /** @class */ (function () {
    // public members organized here
    function AVLtree() {
        this.root = null;
    }
    AVLtree.prototype.insert = function (key, value) {
        if (this.root === null) {
            this.root = new AVLnode(key, value);
        }
        else {
            var n = this.root, parent_1 = null;
            while (true) {
                if (n.key === key) {
                    n.value = value;  
                    return false;
                }
                parent_1 = n;
                var goLeft = n.key > key;
                n = goLeft ? n.left : n.right;
                if (n === null) {
                    if (goLeft) {
                        parent_1.left = new AVLnode(key, value, parent_1);
                    }
                    else {
                        parent_1.right = new AVLnode(key, value, parent_1);
                    }
                    this.rebalance(parent_1);
                    break;
                }
            }
        }
        return true;
    };
    AVLtree.prototype.deleteKey = function (delKey) {
        if (this.root === null) {
            return;
        }
        var n = this.root, parent = this.root, delNode = null, child = this.root;
        while (child !== null) {
            parent = n;
            n = child;
            child = delKey >= n.key ? n.right : n.left;
            if (delKey === n.key) {
                delNode = n;
            }
        }
        if (delNode !== null) {
            delNode.key = n.key;
            child = n.left !== null ? n.left : n.right;
            if (this.root.key === delKey) {
                this.root = child;
            }
            else {
                if (parent.left === n) {
                    parent.left = child;
                }
                else {
                    parent.right = child;
                }
                this.rebalance(parent);
            }
        }
    };
    AVLtree.prototype.treeBalanceString = function (n) {
        if (n === void 0) { n = this.root; }
        if (n !== null) {
            return this.treeBalanceString(n.left) + " " + n.balance + " " + this.treeBalanceString(n.right);
        }
        return "";
    };
    AVLtree.prototype.toString = function (n) {
        if (n === void 0) { n = this.root; }
        if (n !== null) {
            return this.toString(n.left) + " " + n.key + " => " + n.value + " " +  this.toString(n.right);
        }
        return "";
    };
    AVLtree.prototype.rotateLeft = function (a) {
        var b = a.right;
        b.parent = a.parent;
        a.right = b.left;
        if (a.right !== null) {
            a.right.parent = a;
        }
        b.left = a;
        a.parent = b;
        if (b.parent !== null) {
            if (b.parent.right === a) {
                b.parent.right = b;
            }
            else {
                b.parent.left = b;
            }
        }
        this.setBalance(a);
        this.setBalance(b);
        return b;
    };
    AVLtree.prototype.rotateRight = function (a) {
        var b = a.left;
        b.parent = a.parent;
        a.left = b.right;
        if (a.left !== null) {
            a.left.parent = a;
        }
        b.right = a;
        a.parent = b;
        if (b.parent !== null) {
            if (b.parent.right === a) {
                b.parent.right = b;
            }
            else {
                b.parent.left = b;
            }
        }
        this.setBalance(a);
        this.setBalance(b);
        return b;
    };
    AVLtree.prototype.rotateLeftThenRight = function (n) {
        n.left = this.rotateLeft(n.left);
        return this.rotateRight(n);
    };
    AVLtree.prototype.rotateRightThenLeft = function (n) {
        n.right = this.rotateRight(n.right);
        return this.rotateLeft(n);
    };
    AVLtree.prototype.rebalance = function (n) {
        this.setBalance(n);
        if (n.balance === -2) {
            if (this.height(n.left.left) >= this.height(n.left.right)) {
                n = this.rotateRight(n);
            }
            else {
                n = this.rotateLeftThenRight(n);
            }
        }
        else if (n.balance === 2) {
            if (this.height(n.right.right) >= this.height(n.right.left)) {
                n = this.rotateLeft(n);
            }
            else {
                n = this.rotateRightThenLeft(n);
            }
        }
        if (n.parent !== null) {
            this.rebalance(n.parent);
        }
        else {
            this.root = n;
        }
    };

    AVLtree.prototype.height = function (n) {
        if (n === null) {
            return -1;
        }
       
        return 1 + Math.max(this.height(n.left), this.height(n.right)); // bad design! very slow

    };

    AVLtree.prototype.setBalance = function (n) {

        n.balance = this.height(n.right) - this.height(n.left);
    };
    AVLtree.prototype.showNodeBalance = function (n) {
        if (n !== null) {
            return this.showNodeBalance(n.left) + " " + n.balance + " " + this.showNodeBalance(n.right);
        }
        return "";
    };


    AVLtree.prototype.getHeight = function() {
        return this.height(this.root);
    };


    AVLtree.prototype.search = function(key) {
        return this.searchAt(this.root, key);
    };
    

    AVLtree.prototype.searchAt = function(node, key, cmpFunc = (e1, e2) => {if(e1 > e2) return 1; else if(e1 < e2) return -1; else return 0;}) {
        if (key === null) throw 'calls search() with a null key';
        if (node === null) return null;
        let cmp = cmpFunc(key, node.key);
        if      (cmp < 0) return this.searchAt(node.left, key);
        else if (cmp > 0) return this.searchAt(node.right, key);
        else              return node.value;
    };


     
    // inorder travesal of the tree
    AVLtree.prototype.print = function() {
        this.printAt(this.root);
    };

    AVLtree.prototype.printAt = function (node) {
        if(node === null) return;
        this.printAt(node.left);
        console.log(node.key + '=>' + node.value);
        this.printAt(node.right);
    };

    return AVLtree;

}());


var bst = new AVLtree();

// for (var i = 0; i < 20000; i++)
//     tree.insert(i, 'abc');

// // console.log('tree:', tree);
// // tree.print();
// console.log('tree height: ', tree.getHeight());


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
        console.log('AVL bst Height: ', bst.getHeight());
        bst.print();
        // console.log('AVL bst size: ', bst.size());
    });

}

testBST();
