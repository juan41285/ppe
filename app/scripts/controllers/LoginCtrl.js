(function () {
  'use strict';


   angular
    .module('ppe.controllers')
    .controller('LoginCtrl', LoginCtrl);


   function LoginCtrl($scope, $route, $location, $window) {

   $scope.user = {};
   $scope.ingresar = function(user){
   	console.log(user);
   	if(user === '12345678'){
   		$window.location.href = 'http://localhost:8081';
   	}
   	if(user === '87654321'){
   		$window.location.href = 'http://localhost:8082';
   	}
   }
    
}

})();
 