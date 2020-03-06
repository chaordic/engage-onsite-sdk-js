import { pages } from '../src';
import { Slot } from '../src/classes/slot';

describe('pages', function () {
  describe('getRecommendations', function () {
    const server = sinon.createFakeServer();
    let optionsRecommendations;

    beforeEach(function () {
      optionsRecommendations = {
        apiKey: 'apiKeyFake',
        secretKey: 'secretKeyFake',
        page: 'home',
        source: 'sourceFake',
        deviceId: 'deviceIdFake',
        url: 'urlFake',
        categories: ['cat01_cat_03_cat04', 'cat02_cat05'],
        tags: ['tag1', 'tag2'],
        productIds: ['product1', 'product2'],
        userId: 'userIdFake',
        productFormat: 'compact',
        salesChannel: 'salesChannelFake',
        dummy: false,
        homologation: false,
        showOnlyAvailable: true,
      };
    });

    afterEach(function () {
      server.restore();
    });

    it('should return data from "/pages/recommendations"', async function () {
      const dataResponse = {
        slots: [
          {
            id: 'top',
            widgets: [],
          },
          {
            id: 'middle',
            widgets: [],
          },
          {
            id: 'bottom',
            widgets: [],
          },
        ],
        templateId: 'some-template-id',
        themes: {},
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

      const data = await pages.getRecommendations(optionsRecommendations);
      expect(data.templateId).to.deep.equal(dataResponse.templateId);
      expect(data.slots.length).to.deep.equal(dataResponse.slots.length);

      data.slots.forEach((slot) => {
        expect(slot).to.be.an.instanceOf(Slot);
      });
    });

    it('should return empty array when request fail on "/pages/recommendations"', async function () {
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

      const data = await pages.getRecommendations(optionsRecommendations);
      expect(data).to.deep.equal({});
    });
  });
});
