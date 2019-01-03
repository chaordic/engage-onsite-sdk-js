import { validatePageAndEventsRecommendationsParams } from '../src';

describe('validatePagesAndEventsRecommendations', () => {
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
      sku: [],
      total: 0,
      query: 'queryFake',
      price: 0,
      email: 'email@test.com',
      allowMailMarketing: false,
      salesChannel: 'salesChannelFake',
      dummy: false,
      homologation: false,
      showOnlyAvailable: true,
    };

    fooSpy = sinon.spy(validatePageAndEventsRecommendationsParams);
  });

  describe('should not have been sku thrown', () => {
    it('with empty array', () => {
      optionsRecommendations.sku = [];

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.sku = 'string';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been total thrown', () => {
    it('with empty number', () => {
      optionsRecommendations.total = undefined;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.total = 'string';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been query thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.query = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.query = 0;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been price thrown', () => {
    it('with empty number', () => {
      optionsRecommendations.price = undefined;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.price = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been email thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.email = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.email = 0;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should not have been allowMailMarketing thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.allowMailMarketing = undefined;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.allowMailMarketing = 0;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });
});
