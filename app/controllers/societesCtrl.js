appProjectSenior.controller("societesCtrl", ["$scope", "societesFactory",
    function($scope, societesFactory){
     societesFactory.societes().then(function(result){
      $scope.societes = result.data;
     }, function(msg){
       alert(msg);
       return msg;
     });
    }
 ]);
