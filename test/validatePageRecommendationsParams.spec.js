import { validatePageRecommendationsParams } from '../src';

describe('validatePageRecommendationsParams', () => {
  let optionsRecommendations;
  let fooSpy;

  beforeEach(() => {
    optionsRecommendations = {
      apiKey: 'apiKeyFake',
      secretKey: 'secretKeyFake',
      name: 'home',
      source: 'sourceFake',
      deviceId: 'deviceIdFake',
      url: 'urlFake',
      categoryId: ['category1', 'category2'],
      tagId: ['tag1', 'tag2'],
      productId: ['product1', 'product2'],
      userId: 'userIdFake',
      productFormat: 'compact',
      salesChannel: 'salesChannelFake',
      dummy: false,
      homologation: false,
      showOnlyAvailable: true,
    };

    fooSpy = sinon.spy(validatePageRecommendationsParams);
  });

  describe('should have been apiKey thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.apiKey = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });

    it('with different type', () => {
      optionsRecommendations.apiKey = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have been secretKey thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.secretKey = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });

    it('with different type', () => {
      optionsRecommendations.secretKey = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have been name thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.name = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });

    it('with different type', () => {
      optionsRecommendations.name = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });

    it('with different page type', () => {
      optionsRecommendations.name = 'wrongType';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have been source thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.source = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });

    it('with different type', () => {
      optionsRecommendations.source = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have been deviceId thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.deviceId = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });

    it('with different type', () => {
      optionsRecommendations.deviceId = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been url thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.url = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.url = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been categoryId thrown', () => {
    it('with empty array', () => {
      optionsRecommendations.categoryId = [];

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.categoryId = 'cateogry';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });

    it('except with different type in array', () => {
      optionsRecommendations.categoryId = [123];

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been tagId thrown', () => {
    it('with empty array', () => {
      optionsRecommendations.tagId = [];

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.tagId = 'tag';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });

    it('except with different type in array', () => {
      optionsRecommendations.tagId = [123];

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been productId thrown', () => {
    it('with empty array', () => {
      optionsRecommendations.productId = [];

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.productId = 'productId';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });

    it('except with different type in array', () => {
      optionsRecommendations.productId = [123];

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been userId thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.userId = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.userId = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been productFormat thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.productFormat = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.productFormat = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been salesChannel thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.salesChannel = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('with string', () => {
      optionsRecommendations.salesChannel = 'salesChannelFake';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.salesChannel = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been dummy thrown', () => {
    it('with empty prop', () => {
      delete optionsRecommendations.dummy;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.dummy = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been homologation thrown', () => {
    it('with empty prop', () => {
      delete optionsRecommendations.homologation;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.homologation = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been showOnlyAvailable thrown', () => {
    it('with empty prop', () => {
      delete optionsRecommendations.showOnlyAvailable;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.showOnlyAvailable = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });
});
