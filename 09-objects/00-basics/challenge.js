module.exports.createCourse = function(title,duration,student) {
  var info = {
      title: title,
      duration: duration,
      students: student
  }
  return info
}

module.exports.addProperty = function(object,newProp,newValue) 
  {if (object.newProp == undefined) 

    {object[newProp] = newValue; 
    console.log(object); 
    return object; }
  }

module.exports.formLetter = function(letter) {
  var out1 = 'Hello ' + letter.recipient + ',\n\n' 
  + letter.msg + '\n\nSincerely,\n' + letter.sender
      return out1

}


module.exports.canIGet = function(item,money) {
    var obj1 = {type: 'MacBook Air',
                price: 999 }
    var obj2 = {type: 'MacBook Pro',
                price: 1299 }
    var obj3 = {type: 'Mac Pro',
                price: 2499}
    var obj4 = {type: 'Apple Sticker',
                price: 1}                        

    if (item == obj1.type && money >= obj1.price)
      {return true}
    else if (item == obj2.type && money >= obj2.price)
      {return true}
    else if (item == obj3.type && money >= obj3.price)
      {return true}
    else if (item == obj4.type && money >= obj4.price)
      {return true}
    else {return false}
}