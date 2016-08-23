(function () {
  'use strict';


   angular
    .module('dm.controllers')
    .controller('LoginCtrl', LoginCtrl);


   function LoginCtrl($scope, $route, $location, $window) {

   $scope.user = {};
   $scope.ingresar = function(user){
   	console.log(user);
   	if(user === '12345678'){
   		$location.path('/admin/');
   	}
   	if(user === '87654321'){
   		$location.path('/direcciones/');
   	}
   }
    
}

})();
 