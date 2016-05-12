appProjectSenior.controller("societesCtrl", ["$scope", "societesFactory","$rootScope",
    function($scope, societesFactory, $rootScope){
     $rootScope.showAnnonceRetraite = true;
     societesFactory.societes().then(function(result){
      $scope.societes = result.data;
     }, function(msg){
       alert(msg);
       return msg;
     });
    }
 ]);
