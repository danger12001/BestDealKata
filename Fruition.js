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

exports.AscApples = function(JSONdeals) {
  var appleSellers = [];
  for (var shop in JSONdeals) {
    if (JSONdeals[shop].hasOwnProperty("apples")) {
      appleSellers.push({
        'shop': shop,
        'price': JSONdeals[shop].apples
      });
    }
  }
  var asc = appleSellers.sort(function(a, b) {
    return a.price - b.price;
  });
  return asc;
};
exports.DscApples = function(JSONdeals) {
  var appleSellers = [];
  for (var shop in JSONdeals) {
    if (JSONdeals[shop].hasOwnProperty("apples")) {
      appleSellers.push({
        'shop': shop,
        'price': JSONdeals[shop].apples
      });
    }
  }

  var dsc = appleSellers.sort(function(a, b) {
    return b.price - a.price;
  });
  return dsc;
};
exports.cheapestFruit = function(JSONdeals) {
  var fruits = [];
  var cheapest_price = 0;
  var cheapest = "";
  for (var shops in JSONdeals) {
    for (var fruit in JSONdeals[shops]) {
      if (fruits.indexOf(fruit) < 0) {
        fruits.push(fruit);
      }

    }
  }
  for (x = 0; x < fruits.length; x++) {
    var total = 0;
    var count = 0;
    for (var Shops in JSONdeals) {
      if (JSONdeals[Shops].hasOwnProperty(fruits[x])) {

        total += JSONdeals[Shops][fruits[x]];
        count++;
      }
    }
    var average_price = total / count;
    if ((average_price < cheapest_price) || cheapest_price === 0) {
      cheapest_price = average_price;
      cheapest = fruits[x];
    }
  }
  return cheapest;
};
