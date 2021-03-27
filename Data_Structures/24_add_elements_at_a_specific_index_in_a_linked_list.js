function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
  this.addAt = function(index, item){
    if (index < 0 || index > length) return false;
    length += 1;
    let node = new Node(item);
    if (index == 0) {
      node.next = head;
      head = node;
      return; 
    }
    let itr = this.head();
    let pos = 0;
    while (itr){
      if (pos == index - 1){
        node.next = itr.next;
        itr.next = node;
        return;
      }
      pos += 1;
      itr = itr.next;
    }
  };
}