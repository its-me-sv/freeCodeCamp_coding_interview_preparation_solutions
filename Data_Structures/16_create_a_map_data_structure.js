class Map{
	constructor(){
		this.collection = {};
		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
		this.get = this.get.bind(this);
		this.has = this.has.bind(this);
		this.values = this.values.bind(this);
		this.size = this.size.bind(this);
		this.clear = this.clear.bind(this);
	}
	add(key, value){
		return this.collection[key] = value;
	}
	remove(key){
		if (this.has(key))
			delete this.collection[key];
	}
	get(key){
		return this.collection[key];
	}
	has(key){
		return this.collection[key] ? true : false;
	}
	values(){
		return Object.values(this.collection);
	}
	size(){
		return this.values().length;
	}
	clear(){
		this.collection = {};
	}
}