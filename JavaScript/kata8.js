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