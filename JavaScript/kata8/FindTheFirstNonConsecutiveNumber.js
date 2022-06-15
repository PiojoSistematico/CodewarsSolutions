//Your task is to find the first element of an array that is not consecutive.
//By not consecutive we mean not exactly 1 larger than the previous element of the array.
function firstNonConsecutive (arr) {
  for(let i=1;i<arr.length;i++){
    if(Math.abs(arr[i]-arr[i-1])>1){
      return arr[i]
    }
  }
  return null
}