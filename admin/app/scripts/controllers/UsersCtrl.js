(function () {
  'use strict';


   angular
    .module('admin.controllers')
    .controller('DirMinCtrl', DirMinCtrl);


   function DirMinCtrl($scope) {

   
    $scope.template = {'dm': 'templates/abm-direcciones.tpl.html'};
    $scope.texto = 'Si conectoa';
}

})();
 