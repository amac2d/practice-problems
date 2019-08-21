function groupArray ( array ) {
  debugger;
  const obj = {};
  const multiDimensionalArray = [];
  for ( let index = 0; index < array.length; index++) {
    if(obj[typeof array[index]]) {
      obj[typeof array[index]].push(array[index]);
    } else {
      obj[typeof array[index]] = [ array[index] ];
    }
  }
  for ( var key in obj ){
    multiDimensionalArray.push(obj[key]);
  }
  return multiDimensionalArray;
}