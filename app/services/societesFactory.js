appProjectSenior.factory("societesFactory", ["$http",
    function($http){
     var factory = {
      societes: function(){
       var request = $http.get("societes.json").success(function(result, status){
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
