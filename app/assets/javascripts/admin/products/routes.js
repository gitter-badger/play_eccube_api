define(['angular', './controllers', 'common/main', 'admin/directives/main'], function (angular, controllers) {
    'use strict';

    return angular.module('admin.products.routes', ['ec3.common', 'ec3.admin'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/admin/products', {
                    templateUrl: '/admin/pages/products/index.html',
                    controller: controllers.ProductsCtrl
                }).when('/admin/products/product', {
                    templateUrl: '/admin/pages/products/product.html',
                    controller: controllers.ProductCtrl
                }).when('/admin/products/category', {
                    templateUrl: '/admin/pages/products/category.html',
                    controller: controllers.CategoryCtrl
                });
        }]);
});