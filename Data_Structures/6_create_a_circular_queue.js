class CircularQueue {
  constructor(size) {

    this.queue = new Array(size).fill(null);
    this.read = 0;
    this.write = 0;
    this.max = size - 1;
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (this.queue[this.write] != null)
      return null;
    this.queue[this.write++] = item;
    if (this.write > this.max)
      this.write = 0;
    return item;
  }

  dequeue() {
    if (this.queue[this.read] == null)
      return null;
    let item = this.queue[this.read];
    this.queue[this.read++] = null;
    if (this.read > this.max)
      this.read = 0;
    return item;
  }
}