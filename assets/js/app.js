(function(){
  // Declare app level module which depends on views, and components
  angular.module('myApp', [
    'ngRoute',
  ])
  .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $routeProvider
    .when('/view1',{
      controller:'View1Controller',
      templateUrl:'partials/view1.html'
    })
    .when('/view2',{
      controller:'View2Controller',
      templateUrl:'partials/view2.html'
    })
    .when('/faq',{
      templateUrl:'partials/faq.html'
    });
    $locationProvider.html5Mode(true); // remove hashes from location URL
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
})();
