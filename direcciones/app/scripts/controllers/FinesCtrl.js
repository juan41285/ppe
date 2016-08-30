(function () {
  'use strict';


   angular
    .module('dm.controllers')
    .controller('FinesCtrl', FinesCtrl);


   function FinesCtrl($scope) {

   
    $scope.template = {'fines': 'templates/fines.tpl.html'};


     var _selected;

  $scope.selected = {
  	'nombre':'',
  	'des':''
  };
  $scope.des = false;
  $scope.Mdes = function(){
  	$scope.des = true;
  }
   $scope.selected.des = 'Los objetivos operativos son los puntos de referencia de los proyectos diarios, semanales o mensuales que implementan grandes objetivos estratégicos. Los objetivos operativos, también llamados objetivos tácticos, se establecen con los objetivos estratégicos en mente y proporcionan un medio para la gestión y el personal para romper un objetivo estratégico más amplio en tareas realizables. Por ejemplo, la consecución del objetivo estratégico de aumentar en un 25 por ciento en los ingresos por ventas requiere la realización de los objetivos operativos para desarrollar y ejecutar una estrategia de publicidad efectiva, junto con otros objetivos operacionales. Al igual que con los objetivos estratégicos, los objetivos operativos también deben ser medibles y específicos, aunque su enfoque es más estrecho.';
  $scope.states = ['Obejtivo operativo 1', 'Obejtivo operativo 2', 'Obejtivo operativo 33', 'Obejtivo operativo con la letra A', 'Obejtivo operativo con la letra S', 'Otro nomre de Obejtivo operativo'];

}

})();
 