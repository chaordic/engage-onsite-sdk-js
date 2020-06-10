import config from '../config.json';
import helpers from '../helpers';

const { error } = console;

/**
 * Sends a request to get recommendations.
 *
 * @param {Object} params
 * @param {string} params.apiKey - Your apiKey, if you don't know what this
 * is, contact our support.
 * @param {string} [params.secretKey] - Your secretKey, if you don't know what this
 * is, contact our support.
 * @param {string} params.page - The page's name (home, product, category, etc).
 * @param {string} params.source - The customer's source channel (desktop, mobile, app, etc).
 * @param {string} [params.url] - Reference url
 * @param {string[]} [params.categories] - An array of category IDs to be used to get
 * recommendations.
 * @param {string[]} [params.tags] - An array of tag IDs to be used to get
 * recommendations.
 * @param {string[]} [params.productIds] - An array of product IDs to be used to get
 * recommendations.
 * @param {string} [params.userId] - The customer's user ID.
 * @param {string} [params.deviceId] - The customer's device ID, this information is optional. If
 * not passed, we will try to fetch it from our server before getting recommendations.
 * @param {string} [params.productFormat='compact'] - Format in which the products should be
 * returned. Must be one of 'onlyIds', 'compact' or 'complete'.
 * @param {boolean} [params.showLayout=true] - Return layout information registered on the
 * dashboard.
 * @param {string} [params.salesChannel] - Customer's sales channel, for this parameter to work
 * properly, it's necessary that the integration of product catalog has the sales channel support
 * active.
 * @param {boolean} [params.dummy=false] - Return dummy recommendations, these are generated
 * automatically but have no customization, good for testing.
 * @param {boolean} [params.homologation=false] - Return all widgets, even disabled ones.
 * @param {boolean} [params.showOnlyAvailable=true] - Filter out products with status unavailable
 * or removed.
 * @returns {Object} Returns an object with the slots registered in the dashboard. As well as
 * the template ID.
 * @property {string} templateId - The template's unique ID.
 * @property {Object[]} slots - An array of registered slots, each slot contains
 * widgets and rules for how to render it.
 * @property {object} themes - The themes that are used by widgets in the response. Each proprerty
 * represents one theme. If the parameter showLayout=false, it will be an empty object.
 */
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
