module.exports.formLetter = function(firstName, senderName, message) {
      return "Hello " +  firstName + ',' + '\n\n' + message + '\n\nSincerely,\n' + senderName
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
      var res =  bigString.substring(startA, endA);
      var res1 = bigString.substring(startB, endB);
      return res + res1
};

module.exports.findFirstMatch = function(text, searchString) {
      return text.indexOf(searchString)
};


module.exports.findLastMatch = function(text, searchString) {
      return text.indexOf(searchString,10)
};

module.exports.substringBetweenMatches = function(text, searchString) {
      var res1 = text.indexOf(searchString) + 3
      var res2 = text.lastIndexOf(searchString);
      return text.substring(res1,res2)      
};