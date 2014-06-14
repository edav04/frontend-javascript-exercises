module.exports.stream = function(conditionalFn,actionFn)
{
conditionalFn = function() { return false; };
actionFn = function() { console.log("Hello!"); };
counter = 10;
conditionalFn = function() {
  while (counter > 0) { 
  console.log(counter);
  counter--;
  return counter >= 0; 
  }
  stream(conditionalFn, actionFn);
};

}

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

