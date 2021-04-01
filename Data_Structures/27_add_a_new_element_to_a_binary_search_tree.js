var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
	this.root = null;
	this.add  = function(item){
		let curr = this.root;
		const node = new Node(item);
		if (!curr){
			this.root = node;
			return;
		}
		while (curr){
			if (item < curr.value){
				if (!curr.left){
					curr.left = node;
					return;
				}
				curr = curr.left;
			} else if (item > curr.value){
				if (!curr.right){
					curr.right = node;
					return;
				}
				curr = curr.right;
			} else
				return null;
		}
	};
}