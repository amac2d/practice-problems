function fibSeq ( num ) {
  if( num > 0 ) {
    let temp = null;
    let fib1 = 0;
    let fib2 = 1;
    console.log('1: ' + fib1);
    for ( let index = 2; index <= num; index++) {
      console.log(index + ': ' + fib2);
      temp = fib2;
      fib2 += fib1;
      fib1 = temp;
    }
  } else {
    console.log('Please input a positive integer.');
  }
}