import { getPageRecommendations } from '../src/recsApiFacade';

const server = sinon.createFakeServer();

describe('recsApiFacade', () => {
  describe('getPageRecommendations', () => {
    afterEach(() => {
      server.restore();
    });

    it('should return data from "/pages/recommendations"', async () => {
      const dataResponse = { recs: 'test' };

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
  });
});
