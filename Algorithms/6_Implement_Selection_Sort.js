const selectionSort = arr => {
  let temp;
  for (let i = 0; i < arr.length; i += 1)
    for (let j = i + 1; j < arr.length; j += 1)
      if (arr[i] > arr[j]){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
  return arr;
};