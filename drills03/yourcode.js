

function getPath(string) {
  const pathArray = string.split('/');
  return pathArray;
}

function getPathParts(urlString) {
  const protocol = urlString.slice(0, urlString.indexOf('://'));
  urlString = urlString.slice(urlString.indexOf('://') + 3);

  const host = urlString.slice(0, urlString.indexOf(':'));
  urlString = urlString.slice(urlString.indexOf(':') + 1);

  const port = parseInt(urlString.slice(0, urlString.indexOf('/')));
  urlString = urlString.slice(urlString.indexOf('/') + 1);

  const path = urlString.slice(0, urlString.lastIndexOf('/'));
  urlString = urlString.slice(urlString.lastIndexOf('/') + 1);

  const file = urlString;

  const pathObj = {
    protocol,
    host,
    port,
    path,
    file
  };

  return pathObj;
}

function getCapitalCount(array) {
  let counter = 0;
  for (let index = 0; index < array.length; index++) {
    const str = array[index];
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
      counter++;
    }
  }

  return counter;
}

function correctCalcChecker( arr ) {
  for ( let index = 0; index < arr.length; index++){
    if(arr[index].result !== doMath(arr[index])) {
      arr.splice(index, 1);
      index--;
    }
  }
  return arr;
}

function doMath(obj) {
  let result = null;
  switch (obj.op) {
    case '+':
      result = obj.num1 + obj.num2;
      break;
    case '-':
      result = obj.num1 - obj.num2;
      break;
    case '/':
      result = obj.num1 / obj.num2;
      break;
    case 'x':
    case 'X':
    case '*':
      result = obj.num1 * obj.num2;
      break;
  }
  return result;
}
