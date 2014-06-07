module.exports.addItem = function(item,initial){

if (initial.indexOf(item) == -1)
    {nArray = initial.push(item)
      console.log(nArray) 
      return initial;
    }
      return false
}

module.exports.reverseSortedList = function(arg) {
var nArray = arg.sort()
var nArray1 = nArray.reverse()

return nArray1

}
