class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  add(val) {
    if (!this.has(val)){
      this.dictionary[val] = val;
      this.length += 1;
      return true;
    }
    return false;
  }

  remove(val){
    if (this.has(val)){
      delete this.dictionary[val];
      this.length -= 1;
      return true;
    }
    return false;
  }

  size(){
    return this.length;
  }
  // Only change code above this line
}