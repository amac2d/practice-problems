
function sumArray(array){
    var sumOfArray = 0;
    for (var indexArray = 0 ; indexArray < array.length ; indexArray++) {
        sumOfArray += array[indexArray];
    }
    return sumOfArray;
}

function fitWithinVal(array, num){
    var sumOfArray2 = 0;
    var arrayReturn = [];
    for (var indexArray2 = 0; indexArray2 < array.length; indexArray2++) {
        if (array[indexArray2] + sumOfArray2 <= num) {
            sumOfArray2 += array[indexArray2];
            arrayReturn.push(array[indexArray2]);
        }
        else if (sumOfArray2 === num){
            indexArray2 = array.length
        }
    }
    return arrayReturn;

}


function getAllNamesShorterThan(array, value){

    var arrayReturn = [];
    for ( var index = 0 ; index < array.length ; index++) {
        if (array[index].length < value) {
            arrayReturn.push(array[index]);
        }
    }
    return arrayReturn;
}

function makeLabel(obj){
return obj.greeting + ' ' + obj.givenName + ' ' + obj.familyName + '\n' +
       obj['home address'].streetNumber + ' ' + obj['home address'].streetName +
       '\n' + obj['home address'].city + ', ' + obj['home address'].state + ' ' +
       obj['home address'].zip;
}
