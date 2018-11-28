import { getPageRecommendations } from '../../src/facades/recsApiFacade';

describe('recsApiFacade', () => {
  describe('getPageRecommendations', () => {
    let server;

    beforeEach(() => {
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

      const data = await getPageRecommendations();
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

      const data = await getPageRecommendations();
      expect(data).to.deep.equal({});
    });
  });
});
