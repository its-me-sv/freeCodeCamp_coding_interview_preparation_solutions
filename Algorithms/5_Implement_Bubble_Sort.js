const bubbleSort = array => {
  let temp;
  for (let i = 0; i < array.length; i += 1){
    for (let j = 0; j < array.length - 1 - i; j += 1){
      if (array[j] > array[j+1]){
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
};