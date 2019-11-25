function mapToNegativize(arr){
  let newArr = []; 

  for(let i = 0; i < arr.length; i++){
   newArr.push(arr[i] * -1)
  } 
  return newArr;
}
