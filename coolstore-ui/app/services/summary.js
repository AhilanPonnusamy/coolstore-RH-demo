//Dummy code just to prove we can do a unit test - this code doesn nothing for the front end web-ui microservice.

angular.module('summarymodule', [])
  .factory('summaryservice', function(){


    //labels for test
    var lblCartTotal = "Cart Total";
    var lblShipping ="Shipping";
    var lblTotalOrder="Total Order Amount";

    var addTwoNumbers = function(x, y){
      return x + y;
    };

    var multiplyTwoNumbers = function(x, y){
      return x * y;
    };

    var checkShippingLabelMatch = function(){
      return lblShipping;
    };

    var checkCartTotalLabelMatch = function(){
      return lblCartTotal;
    };

    var checkTotalOrderLabelMatch = function(){
      return lblTotalOrder;
    };

    return {
      addTwoNumbers,
      multiplyTwoNumbers,
      checkShippingLabelMatch,
      checkCartTotalLabelMatch,
      checkTotalOrderLabelMatch
    };
  });
