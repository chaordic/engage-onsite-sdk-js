import { validate } from '../../src/validators/pages';

describe('pages', function () {
  const sandbox = sinon.createSandbox();
  let mockParams;

  beforeEach(function () {
    mockParams = {
      apiKey: 'sample',
      secretKey: 'tis-a-secret',
      page: 'home',
      source: 'desktop',
      url: 'http://some.url',
      categories: ['cat-01', 'cat-02'],
      tags: ['tag-01', 'tag-02'],
      userId: 'some-user',
      productFormat: 'compact',
      showLayout: true,
      salesChannel: 'some-sc',
      dummy: true,
      homologation: true,
      showOnlyAvailable: false,
    };
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('validate', function () {
    it('should not throw when all parameters are valid', function () {
      expect(() => {
        validate(mockParams);
      }).to.not.throw();
    });

    describe('parameter apiKey', function () {
      it('should throw when apiKey is missing', function () {
        delete mockParams.apiKey;

        expect(() => {
          validate(mockParams);
        }).to.throw('apiKey is invalid');
      });

      it('should throw when apiKey is not a string', function () {
        mockParams.apiKey = {};

        expect(() => {
          validate(mockParams);
        }).to.throw('apiKey is invalid');
      });
    });

    describe('parameter page', function () {
      it('should throw when page is missing', function () {
        delete mockParams.page;

        expect(() => {
          validate(mockParams);
        }).to.throw('page is invalid');
      });

      it('should throw when page is not a string', function () {
        mockParams.page = {};

        expect(() => {
          validate(mockParams);
        }).to.throw('page is invalid');
      });

      it('should throw when page is not in config', function () {
        mockParams.page = 'unknown';

        expect(() => {
          validate(mockParams);
        }).to.throw('page is invalid');
      });
    });

    describe('parameter source', function () {
      it('should throw when source is missing', function () {
        delete mockParams.source;

        expect(() => {
          validate(mockParams);
        }).to.throw('source is invalid');
      });

      it('should throw when source is not a string', function () {
        mockParams.source = true;

        expect(() => {
          validate(mockParams);
        }).to.throw('source is invalid');
      });
    });

    describe('parameter url', function () {
      it('should throw when url exists but is not a string', function () {
        mockParams.url = {};

        expect(() => {
          validate(mockParams);
        }).to.throw('url is invalid');
      });
    });

    describe('parameter categories', function () {
      it('should throw when categories is not an array', function () {
        mockParams.categories = { id: 'cat' };

        expect(() => {
          validate(mockParams);
        }).to.throw('categories is invalid');
      });

      it('should throw when categories has an element that is not a string', function () {
        mockParams.categories = ['cat-01', { id: 'cat-02' }];

        expect(() => {
          validate(mockParams);
        }).to.throw('categories is invalid');
      });
    });

    describe('parameter tags', function () {
      it('should throw when tags is not an array', function () {
        mockParams.tags = { id: 'tag' };

        expect(() => {
          validate(mockParams);
        }).to.throw('tags is invalid');
      });

      it('should throw when tags has an element that is not a string', function () {
        mockParams.tags = ['tag-01', { id: 'tag-02' }, 400];

        expect(() => {
          validate(mockParams);
        }).to.throw('tags is invalid');
      });
    });

    describe('parameter productIds', function () {
      it('should throw when productIds is not an array', function () {
        mockParams.productIds = { id: 'product' };

        expect(() => {
          validate(mockParams);
        }).to.throw('productIds is invalid');
      });

      it('should throw when productIds has an element that is not a string', function () {
        mockParams.productIds = ['product-01', { id: 'product-02' }];

        expect(() => {
          validate(mockParams);
        }).to.throw('productIds is invalid');
      });
    });

    describe('parameter productFormat', function () {
      it('should throw when productFormat exists but is not a string', function () {
        mockParams.productFormat = {};

        expect(() => {
          validate(mockParams);
        }).to.throw('productFormat is invalid');
      });

      it('should throw when productFormat is not in config', function () {
        mockParams.productFormat = 'minimal';

        expect(() => {
          validate(mockParams);
        }).to.throw('productFormat is invalid');
      });

      it('should NOT throw when productFormat is empty string', function () {
        mockParams.productFormat = '';

        expect(() => {
          validate(mockParams);
        }).to.not.throw();
      });
    });

    describe('parameter salesChannel', function () {
      it('should throw when salesChannel exists but is not a string', function () {
        mockParams.salesChannel = {};

        expect(() => {
          validate(mockParams);
        }).to.throw();
      });
    });

    describe('parameter dummy', function () {
      it('should throw when dummy exists but is not boolean', function () {
        mockParams.dummy = 'yes';

        expect(() => {
          validate(mockParams);
        }).to.throw();
      });
    });

    describe('parameter homologation', function () {
      it('should throw when homologation exists but is not boolean', function () {
        mockParams.homologation = 'yes';

        expect(() => {
          validate(mockParams);
        }).to.throw();
      });
    });

    describe('parameter showOnlyAvailable', function () {
      it('should throw when showOnlyAvailable exists but is not boolean', function () {
        mockParams.showOnlyAvailable = 'yes';

        expect(() => {
          validate(mockParams);
        }).to.throw();
      });
    });
  });
});
