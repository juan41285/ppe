(function () {
  'use strict';


   angular
    .module('dm.controllers')
    .controller('AccionesCtrl', AccionesCtrl);


   function AccionesCtrl($scope) {

   
    $scope.template = {'acciones': 'templates/acciones.tpl.html'};
}

})();
 