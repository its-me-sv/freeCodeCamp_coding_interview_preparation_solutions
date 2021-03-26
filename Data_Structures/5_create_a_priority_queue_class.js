class PriorityQueue{
	constructor(){
		this.collection = [];
		this.printCollection = this.printCollection.bind(this);
		this.enqueue = this.enqueue.bind(this);
		this.dequeue = this.dequeue.bind(this);
		this.size = this.size.bind(this);
		this.front = this.front.bind(this);
		this.isEmpty = this.isEmpty.bind(this);
	}
	printCollection(){
		console.log(this.collection);
	}
	enqueue(item){
		if (this.isEmpty())
			return this.collection.push(item);
		for (let i = 0; i < this.size(); i += 1)
			if (this.collection[i][1] > item[1]){
				this.collection.splice(i, 0, item);
				return;
			}
		this.collection.push(item);
	}
	dequeue(){
		if (this.isEmpty())
			return "The queue is empty";
		return this.collection.shift()[0];
	}
	size(){
		return this.collection.length;
	}
	front(){
		return this.collection[0][0];
	}
	isEmpty(){
		return this.size() == 0;
	}
}