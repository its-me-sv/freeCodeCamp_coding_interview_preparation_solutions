const permAlone = str => {
  //Heap's algorithm to generate permutations at 
  //O(n!) time complexity
  const getPermutations = arr => {
    let permutations = [];
    const swapArray = (arr1, i, j) => {
      let temp = arr1[i];
      arr1[i] = arr1[j];
      arr1[j] = temp;
    };
    const permute = (n, arr1) => {
      if (n == 1){
        permutations.push(arr1.slice());
        return;
      }
      permute(n-1, arr1);
      for (let i = 0; i < n-1; i += 1){
        if (n % 2 == 0)
          swapArray(arr1, i, n - 1);
        else
          swapArray(arr1, 0, n - 1);
        permute(n-1, arr1);
      }
    };
    permute(arr.length, arr);
    return permutations.map(text => text.join(''));
  };
  const noConsecutive = word => {
    for (let i = 0; i < word.length - 1; i += 1)
      if (word[i] == word[i+1])
        return false;
    return true;
  };
  return getPermutations(str.split('')).filter(noConsecutive).length;
};