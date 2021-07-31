(function(){
  'use strict';
  angular.module('myFirstApp',[])
  // .controller('MyFirstcontroller',function ($scope) {
  //   // $scope.name = "Rahul Kumar";
  //   // $scope.sayHello=function(){
  //   //   return "Hello Coursera!";
  //   // };
  // });
  .controller('NameCalculatorcontroller',function ($scope) {
$scope.Name="";
$scope.totalvalue=0;
$scope.displayNumeric=function () {
  var totalnamevalue=calculateNumericforstring($scope.Name);
  $scope.totalvalue=totalnamevalue;

};
function calculateNumericforstring(string) {
  var totalstringvalue=0;
  for(var i=0;i<string.length;i++)
  {
    totalstringvalue +=string.charCodeAt(i);
  }
  return totalstringvalue;
};
  });
})();
