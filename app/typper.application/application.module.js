'use strict';

// Define the `typper.application` module
angular

    .module('typper.application', [

        'ngAnimate',
        'ngRoute',
        'ngMaterial',
        'typper.posts',
        'typper.services'
    ])
    .controller( 'ApplicationCtrl', function( $scope, $mdSidenav ) {

        $scope.toggleRight = function( ){

            $mdSidenav( 'left' ).toggle();
        };
        $scope.close = function( ){

            $mdSidenav( 'left' ).close( );
        };

    });

