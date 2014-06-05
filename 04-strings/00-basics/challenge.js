module.exports.formLetter = function(firstName, senderName, message) {
      return "Hello " +  firstName + ',' + '\n\n' + message + '\n\nSincerely,\n' + senderName
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
<<<<<<< HEAD
      var res =  bigString.substring(startA, endA);
      var res1 = bigString.substring(startB, endB);
      return res + res1
};

module.exports.findFirstMatch = function(text, searchString) {
      return text.indexOf(searchString)
=======
      return bigString.substring(10, 15) + bigString.substring(27, 36)
};

module.exports.findFirstMatch = function(text, searchString) {
      return text.indexOf(searchString,10)
>>>>>>> 8af67ae05429095610f493c3eee1f88ea58276ee
};


module.exports.findLastMatch = function(text, searchString) {
      return text.indexOf(searchString,10)
};

module.exports.substringBetweenMatches = function(text, searchString) {
<<<<<<< HEAD
      var res1 = text.indexOf(searchString) + 3
      var res2 = text.lastIndexOf(searchString);
      return text.substring(res1,res2)      
};
=======

};
>>>>>>> 8af67ae05429095610f493c3eee1f88ea58276ee
