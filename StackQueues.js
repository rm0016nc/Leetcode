class Stack {
	constructor() {
  	this.item = [];
    this.min = 0;
    this.count = 0;
  }
  
  // Add to stack
  push(val) {
  	if (this.count === 0) {
    	this.min = val;
    }
  	this.item[this.count] = val;
    this.count++;
    
    if (val < this.min) {
    	this.min = val;
    }
    
    console.log(`${this.item[this.count-1]} Added in stack`)
  }
  
  pop() {
  	let deleteItem = this.item[this.count-1];
    this.count--;
    console.log(`${deleteItem} item Deleted`);
  }
  
  findMin() {
  	console.log(`${this.min} is the minimum element`)
  }
}

class MyQueue {
	constructor() {
  	this.stack1 = [];
    this.stack2 = [];
  }
  
  eQueue(item) {
  	this.stack1.push(item);
  }
  
  dQueue() {
  	if (this.stack2.length === 0) {
    	while(this.stack1.length > 0) {
      	this.stack2.push(this.stack1.pop());
      }
    }
    
    return this.stack2.pop();
  }
  
  print() {
  	console.log(this.stack1);
  	console.log(this.stack2);
  }
}
