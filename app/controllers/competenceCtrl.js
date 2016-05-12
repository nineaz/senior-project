appProjectSenior.controller("competenceCtrl", ["$scope", "$rootScope",
   function($scope, $rootScope){
    $scope.showCompetence = false;
    $rootScope.toggleCompetence = function(){
     if ($scope.showCompetence == false) {
      $scope.showCompetence = true;
     }else{
      $scope.showCompetence = false;
     }
    }
   }
  ]);
