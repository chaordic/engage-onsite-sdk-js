import config from '../config.json';
import helpers from '../helpers';

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
    helpers.ajax({
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

export async function refresh(url) {
  return new Promise((resolve) => {
    helpers.ajax({
      url,
      type: 'GET',
      success: resolve,
      error: (err) => {
        error(err);
        resolve({});
      },
    });
  });
}
