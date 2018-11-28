import {
  getPageRecommendations,
} from '../src';

describe('getPageRecommendations', () => {
  let optionsRecommendations;
  let server;

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

    server = sinon.createFakeServer();
  });
  afterEach(() => {
    server.restore();
  });

  it('should return data from "/pages/recommendations"', async () => {
    const dataResponse = {
      top: [{}],
      middle: [{}],
      bottom: [{}],
    };

    server.respondWith(
      'GET',
      /\/pages\/recommendations/,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(dataResponse),
      ],
    );

    server.respondImmediately = true;

    const data = await getPageRecommendations(optionsRecommendations);
    expect(data).to.deep.equal(dataResponse);
  });

  it('should return empty array when request fail on "/pages/recommendations"', async () => {
    server.respondWith(
      'GET',
      /\/pages\/recommendations/,
      [
        500,
        { 'Content-Type': 'application/json' },
        '{"error": true}',
      ],
    );

    server.respondImmediately = true;

    const data = await getPageRecommendations(optionsRecommendations);
    expect(data).to.deep.equal({});
  });
});
