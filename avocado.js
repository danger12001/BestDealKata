exports.mapping = function(str) {

  var dealList = [];
  var deals = str.split(", ");

  for (x = 0; x < deals.length; x++) {
    var dealDetails = deals[x].split(" for R");
    dealList.push({
      quantity: parseFloat(dealDetails[0]),
      price: parseFloat(dealDetails[1]),
      deal: deals[x]
    });
  }
  return dealList;
};

exports.pricePerAvo = function(dealList) {
  var singlePrices = [];
  var quantity = [];
  var price = [];
  for (x = 0; x < dealList.length; x++) {
    quantity.push(dealList[x].quantity);
    price.push(dealList[x].price);
  }
  for (z = 0; z < dealList.length; z++) {
    var calc = price[z] / quantity[z];
    var decimals = calc.toFixed(2);
    var toNumber = Number(decimals);
    singlePrices.push(toNumber);
  }
  singlePrices.join(",").split(",");
  var sp = singlePrices;
  return sp;
};

exports.cheapest = function(dealList, sp) {
  var quantity = [];
  var price = [];
  var deal = [];
  for (x = 0; x < dealList.length; x++) {
    deal.push(dealList[x].deal);
    quantity.push(dealList[x].quantity);
    price.push(dealList[x].price);
  }
  var min = Math.min.apply(Math, sp).toFixed(2);
  for (y = 0; y < sp.length; y++) {
    if (sp[y] == min) {
      return quantity[y] + " for R" + price[y];
    }
  }
};
exports.expensive = function(dealList, sp) {
  var quantity = [];
  var price = [];
  var deal = [];
  for (x = 0; x < dealList.length; x++) {
    deal.push(dealList[x].deal);
    quantity.push(dealList[x].quantity);
    price.push(dealList[x].price);
  }
  var max = Math.max.apply(Math, sp).toFixed(2);
  for (y = 0; y < quantity.length; y++) {
    if (sp[y] == max) {
      return quantity[y] + " for " + "R" + price[y];
    }
  }
};
exports.average = function(dealList, sp) {
  var quantity = [];
  var price = [];
  var deal = [];
  for (x = 0; x < dealList.length; x++) {
    deal.push(dealList[x].deal);
    quantity.push(dealList[x].quantity);
    price.push(dealList[x].price);
  }
  for (y = 0; y < sp.length; y++) {
    var sum = sp.reduce(function(a, b) {
      return a + b;
    });
    var ave = sum / sp.length;
    return "The average price is: " + ave.toFixed(2);
  }
};
