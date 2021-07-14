const MaxHeap = function () {
    this.heap = [null];
    this.size = 0;
    this.print = () => this.heap.slice(0, this.size);
    this.insert = data => {
        this.size += 1;
        let i;
        for (i = this.size; i != 0 && this.heap[Math.floor(i / 2)] < data; i = Math.floor(i / 2))
            this.heap[i] = this.heap[Math.floor(i / 2)];
        this.heap[i] = data;
    };
};