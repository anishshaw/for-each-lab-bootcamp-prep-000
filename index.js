function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback){
  var demoArray = ['ani','kum','sha']
  demoArray.forEach(callback)
  return demoArray
}

function doToArray(array, callback){
  array.forEach(callback)
}