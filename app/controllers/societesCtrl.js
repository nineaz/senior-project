appProjectSenior.controller("societesCtrl", ["$scope", "societesFactory","$rootScope",
    function($scope, societesFactory, $rootScope){
     $rootScope.canScroll = false;
     $rootScope.showAnnonceRetraite = false;
     societesFactory.societes().then(function(result){
      $scope.societes = result.data;
     }, function(msg){
       alert(msg);
       return msg;
     });
    }
 ]);
