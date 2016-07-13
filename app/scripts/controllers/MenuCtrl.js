(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('MenuCtrl', MenuCtrl);


   function MenuCtrl ($scope) {

   
    $scope.template = {'menu': 'templates/menu.tpl.html'};
}

})();
 