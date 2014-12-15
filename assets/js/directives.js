(function(){
  /**
   * directives
   * @description Custom element attributes
   */

  angular.module('myApp')
  .directive('navClass', ['$location', function($location) {
    return {
      link:function(scope,element,attrs){
        var path = attrs.navClass;
        scope.$on('$routeChangeSuccess',function(event,current,previous){
          element[path === $location.path() ? 'addClass' : 'removeClass']('active');
        });
      }
    };
  }]);
})();
