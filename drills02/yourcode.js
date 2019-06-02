

function countOccurences(array, string){
  var count = 0;
  for(index = 0 ; index < array.length ; index++){
    if (array[index] === string){
      count++;
    }
  }
  return count
}

function wordLengths(array){
  var arrayWordLengths = [];
  for( indexWordLengths = 0; indexWordLengths < array.length ; indexWordLengths++){
    arrayWordLengths.push(array[indexWordLengths].length);
  }
  return arrayWordLengths
}

function getMinMaxMean(array){
  var minNum = null;
  var maxNum = null;
  var meanNum = null;
  var totalNum = null;
  for( indexMean = 0 ; indexMean < array.length ; indexMean ++){
    if(array[indexMean] < minNum || minNum === null){
      minNum = array[indexMean];
    }
    if (array[indexMean] > maxNum || maxNum === null){
      maxNum = array[indexMean];
    }
    totalNum += array[indexMean];
  }
  meanNum = totalNum / array.length;
  return {'min': minNum, 'max': maxNum, 'mean': meanNum};
}

function findMode( array ){
  debugger;
//   findMode: Given an array of numbers, find the number that occurs the most often for example:
// input [5,2,7,18,2,42,5,2]
// returns 2, since it occurs 3 times. If 2 numbers occur the same amount, return the last one
  var findObject = {};
  var counter = null;
  var lastMode = null;
  for ( i = 0 ; i < array.length ; i++ ){
    if (findObject[array[i]]){
      findObject[array[i]] += 1;
    } else {
    findObject[array[i]] = 1;
    }
    if (findObject[array[i]] >= mostCount || mostCount === null){
      lastMode = array[i];
      mostCount = findObject[array[i]];
    }
  }

  return parseInt( lastMode )
}
