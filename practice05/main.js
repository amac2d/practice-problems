function fizzBuzz () {
  const fizz = 'Fizz';
  const buzz = 'Buzz';
  for ( let index = 1; index <= 100; index++){
    if( !( index % ( 3 * 5 ) ) ){
      console.log( index + ': ' + fizz + buzz);
    } else if ( !( index % 3 ) ) {
      console.log( index + ': ' + fizz );
    } else if ( !( index % 5 ) ) {
      console.log( index + ': ' + buzz );
    } else {
      console.log( index );
    }
  }
}