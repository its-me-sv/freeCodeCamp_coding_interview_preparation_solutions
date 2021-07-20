const isSorted = a => {
    for (let i = 0; i < a.length - 1; i++)
        if (a[i] > a[i + 1])
            return false;
    return true;
};

const createRandomArray = (size = 5) => {
    let a = new Array(size);
    for (let i = 0; i < size; i++)
        a[i] = Math.floor(Math.random() * 100);
    return a;
};

const array = createRandomArray(25);

const MinHeap = function () {
    this.heap = [];
    this.insert = data => {
        this.heap.push(data);
        let size = this.heap.length - 1;
        for (let i = size; i >= 0 && this.heap[i] < this.heap[Math.floor(i / 2)]; i = Math.floor(i / 2))
            [this.heap[i], this.heap[Math.floor(i / 2)]] = [this.heap[Math.floor(i / 2)], this.heap[i]];
    };
    this.remove = () => {
        let min = this.heap.shift();
        let last = this.heap.pop();
        if (last)
            this.heap.unshift(last);
        let i = 0;
        let size = this.heap.length;
        while (true) {
            let smallest = i;
            let left = (i * 2) + 1;
            let right = (i * 2) + 2;
            if (left < size && this.heap[left] < this.heap[smallest])
                smallest = left;
            if (right < size && this.heap[right] < this.heap[smallest])
                smallest = right;
            if (smallest != i) {
                [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
                i = smallest;
            } else
                break;
        }
        return min;
    };
    this.sort = () => {
        let result = [];
        while (this.heap.length > 0)
            result.push(this.remove());
        return result;
    };
};