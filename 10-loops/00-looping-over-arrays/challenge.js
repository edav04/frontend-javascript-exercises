module.exports.sumNumbers = function(my_array)  {
   var result = 0
   for (var i=0; i < my_array.length; i++) { 
    result += my_array[i]
    console.log(my_array)   
  }

  console.log(result);
  return result
}

module.exports.splitAndLowerCaseString = function(inputStr) {
  var lca = inputStr.toLowerCase()
  var splits = lca.split(",");
  console.log(inputStr);
  console.log(splits);
  
  return splits
}

module.exports.addIndex = function(input) {
  var out1 = []
    for (var i=0; i < input.length; i++) { 
    out1.push(i + ' is ' + input[i])      
  }
    return(out1)
}


