//Some kata 7 solutions from Codewars

//You are a barista at a big cafeteria. Normally there are a lot of baristas, but your boss runs a contest and he told you that, if you could handle all the orders with only one coffee machine in such a way that the sum of all the waiting times of the customers is the smallest possible, he will give you a substantial raise.
//So you are the only barista today, and you only have one coffee machine that can brew one coffee at a time.People start giving you their orders.
//Let's not think about the time you need to write down their orders, but you need 2 additional minutes to clean the coffee machine after each coffee you make.
//Now you have a list coffees of the orders and you write down next to each of the orders the time you need to brew each one of those cups of coffee.
//Task:
//Given a list of the times you need to brew each coffee, return the minimum total waiting time.
//If you get it right, you will get that raise your boss promised you!
//Note that:
//    It is possible to receive no orders. (It's a free day :), maybe the next day your boss will start giving you some orders himself, you probably don't want that :) )
//    You can only brew one coffee at a time.
//    Since you have one coffee machine, you have to wait for it to brew the current coffee before you can move on to the next one.
//    Ignore the time you need to serve the coffee and the time you need to take the orders and write down the time you need to make each one of them.
//    If you have three customers with times [4,3,2], the first customer is going to wait 4 minutes for his coffee, the second customer is going to wait 4 minutes (the time needed for the first customer to get his coffee), another 2 minutes (the time needed to clean the machine) and 3 more minutes (the time you need to brew his coffee), so in total 9 minutes. The third customer, by the same logic, is about to wait 9 minutes (for the first two customers) + 2 more minutes(cleaning) + 2 minutes (his coffee brewing time). This order of brewing the coffee will end up in a total waiting time of 26 minutes, but note that this may not be the minimum time needed. This time depends on the order you choose to brew the cups of coffee.
//    The order in which you brew the coffee is totally up to you.
//Examples:
//coffees = [3,2,5,10,9]  ->  85
//coffees = [20,5]        ->  32
//coffees = [4,3,2]       ->  22
//

function barista(coffees){
    let sortedCoffees = coffees.sort(function(a,b) {return a-b})
    let minTime = 0
    let previousOrders = 0
    for(let i=0;i<sortedCoffees.length;i++){
      minTime += sortedCoffees[i] + previousOrders + 2*i
      previousOrders += sortedCoffees[i]
    }
    return minTime
}

//Create a function with two arguments that will return an array of the first (n) multiples of (x).
//Assume both the given number and the number of times to count will be positive numbers greater than 0.

function countBy(x, n) {
  let z = [];
  for(let i=1;i<=n;i++){
    z.push(x*i)
  }
  return z;
}

//Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
//For example: ["3:1", "2:2", "0:1", ...]
//Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
//    if x > y: 3 points
//    if x < y: 0 point
//    if x = y: 1 point

function points(games) {
  sum = 0
  for(let i=0;i<games.length;i++){
    let game = games[i].split(":")
    if(game[0]>game[1]){
      sum += 3
    } else if(game[0]==game[1]){
      sum += 1
    }
  }
  return sum
}

//Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
//Example:
//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  words=this.split(" ")
  result = words.map(elem => elem.charAt(0).toUpperCase()+elem.slice(1))
  return result.join(" ")
};

//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//Inpu. Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//Output. Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
//Example
//input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
  return data.map(elem => (elem[0]>=55 && elem[1]>7) ? "Senior" : "Open")
}

//Your task is to write function findSum.
//Upto and including n, this function will return the sum of all multiples of 3 and 5.
//For example:
//findSum(5) should return 8 (3 + 5)
//findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  sum=0
  for(let i=1;i<=n;i++){
    if(i % 3 ===0){
      sum+=i
    } else if(i % 5 ===0){
      sum+=i
    }
  }
  return sum;
}

//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//The binary number returned should be a string.
//Examples:(Input1, Input2 --> Output (explanation)))

function addBinary(a,b) {
  return (a+b).toString(2);
}

//The museum of incredible dull things
//The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
//However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  if(numbers.length==0){
    return numbers
  } else{
    let smallest=Math.min(...numbers)
    return numbers.slice(0,numbers.indexOf(smallest)).concat(numbers.slice(numbers.indexOf(smallest)+1))
  }
}


//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//#Examples:
//Kata.getMiddle("test") should return "es"
//Kata.getMiddle("testing") should return "t"
//Kata.getMiddle("middle") should return "dd"
//Kata.getMiddle("A") should return "A"
//#Input
//A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
//#Output
//The middle character(s) of the word represented as a string.

function getMiddle(s){
  return (s.length % 2 === 0) ? s.slice(s.length/2-1,s.length/2+1) : s.charAt(Math.floor(s.length/2))
}

//You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//Complete the method which accepts such an array, and returns that single different number.
//The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}

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
