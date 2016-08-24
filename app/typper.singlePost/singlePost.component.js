'use strict';

// Register `typper.singlePost` component, along with its associated controller and template
angular

    .module( 'typper.singlePost' )

    .component( 'singlePostComponent', {

        templateUrl: 'app/typper.singlePost/templates/singlePost.template.html',
        controller: [ '$scope', '$routeParams', '$http', '$window', 'GoldenratioMath', 'SINGLE_POST_CONSTANTS',

            function singlePostCtrl( $scope, $routeParams, $http, $window, GoldenratioMath, SINGLE_POST_CONSTANTS ){

                this.id = $routeParams.id;
                $scope.singlePostConstants = SINGLE_POST_CONSTANTS;
                var self = this;

                $scope.viewportHeight = $window.innerHeight -

                    angular.element( document.querySelectorAll( '.app-toolbar' ) )[ 0 ].clientHeight;

                $scope.viewportWidth = angular.element( document.querySelectorAll( '.view-content' ) )[ 0 ].clientWidth;

                var destroy = angular.element( window ).bind( 'resize', function( ){

                    $scope.$apply( function( ){

                        $scope.viewportHeight = $window.innerHeight -

                            angular.element( document.querySelectorAll( '.app-toolbar' ) )[ 0 ].clientHeight;

                        $scope.viewportWidth = angular.element( document.querySelectorAll( '.view-content' ) )[ 0 ].clientWidth;
                        $scope.postsRowWidth = GoldenratioMath.getGoldenSize(

                            self.calculateViewportSize( ).width, self.calculateViewportSize( ).height ).width;
                    } );
                });

                this.calculateViewportSize = function( ){

                    return GoldenratioMath.getGoldenSize( $scope.viewportWidth, $scope.viewportHeight );
                };
                $scope.postsRowWidth = GoldenratioMath.getGoldenSize(

                    this.calculateViewportSize( ).width, this.calculateViewportSize( ).height ).width;

                $http
                    .get( 'app/typper.singlePosts/resources/data/postdata' + this.id + '.json' )
                    .then( function( response ){

                        $scope.post = [ ];

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

                $scope.$on( '$destroy', function( ){

                    destroy( );
                } );
            }
        ]
    });