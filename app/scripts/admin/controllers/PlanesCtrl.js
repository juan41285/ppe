(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('PlanesCtrl', PlanesCtrl);


   function PlanesCtrl($scope,$http,Planes) {

   
    $scope.template = {'planes': 'templates/admin/abm-planes.tpl.html'};
    $scope.planes = Planes.get();
   
}

})();
 