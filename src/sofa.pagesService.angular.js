angular.module('sofa.pagesService', ['sofa.core'])

.factory('pagesService', function ($http, $q, configService) {
    'use strict';
    return new sofa.PagesService($http, $q, configService);
});
