appProjectSenior.config(function($routeProvider){
  $routeProvider.when("/", {
   templateUrl:"home.html",
   controller: 'societesCtrl'

  })
  .when("/home", {
   templateUrl:"home.html",
   controller: 'societesCtrl'
  })
  .when("/recruteur", {
   templateUrl:"recruteur.html",
   controller: 'recruteurCtrl'
  })
  .otherwise({
   redirectTo: "/"
  });
});
