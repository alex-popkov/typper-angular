'use strict';

// Register `typper.singlePost` component, along with its associated controller and template
angular

    .module('typper.singlePost')

    .constant( 'SINGLE_POST_CONSTANTS', {

        'FACEBOOK': 0,
        'TWITTER': 1,
        'GOOGLE_PLUS': 2,
        'INSTAGRAM': 3
    });