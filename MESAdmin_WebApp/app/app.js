// 'use strict';
var app = angular.module("myApp", ['ngRoute', 'ui.grid', 'ui.grid.edit', 'ui.grid.pagination', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.grouping', 'ui.grid.pinning', 'googlechart', 'angularjs-dropdown-multiselect']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/XMLContent", {
            templateUrl: "/app/Views/Object.html"
        }).when("/", {
            templateUrl: "/app/Views/LRSWeb.html"
        }).when("/vatmakerpt", {
            templateUrl: "/app/Views/VatMakeRpt.html"
        }).when("/ChseMakSuprDopRpt", {
            templateUrl: "/app/Views/ChseMakSuprDopRpt.html"        
        });
}
);