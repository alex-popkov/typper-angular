'use strict';

// Define the `typper.services` module
angular

    .module( 'typper.services' )
    .service( 'GoldenratioTemplate',

        function( ){

            var templates = [

                {
                    id: 0,
                    template: '1.0',
                    postsNumber: 1
                },{
                    id: 1,
                    template: '2.0',
                    postsNumber: 2
                },{
                    id: 2,
                    template: '2.1',
                    postsNumber: 2
                },
                {
                    id: 3,
                    template: '3.0',
                    postsNumber: 3
                }
                ,{   id: 4,
                    template: '3.1',
                    postsNumber: 3
                },
                {
                    id: 5,
                    template: '3.2',
                    postsNumber: 3
                }
            ];

            this.getResult = function( length ){

                var result = [ templates[ 0 ] ];
                length--;

                while( length > 0 ){

                    var tmp = [ ];
                    angular.forEach( templates, function( tpl, idx ){

                        if( tpl.postsNumber <= length ){

                            tmp.push( idx );
                        }
                    } );
                    var resultIdx = Math.floor( ( Math.random( ) * tmp.length ) );
                    result.push( templates[ resultIdx ] );
                    length = length - templates[ resultIdx ].postsNumber;
                }
                return result;
            };
        }
    );