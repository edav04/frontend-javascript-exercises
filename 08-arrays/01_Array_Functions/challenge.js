module.exports.reversePlusOne = function(items){
var nArray = items.push(1) && items.reverse();
console.log(nArray)
return nArray;
}

module.exports.plusesEverywhere = function(items){
  var nArray = items.join("+")
  console.log(nArray)
  return nArray;
}

module.exports.arrayQuantityPlusOne = function(items) {
  var nArray = items.length + 1
  return nArray
}
