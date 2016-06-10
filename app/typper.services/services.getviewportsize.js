'use strict';

// Define the `GetViewportSize` factory
angular

    .module( 'typper.services' )
    .factory( 'GetViewportSize', [ '$window',

        function( $window ){

            var headerHeight = angular.element( document.querySelectorAll( '.app-toolbar' ) )[ 0 ].clientHeight;
            var element = angular.element( document.querySelectorAll( '.view-wrapper' ) )[ 0 ];

            return {

                width: $window.innerWidth,
                height: $window.innerHeight - headerHeight
            };
        }
    ]);

