var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.add = function(item){
    if (this.head == null){
      let node = new Node(item, null);
      this.head = node;
      return;
    }
    let itr = this.head;
    while (itr.next)
      itr = itr.next;
    let node = new Node(item, itr);
    itr.next = node;
    this.tail = node;
    return;
  };

  this.remove = function(item){
    if (this.head === null) return null;
    if (this.head.data == item){
      if (this.head.next)
        this.head.next.prev = null;
      this.head = this.head.next;
      return;
    }
    let itr = this.head;
    while (itr.next){
      if (itr.data == item){
        itr.prev.next = itr.next;
        itr.next.prev = itr.prev;
      }
      itr = itr.next;
    }
    if (itr.data == item)
      itr.prev.next = itr.next;
    this.tail = itr;
  };
};