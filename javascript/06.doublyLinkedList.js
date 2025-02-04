// javascript/06.doublyLinkedList.js
// 250203 Hard
/*
here's a coding challenge for JavaScript that explores some similar concepts to XOR linked lists (in terms of manipulating relationships between objects), but without relying on direct memory manipulation (which isn't possible in JavaScript).  This challenge focuses on creating a "doubly linked list" simulation using only JavaScript objects and references:

Challenge:  Simulated Doubly Linked List

Create a JavaScript class (or use factory functions if you prefer) to represent a node in a doubly linked list.  Each node should have the following properties:

value: Stores the data associated with the node (can be any JavaScript data type).
next: A reference to the next node in the list (or null if it's the last node).
prev: A reference to the previous node in the list (or null if it's the first node).
Implement the following methods for your linked list class (or object):

add(value): Adds a new node containing the given value to the end of the list.  Handle the cases where the list is initially empty.

insertAt(index, value): Inserts a new node with the given value at the specified index.  Handle edge cases like invalid indices.

removeAt(index): Removes the node at the specified index.  Handle edge cases like invalid indices or an empty list.

get(index): Returns the value stored in the node at the specified index.  Return undefined if the index is out of bounds.

reverse(): Reverses the order of the nodes in the linked list.  This should modify the next and prev pointers, not create new nodes.

Constraints and Considerations:

You cannot use JavaScript arrays to store the nodes. You must work directly with the node objects and their next and prev properties to establish the linked list structure.
Focus on efficiency. Think about how to avoid unnecessary traversals of the list.
Consider edge cases and error handling. What should happen if the list is empty? What if an invalid index is provided?
Bonus Challenge:

Implement an iterator for your linked list. This would allow you to use a for...of loop to iterate over the values in the list.
This challenge will test your understanding of object references, linked list concepts, and how to manipulate them in JavaScript.  It's a good exercise in building data structures from the ground up. 
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.next === null) {
            this.next = newNode;
            newNode.prev = this;
        } else {
            let current = this;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }

}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
}

const list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log(list.head.value); // 1
console.log(list.head.next.value); // 2
console.log(list.head.next.next.value); // 3

console.log(list.head.prev); // null
console.log(list.head.next.prev.value); // 1
console.log(list.head.next.next.prev.value); // 2

console.log(list.tail.value); // 3
console.log(list.tail.prev.value); // 2


const list2 = new DoublyLinkedList();
list2.add(1);
list2.add(2);
list2.add(3);
console.log(list2.head.value); // 1
console.log(list2.head.next.value); // 2
console.log(list2.head.next.next.value); // 3

console.log(list2.head.prev); // null
console.log(list2.head.next.prev.value); // 1
console.log(list2.head.next.next.prev.value); // 2

console.log(list2.tail.value); // 3 
console.log(list2.tail.prev.value); // 2

