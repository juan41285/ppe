(function () {
  'use strict';


   angular
    .module('dm.controllers')
    .controller('AccionesCtrl', AccionesCtrl);


   function AccionesCtrl($scope, $http) {

   
    $scope.template = {'acciones': 'templates/acciones.tpl.html'};

    var _selected;

  $scope.selected = undefined;
  $scope.states = ['proyecto 1', 'proyecto 2', 'proyecto 33', 'Proyecto con la letra A', 'Poryecto con la letra S', 'Otro nomre de proyecto'];

  $scope.colaborador = undefined;
  $scope.colaboradores = ['Luis Santillan', 'Pedro Ruiz', 'Maria Lopez', 'Carlos Paz', 'Laura Monteros', 'Andres Chavez'];
  $scope.integrantes = [];
  $scope.AddIntegrante = function(col){
  	console.log(col);
  	$scope.integrantes.push(col);
  	console.log($scope.colaborador);
  	$scope.colaborador = undefined;
  }
}

})();
 