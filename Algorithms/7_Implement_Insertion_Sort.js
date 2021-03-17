const insertionSort = array => {
  let key, j;
  for (let i = 1; i < array.length; i += 1){
    key = array[i];
    j = i - 1;
    while (j >= 0 && key < array[j]){
      array[j+1] = array[j];
      j -= 1;
    }
    array[j+1]= key;
  }
  return array;
};