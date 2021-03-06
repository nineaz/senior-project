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
   templateUrl:"apercuProfils.html",
   controller: 'recruteurCtrl'
  })
  .when("/retraite", {
   templateUrl:"senior.html",
   controller: 'retraiteCtrl'
  })
  .when("/particulier", {
   templateUrl:"particulier.html",
   controller: 'retraiteCtrl'
  })
  .when("/login", {
   templateUrl:"login.html",
   controller: 'loginCtrl'
  })
  .when("/inscription", {
   templateUrl:"signIn.html",
   controller: 'signInCtrl'
  })
  .when("/monProfils", {
     templateUrl:"monProfils.html",
     controller: 'retraiteCtrl'
    })
 .when("/faq", {
    templateUrl:"faq.html",
    controller: 'societesCtrl'
   })
  .otherwise({
   redirectTo: "/"
  });
});
