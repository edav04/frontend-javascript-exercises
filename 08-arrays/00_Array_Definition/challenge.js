module.exports.newArray = function(arg1,arg2,arg3,arg4){
  var testArray = [arg1,arg2,arg3,arg4]
  return testArray
}

module.exports.firstAndLast = function(items) {
  var theArray = items;
  var lastElement = theArray.length - 1;  
  var issue = [theArray[0],theArray[lastElement]];
  console.log(issue)
  return issue 
}