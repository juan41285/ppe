(function () {
  'use strict';


   angular
    .module('admin.controllers')
    .controller('PlanesCtrl', PlanesCtrl);


   function PlanesCtrl($scope,$http) {

   
    $scope.template = {'planes': 'templates/abm-planes.tpl.html'};

}

})();
 