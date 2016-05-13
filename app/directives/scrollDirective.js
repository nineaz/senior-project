appProjectSenior.directive("scroll", function ($window, $rootScope) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
         if (scope.canScroll == true){
          if (this.pageYOffset >= 630) {
              $rootScope.showAnnonceRetraite = false;
              console.log('Scrolled below header.');
          } else if (this.pageYOffset < 630){
              $rootScope.showAnnonceRetraite = false;
              // console.log('Header is in view.');
          }
           $rootScope.$apply();
         }
        });
    };
});
