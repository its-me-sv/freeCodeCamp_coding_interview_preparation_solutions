var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
	this.root = null;
	this.findMin  = function(){
		if (!this.root)
			return null;
		let curr = this.root;
		while (curr.left)
			curr = curr.left;
		return curr.value;
	};
	this.findMax = function(){
		if (!this.root)
			return null;
		let curr = this.root;
		while (curr.right)
			curr = curr.right;
		return curr.value;
	};
}