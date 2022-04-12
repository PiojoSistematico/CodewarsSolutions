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

//You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
//Write a program that returns the girl's age (0-9) as an integer.
//Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
function getAge(inputString){
  return parseInt(inputString.charAt(0))
}

//If you can't sleep, just count sheep!! Task:
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
const countSheep = function (num){
  //your code here
  result = ""
  for(let i=1;i<=num;i++){
    result += `${i} sheep...` 
  }
  return result
}

//Write a function to split a string and convert it into an array of words.
//Examples (Input -> Output):
//* "Robin Singh" ==> ["Robin", "Singh"]
//* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
function stringToArray(string){
  return string.split(" ")
}

//Given a number n, return the number of positive odd numbers below n, EASY!
//Examples (Input -> Output)
//* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
//* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
//Expect large Inputs!
function oddCount(n){
 return Math.floor(n/2)
}

//The Decibel Scale is used to determine the loudness of a sound, measured in dB:
//Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.
function dBScale(intensity) {
  return 10*Math.log10(intensity/Math.pow(10,-12))
}

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

//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
function powersOfTwo(n){
  result = []
  for(let i=0;i<=n;i++){
    result.push(2**i)
  }
  return result
}

//Given an array of integers, return a new array with each value doubled.
function maps(x){
  return x.map((x) => 2*x)
}


