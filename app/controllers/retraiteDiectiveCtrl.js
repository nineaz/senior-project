appProjectSenior.controller("retraiteDirectiveCtrl", ["$scope", "$rootScope", "retraiteFactory",
    function($scope,$rootScope, retraiteFactory){
     retraiteFactory.users().then(function(result){
      $scope.users = result.data;
     }, function(msg){
       alert(msg);
       return msg;
     });
    }
 ]);
