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

module.exports.hasElems = function(obj,array1) {
 
  for (var i=0; i < array1.length; i++) { 
      
    if (array[i] = obj) {
      console.log(obj[i] + ' ' + array1[i])
      console.log(obj);
      console.log(array1);
      return false
    } 
    else {return true}
    }
}