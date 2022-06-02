//Some kata 8 solutions from Codewars












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


/* Remove String Spaces
Simple, remove the spaces from the string, then return the resultant string. */

function noSpace(x){
  return x.split(" ").join("")
}
