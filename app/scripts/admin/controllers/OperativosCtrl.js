(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('OperativosCtrl', OperativosCtrl);


   function OperativosCtrl($scope,$http,Operativos) {

   
    $scope.template = {'operativos': 'templates/admin/abm-operativos.tpl.html'};
    $scope.operativos = Operativos.get();
      
}

})();
 