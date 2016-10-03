(function () {
  'use strict';

  // /* @ngInject */
  angular
    .module('ppe', ['ngRoute','ppe.controllers','ppe.directives','ppe.templates','ppe.services', 'ui.bootstrap','ngAnimate','ngTouch'])
    .config(config);


 
  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'templates/login.tpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
    .when('/admin', {
        templateUrl: 'templates/admin/home.tpl.html',
        controller: 'AdminCtrl',
        activeMenu: 'admin'

      })

     .when('/admin/planificacion', {
        templateUrl: 'templates/admin/planificacion.tpl.html',
        controller: 'ProyectosCtrl',
        activeMenu: 'planificacion'
      })
    .when('/admin/seguimiento', {
        templateUrl: 'templates/admin/seguimiento.tpl.html',
        controller: 'ProyectosCtrl',
        activeMenu: 'seguimiento' 
      })

      .when('/admin/instituciones', {
        templateUrl: 'templates/admin/instituciones.tpl.html',
        controller: 'DirMinCtrl',
        activeMenu: 'instituciones'
      })
       .when('/admin/estadisticas', {
        templateUrl: 'templates/admin/estadisticas.tpl.html',
        activeMenu: 'estadisticas'
      })
       .when('/admin/area-de-carga', {
        templateUrl: 'templates/admin/admin.tpl.html',
        activeMenu: 'carga'
      })
// direcciones
       .when('/direccion', {
        templateUrl: 'templates/direcciones/home.tpl.html',
        controller: 'DireccionCtrl',
        activeMenu: 'direccion'

      })
       .when('/direccion/admin', {
        templateUrl: 'templates/direcciones/admin.tpl.html',
        // controller: 'DireccionCtrl',
        activeMenu: 'carga'

      })
      .otherwise({ reditrectTo : "/" });
  }

   

})();

