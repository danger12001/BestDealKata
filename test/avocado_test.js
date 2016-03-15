var assert = require('assert');
var functions = require('../avocado');

// describe("convert", function() {
//   it("should convert the string into an array and remove unneeded characters", function() {
//     var result = functions.convert("1 for R3, 2 for R7, 3 for R10, 5 for R14.50");
//     assert.deepEqual(result, ["1", "3", "2", "7", "3", "10", "5", "14.50"]);
//   });
// });
describe("mapping",function(){
  it("should take the string and map the data", function(){
    var result = functions.mapping("1 for R3, 2 for R7, 3 for R10, 5 for R14.50");
    assert.deepEqual(result, [ { deal: "1 for R3", quantity: '1', price: '3' },
  { deal: "2 for R7", quantity: '2', price: '7' },
  { deal: "3 for R10", quantity: '3', price: '10' },
  { deal: "5 for R14.50", quantity: '5', price: '14.50' } ]);
});
});
// describe("mapData", function() {
//   it("should return an array with all the data", function() {
//     var result = functions.mapData(["1", "3", "2", "7", "3", "10", "5", "14.50"]);
//     assert.deepEqual(result, [{
//       "quantity": 1,
//       "price": 3
//     }, {
//       "quantity": 2,
//       "price": 7
//   }, {
//       "quantity": 3,
//       "price": 10
//     }, {
//       "quantity": 5,
//       "price": 14.5
//     }]);
//   });
// });

describe("pricePerAvo", function() {
  it("should return the price of one avo in each deal", function() {
    var result = functions.pricePerAvo([{
      "quantity": 1,
      "price": 3,
      deal : ""
    }, {
      "quantity": 2,
      "price": 7
    }, {
      "quantity": 3,
      "price": 10
    }, {
      "quantity": 5,
      "price": 14.5
    }]);
    assert.deepEqual(result, [3, 3.50, 3.33, 2.9]);
  });
});
describe("cheapest", function() {
  it("should return the cheapest deal", function() {

    var data = [{
      "quantity": 1,
      "price": 3
    }, {
      "quantity": 2,
      "price": 7
    }, {
      "quantity": 3,
      "price": 10
    }, {
      "quantity": 5,
      "price": 14.5
    }];
    var sp = [3, 3.50, 3.33, 2.9];
    var result = functions.cheapest(data, sp);
    assert.equal(result, "5 for R14.5");
  });
});
describe("expensive", function() {

  it("should return the most expensive deal", function() {
    var data = [{
      "quantity": 1,
      "price": 3
    }, {
      "quantity": 2,
      "price": 7
    }, {
      "quantity": 3,
      "price": 10
    }, {
      "quantity": 5,
      "price": 14.5
    }];
    var sp = [3, 3.50, 3.33, 2.9];
    var result = functions.expensive(data, sp);
    assert.equal(result, "2 for R7");
  });
});
describe("average", function() {
  it("should return the average of the deals", function() {
    var data = [{
      "quantity": 1,
      "price": 3
    }, {
      "quantity": 2,
      "price": 7
    }, {
      "quantity": 3,
      "price": 10
    }, {
      "quantity": 5,
      "price": 14.5
    }];
    var sp = [3, 3.50, 3.33, 2.9];
    var result = functions.average(data, sp);
    assert.equal(result, "The average price is: 3.18");
  });
});
