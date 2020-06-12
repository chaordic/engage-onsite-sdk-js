import helpers from '../../src/helpers';
import config from '../../src/config.json';

describe('helpers', function () {
  const mockDevId = 'some-device-id';
  const sandbox = sinon.createSandbox();
  let server;

  describe('getDeviceId', function () {
    beforeEach(function () {
      server = sinon.createFakeServer();
    });

    afterEach(function () {
      server.restore();
      sandbox.restore();
    });

    it('should return the value store in the cookie if it exists', async function () {
      sandbox.stub(helpers, 'getCookie').resolves(mockDevId);

      const result = await helpers.getDeviceId('some-api-key');

      expect(result).to.equal(mockDevId);
    });

    it('should get a deviceId from server and store id in a cookie, if not found', async function () {
      server.respondWith(
        'GET',
        /\/acquireBrowserId/,
        [
          200,
          { 'Content-Type': 'application/json' },
          mockDevId,
        ],
      );

      server.respondImmediately = true;

      helpers.deleteCookie(config.cookieName.deviceId);

      const setCookieSpy = sandbox.spy(helpers, 'setCookie');

      const result = await helpers.getDeviceId('some-api-key');

      expect(setCookieSpy).to.have.been.calledWith(config.cookieName.deviceId, mockDevId);
      expect(result).to.equal(mockDevId);
    });
  });
});
