module.exports.copy = function(arg1) {
  var newObj = {}
  var myObj = arg1
  for (var i in myObj) {
      newObj.name = myObj[i]
  
  }
    return newObj
}

module.exports.extend = function(dest,src) {
      var Obj1 = src
      var Obj2 = dest
  for (var i in Obj1) {
      Obj2[i] = Obj1[i] 
  }
      console.log(Obj2)
      return Obj2;
}

module.exports.hasElems = undefined;