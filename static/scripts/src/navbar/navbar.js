var angular = require('angular');
//import angular from 'angular';

function navBarController($scope) {
    $scope.headerList = [
        {
            text: "Home",
            url: "#!/",
            iClass: "home"
        },
        {
            text: "Configs",
            url: "#!/config",
            iClass: "inbox"
        },
        {
            text: "Forums",
            url: "#!/",
            iClass: "forum"
        },
        {
            text: "Purchases",
            url: "#!/",
            iClass: "shopping_cart"
        },
        {
            text: "Social",
            url: "#!/",
            iClass: "people"
        },
    ];
}

angular.module('app.navbar', [])

.component('navbar', {
templateUrl: 'static/scripts/src/navbar/navbar.html',
controller: navBarController
});