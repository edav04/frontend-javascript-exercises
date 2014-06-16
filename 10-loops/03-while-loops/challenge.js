module.exports.stream = function(conditionalFn, actionFn) {
 while (conditionalFn()) 
{actionFn();} 
 };

module.exports.sumNumbers = function(arg1)
{
  var i = arg1.length;
  var count = 0
  var sum = 0
  while (count < arg1.length)
  {sum += arg1[count]
  count ++}
  return sum;
}

