function zipList(list1:number[], list2:string[]): (string | number)[] {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}
console.log(zipList([1, 2, 3], ['a', 'b', 'c']));

// ziplist using functional programming
function zipListFunctionWay(list1:number[], list2:string[]): (string | number)[] {
  return list1.map((item, index) => [item, list2[index]]).reduce((acc, val) => acc.concat(val), []);
}
console.log(zipListFunctionWay([1, 2, 3], ['a', 'b', 'c']));
