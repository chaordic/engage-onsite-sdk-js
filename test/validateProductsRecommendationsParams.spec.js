import { validateProductsRecommendationsParams } from '../src';

describe('validateProductsRecommendationsParams', () => {
  let optionsRecommendations;
  let fooSpy;

  beforeEach(() => {
    optionsRecommendations = {
      apiKey: 'apiKeyFake',
      secretKey: 'secretKeyFake',
      type: 'typeFake',
      productId: [],
      categoryId: [],
      tagId: [],
      deviceId: '',
      userId: '',
      productFormat: 'compact',
      useBoughtProducts: false,
      useCartProducts: false,
      useVisitedProducts: false,
      size: 20,
      salesChannel: '',
    };

    fooSpy = sinon.spy(validateProductsRecommendationsParams);
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

  describe('should have been type thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.type = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });

    it('with different type', () => {
      optionsRecommendations.type = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have not been productId thrown', () => {
    it('with empty array', () => {
      optionsRecommendations.productId = [];

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.productId = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have not been categoryId thrown', () => {
    it('with empty array', () => {
      optionsRecommendations.categoryId = [];

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.categoryId = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have not been tagId thrown', () => {
    it('with empty array', () => {
      optionsRecommendations.tagId = [];

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.tagId = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have not been deviceId thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.deviceId = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.deviceId = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have not been userId thrown', () => {
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

    it('except with different value', () => {
      optionsRecommendations.productFormat = 'fake';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have not been useBoughtProducts thrown', () => {
    it('with empty', () => {
      optionsRecommendations.useBoughtProducts = undefined;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.useBoughtProducts = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have not been useCartProducts thrown', () => {
    it('with empty', () => {
      optionsRecommendations.useCartProducts = undefined;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.useCartProducts = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have not been useVisitedProducts thrown', () => {
    it('with empty', () => {
      optionsRecommendations.useVisitedProducts = undefined;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.useVisitedProducts = 123;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have not been size thrown', () => {
    it('with empty number', () => {
      optionsRecommendations.size = undefined;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.size = '123';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });

  describe('should have not been salesChannel thrown', () => {
    it('with empty string', () => {
      optionsRecommendations.salesChannel = '';

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.not.have.been.thrown();
    });

    it('except with different type', () => {
      optionsRecommendations.salesChannel = true;

      try {
        fooSpy(optionsRecommendations);
      } catch (e) {}

      fooSpy.should.have.been.thrown();
    });
  });
});
