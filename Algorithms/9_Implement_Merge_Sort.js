const merge = (left, right) => {
  const output = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      output.push(left[i]);
      i+=1;
    } else {
      output.push(right[j]);
      j+=1;
    }
  }
  return [...output, ...left.slice(i), ...right.slice(j)];
};

const mergeSort = arr => {
  if (arr.length < 2) 
    return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};