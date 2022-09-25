//Dummy code just to prove we can do a unit test - this code doesn nothing for the front end web-ui microservice.

angular.module('mathmodule', [])
  .factory('mathservice', function(){

    var addTwoNumbers = function(x, y){
      return x + y;
    };

    var multiplyTwoNumbers = function(x, y){
      return x * y;
    };

    return {
      addTwoNumbers,
      multiplyTwoNumbers
    };
  });