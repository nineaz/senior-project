appProjectSenior.factory("retraiteFactory", ["$http",
    function($http){
     var factory = {
      users : function(){
       var request = $http.get("users.json").success(function(result, status){
          return result;
       }).error(function(result, status){
           alert("error");
       });
       return request;
      }
     }
     return factory;
    }
   ]);
