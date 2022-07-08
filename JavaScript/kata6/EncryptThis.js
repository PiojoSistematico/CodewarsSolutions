//Encrypt this!
//You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
//    Your message is a string containing space separated words.
//    You need to encrypt each word in the message using the following rules:
//        The first letter must be converted to its ASCII code.
//        The second letter must be switched with the last letter
//    Keepin' it simple: There are no special characters in the input.
//Examples:
//encryptThis("Hello") === "72olle"
//encryptThis("good") === "103doo"
//encryptThis("hello world") === "104olle 119drlo"
//


var encryptThis = function(text) {
  
  let arrayWords = text.split(" ")
  
  let arrayEncripted = arrayWords.map(function(word) {
    if(word.length==1){
      return word.charCodeAt(0).toString()
    } else if(word.length==2){
      return word.charCodeAt(0).toString()+word[1]
    } else {
      return word.charCodeAt(0).toString()+word[word.length-1]+word.slice(2,-1)+word[1]
    }
  })
  return arrayEncripted.join(" ")
}
