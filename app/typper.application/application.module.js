'use strict';

// Define the `typper.application` module
angular.

    module('typper.application', [

        'ngAnimate',
        'ngRoute',
        'typper.posts',
        'ngMaterial'
    ]).
    controller( 'ApplicationCtrl', function( $scope, $mdSidenav ) {

        $scope.toggleRight = function( ){

            $mdSidenav( 'left' ).toggle();
        };
        $scope.close = function( ){

            $mdSidenav( 'left' ).close( );
        };
    });

