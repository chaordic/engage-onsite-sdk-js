import { ajax } from '@linx-impulse/commons-js/http/ajax';
import config from '../config.json';

const { error } = console;

export async function getPageRecommendations({
  apiKey,
  secretKey,
  page,
  source,
  deviceId,
  url,
  categories,
  tags,
  productIds,
  userId,
  productFormat,
  showLayout = true,
  salesChannel,
  dummy,
  homologation,
  showOnlyAvailable,
}) {
  return new Promise((resolve) => {
    ajax({
      url: `${config.onsite.baseURL}/pages/recommendations`,
      type: 'GET',
      params: {
        apiKey,
        secretKey,
        page,
        source,
        deviceId,
        url,
        categories,
        tags,
        productIds,
        userId,
        productFormat,
        showLayout,
        salesChannel,
        dummy,
        homologation,
        showOnlyAvailable,
      },
      success: resolve,
      error: (err) => {
        error(err);
        resolve({});
      },
    });
  });
}
