appProjectSenior.controller("retraiteCtrl", ["$scope", "$rootScope", "retraiteFactory",
    function($scope,$rootScope, retraiteFactory){
     $rootScope.canScroll = false;
     retraiteFactory.users().then(function(result){
      $scope.users = result.data;
     }, function(msg){
       alert(msg);
       return msg;
     });
    }
 ]);
