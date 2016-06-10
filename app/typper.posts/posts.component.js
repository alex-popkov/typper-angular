'use strict';

// Register `typper.posts` component, along with its associated controller and template
angular

    .module('typper.posts')

    .component( 'postsComponent', {

        templateUrl: 'app/typper.posts/templates/posts.template.html',
        controller: [ '$scope', '$http', 'POSTS_CONSTANTS', 'GetViewportSize',

            function postsCtrl( $scope, $http, POSTS_CONSTANTS, GetViewportSize ){

                $scope.postsConstants = POSTS_CONSTANTS;
                $scope.viewportSize = GetViewportSize;

                $http
                    .get( 'app/typper.posts/resources/data/postsdata0.json' )
                    .then( function( response ){

                        $scope.posts = [ ];

                        angular.forEach( response.data, function( postData ){

                            if(  postData[ 6 ] ){

                                var images = [];
                                angular.forEach( postData[ 6 ], function( image ){

                                    images.push(

                                        {
                                            id: image[ 0 ],
                                            contentType: image[ 1 ],
                                            sizeType: image[ 2 ],
                                            height: image[ 3 ] ? image[ 3 ]: '',
                                            width: image[ 4 ] ?image[ 4 ]: '',
                                            data: image[ 5 ] ? image[ 5 ]: '',
                                            sourceLink: image[ 6 ]
                                        }
                                    );
                                } );
                            }
                            if(  postData[ 7 ] ){

                                var videos = [];
                                angular.forEach( postData[ 7 ], function( video ){

                                    videos.push(

                                        {
                                            id: video[ 0 ],
                                            contentType: video[ 1 ],
                                            sizeType: video[ 2 ],
                                            height: video[ 3 ] ? video[ 3 ] : '',
                                            width: video[ 4 ] ? video[ 4 ] : '',
                                            data: video[ 5 ] ? video[ 5 ] : '',
                                            sourceLink: video[ 6 ],
                                            image: video[ 7 ] ? {

                                                id: video[ 7 ][ 0 ][ 0 ],
                                                contentType: video[ 7 ][ 0 ][ 1 ],
                                                sizeType: video[ 7 ][ 0 ][ 2 ],
                                                height: video[ 7 ][ 0 ][ 3] ? video[ 7 ][ 0 ][ 3 ]: '',
                                                width: video[ 7 ][ 0 ][ 4 ] ? video[ 7 ][ 0 ][ 4 ]: '',
                                                data: video[ 7 ][ 0 ][ 5 ] ? video[ 7 ][ 0 ][ 5 ]: '',
                                                sourceLink: video[ 7 ][ 0 ][ 6 ]
                                            } : ''
                                        }
                                    );
                                } );
                            }
                            $scope.posts.push(

                                {
                                    id: postData[ 0 ],
                                    outerId: postData[ 1 ],
                                    createdTime: postData[ 2 ],
                                    updatedTime: postData[ 3 ] ? postData[ 3 ] : '',
                                    text: postData[ 4 ] ? postData[ 4 ] : '',
                                    sourceLink: postData[ 5 ],
                                    image: images ? images : '',
                                    video: videos ? videos : '',
                                    location: postData[ 8 ] ? {

                                        place: postData[ 8 ][ 0 ][ 0 ] ? postData[ 8 ][ 0 ][ 0 ] : '',
                                        latitude:postData[ 8 ][ 0 ][ 1 ] ? postData[ 8 ][ 0 ][ 1 ] : '' ,
                                        longitude: postData[ 8 ][ 0 ][ 2 ] ? postData[ 8 ][ 0 ][ 2 ] : ''
                                    } : '',
                                    tags:

                                        postData[ 9 ] ? {

                                            id: postData[ 9 ][ 0 ][ 0 ],
                                            name: postData[ 9 ][ 0 ][ 1 ]
                                        } : '',
                                    source: postData[ 10 ],
                                    selected: postData[ 11 ] ? postData[ 11 ] : ''
                                }
                            );
                        });
                    });
            }
        ]
    });