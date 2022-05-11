//Some kata 6 solutions from Codewars

//Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
//For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
//The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
//Based on: http://oj.leetcode.com/problems/two-sum/
//twoSum [1, 2, 3] 4 === (0, 2)
//The test is wrong

function twoSum(numbers, target) {
    for(let i=0;i<numbers.length;i++){
      for(let j=i+1;j<numbers.length;j++){
        if(numbers[i]+numbers[j]==target){
          return [i,j]
        }
      }
    }
  }



//Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
//a -> 1
//e -> 2
//i -> 3
//o -> 4
//u -> 5
//For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
//Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
//For example, decode("h3 th2r2") would return "hi there".
//For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
  result=""
  for(let j=0;j<string.length;j++){
    switch(string[j]){
      case "a":
        result+="1"
        break
      case "e":
        result+="2"
        break
      case "i":
        result+="3"
        break
      case "o":
        result+="4"
        break
      case "u":
        result+="5"
        break
      default:
        result+=string[j]
        break
    }
  }
  return result
}

function decode(string) {
  result=""
  for(let j=0;j<string.length;j++){
    switch(string[j]){
      case "1":
        result+="a"
        break
      case "2":
        result+="e"
        break
      case "3":
        result+="i"
        break
      case "4":
        result+="o"
        break
      case "5":
        result+="u"
        break
      default:
        result+=string[j]
        break
    }
  }
  return result
}
