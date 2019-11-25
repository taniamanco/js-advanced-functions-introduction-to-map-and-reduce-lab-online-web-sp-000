
function mapToNegativize(arr){
  let newArr = []; 
  for(let i = 0; i < arr.lenght; i++){
   let negNum = arr[i] * -1
   newArr.push(negNum)
  }; 
  return newArr;
}