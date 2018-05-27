
var AvlTree = require('./avl-tree');

var bst = new AvlTree();

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
        line = line.replace(/[.,/#!$%^&*;:{}=\-_`~()"]/g,' ');
        line = line.replace(/\s{2,}/g,' ').toLowerCase();
        var words = line.split(' ');

        for(var word of words) {
            var count = bst.get(word);
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
        console.log('AVL bst Height: ', bst.localGetHeight());
        
        var bstArray = bst.asSortedArray();
        bstArray.sort(((e1, e2) => e2[1] - e1[1]));
        
        var freqArray = bstArray.filter(e => e[1] >= 100);
        
        // console.log(freqArray);


        freqArray.forEach(e => console.log(e));

        console.log('AVL bst size: ', bst.size());
    });

}

testBST();