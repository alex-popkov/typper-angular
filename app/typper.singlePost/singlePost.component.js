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
            }
        ]
    });