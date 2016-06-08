'use strict';

angular.
  module('typper.application').
  config(['$locationProvider' ,'$routeProvider',

    function config($locationProvider, $routeProvider) {

      $locationProvider.hashPrefix('!');

      $routeProvider

          .when( '/', {

            template: '<posts-component></posts-component>'
          } )
          .when( '/posts', {

            template: '<posts-component></posts-component>'
          } )
          .when( '/posts/:id', {

            template: '<single-post-component></single-post-component>'
          } )
          .otherwise( '/error' );
    }
  ]);
