class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(data) {
    this.root = new Node(data);
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  maxDepthOfTree(root) {
    if (root === null) {
      return 0;
    }

    let leftDepth = this.maxDepthOfTree(root.left);
    let rightDepth = this.maxDepthOfTree(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }
}

let tree = new BinaryTree(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.left.left = new Node(5);
tree.root.left.left.left.left = new Node(6);
tree.root.left.left.left.left.left = new Node(7);

console.log(tree.maxDepthOfTree(tree.root)); // 7
