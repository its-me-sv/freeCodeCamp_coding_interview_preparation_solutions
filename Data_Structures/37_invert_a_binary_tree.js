var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    this.invert = function (root = this.root) {
        if (!root)
            return null;
        [root.right, root.left] = [root.left, root.right];
        this.invert(root.right);
        this.invert(root.left);
    }
}