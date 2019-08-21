function biggerWords( string, array ) {
  let biggerWordsArray = [];
  for ( let index = 0; index < array.length; index ++) {
    if(string.length < array[index].length){
      biggerWordsArray.push(array[index]);
    }
  }
  return biggerWordsArray;
}