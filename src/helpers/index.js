import { ajax } from '@linx-impulse/commons-js/http/ajax';
import { getCookie } from '@linx-impulse/commons-js/browser/getCookie';
import { setCookie } from '@linx-impulse/commons-js/browser/setCookie';

import config from '../config.json';

const helpers = {
  ajax,
  getCookie,
  setCookie,
  getDeviceId: async function getDeviceId(apiKey) {
    return new Promise((resolve) => {
      const deviceId = helpers.getCookie(config.cookieName.deviceId);

      if (deviceId) {
        resolve(deviceId);
      }

      helpers.ajax({
        url: `${config.onsite.deviceIdURL}?q=${JSON.stringify({ apiKey })}`,
        success: (data) => {
          helpers.setCookie(config.cookieName.deviceId, data);
          resolve(data);
        },
      });
    });
  },
};

export default helpers;
