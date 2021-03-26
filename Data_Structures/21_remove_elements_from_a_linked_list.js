function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(item){
    if (head === null) return;
    if (head.element === item){
      head = head.next;
      length -= 1;
      return;
    }
    let itr = head;
    while (itr.next){
      if (itr.next.element === item){
        itr.next = itr.next.next;
        length -= 1;
        return;
      }
      itr = itr.next;
    }
    return;
  };
}