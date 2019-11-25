function mapToNegativize(arr){
  let newArr = []; 

  for(let i = 0; i < arr.length; i++){
   newArr.push(arr[i] * -1)
  }
  return newArr;
}

function mapToNoChange(arr){
  let newArr = []; 

  for(let i = 0; i < arr.length; i++){
   newArr.push(arr[i])
  }
  return newArr;
}

function mapToDouble(arr){
  let newArr = []; 

  for(let i = 0; i < arr.length; i++){
   newArr.push(arr[i] * 2)
  }
  return newArr;
}

function mapToSquare(arr){
  let newArr = []; 

  for(let i = 0; i < arr.length; i++){
   newArr.push(arr[i] * arr[i])
  }
  return newArr;
}

function reduceToTotal(src, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < src.length; i++ ) {
    total = total + src[i]
  }
  return total
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}