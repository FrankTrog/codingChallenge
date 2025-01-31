// /javascript/03.nodeTreeSerializeDeserialize.js
// 250131
/*
Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

class Node {
    constructor(val, left = undefined, right = undefined) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
assert(JSON.parse(JSON.stringify(node)).left.left.val == 'left.left', "node should be equal to left.left");