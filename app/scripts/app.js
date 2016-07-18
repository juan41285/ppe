(function () {
  'use strict';

  // /* @ngInject */
  angular
    .module('ppe', ['ngRoute','ppe.controllers'])
    .config(config);


 
  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    // $.material.init();
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
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

      .when('/auxiliar', {
        templateUrl: 'templates/check.tpl.html'
      })

      .otherwise({ reditrectTo : "/" });
  }




   

})();

