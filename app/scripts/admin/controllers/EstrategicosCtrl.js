(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('EstrategicosCtrl', EstrategicosCtrl);


   function EstrategicosCtrl($scope,$http,Estrategicos) {

   
    $scope.template = {'estrategicos': 'templates/admin/abm-estrategicos.tpl.html'};
    $scope.estrategicos = Estrategicos.get();
    
}

})();
 