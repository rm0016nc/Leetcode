
class LinkedList {
	constructor() {
  	this.head = null;
    this.length = 0;
  }
  
  // Insert at first
  insertAtHead(value) {
  	const current = new Nodes(value, this.head);
    this.head = current;
    this.length++;
  }
  
  // Get by index
  getByIndex(index) {
  	if (index < 0 || index >= this.length) return null;
    
    let current = this.head;
    
    for (let i = 0; i < index; i++) {
    	current = current.next;
    }
    
    return current;
  }
  
  // Insert at index
  insertAtIndex(value, index) {
  	if (index < 0 || index > this.length) return null;
    
    if (index === 0) {
    	return	this.insertAtHead(value);
    } else {
    
      let prev = this.getByIndex(index - 1);

      prev.next = new Nodes(value, prev.next);

      this.length++;
    }
  }
  
  // Remove head
  removeHead() {
  	this.head = this.head.next;
    this.length--;
  }
  
  // Remove at index
  removeAtIndex(index) {
  	if (index < 0 || index >= this.length) return null;
    
    if (index === 0) {
    	return this.removeHead();
    } else {
   	 let prev = this.getByIndex(index - 1);
     prev.next = prev.next.next;
     this.length--;
    }
  }
  
  // Prints
  print() {
  	let out = "";
    let current = this.head;
    
    while (current) {
    	out = `${out}${current.value} ==) `
      current = current.next;
    }
    
    console.log(`${out} null`)
  }
  
  // Remove duplicates
  removeDuplicates() {
  	let hash = {};
    let current = this.head;
    let prev = null;
    
    while (current) {
    	if (hash[current.value]) {
				prev.next = current.next;     	
      } else {
      	hash[current.value] = 1;
        prev = current;
      }
      current = current.next;
    }
  }
  
  // Nth to Last
  findNthNode(n) {
  	let following = this.head;
    let pointer = this.head;
    let count = 1;
    
    while(count < n -1) {
    	following = following.next;
      count++;
    }
    
    while (following.next) {
    	following = following.next;
      pointer = pointer.next;
    }
    
    return pointer.value;
  }
  
  // Remove middle node
  removeMiddleNode(val) {
  	let current = this.head;
    let prev = this.head;
    
    while(prev.value !== val) {
    	if (current.value === val) {
      	prev.next = current.next;
      }
      prev = current;
      current = current.next;
    }
  }
  
  // sum of 2 lists
  sumLists(l1, l2) {
  	let newHead = new Nodes(0, 0);
    let l3 = newHead;
   	let carry = 0;
    
    while (l1 != null || l2 !== null) {
    	const l1_value = l1 && l1.value ? l1.value : 0;
      const l2_value = l2 && l2.value ? l2.value : 0;
      
      const sum = l1_value + l2_value + carry;
      carry = Math.floor(sum/10);
      const last_node = sum % 10;
      
      const newNode = new Nodes(last_node, null);
      l3.next = newNode;
      
      if (l1 != null) l1 = l1.next;
      if (l2 != null) l2 = l2.next;
      l3 = l3.next;
    }

    if (carry > 0) {
      const newNode = new Nodes(carry, null);
      l3.next = newNode;
      l3 = l3.next;
    }
    
    let out ="";
    let current = newHead.next;
    while (current) {
    	out = `${out} ${current.value} ==) `
    	current = current.next;
    }
    console.log(`${out} null`)
  }
  
  
  
  // Palindrome linked list
  isPalindrome() {
  	let slow = this.head;
    let fast = this.head;
    
    while(fast.next !== null && fast.next.next != null) {
    	fast = fast.next.next;
      slow = slow.next
    }
   	slow.next = this.reverse(slow.next)
    let out ="";
    let current = slow.next;
    let pointer = this.head;
    
    while (current) {
    	out = `${out} ${current.value} ==)`
    	if (current.value !== pointer.value) {
        return false;
      }
    	pointer = pointer.next;
     	current = current.next;
    }
    console.log(`Slow ${out} null`)
    return true;
    
  }
  
  // Reverse a linked list
  reverse(head) {
  	let current = head;
    let prev = null;
   
    while(current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    let out ="";
    let pointer = prev;
    
    while (pointer) {
      out = `${out}${pointer.value} ==) `
      pointer = pointer.next;
    }
    
    //console.log(`Reversed: ${out}null`)

    return prev;
  }
  
  // Intersecting node
  isIntersection(l1, l2) {
  	let node_a = l1;
    let node_b = l2;
    
    
    if(l2 == null || l2 == null) return null;
    
    while(node_a?.value !== node_b?.value) {
      if (node_a == null) {
        node_a = l2;
      } else {
        node_a = node_a.next;
      }
      
      if (node_b == null) {
        node_b = l1;
      } else {
        node_b = node_b.next;
      }
    }
    return node_a;
  }
  
  
  // Detect a loop
  loopDetection() {
  	let slow = this.head;
    let fast = this.head;
    
    while (slow && fast && fast.next) {
    	slow = slow.next;
      fast = fast.next.next;
      
      if (slow?.value === fast?.value) return slow.value;
    }
    
    return null;
  }
}

class Nodes {
	constructor(value, next) {
  	this.value = value;
    this.next = next;
  }
}
