import {
  getProductsRecommendations,
} from '../src';

describe('getProductsRecommendations', () => {
  let optionsRecommendations;
  let server;

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

    server = sinon.createFakeServer();
  });
  afterEach(() => {
    server.restore();
  });

  it('should return data from "/products/recommendations"', async () => {
    const dataResponse = {
      top: [{}],
      middle: [{}],
      bottom: [{}],
    };

    server.respondWith(
      'GET',
      /\/products\/recommendations/,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(dataResponse),
      ],
    );

    server.respondImmediately = true;

    const data = await getProductsRecommendations(optionsRecommendations);
    expect(data).to.deep.equal(dataResponse);
  });

  it('should return empty array when request fail on "/products/recommendations"', async () => {
    server.respondWith(
      'GET',
      /\/products\/recommendations/,
      [
        500,
        { 'Content-Type': 'application/json' },
        '{"error": true}',
      ],
    );

    server.respondImmediately = true;

    const data = await getProductsRecommendations(optionsRecommendations);
    expect(data).to.deep.equal({});
  });
});
