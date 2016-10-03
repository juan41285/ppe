(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('DirMinCtrl', DirMinCtrl);


   function DirMinCtrl($scope,Direccion,getDm) {
 
    
   $scope.direcciones = getDm.get();
    $scope.template = {'dm': 'templates/admin/abm-direcciones.tpl.html'};
    $scope.texto = 'Si conectoa';
    $scope.direccion = {};
    $scope.guardarDireccion = function(){
       $scope.direccion.responsable.tipo = 2; 
       $scope.direccion.responsable.pass = 'ppe123456'; 
       Direccion.saveUser($scope.direccion.responsable, $scope.direccion.datos);
          $scope.direcciones = getDm.get();
    }

   
}

})();
 