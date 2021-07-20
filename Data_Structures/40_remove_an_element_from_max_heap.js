const MaxHeap = function () {
    this.heap = [];
    this.print = () => this.heap;
    this.insert = data => {
        this.heap.push(data);
        let size = this.heap.length - 1;
        for (let i = size; i >= 0 && this.heap[i] > this.heap[Math.floor(i / 2)]; i = Math.floor(i / 2))
            [this.heap[i], this.heap[Math.floor(i / 2)]] = [this.heap[Math.floor(i / 2)], this.heap[i]];
    };
    this.remove = () => {
        let max = this.heap[0];
        this.heap.shift();
        let last = this.heap.pop();
        if (last)
            this.heap.unshift(last);
        let i = 0;
        let size = this.heap.length;
        while (true) {
            let largest = i;
            let left = (i * 2) + 1;
            let right = (i * 2) + 2;
            if (left < size && this.heap[left] > this.heap[largest])
                largest = left;
            if (right < size && this.heap[right] > this.heap[largest])
                largest = right;
            if (largest != i) {
                let temp = this.heap[i];
                this.heap[i] = this.heap[largest];
                this.heap[largest] = temp;
                i = largest;
            } else
                break;
        }
        return max;
    };
};