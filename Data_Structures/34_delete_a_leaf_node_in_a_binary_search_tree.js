var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.remove = function(val){
      let removeNode = function(node, data){
          if (node == null) return null;
          if (node.value == data){
              if (node.right == null && node.left == null)
                  return null;
          }
          else if (data < node.value){
              node.left = removeNode(node.left, data);
              return node;
          } else {
            node.right = removeNode(node.right, data);
            return node;
          }
      };
      this.root = removeNode(this.root, val);
  };
}