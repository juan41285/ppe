(function () {
  'use strict';


   angular
    .module('dm.controllers')
    .controller('ProyectosCtrl', ProyectosCtrl);


   function ProyectosCtrl($scope) {

   
    $scope.template = {'proyectos': 'templates/proyectos.tpl.html'};
}

})();
 