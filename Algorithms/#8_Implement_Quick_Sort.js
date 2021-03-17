const quickSort = array => {
  if (array.length < 2)
    return array;
  let m = Math.floor(array.length / 2);
  let lhs = [], mid = [], rhs = [];
  const key = array[m];
  for (let no of array){
    if (no < key)
      lhs.push(no);
    else if (no > key)
      rhs.push(no);
    else
      mid.push(no);
  }
  return [...quickSort(lhs), ...mid, ...quickSort(rhs)];
};