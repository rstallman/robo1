
'use strict';

function Stack(){
    var top = null;
    var count = 0;

    //Returns the number of items in the queue
    this.GetCount = function(){
        return count;
    };

    this.isEmpty = function() {
        return count === 0;
    };

    /* Methods */
    this.Push = function (data) {
        //Creates a node containing the data and a reference to the next item, if any.
        var node = {
            data: data,
            next: null
        };
    
        //links the current node to the top node. If the stack is empty it will have null as reference
        node.next = top;
    
        //makes the current node as the top node.
        top = node;
    
        //Increases the count
        count++;
    };

    this.Peek = function(){
        //If there are no items, returns null. (avoid error)
        if(top === null){
            return null;
        }
        else{
            return top.data;
        }
    };


    this.Pop = function () {
        //If there are no items, returns null. (avoid error)
        if (top === null) {
            throw 'Empty stack!';
            // return null;
        }
        else {
            //assigns top to a temp variable
            var out = top;
    
            //makes the TOP as the next in line
            top = top.next;
    
            //there still are items on the stack
            if (count > 0) {
                count--;
            }
    
            //returns the value that was removed
            return out.data;
        }
    };
  
} 


var stack = new Stack();
for(let i = 100; i < 121; i++) {
    stack.Push(i);
}

var stack2 = new Stack();
for(let i = 0; i < 10; i++) {
    stack2.Push(i);
}

console.log('peep stack: ', stack.Peek());
console.log('peep stack2: ', stack2.Peek());
console.log('stack count: ', stack.GetCount());
console.log('stack2 count: ', stack2.GetCount());

console.log('pop all from stack!');
while(!stack.isEmpty()){
    console.log(stack.Pop());
}


console.log('pop all from stack2!');
while(!stack2.isEmpty()){
    console.log(stack2.Pop());
}