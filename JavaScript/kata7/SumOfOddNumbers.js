//Given the triangle of consecutive odd numbers:
//
//             1
//          3     5
//       7     9    11
//   13    15    17    19
//21    23    25    27    29
//...
//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)

function rowSumOddNumbers(n) {
  let sum=0;
	for(let index=(n*(n-1)+1);index<n*(n+1); index+=2){
    sum+=index;
  }
  return sum;
}