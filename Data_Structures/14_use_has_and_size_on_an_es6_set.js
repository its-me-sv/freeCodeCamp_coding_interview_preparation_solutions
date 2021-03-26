function checkSet(arrToBeSet, checkValue){
   let temp = new Set(arrToBeSet);
   return [temp.has(checkValue), temp.size];
}