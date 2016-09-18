(function () {
'use strict';

  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.message = "";

    $scope.check = function () {
      var dishes = $scope.dishes || '',
          dishesNumber = dishes.split(',').length;

      if(!dishes){
        $scope.message = "Please enter data first";
      }else if(dishesNumber <= 3){
        $scope.message = "Enjoy!";
      }else{
        $scope.message = "Too much!";
      }
    };
  }
})();
