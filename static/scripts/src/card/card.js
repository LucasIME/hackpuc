var angular = require('angular');
//import angular from 'angular';

function cardController($scope) {
}

angular.module('app.card', [])

.component('card', {
templateUrl: 'static/scripts/src/card/card.html',
controller: cardController
});