exports.JSONdeal = function() {
  var JSONdeals = {
    "woolingsworth": {
      "apples": 4,
      "bananas": 3,
      "oranges": 12
    },
    "chockers": {
      "bananas": 2,
      "apples": 5,
      "oranges": 4
    },
    "picklepay": {
      "bananas": 4,
      "oranges": 7
    },
    "shopwrong": {
      "apples": 2,
      "bananas": 3
    },
    "kwakspar": {
      "oranges": 9,
      "apples": 4
    }
  };
  return JSONdeals;
};
exports.cOrangeSeller = function(JSONdeals) {
  var orangeSellers = [];
  for (var shop in JSONdeals) {
    if (JSONdeals[shop].hasOwnProperty("oranges")) {
      orangeSellers.push({
        'shop': shop,
        'price': JSONdeals[shop].oranges
      });
    }
  }
  var oranges = [];
  for (x = 0; x < orangeSellers.length; x++) {
    oranges.push(orangeSellers[x].price);
  }
  var min = Math.min.apply(Math, oranges);
  for (y = 0; y < orangeSellers.length; y++) {
    if (oranges[y] == min) {
      return orangeSellers[y].shop;
    }
  }
};

exports.AscApples = function(JSONdeals){
  var appleSellers = [];
  for(var shop in JSONdeals){
    if(JSONdeals[shop].hasOwnProperty("apples")){
      appleSellers.push({
        'shop': shop,
        'price': JSONdeals[shop].apples
      });
    }
  }
  // console.log(appleSellers);
  var asc = appleSellers.sort(function(a, b){
     return a.price - b.price;
   });
   return asc;
};
exports.DscApples = function(JSONdeals){
  var appleSellers = [];
  for(var shop in JSONdeals){
    if(JSONdeals[shop].hasOwnProperty("apples")){
      appleSellers.push({
        'shop': shop,
        'price': JSONdeals[shop].apples
      });
    }
  }
  // console.log(appleSellers);
  var dsc = appleSellers.sort(function(a, b){
     return b.price - a.price;
   });
   return asc;
};
exports.cheapestFruit = function(){

};
