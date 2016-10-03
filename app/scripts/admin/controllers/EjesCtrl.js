(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('EjesCtrl', EjesCtrl);


   function EjesCtrl($scope,$http,Ejes) {

   
    $scope.template = {'ejes': 'templates/admin/abm-ejes.tpl.html'};
     $scope.ejes = Ejes.get();
     
}

})();
 