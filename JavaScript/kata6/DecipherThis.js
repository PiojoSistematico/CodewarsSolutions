
//Decipher this
//You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
//For each word:
//    the second and the last letter is switched (e.g. Hello becomes Holle)
//    the first letter is replaced by its character code (e.g. H becomes 72)
//Note: there are no special characters used, only letters and spaces
//Examples
//decipherThis('72olle 103doo 100ya'); // 'Hello good day'
//decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  let numberPattern = /\d+/g;
  let decipherArray = str.split(" ").map(function(elem) {
    let firstChar = String.fromCharCode(parseInt(elem.match(numberPattern)))
    let remainStr = elem.slice(elem.match(numberPattern)[0].length)
    if(remainStr.length<=1){
      return firstChar+remainStr
    } else {
      let secondChar = remainStr[remainStr.length-1]
      return firstChar+secondChar+remainStr.slice(1,-1)+remainStr[0]
    }
  })
  return decipherArray.join(" ")
};