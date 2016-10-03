(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('AdminCtrl', AdminCtrl);


   function AdminCtrl($scope,Estrategicos,Proyectos) {

    $scope.objetivos = Estrategicos.get();
    $scope.proyectos = Proyectos.get();   

           
}

})();
 