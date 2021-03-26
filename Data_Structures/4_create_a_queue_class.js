class Queue{
  constructor(){
    this.collection = [];
    this.start = 0;
    this.end = 0;
    this.print = this.print.bind(this);
    this.enqueue = this.enqueue.bind(this);
    this.dequeue = this.dequeue.bind(this);
    this.front = this.front.bind(this);
    this.size = this.size.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }
  print(){
    console.log(this.collection);
  }
  enqueue(val){
    return this.collection[this.end++] = val;
  }
  dequeue(){
    return this.collection[this.start++];
  }
  front(){
    return this.collection[this.start];
  }
  size(){
    return this.end - this.start;
  }
  isEmpty(){
    return this.size() == 0;
  }
}