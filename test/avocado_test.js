var assert = require('assert');
var avocado = require('../avocado');

describe("pricePerAvo", function(){

  it("should return the price for a single avo rounded 2 DP for each deal", function(){
    var result = pricePerAvo();
    assert.equal(result,"A single avo for: \n Deal 1 costs: R3.00 \n Deal 2 costs: R3.50 \n Deal 3 costs: R3.33 \n Deal 4 costs: R2.90");
  });
});
describe("cheapest", function(){
  it("should return the cheapest deal", function(){
      var result = cheapest();
      assert.equal(result, "Cheapest deal: 2.90");
  });
});
describe("expensive", function(){
  it("should return the most expensive deal", function(){
      var result = expensive();
      assert.equal(result, "Most expensive deal: 3.50");
  });
});
describe("average", function(){
  it("should return the average of the deals", function(){
      var result = average();
      assert.equal(result, "The average price is: 3.18");
  });
});
