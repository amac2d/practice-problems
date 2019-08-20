

function populateRecords( arr ){
  let obj = {
      charge: 0,
      'cash advance': 0
  };
  for ( let index = 0; index < arr.length; index++){
      if(arr[index].type === 'charge'){
          obj.charge += parseFloat(arr[index].amount);
      } else {
          obj['cash advance'] += parseFloat(arr[index].amount);
      }
      
  }
  return obj;
}


