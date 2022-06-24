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