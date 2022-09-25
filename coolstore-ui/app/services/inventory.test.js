//Dummy code just to prove we can do a unit test - this code doesn nothing for the front end web-ui microservice.

require('angular/angular.min.js');
require('angular-mocks');
require('./inventory.js');

describe('Test inventory catalog function', function(){

  beforeEach(
    angular.mock.module('mathmodule')
  );

  var _mathservice;

  beforeEach(inject((mathservice) => {
    _mathservice = mathservice;
  }));

  it('inventory items should equal 2', function(){
    var actual = _mathservice.addTwoNumbers(1,1);
    expect(actual).toEqual(2);
  });

  it('inventory items should equal 15', function(){
    var actual = _mathservice.addTwoNumbers(10,5);
    expect(actual).toEqual(15);
  });

  it('inventory items should equal 130', function(){
    var actual = _mathservice.addTwoNumbers(50,80);
    expect(actual).toEqual(130);
  });

});