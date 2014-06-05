module.exports.formLetter = function(firstName, senderName, message) {
      return "Hello " +  firstName + ',' + '\n\n' + message + '\n\nSincerely,\n' + senderName
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
      return bigString.substring(10, 15) + bigString.substring(27, 36)
};

module.exports.findFirstMatch = function(text, searchString) {
      return text.indexOf(searchString,10)
};


module.exports.findLastMatch = function(text, searchString) {
      return text.indexOf(searchString,10)
};

module.exports.substringBetweenMatches = function(text, searchString) {

};
