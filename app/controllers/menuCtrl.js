appProjectSenior.controller("menuCtrl", ["$scope", "$rootScope",
   function($scope, $rootScope){
    $scope.showMenuConnexion = false;
    $scope.showMenuProfils = false;
    $rootScope.toggleMenuConnexion = function(){
     if ($scope.showMenuConnexion == false) {
      $scope.showMenuConnexion = true;
     }else{
      $scope.showMenuConnexion = false;
     }
    }
    $rootScope.toggleMenuProfils = function(){
     if ($scope.showMenuProfils == false) {
      $scope.showMenuProfils = true;
     }else{
      $scope.showMenuProfils = false;
     }
    }
   }
  ]);
