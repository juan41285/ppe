(function () {
  'use strict';


   angular
    .module('dm.controllers')
    .controller('ProyectosCtrl', ProyectosCtrl);


   function ProyectosCtrl($scope,$http) {

   
    $scope.template = {'proyectos': 'templates/proyectos.tpl.html'};

     var _selected;

  $scope.selected = undefined;
  $scope.states = ['indicador 1', 'indicador 2', 'indicador 33', 'indicador con la letra A', 'Indicador con la letra S', 'Otro nomre de indicador'];

  $scope.colaborador = undefined;
  $scope.colaboradores = ['Luis Santillan', 'Pedro Ruiz', 'Maria Lopez', 'Carlos Paz', 'Laura Monteros', 'Andres Chavez'];
  $scope.integrantes = [];
  $scope.AddIntegrante = function(col){
  	console.log(col);
  	$scope.integrantes.push(col);
  	console.log($scope.colaborador);
  	$scope.colaborador = undefined;
  }
  $scope.indicadores = [];

   $scope.AddIndicador = function(col){
  	console.log(col);
  	$scope.indicadores.push(col);
 
  }
}

})();
 