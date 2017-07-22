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
            text: "Inbox",
            url: "#!/",
            iClass: "inbox"
        },
        {
            text: "Trash",
            url: "#!/",
            iClass: "delete"
        },
        {
            text: "Spam",
            url: "#!/",
            iClass: "report"
        },
        {
            text: "Forums",
            url: "#!/",
            iClass: "forum"
        },
        {
            text: "Updates",
            url: "#!/",
            iClass: "flag"
        },
        {
            text: "Promos",
            url: "#!/",
            iClass: "local_offer"
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