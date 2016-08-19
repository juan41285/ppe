(function () {
  'use strict';

  // /* @ngInject */
  angular
    .module('admin', ['ngRoute','admin.controllers','admin.directives','admin.templates','ui.bootstrap','ngAnimate','ngTouch'])
    .config(config);


 
  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
     $.material.init();


    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin',
        activeMenu: '/'

      })
      .when('/planificacion', {
        templateUrl: 'templates/planificacion.tpl.html',
        controller: 'PlanificacionCtrl',
        controllerAs: 'plan',
        activeMenu: 'planificacion'
      })
    .when('/seguimiento', {
        templateUrl: 'templates/seguimiento.tpl.html',
        controller: 'SeguimientoCtrl',
        controllerAs: 'seg',
        activeMenu: 'seguimiento'
      })

      .when('/instituciones', {
        templateUrl: 'templates/instituciones.tpl.html',
        controller: 'InstitucionesCtrl',
        controllerAs: 'ins',
        activeMenu: 'instituciones'
      })
       .when('/estadisticas', {
        templateUrl: 'templates/estadisticas.tpl.html',
        activeMenu: 'estadisticas'
      })
       .when('/admin', {
        templateUrl: 'templates/admin.tpl.html',
        activeMenu: 'admin'
      })

      .when('/auxiliar', {
        templateUrl: 'templates/check.tpl.html'
      })

      .otherwise({ reditrectTo : "/" });
  }

   

})();

