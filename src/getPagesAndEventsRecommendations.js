import { validatePageRecommendations } from './getPageRecommendations';
import {
  getPagesAndEventsRecommendations as getRecommendations,
} from './facades/recsApiFacade';

export const validatePageAndEventsRecommendations = ({
  sku,
  total,
  query,
  price,
  email,
  allowMailMarketing,
  ...params
}) => {
  validatePageRecommendations(params);

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
  validatePageAndEventsRecommendations(params);
  return getRecommendations(params);
};
