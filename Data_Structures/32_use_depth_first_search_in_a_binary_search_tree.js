var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.inorder = function(){
        if (!this.root)    
            return null;
        const values = [];
        function traverse(root){
            if (!root)
                return;
            traverse(root.left);
            values.push(root.value);
            traverse(root.right);
        }
        traverse(this.root);
        return values;
  };
  this.preorder = function(){
        if (!this.root)    
            return null;
        const values = [];
        function traverse(root){
          if (!root)
              return;
          values.push(root.value);
          traverse(root.left);
          traverse(root.right);
        }
        traverse(this.root);
        return values;
  };
  this.postorder = function(){
        if (!this.root)    
            return null;
        const values = [];
        function traverse(root){
            if (!root)
                return;
            traverse(root.left);
            traverse(root.right);
            values.push(root.value);
        }
        traverse(this.root);
        return values;
  };
}