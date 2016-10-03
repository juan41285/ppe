(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('DireccionCtrl', DireccionCtrl);


   function DireccionCtrl($scope,Estrategicos,Proyectos) {

    $scope.objetivos =Estrategicos.get();
    $scope.proyectos = Proyectos.get();

}


})();
 