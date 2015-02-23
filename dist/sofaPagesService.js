/**
 * sofa-pages-service - v0.4.0 - Mon Feb 23 2015 14:30:38 GMT+0100 (CET)
 * 
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (sofa, document, undefined) {
'use strict';
/* global sofa */
/**
 * @sofadoc class
 * @name sofa.PagesService
 *
 * @package sofa-pages-service
 * @requiresPackage sofa-core
 * @requiresPackage sofa-http-service
 * @requiresPackage sofa-q-service
 *
 * @requires sofa.HttpService
 * @requires sofa.QService
 * @requires sofa.ConfigService
 *
 * @distFile dist/sofa.pagesService.js
 *
 * @description
 * This service takes care of accessing static page data.
 */
sofa.define('sofa.PagesService', function ($http, $q, configService) {

    var self = {};

    var RESOURCE_URL = configService.get('resourceUrl') + 'html/',
        ABOUT_PAGES  = configService.get('aboutPages');

    /**
     * @sofadoc method
     * @name sofa.PagesService#getPage
     * @memberof sofa.PagesService
     *
     * @description
     * Returns a page object by a given id.
     *
     * @param {int} id Page id.
     * @return {object} Page object.
     */
    self.getPage = function (id) {
        return $http({
            method: 'get',
            url: RESOURCE_URL + id + '.html'
        }).then(function (result) {
            if (result.data) {

                //we don't want to directly alter the page config, so we create a copy
                var pageConfig = sofa.Util.clone(self.getPageConfig(id));

                pageConfig.content = result.data;

                return pageConfig;
            }
        });
    };

    /**
     * @sofadoc method
     * @name sofa.PagesService#getPageConfig
     * @memberof sofa.PagesService
     *
     * @description
     * Returns a page configuration object by a given page id.
     *
     * @param {int} id Page id.
     * @return {object} Page configuration
     */
    self.getPageConfig = function (id) {
        var page = ABOUT_PAGES.filter(function (page) {
            return page.id === id;
        });

        return page.length > 0 && page[0];
    };

    return self;
});
}(sofa, document));
