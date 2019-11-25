
function mapToNegativize(arr){
  let newArr = []; 

  for(let i = 0; i < arr.lenght; i++){
   newArr.push(arr[i] * -1)
  } 
  return newArr;
}
function mapToNegativize(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(-1 * src[i])
  }
  return r
}