import { getPageRecommendations } from './facades/pages';
import { validate as validatePageParams } from './validators/pages';
import { Slot } from './classes/slot';

export default {
  /**
   * Get recommendations for a page
   *
   * @example
   * const pageSchema = await Pages.getRecommendations({
   *  apiKey: 'sample',
   *  secretKey: '12345',
   *  page: 'home',
   *  userId: 'some-user-123',
   *  ...
   * });
   *
   * const { slots = [] } = pageSchema;
   *
   * slots.forEach((slot) => {
   *  doSomething(slot);
   *  render(slot);
   * });
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
   */
  getRecommendations: async function getRecommendations(params = {}) {
    validatePageParams(params);

    let pageSchema = {};

    const response = await getPageRecommendations(params);

    if (response.templateId) {
      pageSchema = {
        templateId: response.templateId,
        slots: (response.slots || []).map((slot) => new Slot(slot, response.themes)),
      };
    }

    return pageSchema;
  },
};
