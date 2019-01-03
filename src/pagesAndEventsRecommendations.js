import { validatePageRecommendationsParams } from './pageRecommendations';
import {
  getPagesAndEventsRecommendations as getRecommendations,
} from './facades/recsApiFacade';
import { formatCategories, formatTags } from './helpers';

export const validatePageAndEventsRecommendationsParams = ({
  sku,
  total,
  query,
  price,
  email,
  allowMailMarketing,
  ...params
}) => {
  validatePageRecommendationsParams(params);

  if (sku !== undefined && !Array.isArray(sku)) {
    throw new Error('sku is invalid');
  }

  if (total !== undefined && typeof total !== 'number') {
    throw new Error('total is invalid');
  }

  if (query !== undefined && typeof query !== 'string') {
    throw new Error('query is invalid');
  }

  if (price !== undefined && typeof price !== 'number') {
    throw new Error('price is invalid');
  }

  if (
    email !== undefined && (
      typeof email !== 'string'
      || (email && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
    )
  ) {
    throw new Error('email is invalid');
  }

  if (allowMailMarketing !== undefined && typeof allowMailMarketing !== 'boolean') {
    throw new Error('allowMailMarketing is invalid');
  }
};

export const getPagesAndEventsRecommendations = async (params) => {
  validatePageAndEventsRecommendationsParams(params);

  if (params.tagId) {
    params.tagId = formatTags(params.tagId);
  }

  if (params.categoryId) {
    params.categoryId = formatCategories(params.categoryId);
  }

  return getRecommendations(params);
};
