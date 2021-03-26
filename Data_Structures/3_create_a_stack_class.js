class Stack{
  constructor(){
    this.collection = [];
    this.print = this.print.bind(this);
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.peek = this.peek.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.clear = this.clear.bind(this);
  }
  print(){
    console.log(this.collection);
  }
  push(val){
    return this.collection.push(val);
  }
  pop(){
    return this.collection.pop();
  }
  peek(){
    return this.collection[this.collection.length - 1];
  }
  isEmpty(){
    return this.collection.length == 0;
  }
  clear(){
    this.top = 0;
    return this.collection.length = 0;
  }
}