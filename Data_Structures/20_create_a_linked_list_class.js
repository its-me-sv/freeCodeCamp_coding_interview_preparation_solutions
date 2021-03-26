function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    length += 1;
    if (head === null){
    	head = new Node(element);
    	return
    }
    var itr = head;
    while (itr.next !== null)
    	itr = itr.next;
    itr.next = new Node(element);
    return;
  };
}