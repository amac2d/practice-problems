function arrayReverse( array ) {
  // const reverseArray = [];
  // while( array.length ) {
  //   reverseArray.push(array.pop());
  // }
  // return reverseArray;
  const reverseArray = [];
  let counter = 0;
  for (let index = array.length - 1; index >= 0; index--) {
    reverseArray[counter] = array[index];
    counter++;
  }
  return reverseArray;
}