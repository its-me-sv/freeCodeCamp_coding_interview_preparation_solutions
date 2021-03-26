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

  this.removeAt = function(index){
    if (index < 0 || index >= length)
      return null;
    length -= 1;
    if (index == 0){
      let temp = head.element;
      head = head.next;
      return temp;
    }
    let cnt = 0;
    let itr = this.head();
    while (itr.next){
      if (cnt == index - 1){
        let temp = itr.next.element;
        itr.next = itr.next.next;
        return temp;
      }
      cnt += 1;
      itr = itr.next;
    }
  };
}