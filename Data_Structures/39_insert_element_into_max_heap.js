const MaxHeap = function () {
    this.heap = [];
    this.print = () => this.heap;
    this.insert = data => {
        this.heap.push(data);
        let size = this.heap.length - 1;
        for (let i = size; i >= 0 && this.heap[i] > this.heap[Math.floor(i / 2)]; i = Math.floor(i / 2))
            [this.heap[i], this.heap[Math.floor(i / 2)]] = [this.heap[Math.floor(i / 2)], this.heap[i]];
    };
};