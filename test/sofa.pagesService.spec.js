'use strict';
/* global sofa */

describe('sofa.pagesService', function () {

    var pagesService, q, httpService, configService;
    var id = 'saturn';

    var createHttpService = function () {
        return new sofa.mocks.httpService(new sofa.QService());
    };

    beforeEach(function () {
        q = new sofa.QService();
        configService = new sofa.ConfigService();
        httpService = new sofa.HttpService(q);
        pagesService = new sofa.PagesService(httpService, q, configService);
    });

    it('should be defined', function () {
        expect(pagesService).toBeDefined();
    });

    it('should be an object', function () {
        expect(typeof pagesService).toBe('object');
    });

    it('should have a method getPage', function () {
        expect(pagesService.getPage).toBeDefined();
    });

    it('should have a method getPageConfig', function () {
        expect(pagesService.getPageConfig).toBeDefined();
    });

    describe('sofa.pagesService#getPage', function () {

        var httpService,
            pagesService;


        beforeEach(function () {
            httpService = createHttpService();
            pagesService = new sofa.PagesService(httpService, q, configService);
        });

        it('should be a function', function () {
            expect(typeof pagesService.getPage).toBe('function');
        });

        it('should fetch page content via http', function (done) {

            httpService.when('get', configService.get('resourceUrl') + 'html/' + id + '.html')
                .respond({
                    data: 'bar'
                });

            pagesService.getPage(id).then(function (config) {
                expect(typeof config).toBe('object');
                expect(config.title).toBeDefined();
                expect(config.id).toBeDefined();
                expect(config.id).toEqual('saturn');
                done();
            });

        });
    });

    describe('sofa.pagesService#getPageConfig', function () {

        it('should be a function', function () {
            expect(typeof pagesService.getPageConfig).toBe('function');
        });

        it('should return an object', function () {
            expect(typeof pagesService.getPageConfig(id)).toBe('object');
        });

        it('should return page configuration by given id', function () {
            var config = pagesService.getPageConfig(id);
            expect(config.title).toBeDefined();
            expect(config.id).toBeDefined();
            expect(config.id).toEqual('saturn');
        });
    });
});
