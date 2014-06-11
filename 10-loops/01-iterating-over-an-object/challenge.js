module.exports.getKeys = function(arg1) {
 var myObject = arg1
 var out1 = []
 for (var i in myObject) {
      out1.push(i);     
  }
     console.log(out1)
     return out1
}

module.exports.getValues = function(arg1) {
 var myObject = arg1
 var out1 = []
 for (var i in myObject) {
      out1.push(myObject[i]);     
  }
     console.log(out1)
     return out1
}

module.exports.objectToArray = function(arg1) {
  var myObj = arg1
  var out1 = []
  for (var i in myObj) {
      out1.push(i + ' is ' + myObj[i])   
  }
    console.log(out1)
    return out1;
}
