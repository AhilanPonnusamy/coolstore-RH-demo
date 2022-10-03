//Dummy code just to prove we can do a unit test - this code doesn nothing for the front end web-ui microservice.

require('angular/angular.min.js');
require('angular-mocks');
require('./summary.js');

describe('Test summary catalog function', function(){

  beforeEach(
    angular.mock.module('summarymodule')
  );

  var _summaryservice;

  beforeEach(inject((summaryservice) => {
    _summaryservice = summaryservice;
  }));

  it('inventory items should equal 2', function(){
    var actual = _summaryservice.addTwoNumbers(1,1);
    expect(actual).toEqual(2);
  });

  it('inventory items should equal 15', function(){
    var actual = _summaryservice.addTwoNumbers(10,5);
    expect(actual).toEqual(15);
  });

  it('inventory items should equal 130', function(){
    var actual = _summaryservice.addTwoNumbers(50,80);
    expect(actual).toEqual(130);
  });
/*
  it('Shipping label should be displayed in Shopping Summary:', function(){
    var strActual = _summaryservice.checkShippingLabelMatch();
    expect(strActual).toEqual("Shipping");
  });

  it('Cart Total label should be displayed in Shopping Summary:', function(){
    var strActual = _summaryservice.checkCartTotalLabelMatch();
    expect(strActual).toEqual("Cart Total");
  });
  
  it('Total Order Amount label should be displayed in Shopping Summary:', function(){
    var strActual = _summaryservice.checkTotalOrderLabelMatch();
    expect(strActual).toEqual("Total Order Amount");
  });
*/
});
