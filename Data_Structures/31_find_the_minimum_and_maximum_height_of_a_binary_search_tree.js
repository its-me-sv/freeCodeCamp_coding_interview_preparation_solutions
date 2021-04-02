var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.findMinHeight = function(troot=this.root){
      if (!this.root) return -1;
      let l = 0;
      let r = 0;
      if (troot.left)
          l = 1 + this.findMinHeight(troot.left);
      if (troot.right)
          r = 1 + this.findMinHeight(troot.right);
      return l < r ? l : r;
  };
  this.findMaxHeight = function(troot=this.root){
      if (!this.root) return -1;
      let l = 0;
      let r = 0;
      if (troot.left)
          l = 1 + this.findMaxHeight(troot.left);
      if (troot.right)
          r = 1 + this.findMaxHeight(troot.right);
      return l > r ? l : r;
  };
  this.isBalanced = function(){
    return this.findMaxHeight() == this.findMinHeight();
  };
}