function createStack(){
    var top = null;
    var count = 0;

    //Returns the number of items in the queue
    var getCount = function(){
        return count;
    };

    var isEmpty = function() {
        return count === 0;
    };

    /* Methods */
    var push = function (data) {
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

    var peek = function(){
        //If there are no items, returns null. (avoid error)
        if(top === null){
            return null;
        }
        else{
            return top.data;
        }
    };


    var pop = function () {
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
  
    return {
        getCount: getCount,
        isEmpty: isEmpty,
        push: push,
        peek: peek,
        pop: pop
    };
} 


var alert = (msg) => {console.log(msg);}; // arrow function

var person = {
    name : ['Bob', 'Smith'],
    age : 32,
    gender : 'male',
    interests : ['music', 'skiing'],
    bio : function() {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + person.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
    },
};

var pp = person;

pp.bio();
pp.greeting();


var stack = createStack();

for(var i = 100; i < 110; i++) {
    stack.push(i);
}

while(!stack.isEmpty()){
    console.log(stack.pop());
}