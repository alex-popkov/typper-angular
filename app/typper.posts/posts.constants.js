'use strict';

// Register `typper.posts` component, along with its associated controller and template
angular

    .module('typper.posts')

    .constant( 'POSTS_CONSTANTS', {

        'FACEBOOK': 0,
        'TWITTER': 1,
        'GOOGLE_PLUS': 2,
        'INSTAGRAM': 3,
        'LIST_WIDTH': 424,
        'COLUMN_WIDTH': 767
    });