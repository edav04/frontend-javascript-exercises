module.exports.favoriteNumber = function(fav,guess) {
  if (guess > fav){return "Too high"}
  else if (guess < fav){return "Too low"}
  else if (guess == fav) {return "You got it!"}
}

module.exports.checkLock = function(arg1,arg2,arg3,arg4) {
  if ((arg1 === 3 || arg1 === 5 || arg1=== 7) && (arg2 === 2)
    && (arg3 >= 5 && arg3 <= 100) && (arg4 < 9 || arg4 > 20.9))
    {return "correct"}
  else {return "incorrect"}
}

module.exports.canIGet = function(item,money){
  if (item == 'MacBook Air' && money >= 999) {return true} 
  else if (item == 'MacBook Pro' && money >= 1299) {return true}
  else if (item == 'Mac Pro' && money >= 2499) {return true}
  else if (item == 'Apple Sticker' && money >= 1) 
  {return true}
  else {return false}
}
