import { getPageRecommendations } from './facades/pages';
import { validate as validatePageParams } from './validators/pages';

export default {
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
