(function () {
  'use strict';


   angular
    .module('admin.controllers')
    .controller('EstrategicosCtrl', EstrategicosCtrl);


   function EstrategicosCtrl($scope,$http) {

   
    $scope.template = {'estrategicos': 'templates/abm-estrategicos.tpl.html'};
    $scope.texto = 'Si conectoa';
    $scope.direccion = {};
    $scope.guardarDireccion = function(){
    	 $http({

                    url: "http://rest.innovacioneducativa.gob.ar/ppe/fase0/direccion",
                    data: $scope.direccion,
                    method: 'POST',
                    headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}

                }).success(function(data){

                    console.log("OK", data)

                }).error(function(err){"ERR", console.log(err)})
    }
}

})();
 