// javascript/08.univalTree.js
// 250205 Easy
/*
This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
 */

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function countUnivalSubtrees(root) {
    let count = 0;

    function isUnival(node) {
        if (!node) {
            return true;
        }

        const leftUnival = isUnival(node.left);
        const rightUnival = isUnival(node.right);

        if (leftUnival && rightUnival) {
            if (!node.left && !node.right) {
                count++;
                return true;
            }

            if (!node.left && node.val === node.right.val) {
                count++;
                return true;
            } else if (!node.right && node.val === node.left.val) {
                count++;
                return true;
            }
            else if (node.val === node.left.val && node.val === node.right.val) {
                count++;
                return true;
            }
        }

        return false;
    }

    isUnival(root);
    return count;
}

const root = new Node(0);
root.left = new Node(1);
root.right = new Node(0);
root.right.left = new Node(1);
root.right.right = new Node(0);
root.right.left.left = new Node(1);
root.right.left.right = new Node(1);

const numUnival = countUnivalSubtrees(root);
console.log("Number of unival subtrees:", numUnival); // Output: 5

const root2 = new Node(2);
root2.left = new Node(2);
root2.right = new Node(2);
root2.left.left = new Node(5);
root2.left.right = new Node(2);

const numUnival2 = countUnivalSubtrees(root2);
console.log("Number of unival subtrees:", numUnival2); // Output: 3

const root3 = null;
const numUnival3 = countUnivalSubtrees(root3);
console.log("Number of unival subtrees:", numUnival3); // Output: 0

const root4 = new Node(5);
const numUnival4 = countUnivalSubtrees(root4);
console.log("Number of unival subtrees:", numUnival4); // Output: 1