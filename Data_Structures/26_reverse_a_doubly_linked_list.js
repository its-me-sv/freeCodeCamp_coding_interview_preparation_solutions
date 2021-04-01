var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.reverse = function(){
    let temp = null;
    let itr = this.head;
    if (this.head == null)
      return null;
    this.tail = itr;
    while (itr){
      temp = itr.prev;
      itr.prev = itr.next;
      itr.next = temp;
      itr = itr.prev;
    }
    if (temp != null)
      this.head = temp.prev;
  };
  // Only change code above this line
};