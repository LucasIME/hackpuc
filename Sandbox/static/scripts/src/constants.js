'use strict'

var angular = require('angular');
//import angular from 'angular';

angular
    .module('app')
    .constant('constants', {
        routes: {
            home: {
                view: 'static/scripts/src/home/home.html'
            },
            dashboard: {
                view: 'static/scripts/src/dashboard/dashboard.html'
            },
        }
    });
