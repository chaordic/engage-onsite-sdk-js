import { ajax } from '@linx-impulse/commons-js/http/ajax';
import { getCookie } from '@linx-impulse/commons-js/browser/getCookie';
import { setCookie } from '@linx-impulse/commons-js/browser/setCookie';
import { deleteCookie } from '@linx-impulse/commons-js/browser/deleteCookie';

import config from '../config.json';

const helpers = {
  ajax,
  getCookie,
  setCookie,
  deleteCookie,
  getDeviceId: async function getDeviceId(apiKey) {
    let deviceId = helpers.getCookie(config.cookieName.deviceId);

    if (!deviceId) {
      deviceId = await helpers.ajax({
        url: `${config.onsite.deviceIdURL}?q=${JSON.stringify({ apiKey })}`,
      });

      helpers.setCookie(config.cookieName.deviceId, deviceId);
    }

    return deviceId;
  },
};

export default helpers;
