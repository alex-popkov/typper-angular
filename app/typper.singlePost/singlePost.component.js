'use strict';

// Register `typper.singlePost` component, along with its associated controller and template
angular

    .module('typper.singlePost')

    .component( 'singlePostComponent', {

        templateUrl: 'app/typper.singlePost/templates/singlePost.template.html',
        controller: [ '$scope', '$http', '$window',

            function postsCtrl( $scope ) {

            }
        ]
    });