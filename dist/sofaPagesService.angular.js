/**
 * sofa-pages-service - v0.4.0 - Mon Feb 23 2015 14:30:38 GMT+0100 (CET)
 * 
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
angular.module('sofa.pagesService', ['sofa.core'])

.factory('pagesService', ["$http", "$q", "configService", function ($http, $q, configService) {
    'use strict';
    return new sofa.PagesService($http, $q, configService);
}]);
}(angular));
