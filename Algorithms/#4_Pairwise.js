const pairwise = (arr, arg) => {
  let cacheArray = [];
  for (let i = 0; i < arr.length - 1; i += 1){
    if (cacheArray.includes(i))
      continue;
    for (let j = i + 1; j < arr.length; j += 1){
      if (cacheArray.includes(j))
        continue;
      if (arr[i] + arr[j] == arg){
        cacheArray.push(i, j);
        break;
      }
    }
  }
  return cacheArray.reduce((a,b) => a + b, 0);
};