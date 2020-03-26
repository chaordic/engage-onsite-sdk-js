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
  let response = {};

  try {
    response = await helpers.ajax({
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
    });
  } catch (err) {
    error(err);
  }

  return response;
}

export async function refresh(url) {
  let response = {};

  try {
    response = await helpers.ajax({
      url,
      type: 'GET',
    });
  } catch (err) {
    error(err);
  }

  return response;
}
