appProjectSenior.controller("retraiteCtrl", ["$scope", "retraiteFactory",
    function($scope, retraiteFactory){
     retraiteFactory.users().then(function(result){
      $scope.users = result.data;
     }, function(msg){
       alert(msg);
       return msg;
     });
    }
 ]);
