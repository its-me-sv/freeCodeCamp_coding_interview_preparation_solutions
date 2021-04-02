var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  if (tree.left){
    if (tree.left.info >= tree.info)
        return false;
    else
        return isBinarySearchTree(tree.left);
  }
  if (tree.right){
    if (tree.right.info <= tree.info)
        return false;
    else
        return isBinarySearchTree(tree.right);
  }
  return true;
}