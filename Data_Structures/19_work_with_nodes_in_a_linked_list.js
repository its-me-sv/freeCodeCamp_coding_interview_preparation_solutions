class Node{
  constructor(item){
    this.element = item;
    this.next = null;
  }
}

let Kitten = new Node('Kitten');
let Puppy = new Node('Puppy');
let Cat = new Node('Cat');
let Dog = new Node('Dog');

Kitten.next = Puppy;
Puppy.next = Cat;
Cat.next = Dog;
