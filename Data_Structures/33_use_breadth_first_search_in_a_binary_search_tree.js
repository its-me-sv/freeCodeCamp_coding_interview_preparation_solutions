var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.levelOrder = (root = this.root) => {
    if (!root)
        return null;
    let queue = [root];
    let result = [];
    while (queue.length > 0){
        let node = queue.shift();
        result.push(node.value);
        if (node.left)  queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return result;
  };
  this.reverseLevelOrder = (root = this.root) => {
    if (!root)
        return null;
    let queue = [root];
    let result = [];
    while (queue.length > 0){
        let node = queue.shift();
        result.push(node.value);
        if (node.right) queue.push(node.right);
        if (node.left)  queue.push(node.left);
    }
    return result;
  };
}