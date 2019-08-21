function sort ( array ) {
  let counter = 0;
  let swapped = true;
  while( swapped ) {
    swapped = false;
    while(counter < array.length -1 ) {
      if(array[counter] > array[counter + 1]) {
        const temp = array[counter];
        array[counter] = array[counter + 1];
        array[counter + 1] = temp;
        swapped = true;
      }
      counter++;
    }
    counter = 0;
  }
  return array;
}