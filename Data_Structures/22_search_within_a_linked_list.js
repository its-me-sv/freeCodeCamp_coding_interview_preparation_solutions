function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
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
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  this.indexOf = function(item){
    let itr = this.head();
    let cnt = 0;
    while (itr){
      if (itr.element === item)
        return cnt;
      cnt += 1;
      itr = itr.next;
    }
    return -1;
  };

  this.elementAt = function(index){
    let cnt = 0;
    let itr = this.head();
    while (itr){
      if (cnt == index)
        return itr.element;
      cnt += 1;
      itr = itr.next;
    }
    return undefined;
  };

  this.isEmpty = function(){
    return length === 0;
  };
}