//Some kata 8 solutions from Codewars

//replace T for U in a string
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replace(/T/g,"U")
}

//find the smallest elemnet in an array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// basic math operation
function basicOp(operation, value1, value2)
{
  switch (operation){
    case "+": return value1 + value2
    case "-": return value1 - value2
    case "*": return value1 * value2
    default: return value1 / value2  
  }
}

//Build a function that returns an array of integers from n to 1 where n>0.
const reverseSeq = n => {
  result=[]
  for(let i=n;i>0;i--){
    result.push(i)
  }
  return result;
};

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
function paperwork(n, m) {
  if(n<0 || m<0){
    return 0
  } else{
    return m*n
  }
}

//Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
  return -number
}

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    if(number % 2 ===0){
      return number*8
    } else{
      return  number*9
    }
}

//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
//The function takes a name as its only argument, and returns one of the following strings:
function areYouPlayingBanjo(name) {
  if(name[0]==="R" || name[0]==="r"){
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
//Examples Input: [1, 5.2, 4, 0, -1] Output: 9.2
//         Input: [] Output: 0
//         Input: [-2.398] Output: -2.398
//You can assume that you are only given numbers.
//You cannot assume the size of the array.
//You can assume that you do get an array and if the array is empty, return 0.
// Sum Numbers
function sum (numbers) {
  "use strict";
  if(numbers.length===0){
    return 0
  } else {
    return numbers.reduce((sum,elem) => sum+elem,0)
  }
};

//Implement a function which multiplies two numbers.

function multiply(a,b){
  return a*b;
}

