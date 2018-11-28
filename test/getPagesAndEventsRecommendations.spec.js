import {
  getPagesAndEventsRecommendations,
} from '../src';

describe.only('getPagesAndEventsRecommendations', () => {
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

    server = sinon.createFakeServer();
  });
  afterEach(() => {
    server.restore();
  });

  it('should return data from "/events/recommendations"', async () => {
    const dataResponse = {
      top: [{}],
      middle: [{}],
      bottom: [{}],
    };

    server.respondWith(
      'GET',
      /\/events\/recommendations/,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(dataResponse),
      ],
    );

    server.respondImmediately = true;

    const data = await getPagesAndEventsRecommendations(optionsRecommendations);
    expect(data).to.deep.equal(dataResponse);
  });

  it('should return empty array when request fail on "/events/recommendations"', async () => {
    server.respondWith(
      'GET',
      /\/events\/recommendations/,
      [
        500,
        { 'Content-Type': 'application/json' },
        '{"error": true}',
      ],
    );

    server.respondImmediately = true;

    const data = await getPagesAndEventsRecommendations(optionsRecommendations);
    expect(data).to.deep.equal({});
  });
});
