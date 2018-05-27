
// Constructor for stack
function Stack(){
    this.top = null;
    this.count = 0;
} 

Stack.prototype = {

    //Returns the number of items in the queue
    getCount: function(){ return this.count; },

    // decide whehter or not this stack is empty
    isEmpty: function() { return this.count === 0; },

    push: function (data) {
        //Creates a node containing the data and a reference to the next item, if any.
        var node = {
            data: data,
            next: null
        };
    
        //links the current node to the top node. If the stack is empty it will have null as reference
        node.next = this.top;
    
        //makes the current node as the top node.
        this.top = node;
    
        //Increases the count
        this.count++;
    },

    peek: function(){
        //If there are no items, returns null. (avoid error)
        if(this.top === null){
            return null;
        }
        else{
            return this.top.data;
        }
    },


    pop: function () {
        //If there are no items, returns null. (avoid error)
        if (this.top === null) {
            return null;
        }
        else {
            //assigns top to a temp variable
            var out = this.top;
    
            //makes the TOP as the next in line
            this.top = this.top.next;
    
            //there still are items on the stack
            if (this.count > 0) {
                this.count--;
            }
    
            //returns the value that was removed
            return out.data;
        }
    }
};

// stack in ES6
class ES6Stack {

    constructor() {
        this.top = null;
        this.count = 0;
    }

    //Returns the number of items in the queue
    getCount(){ return this.count; }

    // decide whehter or not this stack is empty
    isEmpty() { return this.count === 0; }

    push(data) {
        //Creates a node containing the data and a reference to the next item, if any.
        var node = {
            data: data,
            next: null
        };
    
        //links the current node to the top node. If the stack is empty it will have null as reference
        node.next = this.top;
    
        //makes the current node as the top node.
        this.top = node;
    
        //Increases the count
        this.count++;
    }


    peek() {
        //If there are no items, returns null. (avoid error)
        if(this.top === null){
            return null;
        }
        else{
            return this.top.data;
        }
    }

    pop() {
        //If there are no items, returns null. (avoid error)
        if (this.top === null) {
            throw 'Empty stack!';
            // return null;
        }
        else {
            //assigns top to a temp variable
            var out = this.top;
    
            //makes the TOP as the next in line
            this.top = this.top.next;
    
            //there still are items on the stack
            if (this.count > 0) {
                this.count--;
            }
    
            //returns the value that was removed
            return out.data;
        }
    }

}


var stack = new ES6Stack();
for(var i = 0; i < 10; i++) {
    stack.push(i);
}

while(!stack.isEmpty()){
    console.log(stack.pop());
}
console.log(stack.count);
try {
    stack.pop();
}
catch(e) {
    console.log('exception in stack.pop()');
    console.log('e:'+ e);
}