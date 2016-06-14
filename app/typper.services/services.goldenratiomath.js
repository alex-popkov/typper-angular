'use strict';

// Define the `services.GoldenratioMath` service

( function( ){

    function GoldenratioMathSrv( SERVICES_CONSTANTS ){

        /**
         * @param {number} length
         * @param {boolean=} return_smaller
         * @returns {number}
         */
        GoldenratioMathSrv.prototype.getGoldenInner = function( length, return_smaller ){

            if( return_smaller )

                return parseInt( SERVICES_CONSTANTS.SMALL_PART * length );

            return parseInt( SERVICES_CONSTANTS.BIG_PART * length );
        };


        /**
         * @param {number} length
         * @param {boolean=} return_smaller
         * @returns {number}
         */
        GoldenratioMathSrv.prototype.getGoldenOuter = function( length, return_smaller ){

            if( return_smaller )

                return parseInt( SERVICES_CONSTANTS.SMALL_PART / SERVICES_CONSTANTS.BIG_PART * length );

            return parseInt( SERVICES_CONSTANTS.BIG_PART / SERVICES_CONSTANTS.SMALL_PART * length );
        };

        /**
         *
         * @param width
         * @param height
         * @returns {goog.math.Size}
         */
        GoldenratioMathSrv.prototype.getGoldenSize = function( width, height ){

            if( width / height > SERVICES_CONSTANTS.BIG_PART / SERVICES_CONSTANTS.SMALL_PART ){

                width = this.getGoldenOuter( height );
            }
            height = this.getGoldenInner( width );

            return {

                width: width,
                height: height
            }
        };
    }

    angular

        .module( 'typper.services' )
        .service( 'GoldenratioMath', [

            'SERVICES_CONSTANTS',
            GoldenratioMathSrv
        ]);
})( );