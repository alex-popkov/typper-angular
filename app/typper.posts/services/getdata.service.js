'use strict';

angular.
    module( 'typper.posts.services.GetData' ).
    factory( 'GetData', [ '$resource',

        function( $resource ){

            return $resource( 'app/typper.posts/resources/data/postsdata:offset.json', {}, {

                query: {

                    method: 'GET',
                    params: { offset: '0' },
                    isArray: true
                }
            });
        }
    ]);