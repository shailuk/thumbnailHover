var app = angular.module("myApp", []);

app.directive("thumbnailZoom", function () {

    return {
         scope:{ data : '=' },
         controller:'myContrl',
         templateUrl: 'templates/thumbnailZoom.template.html',
           }
}

);
