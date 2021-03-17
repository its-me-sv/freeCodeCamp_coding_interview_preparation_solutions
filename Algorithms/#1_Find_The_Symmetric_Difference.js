const sym = (...args) => {
  const getDifference = (arr1, arr2) => {
    let output = [];
    for (let no of arr1)
      if (!arr2.includes(no) && !output.includes(no))
        output.push(no);
    for (let no of arr2)
      if (!arr1.includes(no) && !output.includes(no))
        output.push(no);
      return output;
  };
  return args.reduce(getDifference);
};