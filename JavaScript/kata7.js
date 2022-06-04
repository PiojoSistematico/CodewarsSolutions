//Some kata 7 solutions from Codewars





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

//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//Example: (input --> output)
//"ATTGC" --> "TAACG"
//"GTAT" --> "CATA"
//dnaStrand []        `shouldBe` []
//dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
//dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
//dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

function DNAStrand(dna){
  result = ""
  for(let i=0;i<dna.length;i++){
    switch(dna[i]){
        case "A":
          result+="T"
          break
        case "T":
          result+="A"
          break
        case "G":
          result+="C"
          break
        case "C":
          result+="G"
          break
    }
  }
  return result
}

//Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
//The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
//Note to Tax: not the invested principal is taxed, but only the year's accrued interest
//Example:
//  Let P be the Principal = 1000.00      
//  Let I be the Interest Rate = 0.05      
//  Let T be the Tax Rate = 0.18      
//  Let D be the Desired Sum = 1100.00
//After 1st Year --> P = 1041.00
//After 2nd Year --> P = 1083.86
//After 3rd Year --> P = 1128.30
//Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
//Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
//Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

function calculateYears(principal, interest, tax, desired) {
  years = 0  
  while(principal<desired){
    principal+= (principal*interest*(1-tax))
    years+=1
  }
  return years
}

//Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
//Square all numbers k (0 <= k <= n) between 0 and n.
//Count the numbers of digits d used in the writing of all the k**2.
//Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
//Examples:
//n = 10, d = 1 
//the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
//We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
//nb_dig(25, 1) returns 11 since
//the k*k that contain the digit 1 are:
//1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
//So there are 11 digits 1 for the squares of numbers between 0 and 25.
//Note that 121 has twice the digit 1.

function nbDig(n, d) {
  str=""
  for(let i=0;i<=n;i++){
    str += (i**2).toString()
  }
  return str.split(d).length-1
}

//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
//Examples:
//Testing: [0, 0, 0, 1] ==> 1
//Testing: [0, 0, 1, 0] ==> 2
//Testing: [0, 1, 0, 1] ==> 5
//Testing: [1, 0, 0, 1] ==> 9
//Testing: [0, 0, 1, 0] ==> 2
//Testing: [0, 1, 1, 0] ==> 6
//Testing: [1, 1, 1, 1] ==> 15
//Testing: [1, 0, 1, 1] ==> 11
//However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  str = arr.join("")
  return parseInt(str,2)
};

/* 
Simple interest on a loan is calculated by simply taking the initial amount (the principal, p) and multiplying it by a rate of interest (r) and the number of time periods (n).
Compound interest is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment based on the principal PLUS the interest from all previous periods.
Given a principal p, interest rate r, and a number of periods n, return an array [total owed under simple interest, total owed under compound interest].
EXAMPLES:
interest(100,0.1,1) = [110,110]
interest(100,0.1,2) = [120,121]
interest(100,0.1,10) = [200,259]
Round all answers to the nearest integer. Principal will always be an integer between 0 and 9999; interest rate will be a decimal between 0 and 1; number of time periods will be an integer between 0 and 49.
 */

function interest(P,r,n) {
  let result=[P,P]

  for(let i=1;i<=n;i++){
      result[0]+=(P*r)
      result[1]+=(result[1]*r)
  }
  result[0]=Math.round(result[0])
  result[1]=Math.round(result[1])
  return result
}

//A square of squares
//Given an integral number, determine if it's a square number:
//In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
//The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function(n){
  if(n<0){
    return false
  } else{
    return Math.sqrt(n) % 1 === 0
  }
}

//You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.
//For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"
//The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.
//Examples
//    "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
//    "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
//    "123abc!" is a valid word because all of the characters only appear once in the word.

function validateWord(s){
  str=s.toLowerCase()
  count=str.split(str[1]).length
  for(let i=0;i<s.length;i++){
    if(count != str.split(str[i]).length){
      return false
    }
  }
  return true
}