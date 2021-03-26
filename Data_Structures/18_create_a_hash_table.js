let called = 0;
const hash = string => {
  called++;
  let hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
class HashTable{
  constructor(){
    this.collection = {};
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.lookup = this.lookup.bind(this);
  }
  add(key, value){
    let keyHash = hash(key);
    if (!this.collection.hasOwnProperty(keyHash))
      this.collection[keyHash] = {};
    this.collection[keyHash][key] = value;
  }
  remove(key){
    let completeHash = this.collection[hash(key)];
    if (completeHash.hasOwnProperty(key))
      delete completeHash[key];
    if (!Object.keys(completeHash).length)
      delete this.collection[hash(key)];
  }
  lookup(key){
    let keyHash = hash(key);
    if (this.collection.hasOwnProperty(keyHash))
      return this.collection[keyHash][key];
    return null;
  }
}