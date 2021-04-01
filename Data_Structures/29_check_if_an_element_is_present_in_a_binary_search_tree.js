var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
	this.root = null;
	this.isPresent = function(item){
		if (!this.root)
			return false;
		let curr = this.root;
		while (curr){
			if (item === curr.value)
				return true;
			if (item < curr.value)
				curr = curr.left;
			else
				curr = curr.right;
		}
		return false;
	};
}