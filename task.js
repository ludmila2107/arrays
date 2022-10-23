function compareArrays(arr1, arr2) {
  let result;

  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])


  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  return arr.filter(number => number > 0).filter(a => a % 3 === 0).map(a => a*10);

  return resultArr; // array
}
