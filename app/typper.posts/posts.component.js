'use strict';

// Register `typper.posts` component, along with its associated controller and template
angular.

    module('typper.posts').

    component( 'postsComponent', {

        templateUrl: 'app/typper.posts/templates/posts.template.html',
        controller: [ '$scope', 'GetData',

            function PostsCtrl( $scope, GetData ){

                $scope.posts = GetData

                    .query( );

            }
        ]
    });