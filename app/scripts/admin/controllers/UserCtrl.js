(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('UserCtrl', UserCtrl);


   function UserCtrl($scope,$http,Direccion,getDm) {

   
    $scope.template = {'users': 'templates/admin/abm-usuarios.tpl.html'};
    $scope.direcciones = getDm.get();
     
}

})();
 