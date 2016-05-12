appProjectSenior.controller("menuCtrl", ["$scope", "$rootScope",
   function($scope, $rootScope){
    $scope.showMenu = false;
    $rootScope.toggleMenu = function(){
     if ($scope.showMenu == false) {
      $scope.showMenu = true;
     }else{
      $scope.showMenu = false;
     }
    }
   }
  ]);
