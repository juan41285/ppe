(function () {
  'use strict';
/****************/

function focus ($timeout) {
     return {
     scope : {
       trigger : '@focus'
     },
     link : function(scope, element) {
      scope.$watch('trigger', function(value) {
        if (value === "true") {
          $timeout(function() {
           element[0].focus();
          });
       }
     });
     }
    };
}; 
/***********/

function tooltip(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
};
/****************/
  angular
    .module('ppe.directives',['ngLocale'])
    .directive('focus',focus)
    .directive('tooltip',tooltip);

   
})();
