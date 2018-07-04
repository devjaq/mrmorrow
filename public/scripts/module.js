"use strict";

angular
  .module("App", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/home", {
        template: `<home></home>`
      })
      .when("/us-hist", {
        template: `<us-hist></us-hist>`
      })
      .otherwise({
        redirectTo: "/home"
      })
  })